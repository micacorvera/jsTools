import BaseComponent from "../base.component"

export default class BillingComponent extends BaseComponent{
    constructor(){
        super('.float-end:has([data-test="proceed-3"])')
    }

    checkoutBtn(){
        return this.rootEl.$('[data-test="proceed-3"]')
    }
}