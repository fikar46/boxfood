import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Redirect}from 'react-router-dom';
import Item from './item';


class OnTheMenu extends Component{
    state= {
        listProduk: [], searchListProduk: []
    };
    componentDidMount(){
        axios.get('http://localhost:1997/produk')
        .then((data)=> {
            console.log(data.data)
            this.setState({listProduk:data.data,  searchListProduk: data.data })
        }).catch((err)=>{
            console.log(err)
        })
    }
    
    renderListProduk = ()=>{
        var listJSXProduk = this.state.listProduk.map((item)=>{
            return(
                <a href={`/produkdetail?produkid=${this.props.produk.id}&namaproduk=${this.props.produk.namaproduk}`}>
                <div  className="container">
                     <Item produk={item}/>
                </div></a>
            )
        })
        return listJSXProduk
    }
    render(){
            return (
                <div className="main">
                    <div className="row">
                    <div className="col-lg-12 text-center menutemplate">
                        <h1 className="menu-tittle-mingguan">Menu makanan minggu pertama</h1>
                    </div>
                    </div>
                    <div className="mainonthe-menu">
                            {this.renderListProduk()}
                    </div>
                    <div className="">
                    <div className="menutemplate2">
                        <h1 className="menu-tittle-mingguan">Menu makanan minggu kedua</h1>
                    </div>
                    <div className="mainonthe-menu">
                            {this.renderListProduk()}
                    </div>
                    </div>
                    <div className="">
                    <div className="menutemplate2">
                        <h1 className="menu-tittle-mingguan">Menu makanan minggu ketiga</h1>
                    </div>
                    <div className="mainonthe-menu">
                            {this.renderListProduk()}
                    </div>
                    </div>
                    <div className="">
                    <div className="menutemplate2">
                        <h1 className="menu-tittle-mingguan">Menu makanan minggu keempat</h1>
                    </div>
                    <div className="mainonthe-menu">
                            {this.renderListProduk()}
                    </div>
                    </div>
                </div>
            );
        
    }
}
const mapStateToProps = (state) => {
    return{
        username:state.auth.username,
        produk: state.selectedProduk
    }
    }
export default connect(mapStateToProps)(OnTheMenu);