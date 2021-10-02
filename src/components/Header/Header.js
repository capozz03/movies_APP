import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    let pagesCount = Math.ceil(props.totalMoviesCount / props.limitSize);
    
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.header__flex}>
                    <div className={s.flex__title}>
                        <NavLink to="/">Movies</NavLink>
                    </div>
                    <nav className={s.flex__pagination}>
                        { pages.map(page => <span
                            key={page}
                            className={
                            props.currentPage === page
                            ? s.activePageItem
                            : s.pageItem
                        }
                            onClick={() => { props.onPageChanged(page)}}>{ page }</span> )}
                    </nav>
                </div>
            </div>
            
        </header>
    );
};

export default Header;