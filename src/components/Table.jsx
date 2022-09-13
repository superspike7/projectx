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
