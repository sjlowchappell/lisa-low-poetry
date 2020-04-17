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
                    Lisa Low has had many careers---theatre critic, professor,
                    book reviewer, writer, business owner, and poet. She
                    received her doctorate in English Literature from the
                    University of Massachusetts in 1986 and spent twenty years
                    as an English professor, teaching at University of
                    Massachusetts, Boston University, Cornell College, Colby
                    College, and Pace University. In addition to her work as an
                    educator, Low practiced briefly as a theatre critic for{' '}
                    <span className="publication">
                        Christian Science Monitor Broadcasting
                    </span>
                    .
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
                    showThumbs={false}
                >
                    <div className={styles.excerpt}>
                        <p>“A cargo of roses washing up on</p>
                        <p> a shore; forty hands held out to touch</p>
                        <p> me, could not be more beautiful</p>
                        <p>than she is tonight, her eyes reflecting</p>{' '}
                        <p>light, turning to the violets, the </p>{' '}
                        <p>mantelpiece, the window and the night.”</p>
                        <p className={styles.title}>
                            “Driving to Hotels for Lunch, the Day My Father
                            Died”
                        </p>
                        <p className="publication">
                            Phoebe: A Journal of Literary Arts
                        </p>
                    </div>
                    <div className={styles.excerpt}>
                        <p>“My sister remembers childhood as</p>
                        <p> standing up to her waist in mist, no</p>{' '}
                        <p>one else around. My anger toward</p>
                        <p>my mother is fog through which I</p>{' '}
                        <p>barely see her. When she puts her</p>{' '}
                        <p>arms around me, nothing burns the</p>
                        <p>mist off. Nothing comes clear.”</p>
                        <p className={styles.title}>“Absent Parents”</p>
                        <p className="publication">Evening Street Review</p>
                    </div>
                    <div className={styles.excerpt}>
                        <p>“By day we are free to paint, as if</p>
                        <p>forever. By night we weave through</p>
                        <p>the stars, dragging our umbilical cords</p>
                        <p>like kite strings behind us. No longer </p>
                        <p>beautiful. No longer tied to hard</p>
                        <p>necessity, tender is the night we</p>
                        <p>share, provisioned for eternity.”</p>
                        <p className={styles.title}>“Floating, for Eva”</p>
                        <p className="publication">Tusculum Review</p>
                    </div>
                    <div className={styles.excerpt}>
                        <p>“From a distance I saw a frog,</p>
                        <p>standing like a soldier in a field</p>
                        <p>of summer grass.”</p>
                        <p className={styles.title}>“Blunt Force”</p>
                        <p className="publication">Streetlight Magazine</p>
                    </div>
                    <div className={styles.excerpt}>
                        <p>“She has squeezed every drop from the</p>
                        <p>lime of June, every bit of it lapped</p>
                        <p>on the held-out tongue.”</p>
                        <p className={styles.title}>
                            “Genesis of Mrs. Dalloway”
                        </p>
                        <p className="publication">Crack the Spine</p>
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
                        {' '}
                        “Love Poem to Oswald,”{' '}
                        <span className="publication">Potomac Review</span>,
                        #66, Spring, 2020
                    </p>
                    <p>
                        “On Throwing Away My Daughter’s Christmas Card Photo,”{' '}
                        <span className="publication">Potomac Review</span>,
                        #66, Spring, 2020.
                    </p>
                    <p>
                        “A Snowy Day,”{' '}
                        <span className="publication">BoomerLitMag</span>,
                        Volume V, No. 2
                    </p>
                    <p>
                        “Poet in New York,”{' '}
                        <span className="publication">BoomerLitMag</span>,
                        Volume V, No. 2
                    </p>
                    <p>
                        “Couples, Green with Envy,”{' '}
                        <span className="publication">Litbreak Magazine</span>,
                        March 19, 2020
                    </p>
                    <p>
                        “On a Farm,”{' '}
                        <span className="publication">Litbreak Magazine</span>,
                        March 19, 2020
                    </p>
                    <p>
                        “Cut Back,”{' '}
                        <span className="publication">Litbreak Magazine</span>,
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
