"use client";

export default function ObstacleDisplayClient({ study, selections }) {
  if (!study) {
    return <p>Error: No study data provided.</p>;
  }

  const { id, title, description, narative, obstacles } = study;

  return (
    <div className="obstacle-container">
      {/* <h1>Obstacle Display</h1> */}
      <p><strong>{title}</strong></p>
      <p><strong>{description}</strong></p>
      <p><strong>{narative}</strong></p>

      {/* <h2>Obstacles</h2> */}
      {obstacles && obstacles.length > 0 ? (
        <div>
          {obstacles.map((obstacle, index) => {
            const selectedStrategy = selections[index]?.strategy;

            return (
              <div key={index} className="obstacle-table">
                {/* <h3>Obstacle {index + 1}</h3> */}
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
                        <p><strong>{obstacle.header}</strong> </p>
                        <p>{obstacle.text}</p>
                      </td>
                      <td
                        className={
                          obstacle.st1header === selectedStrategy ? "highlight" : ""
                        }
                      >
                        {obstacle.st1header && (
                          <>
                            <p><strong>{obstacle.st1header}</strong> </p>
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
                            <p><strong>{obstacle.st2header}</strong> </p>
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

      {/* <h2>Selections</h2>
      {selections && Object.keys(selections).length > 0 ? (
        <ul>
          {Object.entries(selections).map(([index, selection]) => (
            <li key={index}>
              <p><strong>Obstacle {parseInt(index) + 1}:</strong></p>
              <p><strong>Strategy:</strong> {selection.strategy}</p>
              <p><strong>Impact:</strong> {selection.impactText}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No selections made.</p>
      )} */}
    </div>
  );
}
