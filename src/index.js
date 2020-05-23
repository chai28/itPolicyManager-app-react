
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import {StripeProvider} from 'react-stripe-elements';
// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";

import "./assets/scss/paper-dashboard.scss?v=1.1.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// pages
import LandingPage from "views/LandingPage.js";
import Introduction from "views/commonPage/introduction.jsx";
import SignIn from "views/landingSubPage/SignIn.js";
import Modal from "views/landingSubPage/RegModal.js";
import DisplayReviewPolicy from "views/commonPage/DisplayReviewPolicy.jsx";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route 
        path="/landing-page" 
        render={props => <LandingPage  {...props} />} />
      {/* <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      /> */}
      <Route
        path="/signin-page"
        render={props => <SignIn {...props} />}
      />
      <Route
        path="/register-modal"
        render={props => <Modal {...props} />}
      />
       <Route
        path="/introduction"
        render={props => <Introduction {...props} />}
      />

      {/* <Route
        path="/contactus-page"
        render={props => <ContactUsPage {...props} />}
      />
      <Route
        path="/survey-page"
        render={props => <SurveyPage {...props} />}
      />
      <Route
        path="/dashboard"
        render={props => <Dashboard {...props} />}
      />
      <Route
        path="/subscription-payment"
        render={props => (
        <StripeProvider apiKey="pk_test_8Y0fO0o3fsqMsbciyZKt1YTI" >
          <PaySubscription {...props} />
        </StripeProvider>
        )}
      /> */}
      <Route
        path="/review-policy/:companyId/:policyName/:userId"
        render={props => <DisplayReviewPolicy key = {props.match.params.userId} {...props} />}
      />
      <Redirect to="/landing-page" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
