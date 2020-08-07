class Homepage_Page {
    get loginButton() { return $('.login-button');}
    get bannerButton() { return $("a[title='Home'] > .onesky-logo-home");}
    get welcomeMessage() { return $(".content-body > p:nth-of-type(1)");}
}

module.exports = new Homepage_Page();