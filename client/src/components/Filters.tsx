import React from 'react';

interface FiltersProps {
  onYearChange: (year: string) => void;
  onLanguageChange: (language: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ onYearChange, onLanguageChange }) => {
  return (
    <div>
      <select onChange={(e) => onYearChange(e.target.value)}>
        {/* Add your options here. e.g.: */}
        <option value="2023">2023</option>
        <option value="2022">2022</option>
      </select>

      <select onChange={(e) => onLanguageChange(e.target.value)}>
        {/* Add your options here. e.g.: */}
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};

export default Filters;
