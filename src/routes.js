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
import SurveyResult from "views/dashboardUserSubPage/SurveyResult.jsx";
import SubscribedPolicy from "views/dashboardUserSubPage/SubscribedPolicies.jsx";
import keyContactPerson from "views/dashboardUserSubPage/keyContactPerson.jsx";
import AddKeyContacts from "views/dashboardUserSubPage/AddKeyContact.jsx";
  const userType = localStorage.getItem('session_type')
  console.log("userType" + userType);

var routesAdmin = [{
    path: "/dashboardcontent",
    pro: "true",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: DashboardContent,
    layout: "/dashboard"
  },
  {
    path: "/policies",
    name: "Policies",
    icon: "nc-icon nc-paper",
    component: Policies,
    layout: "/dashboard"
  },
  {
    path: "/subscribers",
    name: "Subscribers",
    icon: "nc-icon nc-single-02",
    component: Subscribers,
    layout: "/dashboard"
  },
  {
    path: "/edit-profile",
    name: "Edit Profile",
    icon: "nc-icon nc-badge",
    component: EditProfile,
    layout: "/dashboard"
  },
  {
    path: "/AddUser",
    name: "Add New User",
    icon: "nc-icon nc-simple-add",
    component: KeyPerson,//needed to be changed for adding user
    layout: "/dashboard"
  },
  {
    path: "/edit-questions",
    name: "Questions",
    icon: "nc-icon nc-paper",
    component: Questions,
    layout: "/dashboard"
  },
];

var routesClient = [
  {
    path: "/survey-result",
    name: "Survey Result",
    icon: "nc-icon nc-alert-circle-i",
    component: SurveyResult,
    layout: "/dashboard"
  },
  {
    path: "/edit-profile",
    name: "Edit Profile",
    icon: "nc-icon nc-badge",
    component: EditProfile,
    layout: "/dashboard"
  },
  {
    path: "/subscribed-policies",
    name: "Subscribed Policies",
    icon: "nc-icon nc-book-bookmark",
    component: SubscribedPolicy,
    layout: "/dashboard"
  },
  {
    path: "/keyContactPerson",
    name: "Key Contact Person",
    icon: "nc-icon nc-simple-add",
    component: keyContactPerson,
    layout: "/dashboard"
  },
  {
    path: "/AddkeyContacts",
    component:AddKeyContacts,//needed to be changed for adding user
    layout: "/dashboard"
  },
];


var routes= []

if(userType === "admin"){
  routes = routesAdmin;
}else{
  routes = routesClient;
}
 
export default routes;