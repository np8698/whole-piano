import React from 'react';

interface FiltersProps {
    onYearChange: (year: string) => void;
    onLanguageChange: (lang: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ onYearChange, onLanguageChange }) => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 30 }, (_, i) => currentYear - i); // for the last 30 years

    return (
        <div>
            <select onChange={(e) => onYearChange(e.target.value)}>
                <option value="">Select Release Year</option>
                {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>

            <select onChange={(e) => onLanguageChange(e.target.value)}>
                <option value="">Select Language</option>
                {/* Add languages as needed */}
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
            </select>
        </div>
    );
}

export default Filters;
