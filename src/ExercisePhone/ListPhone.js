import React, { Component } from 'react';
import {connect} from 'react-redux';
import Phone from './Phone';


class ListPhone extends Component { 

    renderListPhone = () => {
        return this.props.dataPhone.map((phone, index) => {
           return <Phone key={index} phone={phone} /> 
        })
    }

  render() {
    return (
      <div className='row'>
        {this.renderListPhone()}
     </div>
    )
  }
}


const mapStateToProps = state => {
    return {
        dataPhone: state.PhoneReducer.dataPhone,
    }
}

export default connect(mapStateToProps)(ListPhone)