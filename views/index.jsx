import React from 'react';

export default class Team extends React.Component {
  render () {
    return (
    <div className="Team" style={style.mainfont}>
      <Players data={this.props.data}/>
    </div>
    )
  }
}

class Players extends React.Component {
  render () {
    var players = this.props.data.map(function(p) {
      //return <tr><td>{p.name}</td><td>{p.posNum}</td><td>{p.posNum}</td></tr>
      return <Player key={p.key} posName={p.posName} posNum={p.posNum}>{p.name}</Player>
    })

    return (
      <div className="Players">
      <table>
        <tbody>
        <tr><th>Name</th><th>Position</th><th>Number</th></tr>
        {players}
        </tbody>
      </table><br/>
      <PlayerForm/>
      </div>
    )
  }
}

class Player extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.children}</td><td>{this.props.posName}</td><td>{this.props.posNum}</td>
      </tr>
  )
  }
}

class PlayerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data : this.props.data,
      pName : "",
      pPos : "",
      pNum : ""
      }

    this.updateName = this.updateName.bind(this)
    this.updatePos = this.updatePos.bind(this)
    this.updateNum = this.updateNum.bind(this)
    this.addPlayer = this.addPlayer.bind(this)
  }

  updateName(e) {
    setState({pName : e.target.value})
  }
  updatePos(e) {
    setState({pPos : e.target.value})
  }
  updateNum(e) {
    setState({pNum : e.target.value})
  }
  addPlayer() {

    var currentPlayers = this.state.data
    currentPlayers.push({
      name: this.state.pName,
      posName: this.state.pPos,
      posNum: this.state.pNum
    })

    setState({pName : ""})
    setState({pPos : ""})
    setState({pNum : ""})
  }

  render () {

    return (
      <div className="PlayerForm">
        <input type='text' onChange={this.updateName} value={this.state.pName}/>
        <input type='text' onChange={this.updatePos} value={this.state.pPos}/>
        <input type='text' onChange={this.updateNum} value={this.state.pNum}/>
        <button onClick={this.addPlayer}>Add Player</button>
      </div>
    )
  }

}

let style = {
  mainfont : {
    'fontFamily': 'monospace',
    'textAlign': 'left'
  }
}
