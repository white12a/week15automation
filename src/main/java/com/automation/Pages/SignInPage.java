package com.automation.Pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.Random;

public class SignInPage extends Utility {
    private static final Logger log= LogManager.getLogger(SignInPage.class.getName());
    public SignInPage(){
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(css = ".page-heading")
    WebElement authenticationText;

    @CacheLookup
    @FindBy(xpath = "//input[@id='email']")
    WebElement emailAddress;

    @CacheLookup
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement password;

    @CacheLookup
    @FindBy(xpath = "//button[@id='SubmitLogin']")
    WebElement signInButton;

    @CacheLookup
    @FindBy(xpath = "//div[@class='alert alert-danger']//ol")
    WebElement errorMessage;

    @CacheLookup
    @FindBy(xpath = "//header/div[2]/div[1]/div[1]/nav[1]/div[2]/a[1]")
    WebElement signOut;

    @CacheLookup
    @FindBy(xpath = "//a[@title='Log in to your customer account']")
    WebElement signInLink;

    @CacheLookup
    @FindBy(xpath = "//input[@id='email_create']")
    WebElement createAccountEmailAddress;

    @CacheLookup
    @FindBy(xpath = "(//span[normalize-space()='Create an account'])[1]")
    WebElement createAnAccountButton;

    public void verifyAuthenticationText(String expectedMessage){
        waitForElementWithFluentWait(By.cssSelector(".page-heading"),10,5);
        log.info("verify authentication message : "+authenticationText.getText());
        verifyElements(authenticationText,expectedMessage,"Verify authentication message");
    }
    public void enterUserNameInTheUserNameField(String username){
        sendTextToElement(emailAddress,username);
        log.info("Enter username : "+ emailAddress.toString());
    }
    public void enterPasswordInThePasswordField(String password1){
    sendTextToElement(password,password1);
    log.info("Enter password : "+ password.toString());
    }
    public void clickOnSignInButton(){
        log.info("Click on Sign In Button : "+signInButton.getText());
        clickOnElement(signInButton);
    }
    public void verifyErrorMessage(String message1){
        verifyElements(errorMessage,message1,"Verify Error Message");
        log.info("Verify Error Message : "+errorMessage.getText());
    }
    public void clickOnSignOutButton(){
        waitForElementWithFluentWait(By.xpath("//a[@title='Log me out']"),10,5);
        log.info("Click on sign out button : "+signOut.getText());
        clickOnElement(signOut);
    }
    public void verifySignInLinkIsDisplayed(String signIn){
        log.info("verify SignIn Link : "+ signInLink.getText());
        verifyElements(signInLink,signIn,"Verify SignIn Link");
    }
    public void verifySignOutLinkIsDisplayed(String message){
       verifyElements(signOut,message,"verify signOut link is displayed");
       log.info("Sign out link is displayed : "+ signOut.getText());
    }
    public void enterEmailAddress(String email){
        Random randomGenerator = new Random();
        int randomInt = randomGenerator.nextInt(1000);
        sendTextToElement(createAccountEmailAddress,"user" + randomInt + "@gmail.com");
        log.info("Enter email address : "+createAccountEmailAddress.toString());
    }
    public void clickOnCreateAccountButton(){
        log.info("click on create account button : "+createAnAccountButton.getText());
        clickOnElement(createAnAccountButton);
    }

}
