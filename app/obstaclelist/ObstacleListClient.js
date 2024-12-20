"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function ObstacleListClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const id = searchParams.get("id");
  const title = searchParams.get("title");

  const [obstacles, setObstacles] = useState([]);
  const [currentObstacleIndex, setCurrentObstacleIndex] = useState(0);
  const [selectedStrategy, setSelectedStrategy] = useState(null); // State for selected strategy
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchObstacles = async () => {
      try {
        setLoading(true);
        const res = await fetch("/data.json");
        if (!res.ok) throw new Error("Failed to fetch data.");
        const data = await res.json();

        // Find the study and its obstacles
        const study = data.find((study) => study.id === parseInt(id));
        if (!study) throw new Error("Study not found.");

        setObstacles(study.obstacles || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchObstacles();
  }, [id]);

  const handleNext = () => {
    setSelectedStrategy(null); // Reset strategy selection on Next
    setCurrentObstacleIndex((prevIndex) => Math.min(prevIndex + 1, obstacles.length - 1));
  };

  const handleBack = () => {
    setSelectedStrategy(null); // Reset strategy selection on Back
    setCurrentObstacleIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleGoBack = () => {
    router.back();
  };

  const handleStrategySelection = (strategy, impactText) => {
    setSelectedStrategy({ strategy, impactText }); // Update selected strategy and additional text
  };

  if (!id || !title) {
    return <p>No study selected. Please go back and select a study.</p>;
  }

  if (loading) {
    return <p>Loading obstacles...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const currentObstacle = obstacles[currentObstacleIndex];

  return (
    <div className="obstacle-container">
      <h1>Obstacle List for {title}</h1>
      {currentObstacle ? (
        <>
          {/* Obstacle Header and Text */}
          <div className="obstacle-header">
            <h2>{currentObstacle.header}</h2>
            <p>{currentObstacle.text}</p>
          </div>

          {/* Buttons for Strategies */}
          <div className="strategy-buttons">
            <button
              className={`strategy-button ${
                selectedStrategy?.strategy === currentObstacle.st1header ? "selected" : ""
              }`}
              onClick={() => handleStrategySelection(currentObstacle.st1header, currentObstacle.st1texta)}
            >
              <h4>{currentObstacle.st1header}</h4>
              <p>{currentObstacle.st1text}</p>
            </button>
            <button
              className={`strategy-button ${
                selectedStrategy?.strategy === currentObstacle.st2header ? "selected" : ""
              }`}
              onClick={() => handleStrategySelection(currentObstacle.st2header, currentObstacle.st2texta)}
            >
              <h4>{currentObstacle.st2header}</h4>
              <p>{currentObstacle.st2text}</p>
            </button>
          </div>

          {/* Message for Selected Strategy */}
          {selectedStrategy && (
            <div className="selected-strategy-message">
              <p>You selected: <strong>{selectedStrategy.strategy}</strong></p>
              <p className="impact-text">{selectedStrategy.impactText}</p>
            </div>
          )}
        </>
      ) : (
        <p>No obstacles available.</p>
      )}

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button onClick={handleBack} disabled={currentObstacleIndex === 0} className="nav-button">
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={currentObstacleIndex === obstacles.length - 1}
          className="nav-button"
        >
          Next
        </button>
      </div>
      <button onClick={handleGoBack} className="back-button">
        Go Back to Studies
      </button>
    </div>
  );
}
