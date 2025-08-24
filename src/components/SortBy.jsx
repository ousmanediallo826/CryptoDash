import React from 'react'

const SortBy = ({ sortBy, onSortChange}) => {
    return (
        <div className="controls">
            <label htmlFor="sort">Sort by:</label>
            <select
            id="sort"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}>
                <option value="market_cap_desc">Market Capital: (High To Low)</option>
                <option value="market_cap_asec">Market Capital: (Low To High)</option>
                <option value="price_desc">Price: (High To Low)</option>
                <option value="price_asec">Price: (Low To High)</option>
                <option value="change_desc">24h change: (High To Low)</option>
                <option value="change_asec">24h change: (Low To High)</option>

            </select>
        </div>
    )
}
export default SortBy
