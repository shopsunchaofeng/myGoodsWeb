// 语言切换功能
function initLanguageSwitch() {
    const zhBtn = document.getElementById('zh-btn');
    const enBtn = document.getElementById('en-btn');
    
    zhBtn.addEventListener('click', function() {
        switchLanguage('zh');
        zhBtn.classList.add('active');
        enBtn.classList.remove('active');
    });
    
    enBtn.addEventListener('click', function() {
        switchLanguage('en');
        enBtn.classList.add('active');
        zhBtn.classList.remove('active');
    });
}

function switchLanguage(lang) {
    const zhElements = document.querySelectorAll('.zh');
    const enElements = document.querySelectorAll('.en');
    
    if (lang === 'zh') {
        zhElements.forEach(el => {
            el.style.display = '';
        });
        enElements.forEach(el => {
            el.style.display = 'none';
        });
        document.documentElement.lang = 'zh-CN';
    } else {
        zhElements.forEach(el => {
            el.style.display = 'none';
        });
        enElements.forEach(el => {
            el.style.display = '';
        });
        document.documentElement.lang = 'en';
    }
}

// 移动端菜单功能
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
    
    // 点击菜单项后关闭菜单
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
}

// 页面加载完成后初始化功能
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSwitch();
    initMobileMenu();
});