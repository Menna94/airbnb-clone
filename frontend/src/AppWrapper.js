import React, {useContext, useEffect} from 'react'
import { AppContext } from './contexts/AppContext';

export default function AppWrapper(props) {
    const {autoLogIn} = useContext(AppContext);
    useEffect(()=>{
        autoLogIn();
    }, []);
    return (
        <>
            {props.children}
        </>
    )
}
