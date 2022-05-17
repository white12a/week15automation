package com.automation.Pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log= LogManager.getLogger(HomePage.class.getName());
    public HomePage(){
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Sign in']")
    WebElement signInLink;

    @CacheLookup
    @FindBy(xpath = "(//a[@title='Women'])[1]")
    WebElement women;

    public void clickOnSignInLink(){
        log.info("click on signIn link : "+ signInLink.getText());
        clickOnElement(signInLink);
    }

    public void selectWomenTab()  {
        clickOnElement(women);
        log.info("clicking on women tab : " + women.toString());
    }

}
