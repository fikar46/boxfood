import React, {Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Redirect}from 'react-router-dom';


class Homes extends Component{
    state= {
        chart:[],
        listProduk:[]
    };
    componentDidMount(){
        this.listProduk()
        var username = this.props.username;
        axios.get('http://localhost:1997/cart?username='+username)
        .then((data)=> {
            console.log(data.data)
            this.setState({chart:data.data})
            console.log(this.state.chart)
            console.log(this.state.chart[0].id_p1)
        }).catch((err)=>{
            console.log(err)
        })
    }
    listProduk=()=>{
        axios.get('http://localhost:1997/produk')
        .then((data)=> {
            console.log(data.data)
            this.setState({listProduk:data.data})
            console.log(this.state.listProduk)
        }).catch((err)=>{
            console.log(err)
        })
    }
    
    listpilihan1 =()=>{
        console.log(this.state.chart.id_p1)

        for(let i = 0; i< this.state.chart.length; i++){
            var p1= this.state.chart[i].id_p1;
        }
        var filterProduk = this.state.listProduk.filter((item)=>{
            return item["id"] == p1
        })
        var getproduk = filterProduk.map(item=>{
            return(
                <li>{item.namaproduk}</li>
            )
        }) 
        return getproduk
    }
    listpilihan2 =()=>{
        console.log(this.state.chart.id_p2)
        for(let i = 0; i< this.state.chart.length; i++){
            var p2= this.state.chart[i].id_p2;
        }
        var filterProduk = this.state.listProduk.filter((item)=>{
            return item["id"] == p2
        })
        var getproduk = filterProduk.map(item=>{
            return(
                <li>{item.namaproduk}</li>
            )
        }) 
        return getproduk
    }
    listpilihan3 =()=>{
        console.log(this.state.chart.id_p3)
        for(let i = 0; i< this.state.chart.length; i++){
            var p3= this.state.chart[i].id_p3;
        }
        var filterProduk = this.state.listProduk.filter((item)=>{
            return item["id"] == p3
        })
        var getproduk = filterProduk.map(item=>{
            return(
                <li>{item.namaproduk}</li>
            )
        }) 
        return getproduk
    }
    listpilihan4 =()=>{
        console.log(this.state.chart.id_p4)
        for(let i = 0; i< this.state.chart.length; i++){
            var p4= this.state.chart[i].id_p4;
        }
        var filterProduk = this.state.listProduk.filter((item)=>{
            return item["id"] == p4
        })
        var getproduk = filterProduk.map(item=>{
            return(
                <li>{item.namaproduk}</li>
            )
        }) 
        return getproduk
    }
  
    
    tampilanChart=()=>{
        var listJSXChart = this.state.chart.map((item)=>{
            return(
                <div className="col-lg-3
                 portfolio-item">
                
                <div className="card h-100">
                  <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt /></a>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">{item.paket}</a>
                    </h4>
                    <p>Minggu pertama</p>
                    <p>{item.status}</p>
                    <p>Pilihan makanan: </p>
                    <ul>
                        {this.listpilihan1()}
                        {this.listpilihan2()}
                        {this.listpilihan3()}
                        {this.listpilihan4()}
                    </ul>
                  </div>
                </div>
              </div>
            )
        })
        return listJSXChart
    }
    render(){
        if(this.props.username === ''){
            return<Redirect to="/login"/>
        }else{
        return(
           
            <div className="row home">
            <h3 className='col-lg-12'><center>Pesanan Mingguanmu</center></h3>
                 {/* <h1 className='welcome-h1'>Selamat datang {this.props.username}</h1> */}
                 
            {this.tampilanChart()}
            {/* <div className="col-lg-9 portfolio-item">
                <h3 className='welcome-h1'>status</h3>
                
              </div> */}
          </div>
        )
        }
    }
}
const mapStateToProps = (state) => {
    return{
      username:state.auth.username,
      email:state.auth.email
    }
  }
export default connect(mapStateToProps, null)(Homes);
