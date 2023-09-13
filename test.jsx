import React, { useState } from 'react';

const initialData = [
  { id: 1, name: 'Item 1', status: 'active' },
  { id: 2, name: 'Item 2', status: 'inactive' },
  { id: 3, name: 'Item 3', status: 'active' },
  { id: 4, name: 'Item 4', status: 'inactive' },
];

const FilteredDataComponent = () => {
  const [data, setData] = useState(initialData);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleStatusChange = (newStatus) => {
    setStatusFilter(newStatus);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterData = () => {
    return data.filter((item) => {
      // Filter by status
      if (statusFilter !== 'all' && item.status !== statusFilter) {
        return false;
      }

      // Filter by search query (case-insensitive)
      if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      return true;
    });
  };

  const filteredData = filterData();

  return (
    <div>
      <div>
        <label>Status Filter:</label>
        <select onChange={(e) => handleStatusChange(e.target.value)}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div>
        <label>Search:</label>
        <input type="text" value={searchQuery} onChange={handleSearchChange} />
      </div>
      <button onClick={() => handleStatusChange('active')}>Show Active</button>
      <button onClick={() => handleStatusChange('inactive')}>Show Inactive</button>
      <button onClick={() => handleStatusChange('all')}>Show All</button>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name} ({item.status})</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredDataComponent;
