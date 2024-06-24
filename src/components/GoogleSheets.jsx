import React, { useEffect, useState } from 'react';
import API from '../utils/googleapi'

const GoogleSheets = () => {
    const [sheetData, setSheetData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await API.getSheetData();
            setSheetData(data);
          } catch (error) {
            console.error('Error fetching sheet data:', error);
          }
        };
    
        fetchData(); // Call the async function inside useEffect
      }, []); // Empty dependency array ensures it runs once on mount
    
      return ( 
        <div>
        {sheetData ? ( // Conditionally render the data
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* Map over sheetData and display each item */}
            {sheetData.map((item, index) => (
              <div key={index} style={{ padding: '30px' }}>
                <img style={{ height: '200px', paddingTop: '50px' }} src={item.Photo} alt={`${item.Name}'s photo`} /><h2>{item.Name}</h2><h3>{item.Role}</h3><div style={{ width: '300px' }}><p>{item.Bio}</p></div>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading data...</p> // Show a loading message
        )}
      </div>
      );
    }
    
    export default GoogleSheets;