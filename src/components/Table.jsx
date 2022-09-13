const coin = {
  "id": "bitcoin",
  "symbol": "btc",
  "name": "Bitcoin",
  "image":
    "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  "current_price": 22388,
  "market_cap": 427930253873,
  "market_cap_rank": 1,
  "fully_diluted_valuation": 469291923252,
  "total_volume": 44154688847,
  "high_24h": 22448,
  "low_24h": 21578,
  "price_change_24h": 766.39,
  "price_change_percentage_24h": 3.54464,
  "market_cap_change_24h": 13428296934,
  "market_cap_change_percentage_24h": 3.23962,
  "circulating_supply": 19149137,
  "total_supply": 21000000,
  "max_supply": 21000000,
  "ath": 69045,
  "ath_change_percentage": -67.69257,
  "ath_date": "2021-11-10T14:24:11.849Z",
  "atl": 67.81,
  "atl_change_percentage": 32796.2049,
  "atl_date": "2013-07-06T00:00:00.000Z",
  "roi": null,
  "last_updated": "2022-09-12T23:18:59.006Z",
};

function Table({ coins }) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="">Rank</th>
            <th className="">Name</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr>
              <td>{coin.market_cap_rank}</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={coin.image}
                        alt="icon"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="font-bold">{coin.name}</div>
                    <div className="text-sm opacity-50">{coin.symbol}</div>
                  </div>
                </div>
              </td>
              <td>
                <p>${coin.current_price}</p>
              </td>
              <td>{coin.market_cap}</td>
              <th>{coin.market_cap_change_percentage_24h}%</th>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th className="text-center"></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Table;
