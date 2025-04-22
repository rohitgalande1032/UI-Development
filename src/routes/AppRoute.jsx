import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GIF from "../pages/GIF"
import Picture from "../pages/Picture"
import PDF from "../pages/PDF"
import Video from "../pages/Video"
import MainPage from '../pages/MainPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/picture" element={<Picture />} />
      <Route path="/video" element={<Video />} />
      <Route path="/gif" element={<GIF/>} />
      <Route path="/pdf" element={<PDF />} />
    </Routes>
  );
};

export default AppRoutes;
