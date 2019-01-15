import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Redirect}from 'react-router-dom';
import Item from './item';
import queryString from 'query-string';
import { Button, ButtonGroup } from 'reactstrap';


class Meal extends Component{
    state= {
        listProduk: [],
        cSelected: []
    };
    
    componentDidMount(){
        axios.get('http://localhost:1997/produk')
        .then((data)=> {
            console.log(data.data)
            this.setState({listProduk:data.data })
        }).catch((err)=>{
            console.log(err)
        })
    }
    
      renderListProduk = ()=>{
        
        var listJSXProduk = this.state.listProduk.map((item)=>{
            return(
            <div className="meals">
            {/* <p>{item.id}</p> */}
                <div  className="container">
                    <Button color="warning" onClick={() => this.onCheckboxBtnClick(item.id)} className="col-sm-4 file hvr-bob " active={this.state.cSelected.includes(item.id)}>
                        
                        <div className="panel panel-primary">
                       
                            <div className="panel-body"><img src={item.image} className="img-responsive" style={{width: '100%'}} alt="Image" /></div>
                            <div className="panel-heading"><p className="text-produk">{item.namaproduk}</p><p className="text-produk">{item.caption}</p></div>
                            <div className="panel-footer"><a href={`/produkdetail?produkid=${item.id}&namaproduk=${item.namaproduk}`}><p className='detail-item hvr-shrink'>Detail</p></a></div>
                        </div>
                    </Button>
                </div>
            </div>
            )
        })
        return listJSXProduk
    }
    onCheckboxBtnClick(selected) {
        const index = this.state.cSelected.indexOf(selected);
        if (index < 0 && this.state.cSelected.length < 3) {
          this.state.cSelected.push(selected);
        } else {
          this.state.cSelected.splice(index, 1);
        }
        this.setState({ cSelected: [...this.state.cSelected] });
      }
    nextBtn=(jumlah)=>{
        var params = queryString.parse(this.props.location.search)
        console.log(params)
        var plan = params.plan;
        var recipes = parseInt(params.recipes);
        var person = params.person;
        var week = params.week;
        var p1= this.state.cSelected[0];
        var p2= this.state.cSelected[1];
        var p3= this.state.cSelected[2];
        var p4= this.state.cSelected[3];
        if(this.state.cSelected.length === jumlah){
            if(jumlah===4){
                return <a href={`/checkout?plan=${plan}&&week=${week}&&recipes=${recipes}&&person=${person}&&p1=${p1}&&p2=${p2}&&p3=${p3}&&p4=${p4}`}> <Button color="warning" active={this.state.cSelected.length !== jumlah}>Lanjutkan ke pembayaran</Button></a>
            }
            return <a href={`/checkout?plan=${plan}&&week=${week}&&recipes=${recipes}&&person=${person}&&p1=${p1}&&p2=${p2}&&p3=${p3}`}> <Button color="warning" active={this.state.cSelected.length !== jumlah}>Lanjutkan ke pembayaran</Button></a>
        }
        return <p>Pilih menu dibawah ini untuk melanjutkan pembayaran</p>
    }
    render(){
        var params = queryString.parse(this.props.location.search)
        console.log(params)
        var plan = params.plan;
        var recipes = parseInt(params.recipes);
        var person = params.person;
       
        if(this.props.username !== ""){
            return(
                <div className="main">
                    <div className="menutemplate2">
                        <h1 className="menu-tittle-mingguan">Menu makanan {plan} minggu ini</h1>
                    </div>

                    <div className="menutemplate2">
                        <h1 className="menu-tittle-mingguan">Pilih {recipes} menu untuk {person} orang dibawah ini</h1>
                    </div>
                   <center>{this.nextBtn(recipes)}</center> <br></br>
                    
                {this.renderListProduk()}
                <p>Selected: {JSON.stringify(this.state.cSelected)}</p>
                </div>
            )
        }return <Redirect to="/login"/>
        
    }
}
const mapStateToProps = (state) => {
    return{
        username:state.auth.username,
        produk: state.selectedProduk
    }
}
export default connect(mapStateToProps)(Meal);