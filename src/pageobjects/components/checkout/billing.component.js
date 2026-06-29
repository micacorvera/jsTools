import BaseComponent from "../base.component"

export default class BillingComponent extends BaseComponent{
    constructor(){
        super('//div[@class="float-end" and ./button[contains(@data-test, "proceed-3")]]')
    }

    checkoutBtn(){
        return this.rootEl.$('//button[@data-test="proceed-3"]')
    }
}