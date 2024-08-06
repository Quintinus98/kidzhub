// CountryCodeDropdown.js
import React from 'react';

const CountryCodeDropdown = ({ id, className, value, onChange }) => {
  // Here you would fetch the actual country codes and populate the options dynamically
  const countryCodes = [
    { code: '+1', label: 'USA (+1)' },
    { code: '+234', label: 'Nigeria (+234)' },
    // ...other countries
  ];

  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      className={`bg-white border border-gray-300 ${className}`}
    >
      {countryCodes.map((country) => (
        <option key={country.code} value={country.code}>
          {country.code}
        </option>
      ))}
    </select>
  );
};

export default CountryCodeDropdown;
