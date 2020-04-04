import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
    <header>
        <div>
            <h1>
                <Link to="/">{siteTitle}</Link>
            </h1>
            <nav>
                <Link to="/about/">About</Link>
                <Link to="/poems/">Poems</Link>
                <Link to="/publications/">Publications</Link>
                <Link to="/contact/">Contact</Link>
                <Link to="/blog/">Blog</Link>
            </nav>
        </div>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
