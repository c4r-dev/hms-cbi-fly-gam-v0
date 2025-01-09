"use client";

import ObstacleDisplayClient from "./ObstacleDisplayClient";

export default function ObstacleDisplayPage({ searchParams }) {
  return (
    <div>
      <ObstacleDisplayClient searchParams={searchParams} />
    </div>
  );
}
