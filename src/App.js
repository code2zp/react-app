import React from 'react'

// import view component
import ShoppingList from './view/component/shopping-list'
// import NextPlayer from './view/component/next-player'
// import ModuleCss from './view/component/module-css'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      isShowClock: true
    }
  }

  handleShowOrHide () {
    this.setState({
      isShowClock: !this.state.isShowClock
    })
  }

  render () {
    return (
      <div>
        <ShoppingList name="shanghai"></ShoppingList>
        {/* <NextPlayer></NextPlayer>
        <ModuleCss></ModuleCss> */}
      </div>
    )
  }
}

export default App
