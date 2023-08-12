const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')

console.log(tabs);
console.log(panes);

var tabItem = tabs.forEach((tab, index) => {
    const pane = panes[index];
    tab.onclick = function() {
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');

        this.classList.add('active');
        pane.classList.add('active');
    }
})