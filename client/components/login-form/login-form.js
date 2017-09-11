//Created by Galina on 11.09 .2017.

import React from 'react';


/* components */
import UserLoginItem from './user-login-item';

/* styles */
import style from './styles.css';

const LoginForm = props => {
    return (
        <div className={style.container}>
            <input type="text" placeholder="Login"/>
            <input type="text" placeholder="Password"/>
            <button onClick={() => props.checkUser()}>Login</button>
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

