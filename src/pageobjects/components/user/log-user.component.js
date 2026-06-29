import BaseComponent from "../base.component"

export default class LogUserComponent extends BaseComponent{
    constructor(){
        super('[data-test="login-form"]')
    }

    get loginBtn(){
        return this.rootEl.$('.btnSubmit')
    }

    get emailErrorMsg(){
        return this.rootEl.$('#email-error')
    }

    get passwordErrorMsg(){
        return this.rootEl.$('#password-error')
    }

    input(name){
        const selectors = {
            email:'#email',
            password:'#password'
        }
        const selector = selectors[name];

        if (selector === undefined) {
            throw new Error(`No selector defined for input "${name}"`);
        }
        return this.rootEl.$(selector);
    }
}