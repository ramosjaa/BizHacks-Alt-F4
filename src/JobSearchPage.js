import React, { useState } from 'react';

const JobSearchPage = () => {
  const [keywords, setKeywords] = useState('');
  const [applicant, setApplicant] = useState('');
  const [filterResult, setFilterResult] = useState('');

  const handleFilter = async () => {
    try {
      const response = await fetch('/filter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ keywords: keywords, applicant: applicant }),
      });

      if (response.ok) {
        const data = await response.json();
        setFilterResult(data.result.content);
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Job Search</h1>
      <div>
        <label htmlFor="filterKeywords">Keywords</label>
        <input
          type="text"
          id="filterKeywords"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="filterApplicant">Applicant</label>
        <input
          type="text"
          id="filterApplicant"
          value={applicant}
          onChange={(e) => setApplicant(e.target.value)}
        />
      </div>
      <button onClick={handleFilter}>Filter</button>
      <div>
        <h3>Filter Result</h3>
        <p>{filterResult}</p>
      </div>
    </div>
  );
};

export default JobSearchPage;
