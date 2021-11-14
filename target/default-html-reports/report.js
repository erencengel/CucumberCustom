$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login2.feature");
formatter.feature({
  "name": "Login Functionality-2",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User should not be able to login with unvalid credentialsss",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip2"
    }
  ]
});
formatter.step({
  "name": "User navigate to homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter invalid username as \"\u003cusername\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click the login button",
  "keyword": "When "
});
formatter.step({
  "name": "Verify that user could not login",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "a",
        "a"
      ]
    },
    {
      "cells": [
        "b",
        "b"
      ]
    },
    {
      "cells": [
        "c",
        "c"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User should not be able to login with unvalid credentialsss",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip2"
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
  "name": "Enter invalid username as \"a\" and password as \"a\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.testIn.stepdefs.LoginStepDefs.enterInvalidUsernameAsAndPasswordAs(java.lang.String,java.lang.String)"
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
formatter.scenario({
  "name": "User should not be able to login with unvalid credentialsss",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip2"
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
  "name": "Enter invalid username as \"b\" and password as \"b\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.testIn.stepdefs.LoginStepDefs.enterInvalidUsernameAsAndPasswordAs(java.lang.String,java.lang.String)"
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
formatter.scenario({
  "name": "User should not be able to login with unvalid credentialsss",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip2"
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
  "name": "Enter invalid username as \"c\" and password as \"c\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.testIn.stepdefs.LoginStepDefs.enterInvalidUsernameAsAndPasswordAs(java.lang.String,java.lang.String)"
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