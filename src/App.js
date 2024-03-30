// styles
import "./styles/App.css";

// components
import Layout from "./components/Layout";
import { LoadingSpinner } from "./components/LoadingSpinner";
import Table from "./components/Table";
import { SuccessAlert } from "./components/SuccessAlert";
import { ErrorAlert } from "./components/ErrorAlert";

// context
import { DataStatusProvider } from "./utils/dataStatus-context";

function App() {
  return (
    <DataStatusProvider>
      <Layout>
        <ErrorAlert message="Failed loading the data" />
        <SuccessAlert message="Successfully retrieved the data" />
        {/* <Table /> */}
        {/* <LoadingSpinner /> */}
      </Layout>
    </DataStatusProvider>
  );
}

export default App;
