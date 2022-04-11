import React from 'react'
import styled from 'styled-components'
import RegisterDriver from '../components/RegisterDriver'
function RegisterPage() {
  return (
      <Container>
          <RegisterDriver/>
      </Container>
    
  )
}
const Container = styled.div`
width:100%;
height: 100vh;
`
export default RegisterPage