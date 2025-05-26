


import React, { useState } from 'react';
import images from './Images';
import Gallery from './Gallary';

const categories = [
  'All',
  'Team Vibes',
  'Creative Campaigns',
  'Work Hard, Play Hard',
  'Behind-The-Scenes'
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages =
    selectedCategory === 'All'
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br bg-neutral-900 via-white to-blue-100 p-4 md:p-10 font-sans">
      <h1 className="text-5xl font-extrabold text-center text-pink-700 mb-8 tracking-tight">
        🌟 CollegeTips Photo Vibes Gallery 🌟
      </h1>
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full border shadow-md hover:scale-105 transition-all duration-300 text-sm md:text-base font-medium ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-pink-600 to-pink-400 text-white border-none'
                : 'bg-white text-pink-600 border-pink-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <Gallery images={filteredImages} />
    </div>
  );
}

export default App;
