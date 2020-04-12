import React from 'react';
import { Link } from 'gatsby';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
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
            <div className={styles.homeSection}>
                <h2 className={styles.headings}>About Lisa Low</h2>
                <p className={styles.aboutPara}>
                    {' '}
                    Lisa Low has had many careers---Theatre Critic; Book
                    Reviewer; Writer; Professor; Business Owner; Poet. She
                    received her doctorate in English Literature from the
                    University of Massachusetts in 1986 and spent twenty years,
                    from age 33 to 53, as an English professor, teaching at
                    University of Massachusetts; Boston University; Cornell
                    College; Colby College; and Pace University. In addition to
                    her work as an educator, from 1980-1985, Low practiced as a
                    film and theatre critic, including for Christian Science
                    Monitor Broadcasting and The Boston Herald.
                </p>
                <Link className={styles.readMore} to="/about/">
                    Read More
                </Link>
            </div>
        </div>
        <div className={styles.homeSeparator1}></div>
        <div className="wrapper">
            <div className={styles.homeSection}>
                <h2 className={styles.headings}>Excerpts</h2>

                <Carousel
                    showStatus={false}
                    infiniteLoop
                    autoPlay
                    interval={9000}
                    transitionTime={1000}
                    showIndicators={false}
                >
                    <div className={styles.excerpt}>
                        <p>
                            “A cargo of roses washing up on a shore; forty hands
                            held out to touch me, could not be more beautiful
                            than she is tonight, her eyes reflecting light,
                            turning the mantelpiece, the window, the curtains,
                            and the night.”
                        </p>
                        <p>
                            “Driving to Hotels for Lunch, the Day My Father
                            Died”
                        </p>
                        <p>Phoebe: A Journey of Literary Arts</p>
                    </div>
                    <div className={styles.excerpt}>
                        <p>
                            “A cargo of roses washing up on a shore; forty hands
                            held out to touch me, could not be more beautiful
                            than she is tonight, her eyes reflecting light,
                            turning the mantelpiece, the window, the curtains,
                            and the night.”
                        </p>
                        <p>
                            “Driving to Hotels for Lunch, the Day My Father
                            Died”
                        </p>
                        <p>Excerpt 2</p>
                    </div>
                    <div className={styles.excerpt}>
                        <p>
                            “A cargo of roses washing up on a shore; forty hands
                            held out to touch me, could not be more beautiful
                            than she is tonight, her eyes reflecting light,
                            turning the mantelpiece, the window, the curtains,
                            and the night.”
                        </p>
                        <p>
                            “Driving to Hotels for Lunch, the Day My Father
                            Died”
                        </p>
                        <p>Excerpt 3</p>
                    </div>
                </Carousel>

                <Link className={styles.readMore} to="/excerpts/">
                    Read More
                </Link>
            </div>
        </div>
        <div className={styles.homeSeparator2}></div>
        <div className="wrapper">
            <div className={styles.homeSection}>
                <h2 className={styles.headings}>Recent Publications</h2>
                <div>
                    <p>
                        “A Snowy Day,” BoomerLitMag (Online) Volume V, No. 2
                        (2020)
                    </p>
                    <p>
                        “Poet in New York,” BoomerLitMag, (Online) Volume V, No.
                        2 (2020)
                    </p>
                    <p>
                        “Couples, Green with Envy,” Litbreak Magazine (Online),
                        New York City, March 19, 2020
                    </p>
                    <p>
                        “On a Farm,” Litbreak Magazine (Online), New York City,
                        March 19, 2020
                    </p>
                    <p>
                        “Cut Back,” Litbreak Magazine (Online), New York City,
                        March 19, 2020
                    </p>
                </div>
                <Link className={styles.readMore} to="/publications/">
                    Read More
                </Link>
            </div>
        </div>
    </Layout>
);

export default IndexPage;
