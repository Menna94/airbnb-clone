import React from 'react'
import { MultyStepForm } from '../components/StepForm/MultyStepForm/MultyStepForm'
import Header from '../components/Header/Header'

const HostScreen = () => {
    return (
        <>
            <Header headerInner={true} />
            <MultyStepForm />
        </>
    )
}
export default HostScreen
