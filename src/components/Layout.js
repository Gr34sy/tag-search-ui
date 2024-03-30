import "../styles/components/layout.css";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

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
