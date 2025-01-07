import { Suspense } from "react";
import ObstacleListClient from "./ObstacleListClient"; // Separate client-side logic into a component
import "../globals.css"; // Ensure global styles are loaded

export default function ObstacleListPage() {
  return (

      <Suspense fallback={<p>Loading obstacle list...</p>}>
        <ObstacleListClient />
      </Suspense>

  );
}