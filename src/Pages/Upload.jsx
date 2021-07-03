import React, {useEffect} from 'react'
import Header from '../Components/Header'
import Form from '../Components/Form'
import Footer from '../Components/Footer'
import FooterSm from '../Components/FooterSm'
import {useHistory, Link} from 'react-router-dom'

const Upload = () => {

    const history = useHistory()

    useEffect(() => {
        console.log(sessionStorage.getItem('userName'))
        if(sessionStorage.getItem('userName') === null)
            history.push('/LogIn')
    }, [])

    return (      
        <>
            <Header/>
            <Form/>
            <Footer/>
            <FooterSm/>
        </>
    )
}

export default Upload
