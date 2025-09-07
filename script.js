document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi variabel dan elemen
    const markdownInput = document.getElementById('markdown-input');
    const previewContent = document.getElementById('preview-content');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = themeToggleBtn.querySelector('i');
    const themeText = themeToggleBtn.querySelector('span');
    const copyHtmlBtn = document.getElementById('copy-html-btn');
    const copyMdBtn = document.getElementById('copy-md-btn');
    const clearBtn = document.getElementById('clear-btn');
    const saveBtn = document.getElementById('save-btn');
    const fullscreenEditorBtn = document.getElementById('fullscreen-editor-btn');
    const fullscreenPreviewBtn = document.getElementById('fullscreen-preview-btn');
    const editorWrapper = document.querySelector('.editor-wrapper');
    const previewWrapper = document.querySelector('.preview-wrapper');
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notification-message');
    const notificationClose = document.getElementById('notification-close');
    const toggleGuideBtn = document.getElementById('toggle-guide-btn');
    const guideContent = document.querySelector('.guide-content');
    const saveModal = document.getElementById('save-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const cancelSaveBtn = document.getElementById('cancel-save-btn');
    const confirmSaveBtn = document.getElementById('confirm-save-btn');
    const documentNameInput = document.getElementById('document-name');
    const mdButtons = document.querySelectorAll('.md-btn');
    const sampleMarkdown = document.getElementById('sample-markdown').textContent;
    
    // Konfigurasi marked.js
    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function(code, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(code, { language: lang }).value;
                } catch (err) {}
            }
            return hljs.highlightAuto(code).value;
        },
        pedantic: false,
        gfm: true,
        breaks: true,
        sanitize: false,
        smartypants: false,
        xhtml: false
    });
    
    // Fungsi untuk memperbarui preview
    function updatePreview() {
        const markdown = markdownInput.value;
        const html = marked.parse(markdown);
        // Sanitasi HTML untuk mencegah XSS
        const sanitizedHtml = DOMPurify.sanitize(html);
        previewContent.innerHTML = sanitizedHtml;
        
        // Simpan ke localStorage
        localStorage.setItem('markdown-content', markdown);
    }
    
    // Fungsi untuk menampilkan notifikasi
    function showNotification(message) {
        notificationMessage.textContent = message;
        notification.classList.add('show');
        
        // Sembunyikan notifikasi setelah 3 detik
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
    
    // Fungsi untuk menyalin teks ke clipboard
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Berhasil disalin ke clipboard!');
        }).catch(err => {
            showNotification('Gagal menyalin: ' + err);
        });
    }
    
    // Fungsi untuk mengunduh file
    function downloadFile(content, fileName, contentType) {
        const a = document.createElement('a');
        const file = new Blob([content], { type: contentType });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(a.href);
    }
    
    // Fungsi untuk toggle fullscreen
    function toggleFullscreen(element) {
        if (element.classList.contains('fullscreen')) {
            element.classList.remove('fullscreen');
            document.body.style.overflow = '';
        } else {
            element.classList.add('fullscreen');
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Inisialisasi konten dari localStorage atau gunakan contoh
    if (localStorage.getItem('markdown-content')) {
        markdownInput.value = localStorage.getItem('markdown-content');
    } else {
        markdownInput.value = sampleMarkdown;
    }
    
    // Inisialisasi tema dari localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeText.textContent = 'Mode Terang';
    }
    
    // Update preview saat pertama kali dimuat
    updatePreview();
    
    // Event listener untuk input markdown
    markdownInput.addEventListener('input', updatePreview);
    
    // Event listener untuk tombol tema
    themeToggleBtn.addEventListener('click', function() {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            themeText.textContent = 'Mode Gelap';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            themeText.textContent = 'Mode Terang';
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Event listener untuk tombol salin HTML
    copyHtmlBtn.addEventListener('click', function() {
        copyToClipboard(previewContent.innerHTML);
    });
    
    // Event listener untuk tombol salin Markdown
    copyMdBtn.addEventListener('click', function() {
        copyToClipboard(markdownInput.value);
    });
    
    // Event listener untuk tombol hapus
    clearBtn.addEventListener('click', function() {
        if (confirm('Apakah Anda yakin ingin menghapus semua konten?')) {
            markdownInput.value = '';
            updatePreview();
        }
    });
    
    // Event listener untuk tombol simpan
    saveBtn.addEventListener('click', function() {
        documentNameInput.value = 'dokumen-markdown-' + new Date().toISOString().slice(0, 10);
        saveModal.classList.add('show');
    });
    
    // Event listener untuk tombol fullscreen editor
    fullscreenEditorBtn.addEventListener('click', function() {
        toggleFullscreen(editorWrapper);
        if (editorWrapper.classList.contains('fullscreen')) {
            fullscreenEditorBtn.innerHTML = '<i class="fas fa-compress"></i>';
        } else {
            fullscreenEditorBtn.innerHTML = '<i class="fas fa-expand"></i>';
        }
    });
    
    // Event listener untuk tombol fullscreen preview
    fullscreenPreviewBtn.addEventListener('click', function() {
        toggleFullscreen(previewWrapper);
        if (previewWrapper.classList.contains('fullscreen')) {
            fullscreenPreviewBtn.innerHTML = '<i class="fas fa-compress"></i>';
        } else {
            fullscreenPreviewBtn.innerHTML = '<i class="fas fa-expand"></i>';
        }
    });
    
    // Event listener untuk tombol tutup notifikasi
    notificationClose.addEventListener('click', function() {
        notification.classList.remove('show');
    });
    
    // Event listener untuk tombol toggle panduan
    toggleGuideBtn.addEventListener('click', function() {
        guideContent.classList.toggle('open');
        this.classList.toggle('open');
    });
    
    // Event listener untuk tombol tutup modal
    closeModalBtn.addEventListener('click', function() {
        saveModal.classList.remove('show');
    });
    
    // Event listener untuk tombol batal simpan
    cancelSaveBtn.addEventListener('click', function() {
        saveModal.classList.remove('show');
    });
    
    // Event listener untuk tombol konfirmasi simpan
    confirmSaveBtn.addEventListener('click', function() {
        const fileName = documentNameInput.value || 'dokumen-markdown';
        const format = document.querySelector('input[name="save-format"]:checked').value;
        
        if (format === 'markdown') {
            downloadFile(markdownInput.value, `${fileName}.md`, 'text/markdown');
        } else {
            downloadFile(previewContent.innerHTML, `${fileName}.html`, 'text/html');
        }
        
        saveModal.classList.remove('show');
        showNotification(`File ${fileName}.${format} berhasil disimpan!`);
    });
    
    // Event listener untuk tombol markdown
    mdButtons.forEach(button => {
        button.addEventListener('click', function() {
            const markdown = this.getAttribute('data-markdown');
            const start = markdownInput.selectionStart;
            const end = markdownInput.selectionEnd;
            const selectedText = markdownInput.value.substring(start, end);
            let replacement = '';
            
            // Jika ada teks yang dipilih
            if (selectedText) {
                // Untuk tombol yang memerlukan teks di dalam (bold, italic, dll)
                if (markdown.includes('**Bold**')) {
                    replacement = `**${selectedText}**`;
                } else if (markdown.includes('*Italic*')) {
                    replacement = `*${selectedText}*`;
                } else if (markdown.includes('~~Strikethrough~~')) {
                    replacement = `~~${selectedText}~~`;
                } else if (markdown.includes('[Link](url)')) {
                    replacement = `[${selectedText}](url)`;
                } else if (markdown.includes('![Alt Text](image-url)')) {
                    replacement = `![${selectedText}](image-url)`;
                } else if (markdown.includes('```\ncode\n```')) {
                    replacement = `\`\`\`\n${selectedText}\n\`\`\``;
                } else {
                    // Untuk heading, list, blockquote, dll
                    replacement = `${markdown}${selectedText}`;
                }
            } else {
                // Jika tidak ada teks yang dipilih
                replacement = markdown;
            }
            
            // Ganti teks yang dipilih dengan markdown
            markdownInput.value = markdownInput.value.substring(0, start) + replacement + markdownInput.value.substring(end);
            
            // Atur kursor ke posisi yang tepat setelah penggantian
            const newCursorPos = start + replacement.length;
            markdownInput.setSelectionRange(newCursorPos, newCursorPos);
            
            // Update preview dan fokus kembali ke textarea
            updatePreview();
            markdownInput.focus();
        });
    });
    
    // Tambahkan event listener untuk klik di luar modal
    window.addEventListener('click', function(event) {
        if (event.target === saveModal) {
            saveModal.classList.remove('show');
        }
    });
    
    // Tambahkan event listener untuk keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl+S untuk menyimpan
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            saveBtn.click();
        }
        
        // Escape untuk keluar dari fullscreen
        if (e.key === 'Escape') {
            if (editorWrapper.classList.contains('fullscreen')) {
                toggleFullscreen(editorWrapper);
                fullscreenEditorBtn.innerHTML = '<i class="fas fa-expand"></i>';
            }
            if (previewWrapper.classList.contains('fullscreen')) {
                toggleFullscreen(previewWrapper);
                fullscreenPreviewBtn.innerHTML = '<i class="fas fa-expand"></i>';
            }
            if (saveModal.classList.contains('show')) {
                saveModal.classList.remove('show');
            }
        }
    });
});