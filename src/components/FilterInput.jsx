import React from 'react'

const FilterInput = ({ filter, onFilterChange}) => {
    return (
        <div>
            <input value={filter} className="border-purple-300 border rounded-lg px-3 w-full" type="text" placeholder="Filter by coin or symbol" onChange={(e) => onFilterChange(e.target.value)} />
        </div>
    )
}
export default FilterInput
