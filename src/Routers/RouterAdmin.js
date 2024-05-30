import Banner from "../pages/backend/Banner";
import Brand from "../pages/backend/Brand";
import Category from "../pages/backend/Category";
import Contact from "../pages/backend/Contact";
import Menu from "../pages/backend/Menu";
import Order from "../pages/backend/Order";
import OrderDetail from "../pages/backend/OrderDetail";
import Post from "../pages/backend/Post";
import Product from "../pages/backend/Product";
import Topic from "../pages/backend/Topic";
import User from "../pages/backend/User";

const RouterAdmin = [
  {
    path: "san-pham",
    element: <Product />,
  },
  {
    path: "danh-muc-san-pham",
    element: <Category />,
  },
  {
    path: "chu-de",
    element: < Topic/>,
  },
  {
    path: "nguoi-dung",
    element: < User/>,
  },
  {
    path: "thuong-hieu",
    element: < Brand/>,
  },
  {
    path: "menu",
    element: < Menu/>,
  },
  {
    path: "lien-he",
    element: < Contact/>,
  },
  {
    path: "banner",
    element: < Banner/>,
  },
  {
    path: "dat-hang",
    element: < Order/>,
  },
  {
    path: "bai-viet",
    element: < Post/>,
  },
  {
    path: "chi-tiet-dat-hang",
    element: < OrderDetail/>,
  },
];
export default RouterAdmin;
