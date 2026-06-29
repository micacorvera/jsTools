import BaseComponent from "../base.component"

export default class LogUserComponent extends BaseComponent{
    constructor(){
        super('//form[@data-test="login-form"]')
    }

    get loginBtn(){
        return this.rootEl.$('//input[@class="btnSubmit"]')
    }

    get emailErrorMsg(){
        return this.rootEl.$('//div[@id="email-error"]')
    }

    get passwordErrorMsg(){
        return this.rootEl.$('//div[@id="password-error"]')
    }

    input(name){
        const selectors = {
            email:'//input[@id="email"]',
            password:'//input[@id="password"]'
        }
        const selector = selectors[name];

        if (selector === undefined) {
            throw new Error(`No selector defined for input "${name}"`);
        }
        return this.rootEl.$(selector);
    }
}