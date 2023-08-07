import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const NewsContext = createContext();

function NewsProvider({ children }) {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://back.creators-foundation.org/api/news.php?operation=news&page=1`)
            .then(response => {

                if (response.data && response.data.news) {
                    setNewsData(response.data.news);
                } else {
                    throw new Error('Invalid response data');
                }
            })
            .catch(error => {
                console.error('Error fetching news data:', error);
            });
    }, []);

    return (
        <NewsContext.Provider value={newsData}>
            {children}
        </NewsContext.Provider>
    );
}

function useNews() {
    const context = useContext(NewsContext);
    if (!context) {
        throw new Error('useNews must be used within a NewsProvider');
    }
    return context;
}

export { NewsProvider, useNews };
