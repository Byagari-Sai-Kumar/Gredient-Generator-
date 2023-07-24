import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem/index'
import {
  GradientOverallContainer,
  MainHeading,
  SubHeading,
  DirectionsContainer,
  ColorsOverallContainer,
  ColorContainer,
  ColorPara,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirection: 'top',
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onGenerateGradient = () => {
    const {activeDirection, firstColor, secondColor} = this.state

    this.setState({
      gradientValue: `to ${activeDirection}, ${firstColor}, ${secondColor}`,
    })
  }

  onChangeActiveDirection = value => {
    this.setState({activeDirection: value})
  }

  onChangeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  render() {
    const {gradientValue, activeDirection, firstColor, secondColor} = this.state

    return (
      <GradientOverallContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <SubHeading>Choose Direction</SubHeading>
        <DirectionsContainer>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              gradientData={eachItem}
              isActive={eachItem.value === activeDirection}
              onChangeActiveDirection={this.onChangeActiveDirection}
            />
          ))}
        </DirectionsContainer>
        <SubHeading>Pick the Colors</SubHeading>
        <ColorsOverallContainer>
          <ColorContainer>
            <ColorPara>{firstColor}</ColorPara>
            <ColorInput
              type="color"
              value={firstColor}
              onChange={this.onChangeFirstColor}
            />
          </ColorContainer>
          <ColorContainer>
            <ColorPara>{secondColor}</ColorPara>
            <ColorInput
              type="color"
              value={secondColor}
              onChange={this.onChangeSecondColor}
            />
          </ColorContainer>
        </ColorsOverallContainer>
        <GenerateButton type="button" onClick={this.onGenerateGradient}>
          Generate
        </GenerateButton>
      </GradientOverallContainer>
    )
  }
}

export default GradientGenerator
