import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <div className="wrapper">
            <h1>Lisa Low Website</h1>
            <p>Welcome to your new site.</p>
            <p>In progress.</p>
            <div className="red1"></div>
            <div className="blue1"></div>
            <div className="red2"></div>
            <div className="blue2"></div>
        </div>
    </Layout>
);

export default IndexPage;
