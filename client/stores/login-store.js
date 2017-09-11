/**
 * Created by Galina on 11.09.2017.
 */
import { observable, computed, action, asMap, autorun } from 'mobx';

class UserLogin {
    @observable login = observable.map();

    constructor(loginData = {}) {
        this.login.merge(loginData);
    }

    @computed get userLoginInfo() {
        return `Login: ${this.login.get("Username")} - Pass: ${this.login.get("Password")} - Auth: ${this.login.get("Auth")}`;
    }
}

class LoginStore {
    @observable logins;

    constructor() {
            this.logins = [];
            this.fetchLogins();
    }
    getLogins() {
        return this.logins;
    }
    fetchLogins() {
        fetch('/login', { method: 'POST' })
            .then(res => res.json())
            .then(json => this.putLogins(json));
    }
    @action putLogins(logins) {
        let loginArray = [];
        logins.forEach(login => {
            loginArray.push(new UserLogin(login));
        });
        this.logins = loginArray;
    }
    checkUser() {
        alert('check users');
    }
}
const loginStore = new LoginStore();
export default loginStore;

autorun(() => {
    console.log(loginStore.getLogins().toJS());
});


export {LoginStore} ;