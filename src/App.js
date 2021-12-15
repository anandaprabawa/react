import { QueryClientProvider } from "react-query";
import "./App.css";
import { Table } from "./components/Table/Table";
import { queryClient } from "./utils/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Table></Table>
    </QueryClientProvider>
  );
}

export default App;
