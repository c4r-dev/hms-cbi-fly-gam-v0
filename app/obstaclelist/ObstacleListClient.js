"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function ObstacleListClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const id = searchParams.get("id"); // Study ID
  const title = searchParams.get("title"); // Study Title

  const [obstacles, setObstacles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchObstacles = async () => {
      try {
        setLoading(true);
        const res = await fetch("/data.json"); // Fetch the data.json file from public
        if (!res.ok) throw new Error("Failed to fetch data.");
        const data = await res.json();

        // Find the study based on ID
        const study = data.find((study) => study.id === parseInt(id));
        if (!study) throw new Error("Study not found.");

        // Set obstacles for the study
        setObstacles(study.obstacles || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchObstacles();
  }, [id]);

  const handleBack = () => {
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

  return (
    <div className="obstacle-container">
      <h1>Obstacle List for {title}</h1>
      {obstacles.length > 0 ? (
        <ul className="obstacle-list">
          {obstacles.map((obstacle, index) => (
            <li key={index} className="obstacle-item">
              <h3>{obstacle.header}</h3>
              <p>{obstacle.text}</p>
              <div className="strategies">
                <div className="strategy">
                  <h4>{obstacle.st1header}</h4>
                  <p>{obstacle.st1text}</p>
                  <p className="impact">{obstacle.st1texta}</p>
                </div>
                <div className="strategy">
                  <h4>{obstacle.st2header}</h4>
                  <p>{obstacle.st2text}</p>
                  <p className="impact">{obstacle.st2texta}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No obstacles found for this study.</p>
      )}
      <button onClick={handleBack} className="back-button">
        Back
      </button>
    </div>
  );
}
