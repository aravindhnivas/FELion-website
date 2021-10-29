
let lightTheme = typeof window === 'undefined' || window.matchMedia('(prefers-color-scheme: light)').matches;
export default function switchTheme() {
    
    lightTheme = !lightTheme;
    let themeLink = document.head.querySelector('#theme');
    if (!themeLink) {
        themeLink = document.createElement('link');
        themeLink.rel = 'stylesheet';
        themeLink.id = 'theme';
    }
    themeLink.href = `/smui${lightTheme ? '' : '-dark'}.css`;

    document.head.querySelector('link[href="/smui-dark.css"]')
        ?.insertAdjacentElement('afterend', themeLink);
}