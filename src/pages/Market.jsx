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
    <div className="container mx-auto py-8">
      <div>
        <h2>Market</h2>
        <p>Powered by coingecko</p>
      </div>
      <Table coins={data} />
    </div>
  );
}

export default Market;
