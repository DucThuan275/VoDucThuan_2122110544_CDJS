import About from "../Component/About";
import Contact from "../pages/frontend/Contact";
import Home from "../pages/frontend/Home";
import ProductBrand from "../pages/frontend/ProductBrand";
import ProductCategories from "../pages/frontend/ProductCategories";
import ProductDetail from "../pages/frontend/ProductDetail";
import Products from "../pages/frontend/Products";

const RouterSite = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "lien-he",
    element: <Contact />,
  },
  {
    path: "san-pham",
    element: <Products />,
  },
  {
    path: "danh-muc/:slug",
    element: <ProductCategories />,
  },
  {
    path: "thuong-hieu/:slug",
    element: <ProductBrand />,
  },
  {
    path: "san-pham/:slug",
    element: <ProductDetail />,
  },
  {
    path: "gioi-thieu",
    element: <About />,
  },
];
export default RouterSite;
