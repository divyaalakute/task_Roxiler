



import React, { useState } from 'react';
import TransactionTable from './components/TransactionTable'; // Ensure correct name & path
import StatisticsBox from './components/StatisticsBox';
import BarChart from './components/BarChart';  // Correct import path
import PieChart from './components/PieChart';  // Correct import path

const App = () => {
  const [month, setMonth] = useState('3'); // Default to March

  return (
    <div>
      <h1>Transaction Dashboard</h1>

      {/* Month Dropdown */}
      <select value={month} onChange={(e) => setMonth(e.target.value)}>
        {Array.from({ length: 12 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {new Date(0, i).toLocaleString('default', { month: 'long' })}
          </option>
        ))}
      </select>

      {/* Correct Component Usage */}
      <TransactionTable month={month} />
      <StatisticsBox month={month} />
      <BarChart month={month} />
      <PieChart month={month} />
    </div>
  );
};

export default App;
