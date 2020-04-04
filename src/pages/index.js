import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <div className="wrapper">
            <h1>Lisa Low Website</h1>
            <p>Welcome to your new site.</p>
            <p>In progress.</p>
        </div>
    </Layout>
);

export default IndexPage;
