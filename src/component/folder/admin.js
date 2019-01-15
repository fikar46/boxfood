import React, { Component } from 'react'
import '../../support/css/admin.css'
import {connect} from 'react-redux';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import queryString from 'query-string';
import {Button} from 'reactstrap'
class Admin extends Component{
    state={
        chart:[]
    };
    componentDidMount(){
        axios.get("http://localhost:1997/cart")
        .then((res)=>{
            console.log(res.data);
            this.setState({chart:res.data})
            console.log(this.state.chart)
        }).catch((err)=>{
            console.log(err)
        })
    }
    chartTampil=()=>{
        var chartTampilDiTable = this.state.chart.map((item)=>{
            return(
                <tr>
                      <td className="serial"><a href={item.paket}>{item.id}</a></td>
                      <td>
                        {/* <div className="round-img">
                          <a href="#"><img className="rounded-circle" src="images/avatar/1.jpg" alt /></a>
                        </div> */}
                       boxfood-{item.id_pesanan}
                      </td>
                      <td> {item.username} </td>
                      <td> <span className="name">{item.paket}</span> </td>
                      <td> <span className="product">{item.person}</span> </td>
                      <td><span className="count">{item.week}</span></td>
                      <td>
                        <span className="badge badge-complete">{item.status}</span>
                      </td>
                      <td>
                          <Button color="warning">Proses</Button>
                      </td>
                    </tr>
            )
        })
        return chartTampilDiTable
    }
    render(){
        return(
            <div className="admin-page-box">
            <div className="row">
        <div className="col-xl-8">
          <div className="card">
            <div className="card-body">
              <h4 className="box-title">Orders </h4>
            </div>
            <div className="card-body--">
              <div className="table-stats order-table ov-h">
                <table className="table ">
                  <thead>
                    <tr>
                      <th className="serial">#</th>
                      <th>ID Pesanan</th>
                      <th>Nama</th>
                      <th>Paket</th>
                      <th>Orang</th>
                      <th>Minggu</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.chartTampil()}
                  </tbody>
                </table>
              </div> 
            </div>
          </div> 
        </div> 
        <div className="col-xl-4">
          <div className="row">
            <div className="col-lg-6 col-xl-12">
            <a href="/adminInput">
              <div className="card bg-flat-color-3  ">
                <div className="card-body">
                  <h4 className="card-title m-0  white-color ">Input Produk</h4>
                </div>
                <div className="card-body">
                  <div id="flotLine5" className="flot-line" style={{padding: '0px', position: 'relative'}}><canvas className="flot-base" width={276} height={105} style={{direction: 'ltr', position: 'absolute', left: '0px', top: '0px', width: '276px', height: '105px'}} /><canvas className="flot-overlay" width={276} height={105} style={{direction: 'ltr', position: 'absolute', left: '0px', top: '0px', width: '276px', height: '105px'}} /></div>
                </div>
              </div>
              </a>
            </div>
            
            <div className="col-lg-6 col-xl-12">
              <div className="card bg-flat-color-3  ">
                <div className="card-body">
                  <h4 className="card-title m-0  white-color ">user: 2200</h4>
                </div>
                <div className="card-body">
                  <div id="flotLine5" className="flot-line" style={{padding: '0px', position: 'relative'}}><canvas className="flot-base" width={276} height={105} style={{direction: 'ltr', position: 'absolute', left: '0px', top: '0px', width: '276px', height: '105px'}} /><canvas className="flot-overlay" width={276} height={105} style={{direction: 'ltr', position: 'absolute', left: '0px', top: '0px', width: '276px', height: '105px'}} /></div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
      </div>
        )
    }
}
export default Admin;
