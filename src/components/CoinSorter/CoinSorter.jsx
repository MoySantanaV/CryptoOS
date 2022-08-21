import React from 'react';
import Stack from 'react-bootstrap/Stack';

function CoinSorter({ onSortName, onSortPrice }) {
  return (
    <div>
      <Stack direction="horizontal" className="mt-4">
        <p className="">Sort by name </p>
        <p className="ms-auto">Sort by price</p>
      </Stack>
      <Stack direction="horizontal">
        <select size="sm" onChange={onSortName}>
          <option className="EmptyName">Select:</option>
          <option className="Asc">Ascending</option>
          <option className="Des">Descending</option>
        </select>
        <select className="ms-auto" size="sm" onChange={onSortPrice}>
          <option className="Price">Select:</option>
          <option className="High">Highest</option>
          <option className="Low">Lowest</option>
        </select>
      </Stack>
    </div>
  );
}

export { CoinSorter };
