"use client";

import { Suspense } from "react";
import { useRouter } from "next/navigation";
import ObstacleListClient from "./ObstacleListClient"; // Separate client-side logic into a component
import "../../styles/globals.css"; // Ensure global styles are loaded

export default function ObstacleListPage() {
  const router = useRouter();

  return (
    <div className="container">
      {/* Header Section */}
      {/* <div className="header">
        <img
          src="/favicon.ico"
          alt="Favicon"
          className="favicon"
          onClick={() => router.push("/")} // Add click handler
          style={{ cursor: "pointer" }} // Change cursor to pointer for better UX
        />
        <h1 className="title">Help researchers navigate a path to masking their study</h1>
      </div> */}

      <Suspense fallback={<p>Loading obstacle list...</p>}>
        <ObstacleListClient />
      </Suspense>
    </div>
  );
}
