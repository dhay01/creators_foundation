import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import "./News.css";
import comingsoon from "../news/coming-soon_5229336.svg";

function NewsPage({ newsData }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const filteredNewsData = newsData.filter(
        newsItem => newsItem.section.includes('الأخبار')
    );
    if (!newsData) {
        return null;
    }
    const truncateContent = (content, maxLength) => {
        if (content.length <= maxLength) {
            return content;
        }
        return content.substring(0, maxLength) + '....';
    };
    // pagination

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Slice the filteredNewsData based on the current page
    const displayedNewsData = filteredNewsData.slice(startIndex, endIndex);



    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="news-page">
            <div className="title">
                <h2>الاخبار والانشطة</h2>
            </div>
            <div className="news-container">
                {displayedNewsData.length > 0 ? (
                    <div className="row">
                        {displayedNewsData.map(newsItem => (
                            <div key={newsItem.id} className="my-auto">
                                <h4 className="font-tertiary">
                                    <Link to={`/news/${newsItem.id}`}>{newsItem.title}</Link>
                                </h4>
                                <h6 className="text-muted">
                                    {newsItem.date}{" "}
                                    <FontAwesomeIcon
                                        icon={faCalendarDays}
                                        style={{ color: "#dddedf" }}
                                    />
                                </h6>
                                <h5 className="text-muted" style={{ fontSize: "14px" }}>
                                    {truncateContent(newsItem.content, 80)}
                                </h5>
                                <Link to={`/news/${newsItem.id}`}>
                                    <button className="btn btn-primary mt-3">
                                        <FontAwesomeIcon
                                            icon={faArrowLeft}
                                            style={{ color: "#ffffff", marginRight: 10 }}
                                        />
                                        اقرا المزيد
                                    </button>
                                </Link>

                                <hr />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="coming-soon-parent">
                        <img className="coming-soon" src={comingsoon} alt="Coming Soon" />
                    </div>
                )}
            </div>

            {/* Pagination */}
            {filteredNewsData.length > itemsPerPage && (
                <div className="pagination">
                    {Array.from({ length: Math.ceil(filteredNewsData.length / itemsPerPage) }, (_, index) => (
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
