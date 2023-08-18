import React from "react";
import {
  CommentIcon,
  DashboardIcon,
  DiscountIcon,
  OrderIcon,
  ProductIcon,
  UserIcon,
} from "../assets/Svg";

const SideBarLayout = React.lazy(
  () => import("../layouts/sidebar/SideBarLayout")
);
const Dashboard = React.lazy(() => import("../pages/dashboard/Dashboard"));
const Comments = React.lazy(() => import("../pages/comments/Comments"));
const Discount = React.lazy(() => import("../pages/discount/Discount"));
const Order = React.lazy(() => import("../pages/order/Order"));
const Product = React.lazy(() => import("../pages/products/Products"));
const Users = React.lazy(() => import("../pages/users/Users"));

const Routes = [
  {
    path: "/*",
    component: SideBarLayout,
    child: [
      {
        path: "/dashboard",
        component: Dashboard,
        name: "Dashboard",
        private: true,
        ShowInNav: true,
        icon: DashboardIcon,
      },
      {
        path: "/products",
        component: Product,
        name: "Product",
        private: true,
        ShowInNav: true,
        icon: ProductIcon,
      },
      {
        path: "/order",
        component: Order,
        name: "Order",
        private: true,
        ShowInNav: true,
        icon: OrderIcon,
      },
      {
        path: "/comments",
        component: Comments,
        name: "Comments",
        private: true,
        ShowInNav: true,
        icon: CommentIcon,
      },
      {
        path: "/discount",
        component: Discount,
        name: "Discount",
        private: true,
        ShowInNav: true,
        icon: DiscountIcon,
      },

      {
        path: "/users",
        component: Users,
        name: "Users",
        private: true,
        ShowInNav: true,
        icon: UserIcon,
      },
    ],
  },
];

export { Routes };
