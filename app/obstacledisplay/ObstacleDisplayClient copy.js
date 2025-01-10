"use client";

import { useSearchParams } from "next/navigation";

export default function ObstacleDisplayClient() {
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const narative = searchParams.get("narative");
  const obstacles = JSON.parse(searchParams.get("obstacles") || "[]");
  const selections = JSON.parse(searchParams.get("selections") || "{}");

  return (
    <div className="obstacle-container">
      <h1>Obstacle Display</h1>
      <p><strong>Research Interest:</strong> {title}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Narrative:</strong> {narative}</p>

      <h2>Obstacles</h2>
      {obstacles.length > 0 ? (
        <ul>
          {obstacles.map((obstacle, index) => (
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
      {Object.keys(selections).length > 0 ? (
        <ul>
          {Object.entries(selections).map(([index, selection]) => (
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
