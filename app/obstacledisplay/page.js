"use client";

import { Suspense } from "react";
import ObstacleDisplayClient from "./ObstacleDisplayClient";
import "../../styles/globals.css"; // Ensure global styles are loaded

export default function ObstacleDisplayPage({ searchParams }) {
  const study = searchParams.study ? JSON.parse(searchParams.study) : null;
  const selections = searchParams.selections ? JSON.parse(searchParams.selections) : null;

  if (!study) {
    return <p>Error: No study data provided.</p>;
  }

  return (
    <div className="container">
      {/* Header Section */}
      <div className="header">
        <img src="/favicon.ico" alt="Favicon" className="favicon" />
        <h1 className="title">Weigh choices to mask a study</h1>
      </div>

      <Suspense fallback={<p>Loading obstacle display...</p>}>
        <ObstacleDisplayClient study={study} selections={selections} />
      </Suspense>
    </div>
  );
}
