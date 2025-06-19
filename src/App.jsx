import { useEffect, useState } from 'react';
import { useStoryblokApi } from '@storyblok/react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import FeaturedProperties from './components/FeaturedProperties';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PropertyModal from './components/PropertyModal';

import './App.css';

function App() {
  const storyblokApi = useStoryblokApi();
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await storyblokApi.get('cdn/stories/listings', {
          version: 'published', // Change to "published" in production
        });

        const storyProperties = data.story.content.properties || [];
        setProperties(storyProperties);
      } catch (error) {
        console.error('Failed to fetch properties from Storyblok:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <Navbar />
      <Home />

      {/* Pass fetched properties into FeaturedProperties */}
      <FeaturedProperties
        properties={properties}
        setSelectedProperty={setSelectedProperty}
      />

      <Contact />
      <Footer />

      {/* Open modal only when a property is selected */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  );
}

export default App;
