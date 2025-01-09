"use client";

import { useEffect, useState } from "react";

export default function ObstacleDisplayClient({ searchParams }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Parse the data from query parameters
    const parsedData = {
      id: searchParams.id || null,
      title: searchParams.title || null,
      description: searchParams.description || null,
      narative: searchParams.narative || null,
      obstacles: searchParams.obstacles ? JSON.parse(searchParams.obstacles) : [],
      selections: searchParams.selections ? JSON.parse(searchParams.selections) : {},
    };
    setData(parsedData);
  }, [searchParams]);

  if (!data) {
    return <p>Loading data...</p>;
  }

  return (
    <div className="obstacle-display-container">
      <h1>Obstacle Display</h1>
      <p><strong>ID:</strong> {data.id}</p>
      <p><strong>Title:</strong> {data.title}</p>
      <p><strong>Description:</strong> {data.description}</p>
      <p><strong>Narrative:</strong> {data.narative}</p>

      <h2>Obstacles</h2>
      {data.obstacles.length > 0 ? (
        <ul>
          {data.obstacles.map((obstacle, index) => (
            <li key={index}>
              <p><strong>Header:</strong> {obstacle.header}</p>
              <p><strong>Text:</strong> {obstacle.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No obstacles available.</p>
      )}

      <h2>Selections</h2>
      {Object.keys(data.selections).length > 0 ? (
        <ul>
          {Object.entries(data.selections).map(([index, selection]) => (
            <li key={index}>
              <p><strong>Obstacle {index}:</strong></p>
              <p><strong>Strategy:</strong> {selection.strategy}</p>
              <p><strong>Impact:</strong> {selection.impactText}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No selections made.</p>
      )}
    </div>
  );
}
