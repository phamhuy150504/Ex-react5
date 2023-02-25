import React, { Component } from 'react'
import {connect} from 'react-redux'


class DetailPhone extends Component {
  render() {
    const { detail } = this.props;
    const { hinhAnh, manHinh, heDieuHanh, cameraTruoc, cameraSau, rom, ram } = detail;
    return (
      <div className='pt-5'>
        <div className="row ">
          <div className="col-4">
            <img src={hinhAnh} style={{ width: 250, height: 300 }} alt="123" />
          </div>
          <div className='col-8'>
            <h2 className='text-center'>Detail Product</h2>
            <table className="table text-white">
              <tbody>
                <tr>
                  <td>Man Hinh</td>
                  <td>{manHinh}</td>
                </tr>
                <tr>
                  <td>He Dieu Hanh</td>
                  <td>{heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera Truoc</td>
                  <td>{cameraSau}</td>
                </tr>
                <tr>
                  <td>Camera Sau</td>
                  <td>{cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Ram</td>
                  <td>{ram}</td>
                </tr>
                <tr>
                  <td>Rom</td>
                  <td>{rom}</td>
                </tr>
              </tbody>
              <tbody>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
    return {
        detail: state.PhoneReducer.detail,
    }
}

export default connect(mapStateToProps, null)(DetailPhone)