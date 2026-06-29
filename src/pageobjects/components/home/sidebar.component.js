import BaseComponent from "../base.component"

export default class SidebarComponent extends BaseComponent{
    constructor(){
        super('//div[@id="filters"]')
    }

    get searchInput(){
        return this.rootEl.$('//input[@id="search-query"]')
    }
}