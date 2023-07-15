import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../newsCards/newcards.css';
import { Link } from 'react-router-dom';

function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + '...';
}

function Newscards({ newsData }) {
    const filteredNewsData = newsData.filter(
        newsItem => newsItem.section.includes('المقالات')
    );

    // Sort the filteredNewsData array by date in ascending order
    const sortedNewsData = filteredNewsData.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Get the last three elements (newest news)
    const newestNews = sortedNewsData.slice(-3);

    const slides = newestNews.map((newsItem, index) => ({
        images: newsItem.images,
        caption: {
            title: newsItem.title,
            content: truncateText(newsItem.content, 80),
            id: newsItem.id,
        },
    }));


    return (
        <div className="container cards-container-news">
            <h2 className="text-center mb-4">نشاطاتنا</h2>
            <div className="row justify-content-start overflow-auto">
                {slides.map((slide, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card mb-3" style={{ height: '400px' }}>
                            <div className="card-img-container" style={{ height: '200px', overflow: 'hidden' }}>
                                <img src={slide.images[0].path} className="card-img-top" alt="Card" />
                            </div>
                            <div className="card-body" style={{ height: '200px' }}>
                                <h5 className="card-title">{slide.caption.title}</h5>
                                <p className="card-text">{slide.caption.content}</p>
                            </div>
                            <div className="card-footer d-flex justify-content-between align-items-center">
                                <Link to={`/news/${slide.caption.id}`} className="btn btn-primary mt-3">
                                    <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ffffff", marginRight: 10 }} />
                                    اقرا المزيد
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Newscards;
