import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from './excerpts.module.css';
import Excerpt from '../components/excerpt';
import excerptsContent from '../utils/excerptsContent';
import { uuid } from 'uuidv4';

const Excerpts = () => (
    <Layout>
        <SEO title="Excerpts" />
        <div className="wrapper">
            <h1 className="heading">Excerpts</h1>
        </div>
        <div className={styles.excerptsWrapper}>
            <div className={styles.tileContainer}>
                {excerptsContent.map((excerpt, index) => {
                    const { text, title, publication } = excerpt;
                    return (
                        <Excerpt
                            title={title}
                            text={text}
                            publication={publication}
                            index={index}
                            key={uuid()}
                        />
                    );
                })}
            </div>
        </div>
    </Layout>
);

export default Excerpts;
