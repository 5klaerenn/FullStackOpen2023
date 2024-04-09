export const Filter = ({ newFilter, handleFilterChange }) => {

  return (
    <div>
      filter shown with <input value={newFilter} onChange={handleFilterChange} />
    </div>
  );

};
