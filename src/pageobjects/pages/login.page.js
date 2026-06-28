import { $ } from '@wdio/globals'
import Page from './base.page.js';
import LogUserComponent from '../components/log-user.component.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export default class LoginPage extends Page {
    constructor(){
        super('/auth/login');
        this.logUser = new LogUserComponent();
    }
}
