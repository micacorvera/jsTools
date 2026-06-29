import BaseComponent from "../base.component"

export default class ToastComponent extends BaseComponent{
    constructor(){
        super('#toast-container')
    }

    get message(){
        return this.rootEl.$('[role="alert"]')
    }
}