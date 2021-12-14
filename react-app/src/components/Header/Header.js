import classes from "./Header.module.css";

import HeaderItem from "./HeaderItem";

const navBarLinks = [
    {
        id: 1,
        name: "Home",
        className: classes.items,
    },
    {
        id: 2,
        name: "Library",
        className: classes.items,
    },
    {
        id: 3,
        name: "Signout",
        className: classes.items,
    }
]

const Header = () => {
    return (
        <ul>
            {navBarLinks.map((link) => (
                <HeaderItem item={link} />
            ))}
        </ul>
    )
}

export default Header;