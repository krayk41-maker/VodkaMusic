
function openTab(tabId) {
    
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    
    const activeSection = document.getElementById(tabId);
    if (activeSection) {
        activeSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    
    if (tabId === 'main-page') {
        document.body.classList.remove('on-bio-page');
        document.body.classList.add('on-main-page');
    } else if (tabId === 'bio-page') {
        document.body.classList.remove('on-main-page');
        document.body.classList.add('on-bio-page');
    }
}


document.addEventListener("DOMContentLoaded", () => {
    openTab('main-page');
});
// fix