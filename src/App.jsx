import "./App.css";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <main className="main-content  bg-gray-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
