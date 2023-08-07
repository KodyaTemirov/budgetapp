import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
