// components
import Layout from "./components/Layout";
import { LoadingSpinner } from "./components/LoadingSpinner";
import Table from "./components/Table";

// styles
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Table/>
      </Layout>
    </div>
  );
}

export default App;
