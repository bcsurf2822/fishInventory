import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FishComponent = () => {
  const [fish, setFish] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFishData = async () => {
      try {
        const response = await axios.get('http://localhost:5126/api/fish/getall');
        setFish(response.data);
      } catch (err) {
        setError('Failed to fetch fish data: ', err);
      }
    };
    fetchFishData();
  }, []);

  return (
    <div>
      <h2>Fish List</h2>
      {error ? <p>{error}</p> : (
        <ul>
          {fish.map((f, index) => (
            <li key={index}>{f.name} - {f.species}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const MarketComponent = () => {
  const [markets, setMarkets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await axios.get('http://localhost:5126/api/fishmarket/getall');
        setMarkets(response.data);
      } catch (err) {
        setError('Failed to fetch market data: ', err);
      }
    };
    fetchMarketData();
  }, []);

  return (
    <div>
      <h2>Market List</h2>
      {error ? <p>{error}</p> : (
        <ul>
          {markets.map((m, index) => (
            <li key={index}>{m.name} - {m.location}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const TestComponent = () => {
  return (
    <div>
      <FishComponent />
      <MarketComponent />
    </div>
  );
};

export default TestComponent;
