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
//common
import EditProfile from "views/commonPage/EditProfile.jsx";

//admin
import DashboardContent from "views/dashboardAdminSubPage/DashboardContent.jsx";
import Policies from "views/dashboardAdminSubPage/Policies.jsx";
import Subscribers from "views/dashboardAdminSubPage/Subscribers.jsx";
// import KeyPerson from "views/dashboardAdminSubPage/AddKeyContact.jsx";
import Questions from "views/dashboardAdminSubPage/Questions.jsx";

//client
import SurveyResult from "views/dashboardUserSubPage/SurveyResult.jsx";
import SubscribedPolicy from "views/dashboardUserSubPage/SubscribedPolicies.jsx";
import keyContactPerson from "views/dashboardUserSubPage/keyContactPerson.jsx";
import AddKeyContacts from "views/dashboardUserSubPage/AddKeyContact.jsx";
import ActionPage from "views/dashboardUserSubPage/policyActionViewPage.jsx";
import ReviewPage from "views/dashboardUserSubPage/reviewPage.jsx";
import DisplayPolicies from "views/commonPage/DisplayPolicies.jsx";
import DisplayPolicyTest from "views/commonPage/DisplayPolicyTest.jsx";
import printPreview from "views/commonPage/printPreview.jsx";
  const userType = localStorage.getItem('session_type')
  console.log("userType" + userType);

var routesAdmin = [{
    path: "/dashboardcontent",
    pro: "true",
    name: "Dashboard",
    name2:"Dashboard",
    icon: "nc-icon nc-bank",
    component: DashboardContent,
    sidebar: true,
    layout: "/dashboard"
  },
  {
    path: "/policies",
    name: "Policies",
    name2:"Policies",
    icon: "nc-icon nc-paper",
    component: Policies,
    sidebar: true,
    layout: "/dashboard"
  },
  {
    path: "/subscribers",
    name: "Subscribers",
    name2:"Subscribers",
    icon: "nc-icon nc-single-02",
    component: Subscribers,
    sidebar: true,
    layout: "/dashboard"
  },
  {
    path: "/edit-profile",
    name: "Edit Profile",
    name2:"Edit Profile",
    icon: "nc-icon nc-badge",
    component: EditProfile,
    sidebar: true,
    layout: "/dashboard"
  },
  // {
  //   path: "/AddUser",
  //   name: "Add New User",
  //   icon: "nc-icon nc-simple-add",
  //   component: KeyPerson,//needed to be changed for adding user
  //   sidebar: true,
  //   layout: "/dashboard"
  // },
  {
    path: "/edit-questions",
    name: "Questions",
    name2:"Questions",
    icon: "nc-icon nc-paper",
    component: Questions,
    sidebar: true,
    layout: "/dashboard"
  },
];

var routesClient = [
  {
    path: "/survey-result",
    name: "Survey Result",
    name2:"Survey Result",
    icon: "nc-icon nc-alert-circle-i",
    component: SurveyResult,
    sidebar: true,
    layout: "/dashboard"
  },
  {
    path: "/edit-profile",
    name: "Edit Profile",
    name2:"Edit Profile",
    icon: "nc-icon nc-badge",
    component: EditProfile,
    sidebar: true,
    layout: "/dashboard"
  },
  {
    path: "/subscribed-policies",
    name: "Subscribed Policies",
    name2:"Subscribed Policies",
    icon: "nc-icon nc-book-bookmark",
    component: SubscribedPolicy,
    sidebar: true,
    layout: "/dashboard"
  },
  {
    path: "/keyContactPerson",
    name: "Key Contact Person",
    name2:"Key Contact Person",
    icon: "nc-icon nc-simple-add",
    component: keyContactPerson,
    sidebar: true,
    layout: "/dashboard"
  },
  {
    path: "/subscribed-policy-action",
    name2:"Policy Details",
    component: ActionPage,
    sidebar: false,
    layout: "/dashboard"
  },
  {
    path: "/subscribed-policy-action-start-workflow",
    name2:"Review Details",
    component: ReviewPage,
    sidebar: false,
    layout: "/dashboard"
  },
  {
    path: "/AddkeyContacts",
    name2:"Add Key Contacts",
    component:AddKeyContacts,
    sidebar: false,
    layout: "/dashboard"
  },
  {
    path: "/DisplayPolicies",
    name2:"Policy Informtion",
    component:DisplayPolicies,
    sidebar: false,
    layout: "/dashboard"
  },
  {
    path: "/DisplayPolicyTest",
    component:DisplayPolicyTest,
    sidebar: false,
    layout: "/dashboard"
  },
  {
    path: "/printPreview",
    component:printPreview,
    sidebar: false,
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