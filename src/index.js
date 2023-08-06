import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './AppRouter';
import { NewsProvider } from './NewsContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
    <React.StrictMode>
        <NewsProvider>
            <AppRouter />
        </NewsProvider>
    </React.StrictMode>
);
