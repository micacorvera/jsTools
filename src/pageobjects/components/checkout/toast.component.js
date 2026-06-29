import BaseComponent from "../base.component"

export default class ToastComponent extends BaseComponent{
    constructor(){
        super('//div[@id="toast-container"]')
    }

    get message(){
        return this.rootEl.$('//div[@role="alert"]')
    }
}