package com.automation.Pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ProductPage extends Utility {
    private static final Logger log = LogManager.getLogger(ProductPage.class.getName());

    public ProductPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "quantity_wanted")
    WebElement quantity;

    @CacheLookup
    @FindBy(xpath = "//select[@id='group_1']")
    WebElement sizeDropDown;

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Add to cart']")
    WebElement addToCartButton;

    @FindBy(xpath = "//div[@class='clearfix']/div[1]/h2")
    WebElement popUpMessageTextLink;

    @FindBy(xpath = "//span[@title='Close window']")
    WebElement popUpCloseButtonLink;

    public void SelectQuantity(String qty) {
        clearTextFromField(By.id("quantity_wanted"));
        sendTextToElement(quantity, qty);
        log.info("Select quantity :" + qty);
    }

    public void selectSize(String size) {
        selectByVisibleTextFromDropDown(sizeDropDown, size);
        log.info("select size : " + size);
    }

    public void selectColour(String col) {
        if (col == "White") {
            driver.findElement(By.id("color_8")).click();
            log.info("Select colour : " + col);
        } else if (col == "Orange") {
            driver.findElement(By.id("color_13")).click();
            log.info("Select colour : " + col);
        } else if (col == "Green") {
            driver.findElement(By.id("color_15")).click();
            log.info("Select colour : " + col);
        }else if(col=="Blue"){
            driver.findElement(By.id("color_14")).click();
            log.info("Select colour : "+col);
        }else{
            System.out.println("Please select a colour");
        }

    }
    public void clickOnAddToCartButton(){
        clickOnElement(addToCartButton);
        log.info("select Add to cart button :"+addToCartButton.toString());
    }
    public void verifyProductAddedSuccessfullyMessage(String mess){
        verifyElements(popUpMessageTextLink,mess,"verify product added successfully");
        log.info("product added successfully message : "+popUpMessageTextLink.toString());
    }
    public void closePopUpMessage(){
        clickOnElement(popUpCloseButtonLink);
        log.info("Closing the popup message : "+ popUpMessageTextLink.toString());
    }


}
