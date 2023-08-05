import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import axios from "axios";
import Navbar from '../src/components/navbar/navbar';
import Footer from '../src/components/footer/footer';
import HomePage from '../src/pages/HomePage';
import AboutPage from '../src/pages/AboutPage';
import StaffPage from '../src/pages/StaffPage';
import GalleryPage from "./pages/GalleryPage";
import AlbumPage from "./pages/AlbumPage";
import ContactPage from "./pages/ContactusPage";
import Articles from "./components/articles/articles";
import News from "./components/news/News";
import NewsDetails from "./components/news/NewsDetails";
import ArticleDetails from "./components/articles/ArticleDetails";


function useNewsData() {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://back.creators-foundation.org/api/news.php?operation=news&page=1`)
            .then(response => {
                console.log(response.data);
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

    return newsData;
}

function AppRouter() {
    const newsData = useNewsData();

    return (
        <Router>
            <Layout className="mainLayout">
                <div className="App bg-white">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage newsData={newsData} />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/news" element={<News newsData={newsData} />} />
                        <Route path="/staff" element={<StaffPage />} />
                        <Route path="/gallery" element={<GalleryPage />} />
                        <Route path="/gallery/:galleryId" element={<AlbumPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/articles" element={<Articles newsData={newsData} />} />
                        <Route path="/news/:newsId" element={<NewsDetails newsData={newsData} />} />
                        <Route path="/articles/:articleId" element={<ArticleDetails newsData={newsData} />} />
                    </Routes>
                    <Footer />
                </div>
            </Layout>
        </Router>
    );
}

export default AppRouter;

