// components
import Layout from "./components/Layout";
import { LoadingSpinner } from "./components/LoadingSpinner";
import Table from "./components/Table";
import { SuccessAlert } from "./components/SuccessAlert";
import { ErrorAlert } from "./components/ErrorAlert";



// styles
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <ErrorAlert message="Failed loading the data" />
        {/* <LoadingSpinner /> */}
        <SuccessAlert message="Successfully retrieved the data"/>
        {/* <Table/> */}
      </Layout>
    </div>
  );
}

export default App;
