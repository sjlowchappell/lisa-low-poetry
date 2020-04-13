import React from 'react';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from './about.module.css';
import { graphql } from 'gatsby';

const About = props => (
    <Layout>
        <SEO title="About" />
        <div className="wrapper">
            <h1 className="heading">About</h1>
            <div className={styles.headshotContainer}>
                <Img
                    className={styles.headshot}
                    fluid={props.data.headshot.childImageSharp.fluid}
                    alt={`A nice photo of me smiling`}
                />
            </div>
            <p>
                Lisa Low has had many careers---theatre critic, professor, book
                reviewer, writer, business owner, and poet. She received her
                doctorate in English Literature from the University of
                Massachusetts in 1986 and spent twenty years, from age 33 to 53,
                as an English professor, teaching at University of
                Massachusetts, Boston University, Cornell College, Colby
                College, and Pace University. In addition to her work as an
                educator, Low practiced briefly as a theatre critic for{' '}
                <span className={styles.publication}>
                    Christian Science Monitor Broadcasting
                </span>
                .
            </p>
            <p>
                After resigning her Professorship at Pace University in 2001 to
                raise two children born in her mid-forties, Lisa Low founded a
                grant writing firm in 2005 which is still operating.
            </p>
            <p>
                Lisa Low’s reviews, interviews, and academic essays have
                appeared in{' '}
                <span className={styles.publication}>
                    The Massachusetts Review
                </span>
                , <span className={styles.publication}>The Boston Review</span>,{' '}
                <span className={styles.publication}> Cross Currents</span>, and{' '}
                <span className={styles.publication}>The Boston Herald</span> .
                She is co-editor with Anthony Harding of{' '}
                <span className={styles.publication}>
                    Milton, the Metaphysicals, and Romanticism
                </span>{' '}
                (Cambridge University Press, 1994); and she has published
                numerous scholarly essays on Virginia Woolf.
            </p>
            <p>
                Lisa Low’s essay “Ridding Ourselves of Macbeth” (
                <span className={styles.publication}>
                    The Massachusetts Review
                </span>
                , 1986) was selected by Harold Bloom for his Major Literary
                Characters Series (Chelsea House, 1992); and her essay “In
                Defense of Hedda” (
                <span className={styles.publication}>
                    Massachusetts Studies in English
                </span>
                , 1982) was similarly selected by Gale Research for the mammoth
                resource tool,{' '}
                <span className={styles.publication}> Drama Criticism </span>,
                as one of five best essays available on{' '}
                <span className={styles.publication}>Hedda Gabler</span>.
            </p>
            <p>
                Lisa Low’s poems have appeared in or are forthcoming from{' '}
                <span className={styles.publication}>Spillway</span>,{' '}
                <span className={styles.publication}>Streetlight Magazine</span>
                , <span className={styles.publication}>The Potomac Review</span>
                , <span className={styles.publication}>Crack the Spine</span>,{' '}
                <span className={styles.publication}> Delmarva Review</span>,{' '}
                <span className={styles.publication}> Broken Plate </span>,{' '}
                <span className={styles.publication}>Tusculum</span>,{' '}
                <span className={styles.publication}>BoomerLitMag</span>,{' '}
                <span className={styles.publication}>Litbreak Magazine</span>,{' '}
                <span className={styles.publication}>
                    Evening Street Review
                </span>{' '}
                , and <span className={styles.publication}>Phoebe</span>. Her
                poetry has been anthologized in{' '}
                <span className={styles.publication}>Intro 11</span>,
                (Associated Writing Programs/NEH) and{' '}
                <span className={styles.publication}>
                    We Will Not Be Silenced
                </span>{' '}
                (IndieBlue Press).
            </p>
        </div>
    </Layout>
);

export default About;

export const pageQuery = graphql`
    query {
        headshot: file(relativePath: { eq: "headshot3.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
