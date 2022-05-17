package com.automation.Pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class CreateAccountPage extends Utility {
    private static final Logger log = LogManager.getLogger(CreateAccountPage.class.getName());

    public CreateAccountPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@class='radio']")
    List<WebElement> selectTitle;

    @CacheLookup
    // @FindBy(xpath = "//input[@id='id_gender1']")
    @FindBy(css = "#uniform-id_gender1")
    WebElement mr;

    @CacheLookup
    @FindBy(xpath = "//input[@id='id_gender2']")
    WebElement mrs;

    @CacheLookup
    @FindBy(id = "customer_firstname")
    WebElement firstName;

    @CacheLookup
    @FindBy(id = "customer_lastname")
    WebElement lastName;

    @CacheLookup
    @FindBy(id = "passwd")
    WebElement password;
    @CacheLookup
    @FindBy(id = "firstname")
    WebElement addressFirstName;

    @CacheLookup
    @FindBy(id = "lastname")
    WebElement addressLastName;

    @CacheLookup
    @FindBy(id = "address1")
    WebElement addressLine1;

    @CacheLookup
    @FindBy(id = "city")
    WebElement addressCity;

    @CacheLookup
    @FindBy(id = "id_state")
    WebElement addressState;

    @CacheLookup
    @FindBy(id = "postcode")
    WebElement addressPostcode;

    @CacheLookup
    @FindBy(id = "id_country")
    WebElement addressCountry;

    @CacheLookup
    @FindBy(id = "phone_mobile")
    WebElement mobilePhone;

    @CacheLookup
    @FindBy(xpath = "//input[@name='alias']")
    WebElement alias;

    @CacheLookup
    @FindBy(id = "submitAccount")
    WebElement registerButton;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'My account')]")
    WebElement myAccountText;

    public void selectTitle(String title1) {
        if (title1 == "Mr.") {
            clickOnElement(mr);
            log.info("selecting title : " + selectTitle.toString());
        } else if (title1 == "Mrs.") {
            clickOnElement(mrs);
            log.info("selecting title : " + selectTitle.toString());
        }
        /*for(WebElement title:selectTitle){
            if(title.getText().equalsIgnoreCase(title1)){
                System.out.println(title);
                waitForElementWithFluentWait(By.xpath("//input[@id='id_gender1']"),10,5);
                clickOnElement(mr);
            }else if(title.getText().equalsIgnoreCase(title1)){
                System.out.println(title);
                waitForElementWithFluentWait(By.xpath("//input[@id='id_gender2']"),10,5);
                clickOnElement(mrs);
            }*/
    }

    public void enterFirstName(String fName) {
        sendTextToElement(firstName, fName);
        log.info("enter first name : " + firstName.toString());
    }

    public void enterLastName(String lName) {
        sendTextToElement(lastName, lName);
        log.info("Enter last name : " + lastName.toString());
    }

    public void enterPassword(String pass) {
        sendTextToElement(password, pass);
        log.info("Enter password : " + password.toString());
    }

    public void enterAddressName(String fName) {
        sendTextToElement(addressFirstName, fName);
        log.info("Enter Firstname : " + addressFirstName.toString());
    }

    public void enterAddressLastName(String lName) {
        sendTextToElement(addressLastName, lName);
        log.info("Enter address last name :" + addressLastName.toString());
    }

    public void enterAddress(String add) {
        sendTextToElement(addressLine1, add);
        log.info("Enter address : " + addressLine1.toString());
    }

    public void enterCity(String city) {
        sendTextToElement(addressCity, city);
        log.info("Enter city : " + addressCity.toString());
    }

    public void selectStateFromDropDown(String state) {
        selectByVisibleTextFromDropDown(addressState, state);
        log.info("Select state : " + addressState.toString());
    }

    public void enterPostalCode(String pCode) {
        sendTextToElement(addressPostcode, pCode);
        log.info("Select postal code : " + addressPostcode.toString());
    }

    public void selectCountryFromDropDown(String country) {
        selectByVisibleTextFromDropDown(addressCountry, country);
        log.info("select country : " + addressCountry.getText());
    }

    public void enterMobileNumber(String num) {
        sendTextToElement(mobilePhone, num);
        log.info("Enter mobile number : " + mobilePhone.toString());
    }

    public void enterFutureReferenceField(String add2) {
        sendTextToElement(alias, add2);
        log.info("Enter alias : "+ alias.getText());
    }
    public void clickOnRegisterButton(){
        clickOnElement(registerButton);
        log.info("click on register button : "+registerButton.toString());
    }
    public void verifyRegistrationText(String mess){
        verifyElements(myAccountText,mess,"Verify registration text");
        log.info("Verify registration text : "+myAccountText.toString());
    }
}











