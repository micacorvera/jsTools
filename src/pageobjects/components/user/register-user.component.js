import BaseComponent from "../base.component.js"

export default class RegisterUserComponent extends BaseComponent{
    constructor(){
        super('//form[@data-test="register-form"]')
    }

    get registerBtn(){
        return this.rootEl.$('//button[@class="btnSubmit mb-3"]')
    }
    
    input(name){
        const selectors = {
            name: '//input[@id="first_name"]',
            surname: '//input[@id="last_name"]',
            birthDate: '//input[@id="dob"]',
            country: '//select[@id="country"]',
            postalCode: '//input[@id="postal_code"]',
            number: '//input[@id="house_number"]',
            street: '//input[@id="street"]',
            telephone: '//input[@id="phone"]',
            email: '//input[@id="email"]',
            password: '//input[@id="password"]'
        }
        const selector = selectors[name];

        if (selector === undefined) {
            throw new Error(`No selector defined for input "${name}"`);
        }
        return this.rootEl.$(selector);
    }
}