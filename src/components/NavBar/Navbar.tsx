import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.nav__list}>
                <NavLink to={'/profile'} activeClassName={s.activeLink} className={s.navLink}>
                    <li className={s.nav__item}>
                        Profile
                    </li>
                </NavLink>
                <NavLink to={'/dialogs'} activeClassName={s.activeLink} className={s.navLink}>
                    <li className={s.nav__item}>
                        Dialogs
                    </li>
                </NavLink>
                <NavLink to={'/news'} activeClassName={s.activeLink} className={s.navLink}>
                    <li className={s.nav__item}>
                        News
                    </li>
                </NavLink>
                <NavLink to={'/music'} activeClassName={s.activeLink} className={s.navLink}>
                    <li className={s.nav__item}>
                        Music
                    </li>
                </NavLink>
                <NavLink to={'/settings'} activeClassName={s.activeLink} className={s.navLink}>
                    <li className={s.nav__item}>
                        Settings
                    </li>
                </NavLink>
            </ul>
        </nav>
    )
}