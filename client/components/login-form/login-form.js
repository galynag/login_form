//Created by Galina on 11.09 .2017.

import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';


/* components */
import UserLoginItem from './user-login-item';

/* styles */
import style from './styles.css';



const LoginForm = props => {
    return (
        <div className={style.container}>
            <input id="login" type="text" placeholder="Login"/>
            <input id="pass" type="password" placeholder="Password" size="20"/>
            <ButtonToolbar>
                <Button type="submit" bsStyle="primary" bsSize="large" active onClick={() => props.checkUser()}>Login</Button>
            </ButtonToolbar>
            <div className={style.container}>
                <ul>
                    {props.logins.map(loginStore => {
                        return (
                            <UserLoginItem
                                key={loginStore.login.get('id')}
                                text={loginStore.userLoginInfo}
                            />);
                    })}
                </ul>
            </div>

        </div>
    );
};

export default LoginForm;

