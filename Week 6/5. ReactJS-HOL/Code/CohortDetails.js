// CohortDetails.js or CohortsDashboard.js

import React from 'react';
import styles from './CohortDetails.module.css';

// ✅ Step 1: Define the CohortBox component
function CohortBox({ cohort }) {
  const isOngoing = cohort.status.toLowerCase() === 'ongoing';

  return (
    <div className={styles.box}>
      <h3 className={isOngoing ? styles.greenText : styles.blueText}>
        {cohort.id} - {cohort.tech}
      </h3>
      <dl>
        <dt>Started On</dt>
        <dd>{cohort.startDate}</dd>

        <dt>Current Status</dt>
        <dd>{cohort.status}</dd>

        <dt>Coach</dt>
        <dd>{cohort.coach}</dd>

        <dt>Trainer</dt>
        <dd>{cohort.trainer}</dd>
      </dl>
    </div>
  );
}

// ✅ Step 2: Define the main dashboard component
function CohortsDashboard() {
  const cohorts = [
    {
      id: "INTADMDF10",
      tech: ".NET FSD",
      startDate: "22-Feb-2022",
      status: "Scheduled",
      coach: "Aathma",
      trainer: "Jojo Jose"
    },
    {
      id: "ADM21JF014",
      tech: "Java FSD",
      startDate: "10-Sep-2021",
      status: "Ongoing",
      coach: "Apoorv",
      trainer: "Elisa Smith"
    },
    {
      id: "CDBJF21025",
      tech: "Java FSD",
      startDate: "24-Dec-2021",
      status: "Ongoing",
      coach: "Aathma",
      trainer: "John Doe"
    }
  ];

  return (
    <div>
      <h2>Cohorts Details</h2>
      {cohorts.map((cohort, index) => (
        <CohortBox key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default CohortsDashboard;
