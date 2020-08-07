//Load POMs
const Home_Page = require("../pageObjects/Home_Page.js");
const KCLogin_Page = require("../pageObjects/KCLogin_Page.js");
const OneSky_Page = require("../pageObjects/OneSky_Page.js");

//Test Suite
describe('UTM Homepage', function() {

    it('Should be available with the correct title', function() {
        browser.verifyTitle('OneSky Web Portal');
    });


    it('Should display the clickable Login button', function() {
        const loginButtonDC = browser.verifyDC(Home_Page.loginButton,'loginButton');
    });


    it('Should display the clickable Banner button', function() {
        const bannerButtonDC = browser.verifyDC(Home_Page.bannerButton,'bannerButton');
    });


    it('Should display the welcome message', function() {
        const welcomeDisplayed = Home_Page.welcomeMessage.isDisplayed();
        const welcomeText = Home_Page.welcomeMessage.getText();

        expect(welcomeDisplayed,'Welcome message displayed').to.equal(true);
        expect(welcomeText,'Welcome text appears correctly').to.equal("An enterprise ready solution for Unmanned Traffic Management (UTM) designed to support user-supplied flight plans, airspace analytics, advanced terrain consideration, and more!");
    });


    it('Banner button should link to onesky.xyz', function() {
        Home_Page.bannerButton.click();
        OneSky_Page.oneskyLogo.waitForExist();

        browser.verifyTitle('OneSky');
    });


    it('Login button should link to Keycloak Login', function() {
        Home_Page.loginButton.click();
        KCLogin_Page.kcBanner.waitForExist();

        browser.verifyTitle('Log in to OneSky');
    });
});

//Load Homepage and perform a page check
beforeEach('Load Homepage and perform a page check',function() {

browser.setWindowSize(1920,1040);

browser.url('/');
Home_Page.loginButton.waitForExist();

});

