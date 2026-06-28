import BaseComponent from "./base.component"

export default class FavoriteItems extends BaseComponent {
    constructor(){
        super('.col.ng-star-inserted')
    }
    get cardTitle(){
        return this.rootEl.$('.card-title')
    }
    get deleteBtn(){
        return this.rootEl.$('[data-test: "delete"]')
    }
}