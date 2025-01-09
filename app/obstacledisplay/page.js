"use client";

import ObstacleDisplayClient from "./ObstacleDisplayClient";
import { Suspense } from "react";

export default function ObstacleDisplayPage({ searchParams }) {
  return (
    <div>
      <Suspense fallback={<p>Loading obstacle display...</p>}>
        <ObstacleDisplayClient searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
