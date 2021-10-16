const curLink = window.location.pathname;
// console.log(curLink);

const NavigationItem = (navlink) => {
    return(`
        <a class="list-group-item list-group-item-action ${curLink === navlink.link ? 'active' : ''}" href=${navlink.link}>
            <i class="${navlink.iconClass}"></i>
            <span class="d-none d-xl-inline">
                ${navlink.text}
            </span>
        </a>
    `);
}
export default NavigationItem;