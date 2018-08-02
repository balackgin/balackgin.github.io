import  React, { Component } from 'react'

export default class Main extends Component {
  state = {
    userName: 'xt',
    userNick: 'balackgin',
    publishTime: '2018-8-2'
  }

  render() {
    <div>
      welcome to here, {userName}, this page is created from {userNick}, it's publishtime is {publishTime}!
    </div>
  }
}