import React from 'react';
import {
    poetryForthcoming,
    poetryPublished,
    anthologizedPoems,
    books,
    scholarlyWorks,
    interviews,
    reviews,
    lectures,
} from '../utils/publicationsContent';
import parse from 'html-react-parser';
import { uuid } from 'uuidv4';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Publications = () => (
    <Layout>
        <SEO title="Publications" />
        <div className="wrapper">
            <h1 className="heading">Publications</h1>
        </div>
        <div className="pubContainer">
            <div className="wrapper">
                <h2>Poetry--Forthcoming</h2>
                {poetryForthcoming.map(citation => (
                    <p key={uuid()}>{parse(citation)}</p>
                ))}
            </div>
        </div>
        <div className="pubContainer">
            <div className="wrapper">
                <h2>Poetry--Published</h2>
                {poetryPublished.map(citation => (
                    <p key={uuid()}>{parse(citation)}</p>
                ))}
            </div>
        </div>
        <div className="pubContainer">
            <div className="wrapper">
                <h2>Anthologized Poems</h2>
                {anthologizedPoems.map(citation => (
                    <p key={uuid()}>{parse(citation)}</p>
                ))}
            </div>
        </div>
        <div className="pubContainer">
            <div className="wrapper">
                <h2>Books</h2>
                {books.map(citation => (
                    <p key={uuid()}>{parse(citation)}</p>
                ))}
            </div>
        </div>
        <div className="pubContainer">
            <div className="wrapper">
                <h2>Selected Scholarly and Academic Essays</h2>
                {scholarlyWorks.map(citation => (
                    <p key={uuid()}>{parse(citation)}</p>
                ))}
            </div>
        </div>
        <div className="pubContainer">
            <div className="wrapper">
                <h2>Selected Interviews and Theatre Reviews</h2>
                {interviews.map(citation => (
                    <p key={uuid()}>{parse(citation)}</p>
                ))}
            </div>
        </div>
        <div className="pubContainer">
            <div className="wrapper">
                <h2>Selected Book Reviews</h2>
                {reviews.map(citation => (
                    <p key={uuid()}>{parse(citation)}</p>
                ))}
            </div>
        </div>
        <div className="pubContainer">
            <div className="wrapper">
                <h2>Lectures & Conference Presentations</h2>
                {lectures.map(citation => (
                    <p key={uuid()}>{parse(citation)}</p>
                ))}
            </div>
        </div>
    </Layout>
);

export default Publications;
