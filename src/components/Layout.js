import '../styles/components/layout.css';

import { Navbar } from "./Navbar";

export default function Layout(props) {
  return (
    <div className="App">
      <Navbar />
      <main className="app__layout">{props.children}</main>
    </div>
  );
}
