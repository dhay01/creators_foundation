import React from 'react';
import { useParams } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faNewspaper} from "@fortawesome/free-regular-svg-icons";

function NewsDetailsPage({ newsData }) {
    const { newsId } = useParams();

    // Find the news item with the matching ID
    const newsItem = newsData.find(item => item.id === newsId);

    if (!newsItem) {
        return <div>News not found</div>;
    }

    return (
        <div className="news-details-page">
            <h6>
                {newsItem.section} <FontAwesomeIcon icon={faNewspaper} style={{color: "#9e9e9e",}}/>
            </h6>
            <h2 className="font-tertiary">{newsItem.title}</h2>
            <h6 className="text-muted">{newsItem.date}</h6>
            <p>{newsItem.content}</p>
            <div className="images-container">
                {newsItem.images.map((image, index) => (
                    <img key={index} src={image.path} alt={` ${index}`} />
                ))}
            </div>
        </div>
    );
}

export default NewsDetailsPage;
