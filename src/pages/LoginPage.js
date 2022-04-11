import React from 'react'
import styled from 'styled-components'
import Login from '../components/Login'
function LoginPage() {
    return (
    <Container>
        <Login/>
    </Container>
    )
}
const Container = styled.div`
width:100%;
height: 100vh;`
export default LoginPage
