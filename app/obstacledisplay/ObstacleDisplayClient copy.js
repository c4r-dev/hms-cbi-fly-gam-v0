"use client";

import { useRouter } from "next/navigation";

export default function ObstacleDisplayClient({ study, selections }) {
  const router = useRouter();

  if (!study) {
    return <p>Error: No study data provided.</p>;
  }

  const { id, title, description, narative, obstacles } = study;

  const handlePrint = () => {
    window.print(); // Prints the entire page
  };

  const handleGoBack = () => {
    router.push("/"); // Navigate to the root of the application
  };

  return (
    <div className="obstacle-container">
      <p><strong>{title}</strong></p>
      <p><strong>{description}</strong></p>
      <p><strong>{narative}</strong></p>

      {obstacles && obstacles.length > 0 ? (
        <div>
          {obstacles.map((obstacle, index) => {
            const selectedStrategy = selections[index]?.strategy;

            return (
              <div key={index} className="obstacle-table">
                <table>
                  <thead>
                    <tr>
                      <th>Obstacle</th>
                      <th>Strategy 1</th>
                      <th>Strategy 2</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p><strong>{obstacle.header}</strong></p>
                        <p>{obstacle.text}</p>
                      </td>
                      <td
                        className={
                          obstacle.st1header === selectedStrategy ? "highlight" : ""
                        }
                      >
                        {obstacle.st1header && (
                          <>
                            <p><strong>{obstacle.st1header}</strong></p>
                            <p>{obstacle.st1text}</p>
                          </>
                        )}
                      </td>
                      <td
                        className={
                          obstacle.st2header === selectedStrategy ? "highlight" : ""
                        }
                      >
                        {obstacle.st2header && (
                          <>
                            <p><strong>{obstacle.st2header}</strong></p>
                            <p>{obstacle.st2text}</p>
                          </>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No obstacles available.</p>
      )}

      <div className="navigation-buttons">
        <button onClick={handleGoBack} className="back-button">
          Go Back to Studies
        </button>
        <button onClick={handlePrint} className="print-button">
          Print to PDF
        </button>
      </div>
    </div>
  );
}
