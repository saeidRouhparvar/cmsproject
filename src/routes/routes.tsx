import React from "react";

const Dashboard = React.lazy(() => import("../pages/dashboard/Dashboard"));
const Comments = React.lazy(() => import("../pages/comments/Comments"));
const Discount = React.lazy(() => import("../pages/discount/Discount"));
const Order = React.lazy(() => import("../pages/order/Order"));
const Product = React.lazy(() => import("../pages/products/Products"));
const Users = React.lazy(() => import("../pages/users/Users"));

const Routes = [
  {
    path: "/dashboard",
    component: Dashboard,
    name:'ص',
    private: true,
    ShowInNav: true,
  },
  {
    path: "/comments",
    component: Comments,
    name:'ص',
    private: true,
    ShowInNav: true,
  },
  {
    path: "/discount",
    component: Discount,
    name:'ص',
    private: true,
    ShowInNav: true,
  },
  {
    path: "/order",
    component: Order,
    name:'ص',
    private: true,
    ShowInNav: true,
  },
  {
    path: "/users",
    component: Product,
    name:'ص',
    private: true,
    ShowInNav: true,
  },
  {
    path: "/products",
    component: Users,
    name:'w',
    private: true,
    ShowInNav: true,
  },
];

export {Routes};
