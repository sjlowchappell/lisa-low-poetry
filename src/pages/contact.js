import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from './contact.module.css';

const Contact = () => {
    const formSubmit = e => {
        e.preventDefault();
    };
    return (
        <Layout>
            <SEO title="Contact" />
            <div className="wrapper">
                <div>
                    <h1 className="heading">Contact</h1>
                </div>
                <div className={styles.contactContainer}>
                    <p>
                        Lisa Low can be reached at lisalowwrites@gmail.com.
                        Alternatively, you can fill out the form below if you
                        want to get in contact or learn more.
                    </p>
                    <form
                        name="contact"
                        action="/submit"
                        method="POST"
                        data-netlify="true"
                    >
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />
                        <div className={styles.nameAndEmailContainer}>
                            <div className={styles.inputContainer}>
                                <label htmlFor="name">Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    id="name"
                                    required
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <label htmlFor="email">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    id="email"
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="6"
                                required
                            ></textarea>
                        </div>

                        <div className={styles.buttonContainer}>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};
export default Contact;
