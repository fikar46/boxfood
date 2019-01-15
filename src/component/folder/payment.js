import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { CustomInput } from 'reactstrap';
import {Redirect} from 'react-router-dom';
import queryString from 'query-string';
const now = new Date().toLocaleString();
class Payment extends Component{
state={
    cart:[],
    bank:[]
}
componentDidMount(){   
    this.bankInput()
    var links = queryString.parse(this.props.location.search)
    console.log(links)
    var id_pesanan= links.id_pesanan;
    axios.get('http://localhost:1997/cart?id_pesanan='+id_pesanan)
    .then((data)=> {
        console.log(data.data)
        this.setState({cart:data.data
        })
        
        console.log(this.state.cart)
        
    }).catch((err)=>{
        console.log(err)
    })
}
onAddFileImageChange = () => {
    if(document.getElementById("AddBrandImage").files[0] !== undefined) {
        this.setState({AddBrandImage: document.getElementById("AddBrandImage").files[0].name})
    }
    else {
        this.setState({AddBrandImage: 'Pilih Gambar'})
    }
}
bankInput=()=>{
    axios.get('http://localhost:1997/bank')
    .then((data)=> {
        console.log(data.data)
        this.setState({bank:data.data
        })
        
        console.log(this.state.bank)
        
    }).catch((err)=>{
        console.log(err)
    })       
}
pilihanBank=()=>{
    if(this.state.cart.length > 0){
        console.log(this.state.cart[0].bri)
        if(this.state.cart[0].bri === true){
            return(
                <div>
                <h4 className="mb-3">Transfer manual via Bank BRI</h4>
                <input type="hidden" ref="bank" value="BRI"/>
                </div>
            )
        }else if(this.state.cart[0].bca === true){
            return(
                <div>
                <h4 className="mb-3">Transfer manual via Bank BCA</h4>
                <input type="hidden" ref="bank" value="BCA"/>
                </div>
            )
        }else if(this.state.cart[0].bni === true){
            return(
                <div>
                <h4 className="mb-3">Transfer manual via Bank BNI</h4>
                <input type="hidden" ref="bank" value="BNI"/>
                </div>
            )
        }else if(this.state.cart[0].mandiri === true){
            return(
                <div>
                <h4 className="mb-3">Transfer manual via Bank Mandiri</h4>
                <input type="hidden" ref="bank" value="MANDIRI"/>
                </div>
            )
        }
    }    
}
buktiPembayaran=()=>{
    var links = queryString.parse(this.props.location.search)
    console.log(links)
    var bank = this.refs.bank.value;
    var id_pesanan= links.id_pesanan;
     var noRek= this.refs.noRek.value;
     var NamaRekening= this.refs.NamaRekening.value
    var date= now;
    axios.post('http://localhost:1997/bukti_pembayaran',{
            id_pesanan,bank,noRek,NamaRekening,date
            }).then((res)=>{
                console.log(res.data)
                window.location = "/homes";
            }).catch((err)=>{
            console.log(err)
            })
}
    render(){
        return(
            <div className="col-md-9 payment-page">
            <div className="col-md-8 order-md-1">
                            {this.pilihanBank()}
                            <h3>Transfer pada nomor Rekening berikut</h3>
                            <h3>1231241241241241241</h3>
                            <h3>bca bla bla</h3>
                            <h3>Kirim bukti Transfer pada form dibawah</h3>
                            <form className="needs-validation" noValidate>
                              <div className="row">
                                <div className="col-md-12 mb-3">
                                <p>Nomor Rekening {this.state.bank.nama_bank}</p>
                                  <input ref="noRek" type="text" className="form-control" id="firstName" placeholder='No Rekening' />
                                </div>
                                <div className="col-md-12 mb-3">
                                  <p>Nama Rekening</p>
                                  <input ref="NamaRekening" type="text" className="form-control" id="lastName" placeholder='Nama Rekening' />
                                    <div className="invalid-feedback">
                                    Valid last name is required.
                                    </div>
                                </div>
                                <br/>
                                  {/* <div className="col-md-12 mb-3">
                                  <p>Bukti pembayaran</p>
                                  <br/>
                                     <CustomInput type="file" id="AddBrandImage" name="AddBrandImage" label={this.state.AddBrandImage} onChange={this.onAddFileImageChange} />
                                  </div> */}
                                
                              </div>
                              <hr className="mb-4" />
                              <button onClick={this.buktiPembayaran} className="btn btn-primary btn-lg btn-block" type="button">Simpan</button>
                            </form>
                          </div>
                          <br />
                          
                          <hr className="mb-4" />
                          </div>

        )
    }
}
const mapStateToProps = (state) => {
    return{
        username:state.auth.username,
        produk: state.selectedProduk
    }
}
export default connect(mapStateToProps)(Payment);
