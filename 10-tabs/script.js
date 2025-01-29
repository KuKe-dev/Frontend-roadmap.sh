function openTab(evt,tabName) {
    var tabContent = document.querySelectorAll('.tab-content');

    tabContent.forEach(content => content.style.display = 'none');

    var tabLinks = document.querySelectorAll('.tab-link');

    console.log(tabLinks);
    tabLinks.forEach(className => className.classList.remove('active'));

    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
}