import React from 'react'

const CoinCard = ({coin}) => {
    return (
        <div className="text-slate-50 coin-card" key={coin.id}>
            <div className="coin-header">
                <img src={coin.image} alt={coin.name} className="coin-image" />
                <div >
                    <h2>{coin.name}</h2>
                    <p className="symbol">{coin.symbol.toUpperCase()}</p>
                </div>

            </div>
            <p>Price: ${coin.current_price.toLocaleString()}</p>
            <p className={coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}>{coin.price_change_percentage_24h.toFixed(2)}%</p>
            <p>Market Capital: ${coin.market_cap.toLocaleString()}</p>
        </div>
    )
}
export default CoinCard
