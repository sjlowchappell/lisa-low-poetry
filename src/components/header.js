import { Link } from 'gatsby';
import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="wrapper">
                <div className={styles.headerContainer}>
                    <h1>
                        <Link to="/">LL</Link>
                    </h1>
                    <nav>
                        <Link to="/about/">About</Link>
                        <Link to="/poems/">Poems</Link>
                        <Link to="/publications/">Publications</Link>
                        <Link to="/contact/">Contact</Link>
                        <Link to="/blog/">Blog</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
