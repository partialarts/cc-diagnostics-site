import React, { useEffect, useState } from "react";
import airtableBase from "../../../utils/airtableapi";

function Airtable({ tableName, view, renderItem }) {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    airtableBase(tableName)
    .select({ view })
    .eachPage(
        (records, fetchNextPage) => {
          const formattedRecords = records.map((record) => record._rawJson); 
          setRecords(formattedRecords);
          console.log("Fetched Airtable records:", formattedRecords);
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
  }, [tableName, view]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <>{records.map(renderItem)}</>;
}

export default Airtable;
