import {ListItem, ButtonElement} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientData, isActive, onChangeActiveDirection} = props
  const {value, displayText} = gradientData

  const opacityValue = isActive ? 1 : 0.5

  const onClickDirection = () => {
    onChangeActiveDirection(value)
  }

  return (
    <ListItem value={value}>
      <ButtonElement
        type="button"
        opacityValue={opacityValue}
        onClick={onClickDirection}
      >
        {displayText}
      </ButtonElement>
    </ListItem>
  )
}

export default GradientDirectionItem
