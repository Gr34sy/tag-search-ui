import '../styles/components/layout.css';

import { Footer } from './Footer';
import { Navbar } from "./Navbar";

export default function Layout(props) {
  return (
    <div className="App">
      <Navbar />
      <main className="app__layout">{props.children}</main>
      <Footer />
    </div>
  );
}
