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
import KeyPerson from "views/dashboardUserSubPage/AddKeyContact.jsx";
import Questions from "views/dashboardAdminSubPage/Questions.jsx";

localStorage.getItem('session_id')

var routesAdmin = [{
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
  pro: true,
  path: "/edit-profile",
  name: "Edit Profile",
  icon: "nc-icon nc-badge",
  component: EditProfile,
  layout: "/dashboard"
},
{
  pro: true,
  path: "/AddKeyContact",
  name: "Add Key Contact",
  icon: "nc-icon nc-simple-add",
  component: KeyPerson,
  layout: "/dashboard"
},
{
  pro: true,
  path: "/edit-questions",
  name: "Questions",
  icon: "nc-icon nc-paper",
  component: Questions,
  layout: "/dashboard"
},
];

var routesClient = [{
    path: "/dashboardcontent",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: DashboardContent,
    layout: "/dashboard"
  },
  {
    pro: true,
    path: "/edit-profile",
    name: "Edit Profile",
    icon: "nc-icon nc-badge",
    component: EditProfile,
    layout: "/dashboard"
  },
  {
    pro: true,
    path: "/AddKeyContact",
    name: "Add Key Contact",
    icon: "nc-icon nc-simple-add",
    component: KeyPerson,
    layout: "/dashboard"
  },
];

var routes = routesClient;
export default routes;