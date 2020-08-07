class KCLogin_Page {
    get kcBanner() { return $("//div[contains(@id,'kc-logo-wrapper')]");}
    get logoButton() { return $('#kc-logo-wrapper');}
    get fpwLink() { return $('.form-group.login-pf-settings a');}
    get fpwBackToLogin() { return $('div#kc-form-options a');}
    get registerLink() { return $('div#kc-registration  a');}
    get registerBackToLogin() { return $('div#kc-form-options > .login-button');}
    get registerButton() { return $('div#kc-form-buttons > .btn.btn-block.btn-lg.btn-primary');}
    get usernameText() { return $('input#username');}
    get passwordText() { return $('input#password');}
    get kcLoginButton() { return $('input#kc-login');}
    get invalidError() { return $('.kc-feedback-text');}


    keycloakLogin (username, password) {
        this.usernameText.setValue(username);
        this.passwordText.setValue(password);
        this.kcLoginButton.click();
    }
    confirmInvalidText(){
        const errorMessage = this.invalidError.getText();
        expect(errorMessage).to.equal('Invalid username or password.');
    }
}



module.exports = new KCLogin_Page();