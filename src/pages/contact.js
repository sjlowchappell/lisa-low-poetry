import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Contact = () => {
    const formSubmit = e => {
        e.preventDefault();
    };
    return (
        <Layout>
            <SEO title="Contact" />
            <h1>Contact</h1>
            <p>You can contact me at lisalowwrites@gmail.com</p>
            <form action="" onSubmit={formSubmit}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" />
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" />
                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                ></textarea>
                <button>Submit</button>
            </form>
        </Layout>
    );
};
export default Contact;
