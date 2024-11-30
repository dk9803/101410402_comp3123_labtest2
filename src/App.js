import React, { useState } from 'react';
import Weather from './components/Weather';
import SearchBar from './components/SearchBar';

const App = () => {
    const [city, setCity] = useState('');

    const handleSearch = (searchedCity) => {
        setCity(searchedCity);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Weather App</h1>
            <SearchBar onSearch={handleSearch} />
            <Weather city={city} />
        </div>
    );
};

export default App;
