import styled from 'styled-components'

export const ListItem = styled.li`
  width: 40%;
  max-width: 120px;
  height: 35px;
  margin: 10px;
`
export const ButtonElement = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  color: #334155;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  background-color: #ffffff;
  opacity: ${props => props.opacityValue};
  cursor: pointer;
`
