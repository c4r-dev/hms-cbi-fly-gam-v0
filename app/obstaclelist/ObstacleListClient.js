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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchObstacles = async () => {
      try {
        setLoading(true);
        const res = await fetch("/data.json"); // Fetch data.json from public directory
        if (!res.ok) throw new Error("Failed to fetch data.");
        const data = await res.json();

        // Find the study by ID and set its obstacles
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
    setCurrentObstacleIndex((prevIndex) => Math.min(prevIndex + 1, obstacles.length - 1));
  };

  const handleBack = () => {
    setCurrentObstacleIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleGoBack = () => {
    router.back(); // Navigate back to the previous page
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
        <div className="obstacle-item">
          <h3>{currentObstacle.header}</h3>
          <p>{currentObstacle.text}</p>
          <div className="strategies">
            <div className="strategy">
              <h4>{currentObstacle.st1header}</h4>
              <p>{currentObstacle.st1text}</p>
              <p className="impact">{currentObstacle.st1texta}</p>
            </div>
            <div className="strategy">
              <h4>{currentObstacle.st2header}</h4>
              <p>{currentObstacle.st2text}</p>
              <p className="impact">{currentObstacle.st2texta}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>No obstacles available.</p>
      )}
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
