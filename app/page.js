"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // App Router's navigation hook
import "../styles/globals.css"; // Ensure global styles are loaded

export default function Home() {
  const [studies, setStudies] = useState([]);
  const [selectedStudy, setSelectedStudy] = useState(null);
  const router = useRouter(); // Initialize Next.js router

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json"); // Adjust your API path if necessary
      const data = await res.json();
      setStudies(data);
    };

    fetchData();
  }, []);

  const handleStudyClick = (study) => {
    setSelectedStudy(study);
  };

  const handleContinue = () => {
    if (selectedStudy) {
      // Navigate to the ObstacleList page with the study ID and title
      router.push(`/obstaclelist?id=${selectedStudy.id}&title=${selectedStudy.title}&description=${selectedStudy.description}&narative=${selectedStudy.narative}`);
    } else {
      alert("Please select a study first.");
    }
  };

  return (
    <div className="container">
      {/* Header Section */}
      <div className="header">
        <img
          src="/favicon.ico"
          alt="Favicon"
          className="favicon"
        />
        <h1 className="title">Help researchers navigate a path to masking their study</h1>
      </div>

      {/* Centered Title */}
      <h2 className="centeredTitle">Select a team to help</h2>

      {/* Study Selection */}
      <div className="buttonGrid">
        {studies.map((study) => (
          <div
            key={study.id}
            onClick={() => handleStudyClick(study)}
            className={`detailedBox ${
              selectedStudy?.id === study.id ? "selected" : ""
            }`}
            style={{ backgroundColor: study.color }}
          >
            <h3>{study.title}</h3>
            <p>{study.description}</p>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="footer">
        {/* {selectedStudy ? (
          <p className="selectionMessage">
            You selected: <strong>{selectedStudy.title}</strong>
          </p>
        ) : (
          <p className="selectionMessage">Please select a study to continue.</p>
        )} */}
        <button onClick={handleContinue} className="lock-button">
          Continue
        </button>
      </div>
    </div>
  );
}
