import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import "./News.css";
import Loader from "../../assets/loader"

function NewsPage({newsData}) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const filteredNewsData = newsData.filter(
        newsItem => newsItem.section.includes('الأخبار')
    );
    if (!newsData) {
        return null;
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedNewsData = filteredNewsData.slice(startIndex, endIndex);


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="news-page">
            <div className="title">
                <h2>اخر الاخبار</h2>
            </div>
            <div className="news-container">
                {displayedNewsData.length > 0 ? (
                    <div className="container cards-container-news">
                        <div className="row cardsrow justify-content-start overflow-auto">
                            {displayedNewsData.map(newsItem => (

                                <div className="col-md-4" key={newsItem.id}>
                                    <Link to={`/news/${newsItem.id}`}>
                                        <div className="card news-cards border-0">
                                            <img src={newsItem.images[0].path} className="card-img-top"
                                                 alt="Card Image"/>
                                            <div className="card-body">
                                                <h4 className="card-title text-right"> {newsItem.title}</h4>
                                                <p className="card-text text-right">
                                                    {newsItem.date}{" "}
                                                    <FontAwesomeIcon
                                                        icon={faCalendarDays}
                                                        style={{color: "#dddedf"}}
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="coming-soon-parent">
                        <Loader/>
                    </div>
                )}
            </div>

            {/* Pagination */}
            {filteredNewsData.length > itemsPerPage && (
                <div className="pagination">
                    {Array.from({length: Math.ceil(filteredNewsData.length / itemsPerPage)}, (_, index) => (
                        <button
                            key={index + 1}
                            className={`btn btn-outline-secondary pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default NewsPage;
