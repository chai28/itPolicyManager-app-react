
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
import DisplayPolicy from "views/commonPage/DisplayPolicy.jsx";
import printPreview from "views/commonPage/printPreview.jsx";
import takeSurvey from "views/dashboardUserSubPage/takeSurvey.jsx";
  const userType = localStorage.getItem('session_type');
  const userLogo = localStorage.getItem('session_logo');
  console.log("userLogo" + userLogo);

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
    path: "/edit-profile/" + localStorage.getItem("session_id"),
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
    logo: userLogo,
    sidebar: true,
    layout: "/dashboard"
  },
  {
    path: "/edit-profile/" + localStorage.getItem("session_id"),
    name: "Edit Profile",
    name2:"Edit Profile",
    icon: "nc-icon nc-badge",
    component: EditProfile,
    logo: userLogo,
    sidebar: true,
    layout: "/dashboard"
  },
  {
    path: "/subscribed-policies",
    name: "Subscribed Policies",
    name2:"Subscribed Policies",
    icon: "nc-icon nc-book-bookmark",
    component: SubscribedPolicy,
    logo: userLogo,
    sidebar: true,
    layout: "/dashboard"
  },
  {
    path: "/keyContactPerson",
    name: "Key Contact Person",
    name2:"Key Contact Person",
    icon: "nc-icon nc-simple-add",
    component: keyContactPerson,
    logo: userLogo,
    sidebar: true,
    layout: "/dashboard"
  },
  {
    path: "/subscribed-policy-action",
    name2:"Policy Details",
    component: ActionPage,
    logo: userLogo,
    sidebar: false,
    layout: "/dashboard"
  },
  {
    path: "/subscribed-policy-action-start-workflow",
    name2:"Review Details",
    component: ReviewPage,
    logo: userLogo,
    sidebar: false,
    layout: "/dashboard"
  },
  {
    path: "/AddkeyContacts",
    name2:"Add Key Contacts",
    component:AddKeyContacts,
    logo: userLogo,
    sidebar: false,
    layout: "/dashboard"
  },
  {
    path: "/DisplayPolicy",
    name2:"Policy Informtion",
    component:DisplayPolicy,
    logo: userLogo,
    sidebar: false,
    layout: "/dashboard"
  },
  {
    path: "/printPreview",
    component:printPreview,
    logo: userLogo,
    sidebar: false,
    layout: "/dashboard"
  },
  {
    path: "/take-survey",
    name2:"take survey",
    component:takeSurvey,
    logo: userLogo,
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