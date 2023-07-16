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
            date: newsItem.date
        },
    }));


    return (
        <div className="container cards-container-news">
            <h2 className="text-center section-title mb-4">اخر المقالات</h2>
            <div className="row cardsrow justify-content-start overflow-auto">
                {slides.map((slide, index) => (

                    <div className="col-md-4"  key={index}>
                        <Link to={`/articles/${slide.caption.id}`}>
                            <div className="card news-cards border-0" style={{  }}>
                                <img src={slide.images[0].path} className="card-img-top" alt="Card Image"/>
                                <div className="card-body">
                                    <h4 className="card-title text-right">
                                        {slide.caption.title}
                                    </h4>
                                    <p className="card-text text-right">{slide.caption.date}</p>
                                </div>
                            </div>
                        </Link>


                    </div>
                ))}
            </div>
        </div>
    );
}

export default Newscards;
