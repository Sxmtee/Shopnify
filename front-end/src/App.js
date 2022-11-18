import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";

import Spinner from "./components/spinner";

const Layout = lazy(() => import("./pages/layout"));
const Home = lazy(() => import("./pages/home"));
const Shop = lazy(() => import("./pages/shop"));
const Cart = lazy(() => import("./pages/cart"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
