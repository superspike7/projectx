import { QueryClient, QueryClientProvider } from "react-query";
import Market from "./pages/Market";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Market />
    </QueryClientProvider>
  );
}

export default App;
