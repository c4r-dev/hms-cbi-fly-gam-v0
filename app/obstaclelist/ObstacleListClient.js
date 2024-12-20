"use client";

import { useSearchParams } from "next/navigation";

export default function ObstacleListClient() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const title = searchParams.get("title");

  if (!id || !title) {
    return <p>No study selected. Please go back and select a study.</p>;
  }

  return (
    <div>
      <h1>Obstacle List for {title}</h1>
      <p>Study ID: {id}</p>
      {/* Fetch and render obstacles or other data related to the selected study */}
    </div>
  );
}
