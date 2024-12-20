import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import RootLayout from "./Componenets/RootLayout/RootLayout"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";
import ProductComparison from "./Pages/ProductComparison";
import WishList from "./Pages/WishList";

function App() {

  let router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayout />} >
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shop/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkOut" element={<CheckOut />} />
      <Route path="/comparison" element={<ProductComparison />} />
      <Route path="/wishList" element={<WishList/>} />
    </Route>
  ))


  return (
    <>
      <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App
