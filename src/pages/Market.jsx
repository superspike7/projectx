import { useQuery } from "react-query";
import Table from "../components/Table";

const URL = "https://api.coingecko.com/api/v3/coins/markets";

function Market() {
  const parameter = "?vs_currency=usd";
  const { isLoading, error, data } = useQuery(
    "repoData",
    () =>
      fetch(URL + parameter).then(
        (res) => res.json(),
      ),
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="container mx-auto py-8 ">
      <div className="flex justify-between py-2">
        <h2 className="text-2xl">Coins Market</h2>
        <p>Powered by <a class="text-blue-500 hover:underline" href="https://www.coingecko.com/en/api">Coin Gecko API</a></p>
      </div>
      <Table coins={data} />
    </div>
  );
}

export default Market;
