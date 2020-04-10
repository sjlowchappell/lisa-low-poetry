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
                        <Link activeClassName={styles.active} to="/about/">
                            About
                        </Link>
                        <Link activeClassName={styles.active} to="/excerpts/">
                            Excerpts
                        </Link>
                        <Link
                            activeClassName={styles.active}
                            to="/publications/"
                        >
                            Publications
                        </Link>
                        <Link activeClassName={styles.active} to="/contact/">
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
