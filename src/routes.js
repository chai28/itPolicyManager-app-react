/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import DashboardContent from "views/dashboardAdminSubPage/DashboardContent.jsx";
import Policies from "views/dashboardAdminSubPage/Policies.jsx";
import Subscribers from "views/dashboardAdminSubPage/Subscribers.jsx";
import EditProfile from "views/commonPage/EditProfile.jsx";

var routes = [{
    path: "/dashboardcontent",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: DashboardContent,
    layout: "/dashboard"
  },
  {
    pro: true,
    path: "/policies",
    name: "Policies",
    icon: "nc-icon nc-paper",
    component: Policies,
    layout: "/dashboard"
  },
  {
    pro: true,
    path: "/subscribers",
    name: "Subscribers",
    icon: "nc-icon nc-single-02",
    component: Subscribers,
    layout: "/dashboard"
  },
  {
    pro: false,
    path: "/edit-profile",
    name: "EditProfile",
    icon: "nc-icon nc-badge",
    component: EditProfile,
    layout: "/dashboard"
  }
];
export default routes;