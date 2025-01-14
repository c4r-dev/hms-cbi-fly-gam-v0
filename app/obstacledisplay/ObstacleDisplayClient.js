"use client";

import { useRouter } from "next/navigation";

export default function ObstacleDisplayClient({ study, selections }) {
  const router = useRouter();

  if (!study) {
    return <p>Error: No study data provided.</p>;
  }

  const { id, title, description, narative, obstacles } = study;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="obstacle-container">

      <button onClick={() => router.push("/")} className="back-button">
        Select a different scenario
      </button>
      <div className="spacer"><br></br></div>
      {/* <div className="spacer"></div> */}
      <h2>{title}</h2>
      <h3>{description}</h3>

      {obstacles && obstacles.length > 0 ? (
        <div>
          {obstacles.map((obstacle, index) => {
            const selectedStrategy = selections[index]?.strategy;

            return (
              <div key={index} className="obstacle-table">
                <table>
                  <thead>
                    <tr>
                      <th><p><strong>{obstacle.header}</strong></p></th>
                      <th><p><strong>{obstacle.st1header}</strong></p></th>
                      <th><p><strong>{obstacle.st2header}</strong></p></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p>{obstacle.text}</p>
                      </td>
                      <td className={obstacle.st1header === selectedStrategy ? "highlight" : ""}>
                        {obstacle.st1header && <p>{obstacle.st1text}</p>}
                      </td>
                      <td className={obstacle.st2header === selectedStrategy ? "highlight" : ""}>
                        {obstacle.st2header && <p>{obstacle.st2text}</p>}
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

      {/* Move narative here */}
      <p><strong>{narative}</strong></p>

      <div className="navigation-buttons">
        {/* <button onClick={handleGoBack} className="back-button">
          Go Back to Studies
        </button> */}
        <button onClick={handlePrint} className="nav-button">
          Print to PDF
        </button>
      </div>
    </div>
  );
}
