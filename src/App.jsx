import React from 'react'
import { useState, useEffect } from 'react'
import CoinCard from "./components/CoinCard.jsx";
import LimitSelector from "./components/LimitSelector.jsx";
import FilterInput from "./components/FilterInput.jsx";
import filterInput from "./components/FilterInput.jsx";
import SortBy from "./components/SortBy.jsx";

const API_URL = import.meta.env.VITE_BASE_URL;
const App = () => {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [limit, setLimit] = useState(10)
    const [filter, setFilter] = useState("")
    const [sortBy, setSortBy] = useState("market_cap_desc")
    useEffect(() => {
        const getCoins = async () => {
            try {
                const response = await fetch(`${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`)
                if (!response.ok) {
                    throw new Error('Could not fetch coins')
                }
                const data = await response.json()
                setCoins(data)
                console.log(setCoins(data))



            }  catch(error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        getCoins()
    }, [limit])


    const filteredCoins = coins.filter((coin) => {

        return (
            coin.name.toLowerCase().includes(filter.toLowerCase())
            || coin.symbol.toLowerCase().includes(filter.toLowerCase())
        )
    })


    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
           <div className="top-controls">
               <FilterInput filter={filter} onFilterChange={setFilter} />
               <LimitSelector limit={limit} onLimitChange={setLimit} />
               <SortBy sortBy={sortBy} onSortChange={setSortBy} />
           </div>


            {!loading && !error && (
                <main className="grid">
                    {
                        filteredCoins.length > 0 ? filteredCoins.map((coin) => (
                            <CoinCard key={coin.id} coin={coin} />
                        )) :  (<p>No Matching Coin</p>)
                    }
                </main>
            )}
        </div>
    )
}
export default App
