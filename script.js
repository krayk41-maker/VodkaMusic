// Функция переключения вкладок
function openTab(tabId) {
    // Скрываем все секции страниц
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Показываем нужную страницу
    const activeSection = document.getElementById(tabId);
    if (activeSection) {
        activeSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Добавляем класс на body для управления шапкой и кнопкой "Главная"
    if (tabId === 'main-page') {
        document.body.classList.remove('on-bio-page');
        document.body.classList.add('on-main-page');
    } else if (tabId === 'bio-page') {
        document.body.classList.remove('on-main-page');
        document.body.classList.add('on-bio-page');
    }
}

// Запускаем стартовое состояние при первой загрузке
document.addEventListener("DOMContentLoaded", () => {
    openTab('main-page');
});