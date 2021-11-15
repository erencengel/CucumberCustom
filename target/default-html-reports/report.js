$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User should not be able to login with unvalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigate to homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.testIn.stepdefs.LoginStepDefs.userNavigateToHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter invalid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "com.testIn.stepdefs.LoginStepDefs.enterInvalidCredentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.testIn.stepdefs.LoginStepDefs.clickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that user could not login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.testIn.stepdefs.LoginStepDefs.verifyThatUserCouldNotLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/login2.feature");
formatter.feature({
  "name": "Login Functionality-2",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User should not be able to login with unvalid credentialssss",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigate to homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.testIn.stepdefs.LoginStepDefs.userNavigateToHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter invalid credentialss",
  "keyword": "When "
});
formatter.match({
  "location": "com.testIn.stepdefs.LoginStepDefs.enterInvalidCredentialss()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "com.testIn.stepdefs.LoginStepDefs.clickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that user could not login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.testIn.stepdefs.LoginStepDefs.verifyThatUserCouldNotLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});