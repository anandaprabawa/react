import { QueryClientProvider } from "react-query";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { queryClient } from "./utils/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
}

export default App;
