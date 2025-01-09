import { Suspense } from "react";
import ObstacleDisplayClient from "./ObstacleDisplayClient"; // Separate client-side logic into a component
import '../../styles/globals.css'; // Ensure global styles are loaded

export default function ObstacleDisplayPage() {
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

      <Suspense fallback={<p>Loading obstacle list...</p>}>
        <ObstacleDisplayClient />
      </Suspense>

    </div>
  );
}