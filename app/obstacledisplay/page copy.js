"use client";

import { Suspense } from "react";
import ObstacleDisplayClient from "./ObstacleDisplayClient";
import '../../styles/globals.css'; // Ensure global styles are loaded

export default function ObstacleDisplayPage({ searchParams }) {
  return (

    <div className="container">
      {/* Header Section */}
      <div className="header">
        <img
          src="/favicon.ico"
          alt="Favicon"
          className="favicon"
        />
        <h1 className="title">Weigh choices to mask a study</h1>
      </div>

      <Suspense fallback={<p>Loading obstacle display...</p>}>
        <ObstacleDisplayClient searchParams={searchParams} />
      </Suspense>

    </div>
  );
}
