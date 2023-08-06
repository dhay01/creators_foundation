import React from 'react';
import {useParams} from 'react-router-dom';
import "./articles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faNewspaper} from "@fortawesome/free-regular-svg-icons";

function ArticleDetails({newsData}) {
    const {articleId} = useParams();
    const article = newsData.find(newsItem => newsItem.id === articleId);

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <div className="article-details-container">
            <h6>
                {article.section} <FontAwesomeIcon icon={faNewspaper} style={{color: "#9e9e9e",}}/>
            </h6>

            <h2>{article.title}</h2>
            <h6>{article.date}</h6>
            <p>{article.content}</p>
            <div className="images-container">
                {article.images.map((image, index) => (
                    <div className="img-parent" key={index}>
                        <img src={image.path} alt={`Image ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ArticleDetails;
