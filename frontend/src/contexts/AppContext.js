import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProdivder(props) {
    const [logged, setLogged] = useState(false);
    const [token, setToken] = useState('');
    function login(token){
        console.log('aaa')
        setLogged(true);
        setToken(token);
        // localStorage.setItem('logged', true);
        console.log(99999999);
        localStorage.setItem('token', token);
        console.log(123123123123);
        const mytok = localStorage.getItem('token');
        console.log(12312, mytok)
    }
    function logout(){
        setLogged(false);
        setToken('');
        localStorage.removeItem('token');
    }
    function autoLogIn(){
        console.log('we are doibf auto login');
        const token = localStorage.getItem('token');
        console.log(180, token)
        setToken(token);
        if(token){
            login(token)
        }
    }

    return (
        <AppContext.Provider value={{ logged, login, logout, autoLogIn, token }}>
            {props.children}
        </AppContext.Provider>
    );
}
