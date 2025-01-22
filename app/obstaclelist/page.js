"use client";

import { Suspense } from "react";
import { useRouter } from "next/navigation";
import ObstacleListClient from "./ObstacleListClient"; // Separate client-side logic into a component
import "../../styles/globals.css"; // Ensure global styles are loaded
import Header from "../components/Header/Header";

export default function ObstacleListPage() {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleHelpClick = () => {
    console.log("Help clicked");
  };

  return (
    <div className="full-page">
      <Header onLogoClick={handleLogoClick} onHelpClick={handleHelpClick} />
      <div className="container">
        <Suspense fallback={<p>Loading obstacle list...</p>}>
          <ObstacleListClient />
        </Suspense>
      </div>
    </div>
  );
}
