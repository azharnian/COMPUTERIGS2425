import React from 'react'

class Goodbye extends React.Component {
    render() {
      return (
        <h1>Goodbye ... {this.props.name}</h1>
      )
    }
}

export default Goodbye;