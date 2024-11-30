import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ city }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const API_KEY = 'f78d0468063ea89f56e0d665826b54e1';

    useEffect(() => {
        if (!city) return;

        const fetchWeather = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
                );
                setWeatherData(response.data);
            } catch (err) {
                setError('Failed to fetch weather data. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [city]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    if (!weatherData) return <p>Please search for a city.</p>;

    return (
        <div>
            <h2>{weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
        </div>
    );
};

export default Weather;
