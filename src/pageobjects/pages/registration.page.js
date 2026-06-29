import BasePage from "./base.page"
import RegisterUserComponent from "../components/user/register-user.component";

export default class RegistrationPage extends BasePage {
    constructor (){
        super('/auth/register');
        this.registerUser = new RegisterUserComponent();
    }
}

