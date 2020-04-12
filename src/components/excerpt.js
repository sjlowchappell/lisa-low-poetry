import React from 'react';
import styles from './excerpt.module.css';

const Excerpt = ({ title, text, publication }) => {
    return (
        <div className={styles.tile}>
            <p>{text}</p>
            <p className={styles.title}>{title}</p>
            <p className={styles.publication}>{publication}</p>
            <span className={styles.publication}></span>
        </div>
    );
};

export default Excerpt;
