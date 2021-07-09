import react from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import FooterSm from '../Components/FooterSm'
import SignUpUserForm from '../Components/SignUpUserForm'

const SignUpUser = () => {
    return (
        <>
        <Header></Header>
        <SignUpUserForm></SignUpUserForm> 
        <Footer></Footer>
        <FooterSm></FooterSm>
        </>
    )
}

export default SignUpUser
