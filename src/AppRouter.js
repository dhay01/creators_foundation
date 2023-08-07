
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Navbarheader from '../src/components/navbar/navbar';
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
import { useNews } from './NewsContext';

function AppRouter() {
    const newsData = useNews();

    return (
        <Router>
            <Layout className="mainLayout">
                <div className="App bg-white">
                    <Navbarheader />
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
