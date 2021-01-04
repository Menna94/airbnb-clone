import React, { useState, useEffect } from 'react'
import { MultyStepForm } from '../components/StepForm/MultyStepForm/MultyStepForm';
import Header from '../components/Header/Header'

const HostScreen = (props) => {
    const [edit, setEdit] = useState(false);
    useEffect(() => {
        if (props.location.state?.edit === true) {
            console.log(props.location.state?.data);
            setEdit(true);
        }
    }, [])
    return (
        <>
            <Header headerInner={true}/>
            <MultyStepForm edit={edit} data={props.location.state?.data} />
        </>
    )
}
export default HostScreen
