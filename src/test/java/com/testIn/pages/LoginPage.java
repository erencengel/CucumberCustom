package com.testIn.pages;

import com.testIn.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage(){
        PageFactory.initElements(Driver.get(),this);
    }

    @FindBy(css = "#ctl00_CPHContainer_txtUserLogin")
    public WebElement username;

    @FindBy(css = "#ctl00_CPHContainer_txtPassword")
    public WebElement password;

    @FindBy(css = "#ctl00_CPHContainer_btnLoginn")
    public WebElement loginButton;

    @FindBy(css = "#ctl00_CPHContainer_lblOutput")
    public WebElement errorMessage;

}
