import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const drakeImages = [
  'https://media.gettyimages.com/photos/drake-attends-the-premiere-of-hbos-euphoria-at-the-cinerama-dome-on-picture-id1153762018?s=612x612',
  'https://hiphop24x7.com/wp-content/uploads/2022/05/New-Video-Future-Ft.-Drake-Tems-WAIT-FOR-U.png',
  'https://i.pinimg.com/564x/e4/42/4a/e4424a4d01194bff7564996f8c37625e.jpg',
  'https://preview.redd.it/xhu2gmxr58j81.jpg?width=640&crop=smart&auto=webp&s=e3b7571dba6e87d8fa426f27ca6be317baf6d2f2',
  'https://i.pinimg.com/736x/c6/fa/31/c6fa31681e558aa5740814281094d11c.jpg'
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Carousel drakeImages={drakeImages} />);
