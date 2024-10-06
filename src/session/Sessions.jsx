import { Login } from './login/Login';
import { useState } from 'react'

export const Sessions = () => {

    const [login_register, setLoginRegister] = useState(true)

    return(
        <Login login_register={login_register} setLoginRegister={setLoginRegister} />
    )
};
