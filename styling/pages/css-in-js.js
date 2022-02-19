import styled from "styled-components"

const Title = styled.h1`
  font-size: 50px;
  color: ${ ({ theme }) => theme.color.primary }  
`

function CssInJs() {
  return <Title>CssInJs Page</Title>
}

export default CssInJs