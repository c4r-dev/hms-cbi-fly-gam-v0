import { Suspense } from "react";
import ObstacleListClient from "./ObstacleListClient"; // Separate client-side logic into a component

export default function ObstacleListPage() {
  return (
    <Suspense fallback={<p>Loading obstacle list...</p>}>
      <ObstacleListClient />
    </Suspense>
  );
}
