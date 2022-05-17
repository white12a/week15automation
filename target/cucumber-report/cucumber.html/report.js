$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create account page",
  "description": "",
  "id": "create-account-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12382042700,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "verify user should create account successfully",
  "description": "",
  "id": "create-account-page;verify-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@sanity"
    },
    {
      "line": 2,
      "name": "@smoke"
    },
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I click on signIn link",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter emailAddress \"email\" in email field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click on create account button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on Title \"Mr.\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter firstName \"Miles\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter lastname \"lan\" in lastname field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter password \"354738\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter firstName \"Miles\" in address field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter lastName \"lan\" in address field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter address \"11 king street\" in address filed",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter city \"London\" in city field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select State \"Florida\" from state dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter postalCode \"23456\" in postcode field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter Mobile \"9898989898\" in mobile field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"11 king street\" in future reference field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on register field",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify My account message \"MY ACCOUNT\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 12622071600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 22
    }
  ],
  "location": "CreateAccountSteps.iEnterEmailAddressInEmailField(String)"
});
formatter.result({
  "duration": 192133600,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iClickOnCreateAccountButton()"
});
formatter.result({
  "duration": 2139399900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 18
    }
  ],
  "location": "CreateAccountSteps.iClickOnTitle(String)"
});
formatter.result({
  "duration": 73900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miles",
      "offset": 19
    }
  ],
  "location": "CreateAccountSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 5894347300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lan",
      "offset": 18
    }
  ],
  "location": "CreateAccountSteps.iEnterLastnameInLastnameField(String)"
});
formatter.result({
  "duration": 116793400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "354738",
      "offset": 18
    }
  ],
  "location": "CreateAccountSteps.iEnterPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 126329700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miles",
      "offset": 19
    }
  ],
  "location": "CreateAccountSteps.iEnterFirstNameInAddressField(String)"
});
formatter.result({
  "duration": 185835100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lan",
      "offset": 18
    }
  ],
  "location": "CreateAccountSteps.iEnterLastNameInAddressField(String)"
});
formatter.result({
  "duration": 248922600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11 king street",
      "offset": 17
    }
  ],
  "location": "CreateAccountSteps.iEnterAddressInAddressFiled(String)"
});
formatter.result({
  "duration": 194998700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 14
    }
  ],
  "location": "CreateAccountSteps.iEnterCityInCityField(String)"
});
formatter.result({
  "duration": 161273000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Florida",
      "offset": 16
    }
  ],
  "location": "CreateAccountSteps.iSelectStateFromStateDropdown(String)"
});
formatter.result({
  "duration": 168279700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23456",
      "offset": 20
    }
  ],
  "location": "CreateAccountSteps.iEnterPostalCodeInPostcodeField(String)"
});
formatter.result({
  "duration": 120973300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9898989898",
      "offset": 16
    }
  ],
  "location": "CreateAccountSteps.iEnterMobileInMobileField(String)"
});
formatter.result({
  "duration": 120757300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11 king street",
      "offset": 9
    }
  ],
  "location": "CreateAccountSteps.iEnterInFutureReferenceField(String)"
});
formatter.result({
  "duration": 194596500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iClickOnRegisterField()"
});
formatter.result({
  "duration": 14808280000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MY ACCOUNT",
      "offset": 29
    }
  ],
  "location": "CreateAccountSteps.iVerifyMyAccountMessage(String)"
});
formatter.result({
  "duration": 47326800,
  "status": "passed"
});
formatter.after({
  "duration": 977306400,
  "status": "passed"
});
formatter.uri("SignIn.feature");
formatter.feature({
  "line": 1,
  "name": "Sign In Page Test",
  "description": "I should be able to sign in successfully",
  "id": "sign-in-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9564475700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "I should navigate to sign in page successfully",
  "description": "",
  "id": "sign-in-page-test;i-should-navigate-to-sign-in-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I click on signIn link",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I should verify \"AUTHENTICATION\" authentication message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 11522043000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUTHENTICATION",
      "offset": 17
    }
  ],
  "location": "SignInSteps.iShouldVerifyAuthenticationMessageIsDisplayed(String)"
});
formatter.result({
  "duration": 83493800,
  "status": "passed"
});
formatter.after({
  "duration": 849736200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Verify the error message with Invalid Credentials",
  "description": "",
  "id": "sign-in-page-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on signIn link",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify the error message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "sign-in-page-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 16,
      "id": "sign-in-page-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 17,
      "id": "sign-in-page-test;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 18,
      "id": "sign-in-page-test;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 19,
      "id": "sign-in-page-test;verify-the-error-message-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 20,
      "id": "sign-in-page-test;verify-the-error-message-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9853530800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify the error message with Invalid Credentials",
  "description": "",
  "id": "sign-in-page-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on signIn link",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify the error message \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 4559928300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 86824100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 143261600,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 2740507600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 26
    }
  ],
  "location": "SignInSteps.verifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 64254500,
  "status": "passed"
});
formatter.after({
  "duration": 1001902600,
  "status": "passed"
});
formatter.before({
  "duration": 6246158600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify the error message with Invalid Credentials",
  "description": "",
  "id": "sign-in-page-test;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on signIn link",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify the error message \"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 9280777500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 134867500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 123023300,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 3105198400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 26
    }
  ],
  "location": "SignInSteps.verifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 52664800,
  "status": "passed"
});
formatter.after({
  "duration": 845798400,
  "status": "passed"
});
formatter.before({
  "duration": 9547329700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify the error message with Invalid Credentials",
  "description": "",
  "id": "sign-in-page-test;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on signIn link",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter username \"adfdfgfg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify the error message \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 4067937500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 103672800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 115563900,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 3631621400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 26
    }
  ],
  "location": "SignInSteps.verifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 47508000,
  "status": "passed"
});
formatter.after({
  "duration": 1071683600,
  "status": "passed"
});
formatter.before({
  "duration": 11166267500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify the error message with Invalid Credentials",
  "description": "",
  "id": "sign-in-page-test;verify-the-error-message-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on signIn link",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify the error message \"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 10256333400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 94212200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 95761400,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 2762593000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 26
    }
  ],
  "location": "SignInSteps.verifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 43344600,
  "status": "passed"
});
formatter.after({
  "duration": 834539700,
  "status": "passed"
});
formatter.before({
  "duration": 6695114500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify that user should log out successfully",
  "description": "",
  "id": "sign-in-page-test;verify-that-user-should-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@smoke"
    },
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click on signIn link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter username \"lil12@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter password \"Prime123\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on SignOut button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "verify that signIn \"Sign in\" link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 3755035100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lil12@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 221078100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime123",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 146681700,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 5945108500,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignOutButton()"
});
formatter.result({
  "duration": 7768371200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in",
      "offset": 20
    }
  ],
  "location": "SignInSteps.verifyThatSignInLinkIsDisplayed(String)"
});
formatter.result({
  "duration": 51046100,
  "status": "passed"
});
formatter.after({
  "duration": 1023824900,
  "status": "passed"
});
formatter.before({
  "duration": 7786761200,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify user should logIn successfully with valid credentials",
  "description": "",
  "id": "sign-in-page-test;verify-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I click on signIn link",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I enter username \"lil12@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter password \"Prime123\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I verify SignOut Link is displayed \"Sign out\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 6870825500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lil12@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 110842800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime123",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 120810200,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 4437235300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign out",
      "offset": 36
    }
  ],
  "location": "SignInSteps.iVerifySignOutLinkIsDisplayed(String)"
});
formatter.result({
  "duration": 47731900,
  "status": "passed"
});
formatter.after({
  "duration": 915935700,
  "status": "passed"
});
formatter.uri("WomenCategory.feature");
formatter.feature({
  "line": 1,
  "name": "Women category Page Test",
  "description": "",
  "id": "women-category-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6932914300,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@sanity"
    },
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I click on \u0027WOMEN\u0027 tab",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I verify \"Women\" women page text",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenCategoryPageSteps.iClickOnWOMENTab()"
});
formatter.result({
  "duration": 6151846300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 10
    }
  ],
  "location": "WomenCategoryPageSteps.iVerifyWomenPageText(String)"
});
formatter.result({
  "duration": 54250600,
  "status": "passed"
});
formatter.after({
  "duration": 1290931900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Verify user should add product to cart successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on \u0027WOMEN\u0027 tab",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on the product \"\u003cproduct\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Change quantity \"\u003cquantity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "select the size \"\u003csize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select the colour \"\u003ccolour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on the \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify the popup message \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on the \u0027X\u0027 button and close the popup",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "product",
        "quantity",
        "size",
        "colour"
      ],
      "line": 18,
      "id": "women-category-page-test;verify-user-should-add-product-to-cart-successfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 19,
      "id": "women-category-page-test;verify-user-should-add-product-to-cart-successfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 20,
      "id": "women-category-page-test;verify-user-should-add-product-to-cart-successfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 21,
      "id": "women-category-page-test;verify-user-should-add-product-to-cart-successfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress",
        "2",
        "M",
        "Blue"
      ],
      "line": 22,
      "id": "women-category-page-test;verify-user-should-add-product-to-cart-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6007124700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify user should add product to cart successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on \u0027WOMEN\u0027 tab",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on the product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "select the size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select the colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on the \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify the popup message \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on the \u0027X\u0027 button and close the popup",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenCategoryPageSteps.iClickOnWOMENTab()"
});
formatter.result({
  "duration": 2987086500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 24
    }
  ],
  "location": "WomenCategoryPageSteps.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 6006904900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageSteps.changeQuantity(String)"
});
formatter.result({
  "duration": 260627800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageSteps.selectTheSize(String)"
});
formatter.result({
  "duration": 183442000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageSteps.selectTheColour(String)"
});
formatter.result({
  "duration": 4028700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.clickOnTheAddToCartButton()"
});
formatter.result({
  "duration": 107781900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "WomenCategoryPageSteps.verifyThePopupMessage(String)"
});
formatter.result({
  "duration": 77717900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.clickOnTheXButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 1850668900,
  "status": "passed"
});
formatter.after({
  "duration": 1012348000,
  "status": "passed"
});
formatter.before({
  "duration": 9437824900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify user should add product to cart successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on \u0027WOMEN\u0027 tab",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on the product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Change quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "select the size \"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select the colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on the \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify the popup message \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on the \u0027X\u0027 button and close the popup",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenCategoryPageSteps.iClickOnWOMENTab()"
});
formatter.result({
  "duration": 6446672900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 24
    }
  ],
  "location": "WomenCategoryPageSteps.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 11551644400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageSteps.changeQuantity(String)"
});
formatter.result({
  "duration": 201652700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageSteps.selectTheSize(String)"
});
formatter.result({
  "duration": 137384000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageSteps.selectTheColour(String)"
});
formatter.result({
  "duration": 4578000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.clickOnTheAddToCartButton()"
});
formatter.result({
  "duration": 145825500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "WomenCategoryPageSteps.verifyThePopupMessage(String)"
});
formatter.result({
  "duration": 74004300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.clickOnTheXButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 6312091200,
  "status": "passed"
});
formatter.after({
  "duration": 923766500,
  "status": "passed"
});
formatter.before({
  "duration": 6565124600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify user should add product to cart successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on \u0027WOMEN\u0027 tab",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on the product \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Change quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "select the size \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select the colour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on the \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify the popup message \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on the \u0027X\u0027 button and close the popup",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenCategoryPageSteps.iClickOnWOMENTab()"
});
formatter.result({
  "duration": 3527497900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 24
    }
  ],
  "location": "WomenCategoryPageSteps.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 6472268300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageSteps.changeQuantity(String)"
});
formatter.result({
  "duration": 351941800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageSteps.selectTheSize(String)"
});
formatter.result({
  "duration": 100004400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageSteps.selectTheColour(String)"
});
formatter.result({
  "duration": 8430200,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.clickOnTheAddToCartButton()"
});
formatter.result({
  "duration": 131116700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "WomenCategoryPageSteps.verifyThePopupMessage(String)"
});
formatter.result({
  "duration": 127002400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.clickOnTheXButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 2125150000,
  "status": "passed"
});
formatter.after({
  "duration": 1455893100,
  "status": "passed"
});
formatter.before({
  "duration": 8112088300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify user should add product to cart successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-cart-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on \u0027WOMEN\u0027 tab",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on the product \"Printed Summer Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "select the size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select the colour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on the \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify the popup message \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on the \u0027X\u0027 button and close the popup",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenCategoryPageSteps.iClickOnWOMENTab()"
});
formatter.result({
  "duration": 2743133500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress",
      "offset": 24
    }
  ],
  "location": "WomenCategoryPageSteps.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 5304731100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageSteps.changeQuantity(String)"
});
formatter.result({
  "duration": 333598600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageSteps.selectTheSize(String)"
});
formatter.result({
  "duration": 197982600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageSteps.selectTheColour(String)"
});
formatter.result({
  "duration": 18054600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.clickOnTheAddToCartButton()"
});
formatter.result({
  "duration": 175962400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "WomenCategoryPageSteps.verifyThePopupMessage(String)"
});
formatter.result({
  "duration": 165573100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.clickOnTheXButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 4864157800,
  "status": "passed"
});
formatter.after({
  "duration": 993100200,
  "status": "passed"
});
});