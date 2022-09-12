import { useQuery } from "react-query";

const URL = "https://api.coingecko.com/api/v3/coins/markets";

function Market() {
  const parameter = "?vs_currency=usd"
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
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Market;
