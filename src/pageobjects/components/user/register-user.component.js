import BaseComponent from "../base.component.js"

export default class RegisterUserComponent extends BaseComponent{
    constructor(){
        super('[data-test="register-form"]')
    }

    get registerBtn(){
        return this.rootEl.$('.btnSubmit.mb-3')
    }
    
    input(name){
        const selectors = {
            name: '#first_name',
            surname: '#last_name',
            birthDate: '#dob',
            country: '#country',
            postalCode: '#postal_code',
            number: '#house_number',
            street: '#street',
            telephone: '#phone',
            email: '#email',
            password: '#password'
        }
        const selector = selectors[name];

        if (selector === undefined) {
            throw new Error(`No selector defined for input "${name}"`);
        }
        return this.rootEl.$(selector);
    }
}