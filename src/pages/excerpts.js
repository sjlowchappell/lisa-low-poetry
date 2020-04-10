import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from './excerpts.module.css';

const Excerpts = () => (
    <Layout>
        <SEO title="Excerpts" />
        <div className={styles.excerptsWrapper}>
            <h1 className="heading">Excerpts</h1>
            <div className={styles.tileContainer}>
                <div className={styles.tile}>
                    <p>
                        “A cargo of roses washing up on a shore; forty hands
                        held out to touch me, could not be more beautiful than
                        she is tonight, her eyes reflecting light, turning the
                        mantelpiece, the window, the curtains, and the night.”
                    </p>
                    <p>“Driving to Hotels for Lunch, the Day My Father Died”</p>
                    <p>Phoebe: A Journey of Literary Arts</p>
                </div>
                <div className={styles.tile}>
                    <p>
                        “A cargo of roses washing up on a shore; forty hands
                        held out to touch me, could not be more beautiful than
                        she is tonight, her eyes reflecting light, turning the
                        mantelpiece, the window, the curtains, and the night.”
                    </p>
                    <p>“Driving to Hotels for Lunch, the Day My Father Died”</p>
                    <p>Phoebe: A Journey of Literary Arts</p>
                </div>
                <div className={styles.tile}>
                    <p>
                        “A cargo of roses washing up on a shore; forty hands
                        held out to touch me, could not be more beautiful than
                        she is tonight, her eyes reflecting light, turning the
                        mantelpiece, the window, the curtains, and the night.”
                    </p>
                    <p>“Driving to Hotels for Lunch, the Day My Father Died”</p>
                    <p>Phoebe: A Journey of Literary Arts</p>
                </div>
            </div>
        </div>
    </Layout>
);

export default Excerpts;
