function downloadPDF() {
    window.print();
}

// Profile image loading
function loadProfileImage() {
    // Replace this with the actual base64 data of Jerry's profile image
    // For now, using a placeholder - you'll need to convert Jerry's image to base64
    const profileImageBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";

    const profileImg = document.getElementById('profileImage');
    if (profileImg) {
        // In a real implementation, you would load Jerry's actual profile image here
        // You can either use a base64 string or a local image file
        profileImg.src = profileImageBase64;

        // Alternative: if you have a local image file, uncomment the line below
        // profileImg.src = './jerry-profile.jpg';
    }
}

// Add smooth animations to progress bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.cv-progress-fill');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 200);
            }
        });
    }, {
        threshold: 0.5
    });

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    loadProfileImage();
    animateProgressBars();

    // Add keyboard support for download button
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && e.key === 'p') {
            e.preventDefault();
            downloadPDF();
        }
    });
});

// Add smooth scrolling for better UX
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Optional: Add theme switching functionality
function toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        root.removeAttribute('data-theme');
    } else {
        root.setAttribute('data-theme', 'dark');
    }
}