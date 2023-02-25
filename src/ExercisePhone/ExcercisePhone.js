import React, { Component } from 'react'
import DetailPhone from './DetailPhone'
import ListPhone from './ListPhone'

export default class ExcercisePhone extends Component {
  render() {
    return (
      <div className='bg-dark text-white' style={{height: '100%', width: '100%'}}>
          <div className='container bg-dark' >
          <h1 className='text-center p-3'>Exercise Phone</h1>
          <ListPhone />
          <DetailPhone />
          </div>
      </div>
    )
  }
}
