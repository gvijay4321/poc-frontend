import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://poc-backend-ney8.onrender.com/api/data")  // Correct API URL
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Frontend React App</h1>
      {loading ? <p>Loading...</p> : <p>{data?.message}</p>}
    </div>
  );
}

export default App;
