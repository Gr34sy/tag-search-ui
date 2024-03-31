import "../../styles/components/layout.css";

import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

export default function Layout(props) {
  return (
    <div className="App">
      <Navbar />
      <main className="layout">
        <div className="layout__wrapper">{props.children}</div>
      </main>
      <Footer />
    </div>
  );
}
