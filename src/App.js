// styles
import "./styles/App.css";

// components
import Layout from "./components/Layout";
import { LoadingSpinner } from "./components/LoadingSpinner";
import Table from "./components/Table";
import { SuccessAlert } from "./components/SuccessAlert";
import { ErrorAlert } from "./components/ErrorAlert";

//hooks and utils
import { useState, useEffect } from "react";
import { urlBase, urlTags } from "./utils/apiVariables";

function App() {
  const [dataStatus, setDataStatus] = useState("loading");
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setDataStatus("loading");

    fetch(urlBase + urlTags)
      .then((res) => res.json())
      .then((data) => {
        setTableData(data.items);

        setDataStatus("success");

        setTimeout(() => {
          setDataStatus("loaded");
        }, 5 * 1000);

        console.log(data);
      })
      .catch((e) => {
        setDataStatus("error");
        console.error(e.message);
      });
  }, []);

  return (
    <Layout>
      {dataStatus === "loading" && <LoadingSpinner />}
      {dataStatus === "error" && (
        <ErrorAlert message="Failed loading the data" />
      )}
      {dataStatus === "success" && (
        <SuccessAlert message="Successfully retrieved the data" />
      )}
      {(dataStatus === "success" || dataStatus === "loaded") && <Table data={tableData} />}
    </Layout>
  );
}

export default App;
