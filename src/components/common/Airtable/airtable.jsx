import React, { useState, useEffect } from 'react';

function AirtableComponent({ baseName, viewName, formatRecords }) {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    airtableBase(baseName) // Use the baseName prop
      .select({ view: viewName }) // Use the viewName prop
      .eachPage(
        (records, fetchNextPage) => {
            const formattedRecords = formatRecords(records);
            setRecords(formattedRecords);
            fetchNextPage();
        },
        (error) => {
            if (error) {
              setError(error);
              console.error(error);
            }
            setIsLoading(false);
          }
        );
  }, [baseName, viewName, formatRecords]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {records.map((record) => (
        <div key={record.id}>{/* Render formatted record data here */}</div>
      ))}
    </div>
  );
}

export default AirtableComponent;