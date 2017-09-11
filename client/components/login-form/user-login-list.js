/**
 * Created by Galina on 11.09.2017.
 */
import React from 'react';

/* components */
import UserLoginItem from './user-login-item';

const UserLoginList = props => {
    return(
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
    )
};

export default UserLoginList;