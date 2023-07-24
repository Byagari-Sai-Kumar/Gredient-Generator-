import styled from 'styled-components'

export const GradientOverallContainer = styled.div`
  width: 100%;
  height: 100vh;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-image: linear-gradient(${props => props.gradientValue});
`
export const MainHeading = styled.h1`
  font-size: 20px;
  color: #ffffff;
`
export const SubHeading = styled.p`
  font-size: 16px;
  color: #ededed;
`
export const DirectionsContainer = styled.ul`
  width: 100%;
  max-width: 600px;
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 0px;
`

export const ColorsOverallContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ColorContainer = styled.div`
  width: 45%;
  max-width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
`
export const ColorPara = styled.p`
  font-size: 14px;
  color: #ededed;
`
export const ColorInput = styled.input`
  height: 45px;
  width: 90%;
  border: 1px solid #ededed;
  outline: none;
`
export const GenerateButton = styled.button`
  height: 30px;
  width: 120px;
  color: #1e293b;
  background-color: #00c9b7;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
`
