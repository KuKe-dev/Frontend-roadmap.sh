document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('cookie_consent')) {
        document.querySelector('.cookie-consent').style.display = 'block';
    }
    else {
        document.querySelector('.cookie-consent').style.display = 'none';
    }
});

setCookie = () => {
    localStorage.setItem('cookie_consent', true);
    document.querySelector('.cookie-consent').style.display = 'none';
}
closeTab = () => {
    document.querySelector('.cookie-consent').style.display = 'none';
}