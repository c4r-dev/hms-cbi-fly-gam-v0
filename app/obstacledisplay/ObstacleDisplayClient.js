"use client";


/*
study data example:
  {
    "id": 3,
    "title": "Pharmacology",
    "description": "A pharmaceutical company is testing a new drug for a common chronic condition. They conduct a large-scale clinical trial.",
    "color": "hotpink",
    "narative": "You committed to masking protocols and worked to ensure reliable results! You supported planning, documentation, and transparent communication. As a result, patients will benefit from evidence-based treatments.",
    "obstacles": [
      {
        "header": "Operational Constraints",
        "text": "The project manager acknowledges that the existing processes do not currently include masking. They plan to allocate additional resources to ensure proper procedures across multiple sites.",
        "st1header": "Dedicated Masking Team",
        "st1text": "Create a dedicated team responsible for masking. Task the team with developing standard protocols for masking at each stage of the study. Support the team in coordinating across sites, addressing logistical challenges, and ensuring compliance.",
        "st2header": "Pilot Testing",
        "st2text": "Conduct pilot testing of masking procedures. Identify and address operational bottlenecks early. Train personnel (e.g., site coordinators, data managers) on masking protocols. Adjust workflows based on lessons learned during the pilot phase.",
        "st1texta": "Creating a dedicated team ensures consistent implementation of masking. This team can make sure that the same procedures are used across sites. It demonstrates the company’s commitment to rigorous scientific practices.",
        "st2texta": "Pilot testing helps identify issues early and refine procedures. It allows adjustments based on lessons learned during the pilot phase, ultimately enhancing the study's quality and reliability."
      },
      {
        "header": "Practical Constraint",
        "text": "The study is facing issues with participant compliance. Researchers are fielding many questions from participants who want to know about their assigned treatment regimen and how soon they will experience improvements.",
        "st1header": "Informed Randomization Process",
        "st1text": "Educate participants about the need for masking. Explain the procedural steps for randomization and how it will be implemented, such that neither researchers nor participants know their group assignment.",
        "st2header": "Independent Data Monitoring Committee (IDMC) Collaboration",
        "st2text": "Involve an IDMC in the study. An IDMC is an external group that reviews interim results without revealing treatment details to the study team. They help maintain integrity and care for study participants.",
        "st1texta": "Randomly assigning participants helps mitigate bias and properly evaluate the drug's efficacy. Communicating the importance of rigor so that the study can help ALL patients with the chronic condition can provide study participants with the motivation to adhere to study procedures.",
        "st2texta": "Collaborating with an external IDMC helps maintain study integrity. Their feedback ensures scientific rigor and proper care for study participants, contributing positively to the credibility of the study's results."
      },
      {
       "header": "Technological Constraint",
        "text": "The IT team identifies a challenge related to the study's data management systems. Existing procedures for ensuring data integrity may accidentally unmask the data.",
        "st1header": "Software Solutions",
        "st1text": "Develop software tools or databases that support masking. Ensure that data entry, data management, and analysis processes maintain blinding. Collaborate with IT experts to create tailored solutions.",
        "st2header": "Data Audits",
        "st2text": "Regularly audit data handling processes to verify that masking remains intact. Implement additional checks that can detect unmasking in the data. Create procedures for promptly addressing any breaches.",
        "st1texta": "Developing custom software tools ensures data integrity while maintaining masking. It showcases innovation and commitment to robust research practices.",
        "st2texta": "Regular audits verify masking integrity. Implementing automated checks and response procedures demonstrate proactive measures to maintain the study's reliability."
      }
    ]
  },
*/

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
                        {obstacle.st1header && (
                          <p>{obstacle.st1header === selectedStrategy ? obstacle.st1texta : obstacle.st1text}</p>
                        )}
                      </td>
                      <td className={obstacle.st2header === selectedStrategy ? "highlight" : ""}>
                        {obstacle.st2header && (
                          <p>{obstacle.st2header === selectedStrategy ? obstacle.st2texta : obstacle.st2text}</p>
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
