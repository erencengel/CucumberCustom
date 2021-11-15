$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User should not be able to login with unvalid credentials-2",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
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
  "name": "Enter invalid credentials - second one",
  "keyword": "When "
});
formatter.match({
  "location": "com.testIn.stepdefs.LoginStepDefs.enterInvalidCredentialsSecondOne()"
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
  "name": "Verify that user could not login - second one",
  "keyword": "Then "
});
formatter.match({
  "location": "com.testIn.stepdefs.LoginStepDefs.verifyThatUserCouldNotLoginSecondOne()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...estyou.in/Login.aspx[A]\u003e but was:\u003c...estyou.in/Login.aspx[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.testIn.stepdefs.LoginStepDefs.verifyThatUserCouldNotLoginSecondOne(LoginStepDefs.java:60)\r\n\tat ✽.Verify that user could not login - second one(file:///C:/Users/Eren/IdeaProjects/CucumberCustom/src/test/resources/features/login.feature:13)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});