package com.testIn.stepdefs;

import com.testIn.pages.LoginPage;
import com.testIn.utilities.ConfigurationReader;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class LoginStepDefs {

    LoginPage loginPage = new LoginPage();

    @Given("User navigate to homepage")
    public void userNavigateToHomepage() {
        Driver.get().get(ConfigurationReader.get("url"));
    }

    @When("Enter invalid credentials")
    public void enterInvalidCredentials() {
        loginPage.username.sendKeys("aaa");
        loginPage.password.sendKeys("bbb");
        try {
            Thread.sleep(3000);
        }catch (InterruptedException interruptedException){
            interruptedException.printStackTrace();
        }
    }


    @Then("Click the login button")
    public void clickTheLoginButton() {
        loginPage.loginButton.click();
    }

    @Then("Verify that user could not login")
    public void verifyThatUserCouldNotLogin() {
        String expectedResult = "Userid or Password did Not Match !!";
        String actualResult = loginPage.errorMessage.getText();
        Assert.assertEquals(expectedResult,actualResult);
    }


    @When("Enter invalid credentials - second one")
    public void enterInvalidCredentialsSecondOne() {
        loginPage.username.sendKeys("ccc");
        loginPage.password.sendKeys("ddd");
        try {
            Thread.sleep(3000);
        }catch (InterruptedException interruptedException){
            interruptedException.printStackTrace();
        }
    }

    @Then("Verify that user could not login - second one")
    public void verifyThatUserCouldNotLoginSecondOne() {
        String expectedUrl = "http://www.testyou.in/Login.aspxA";
        String actualUrl = Driver.get().getCurrentUrl();
        Assert.assertEquals(expectedUrl,actualUrl);

    }

    @When("Enter invalid username as {string} and password as {string}")
    public void enterInvalidUsernameAsAndPasswordAs(String arg0, String arg1) {
        loginPage.username.sendKeys(arg0);
        loginPage.password.sendKeys(arg1);
        try {
            Thread.sleep(3000);
        }catch (InterruptedException interruptedException){
            interruptedException.printStackTrace();
        }
    }
}
