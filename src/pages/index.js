import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from './index.module.css';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <div className={styles.heroImage}>
            <div className="wrapper">
                <h1 className={styles.heroLine}>
                    She has squeezed every drop from the lime of June.”
                </h1>
            </div>
        </div>
        <div className="wrapper">
            <p>Welcome to your new site.</p>
            <p>In progress.</p>
        </div>
    </Layout>
);

export default IndexPage;
