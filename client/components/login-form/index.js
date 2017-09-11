/**
 * Created by Galina on 11.09.2017.
 */
import React from 'react';
import { observer, inject } from 'mobx-react';

import LoginForm from './login-form';

const Component = inject('loginStore')(observer(({ loginStore }) => {
    return (
        <LoginForm
            logins={loginStore.getLogins()}
            checkUser={() => loginStore.checkUser()}/>
    );
}));

Component.displayName = 'LoginForm';
export default Component;