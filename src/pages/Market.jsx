import { useState } from "react";
import { useQuery } from "react-query";
import Table from "../components/Table";

const URL = "https://api.coingecko.com/api/v3/coins/markets";

function Market() {
  const [page, setPage] = useState(1);
  const params = "?vs_currency=usd&per_page=50&page=";

  const fetchCoins = (page = 1) =>
    fetch(URL + params + page).then((res) => res.json());

  const { isLoading, error, data, isFetching, isPreviousData } = useQuery(
    ["coinsMarket", page],
    () => fetchCoins(page),
    { keepPreviousData: true },
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="container mx-auto py-8 ">
      <div className="flex justify-between py-2">
        <h2 className="text-2xl">Coins Market</h2>
        <p>
          Powered by{" "}
          <a
            className="text-blue-500 hover:underline"
            href="https://www.coingecko.com/en/api"
          >
            Coin Gecko API
          </a>
        </p>
      </div>
      <Table coins={data} page={page} />
      <div className="btn-group">
        <button
          className="btn"
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 0}
        >
          «
        </button>
        <button className="btn">Page {page}</button>
        <button
          className="btn"
          onClick={() => {
            setPage((old) => old + 1);
          }}
        >
          »
        </button>
      </div>
      {isFetching ? <span>Loading...</span> : null}
      {" "}
    </div>
  );
}

export default Market;
