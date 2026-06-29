import BaseComponent from "../base.component"

export default class PaymentComponent extends BaseComponent{
    constructor(){
        super('.login-form-1:has(#payment-method)')
    }

    input(name){
        const selectors ={
            method: '#payment-method',
            cardNumber: '#credit_card_number',
            expiration: '#expiration_date',
            cvv: '#cvv',
            name: '#card_holder_name'
        }
        const selector = selectors[name]
        if (selector === undefined) {
            throw new Error(`No selector defined for input "${name}"`);
        }
        return this.rootEl.$(selector);
    }

    get finishBtn(){
        return this.rootEl.$('[data-test="finish"]')
    }

    get alert(){
        return this.rootEl.$('.alert.alert-danger.ng-star-inserted')
    }

    get errorMsg(){
        return this.rootEl.$('[data-test="payment-error-message"]')
    }

    get successMsg(){
        return this.rootEl.$('[data-test="payment-success-message"]')
    }
}