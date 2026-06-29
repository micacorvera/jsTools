import BaseComponent from "../base.component"

export default class PaymentComponent extends BaseComponent{
    constructor(){
        super('//div[contains(@class, "login-form-1") and .//select[@id="payment-method"]]')
    }

    input(name){
        const selectors ={
            method: '//select[@id="payment-method"]',
            cardNumber: '//input[@id="credit_card_number"]',
            expiration: '//input[@id="expiration_date"]',
            cvv: '//input[@id="cvv"]',
            name: '//input[@id="card_holder_name"]'
        }
        const selector = selectors[name]
        if (selector === undefined) {
            throw new Error(`No selector defined for input "${name}"`);
        }
        return this.rootEl.$(selector);
    }

    get finishBtn(){
        return this.rootEl.$('//button[@data-test="finish"]')
    }

    get alert(){
        return this.rootEl.$('//div[@class="alert-danger"]')
    }

    get errorMsg(){
        return this.rootEl.$('//div[@data-test="payment-error-message"]')
    }

    get successMsg(){
        return this.rootEl.$('//div[@data-test="payment-success-message"]')
    }
}