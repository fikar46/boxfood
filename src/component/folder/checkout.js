import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import queryString from 'query-string';
const now = new Date().toLocaleString();
class CheckOut extends Component{
    state= {
        listProduk: [],
        paket:[],
        harga:[],
        promo:[],
        cart:[]
    };
componentDidMount(){
    this.totalharga()
    this.promoInput()
    this.getCartList()
    // console.log(p1)
    axios.get('http://localhost:1997/produk')
    .then((data)=> {
        console.log(data.data)
        this.setState({listProduk:data.data
        })
        console.log(this.state.listProduk)
        
    }).catch((err)=>{
        console.log(err)
    })
}
makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
}
getCartList=()=>{
    axios.get(`http://localhost:1997/cart?username=${this.props.username}`)
    .then((data)=> {
        console.log(data.data)
        this.setState({cart:data.data})
    }).catch((err)=>{
        console.log(err)
    })
}
promoInput=()=>{
    var promocode= this.refs.promocode.value
    axios.get('http://localhost:1997/promo?nama_promo='+promocode)
    .then((res)=> {
        console.log(res.data)
        this.setState({promo:res.data[0].potongan
        })
        console.log(this.state.promo)
    }).catch((err)=>{
        console.log(err)
    })
}

totalharga(){
    
    var links = queryString.parse(this.props.location.search)
    console.log(links)
    var plan= links.plan;
    var person= parseInt(links.person)
    axios.get('http://localhost:1997/paket?nama_paket='+plan)
    .then((res)=> {
        console.log(res.data)
        if(person===2){
            this.setState({
                harga: res.data[0].paket_2orang
            })
            console.log(res.data.paket_2orang)
        }else if(person===3){
            this.setState({
                harga: res.data[0].paket_3orang
            })
            console.log(res.data.paket_3orang)
        }else if(person===4){
            this.setState({
                harga: res.data[0].paket_4orang
            })
            console.log(res.data.paket_4orang)
        }else{
            this.setState({
                harga: res.data[0].paket_5orang
            })
            console.log(res.data.paket_5orang)
        }
        
        
    }).catch((err)=>{
        console.log(err)
    })
}
componentWillMount(){
    axios.get('http://localhost:1997/paket')
    .then((data)=> {
        console.log(data.data)
        this.setState({paket:data.data})
        console.log(this.state.paket)
    }).catch((err)=>{
        console.log(err)
    })
}
pilihanpaket =()=>{
    var links = queryString.parse(this.props.location.search)
    console.log(links)
    var plan= links.plan;
    var person= parseInt(links.person)
    var filterProduk = this.state.paket.filter((item)=>{
        return item["nama_paket"] == plan
    })
    var getproduk = filterProduk.map(item=>{
        if(person === 2){
            
            return(
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
            <h6 className="my-0">{item.nama_paket}</h6>
                        <small className="text-muted">{item.caption}</small>
                    </div>
                    <span className="text-muted">{item.paket_2orang}</span>
                </li>
            )
        }else if(person ===3){
            return(
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
            <h6 className="my-0">{item.nama_paket}</h6>
                        <small className="text-muted">{item.caption}</small>
                    </div>
                    <span className="text-muted">{item.paket_3orang}</span>
                </li>
            )
        }else if(person ===4){
            return(
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
            <h6 className="my-0">{item.nama_paket}</h6>
                        <small className="text-muted">{item.caption}</small>
                    </div>
                    <span className="text-muted">{item.paket_4orang}</span>
                </li>
            )
        }else if(person ===5){
            return(
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
            <h6 className="my-0">{item.nama_paket}</h6>
                        <small className="text-muted">{item.caption}</small>
                    </div>
                    <span className="text-muted">{item.paket_5orang}</span>
                </li>
            )
        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    }) 
    return getproduk
}
listpilihan1 =()=>{
    var links = queryString.parse(this.props.location.search)
    console.log(links)
    var p1= parseInt(links.p1);
    var filterProduk = this.state.listProduk.filter((item)=>{
        return item["id"] == p1
    })
    var getproduk = filterProduk.map(item=>{
        return(
            <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 className="my-0">{item.namaproduk}</h6>
                <small className="text-muted">{item.caption}</small>
            </div>
           
            </li>
        )
    }) 
    return getproduk
}
listpilihan2 =()=>{
    var links = queryString.parse(this.props.location.search)
    console.log(links)
    var p2= parseInt(links.p2);
    var filterProduk = this.state.listProduk.filter((item)=>{
        return item["id"] == p2
    })
    var getproduk = filterProduk.map(item=>{
        return(
            <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 className="my-0">{item.namaproduk}</h6>
                <small className="text-muted">{item.caption}</small>
            </div>
            </li>
        )
    }) 
    return getproduk
}
listpilihan3 =()=>{
    var links = queryString.parse(this.props.location.search)
    console.log(links)
    var p3= parseInt(links.p3);
    var filterProduk = this.state.listProduk.filter((item)=>{
        return item["id"] == p3
    })
    var getproduk = filterProduk.map(item=>{
        return(
            <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 className="my-0">{item.namaproduk}</h6>
                <small className="text-muted">{item.caption}</small>
            </div>
            </li>
        )
    }) 
    return getproduk
}
listpilihan4 =()=>{
    var links = queryString.parse(this.props.location.search)
    console.log(links)
    var p4= parseInt(links.p4);
    var filterProduk = this.state.listProduk.filter((item)=>{
        return item["id"] == p4
    })
    var getproduk = filterProduk.map(item=>{
        return(
            <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 className="my-0">{item.namaproduk}</h6>
                <small className="text-muted">{item.caption}</small>
            </div>
            </li>
        )
    }) 
    return getproduk
}
diskonfunction=()=>{
    var potongan = this.state.promo
    var harga = this.state.harga
    var diskon= potongan*harga
    return(
        <li className="list-group-item d-flex justify-content-between bg-light">
            <div className="text-success">
            <h6 className="my-0">Promo code</h6>
            <small>EXAMPLECODE</small>
            </div>
            <span className="text-success">{diskon}</span>
        </li>
    )
}
functionTotalSetelahPotongan=()=>{
    var potongan = this.state.promo
    var harga = this.state.harga
    var diskon= potongan*harga
    var total= harga-diskon
    if(this.state.promo !== ''){
        return(
            <li className="list-group-item d-flex justify-content-between">
                <span>Total (Rp)</span>
                <strong>Rp {total}</strong>
            </li>
        )
    }else{
        return(
            <li className="list-group-item d-flex justify-content-between">
                <span>Total (Rp)</span>
                <strong>Rp {harga}</strong>
            </li>
        )
    }
    
}
onCheckoutClick=()=>{
    var id_pesanan = this.makeid();
    var links = queryString.parse(this.props.location.search)
    console.log(links)
    var plan= links.plan;
    var username= this.props.username;
    var person= parseInt(links.person);
    var week = parseInt(links.week);
    var p1= parseInt(links.p1);
    var p2= parseInt(links.p2);
    var p3= parseInt(links.p3);
    var p4= parseInt(links.p4);
    var firstName = this.refs.firstName.value
    var lastName = this.refs.lastName.value
    var phone = this.refs.phone.value
    var email = this.refs.email.value
    var address = this.refs.address.value
    var kelurahan = this.refs.kelurahan.value
    var kota = this.refs.kota.value
    var zipCode = this.refs.zipCode.value
    var potongan = this.state.promo
    var harga = this.state.harga
    var diskon= potongan*harga
    var total= harga-diskon
    var date = now;
    var saveAddress= this.refs.saveAddress.checked
    var bri = this.refs.bri.checked;
    var bni = this.refs.bni.checked;
    var bca = this.refs.bca.checked;
    var mandiri = this.refs.mandiri.checked;
    if(this.state.promo === ''){
        if(this.state.cart.username!==username){
        
            axios.post('http://localhost:1997/cart',{
            id_pesanan,username,firstName,lastName,phone,email,address,kelurahan,kota,zipCode,paket:plan,person,id_p1:p1,id_p2:p2,id_p3:p3,id_p4:p4,week,total_harga:harga,saveAddress,bri,bni,bca,mandiri,date
            }).then((res)=>{
                console.log(res.data)
                window.location = "/payment?id_pesanan="+id_pesanan;
            }).catch((err)=>{
            console.log(err)
            })
    }else{
            axios.put('http://localhost:1997/cart?username='+username,{
                id_pesanan,username,firstName,lastName,phone,email,address,kelurahan,kota,zipCode,paket:plan,person,id_p1:p1,id_p2:p2,id_p3:p3,id_p4:p4,week,total_harga:harga,saveAddress,bri,bni,bca,mandiri,date
            }).then((res)=>{
                console.log(res.data)
                window.location = "/payment?id_pesanan="+id_pesanan;
        }).catch((err)=>{
        console.log(err)
        })
    }
    }else{
        if(this.state.cart.username!==username){
        
            axios.post('http://localhost:1997/cart',{
                id_pesanan,username,firstName,lastName,phone,email,address,kelurahan,kota,zipCode,paket:plan,person,id_p1:p1,id_p2:p2,id_p3:p3,id_p4:p4,week,total_harga:total,saveAddress,bri,bni,bca,mandiri,date
            }).then((res)=>{
                console.log(res.data)
                window.location = "/payment?id_pesanan="+id_pesanan;
            }).catch((err)=>{
            console.log(err)
            })
    }else{
            axios.put('http://localhost:1997/cart?username='+username,{
                id_pesanan,username,firstName,lastName,phone,email,address,kelurahan,kota,zipCode,paket:plan,person,id_p1:p1,id_p2:p2,id_p3:p3,id_p4:p4,week, total_harga:total,saveAddress,bri,bni,bca,mandiri,date
            }).then((res)=>{
                console.log(res.data)
                window.location = "/payment?id_pesanan="+id_pesanan;
        }).catch((err)=>{
        console.log(err)
        })
    }
    }
    
    
}
    render(){
        var params = queryString.parse(this.props.location.search)
        console.log(params)
        var plan = params.plan;
        var recipes = parseInt(params.recipes);
        var person = params.person;
        if(this.props.username !== ''){
            return(
                <div className="container">
                        <div className="py-5 text-center">
                          <h2>Checkout form</h2>
                          <p className="lead"> Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                        </div>
                        <div className="row">
                          <div className="col-md-4 order-md-2 mb-4">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                              <span className="text-muted">Your cart</span>
                              <span className="badge badge-secondary badge-pill">{recipes} resep </span>
                            </h4>
                            <div>
                            <ul className="list-group mb-3">
                            {this.pilihanpaket()}
                            
                            {this.listpilihan1()}
                            {this.listpilihan2()}
                            {this.listpilihan3()} 
                            {this.listpilihan4()}
                            {this.diskonfunction()}
                            {this.functionTotalSetelahPotongan()}
                            {/* <li className="list-group-item d-flex justify-content-between bg-light">
                                <div className="text-success">
                                <h6 className="my-0">Promo code</h6>
                                <small>EXAMPLECODE</small>
                                </div>
                                <span className="text-success">-({this.state.promo}*{this.state.harga})</span>
                            </li> */}
                            {/* <li className="list-group-item d-flex justify-content-between">
                                <span>Total (Rp)</span>
                                <strong>Rp {this.state.harga}</strong>
                            </li> */}
                            </ul>
                            </div>
                            <form className="card p-2">
                              <div className="input-group">
                                <input ref="promocode" type="text" className="form-control" placeholder="Promo code" />
                                <div className="input-group-append">
                                  <button type="button" onClick={this.promoInput} className="btn btn-secondary">Redeem</button>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className="col-md-8 order-md-1">
                            <h4 className="mb-3">Alamat pengantaran</h4>
                            <form className="needs-validation" noValidate>
                              <div className="row">
                                <div className="col-md-6 mb-3">
                                  
                                  <input ref="firstName" type="text" className="form-control" id="firstName" placeholder='first name' />
                                  <div className="invalid-feedback">
                                    Valid first name is required.
                                  </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                  {/* <label htmlFor="lastName">Last name</label> */}
                                  <input ref="lastName" type="text" className="form-control" id="lastName" placeholder='last name' />
                                  <div className="invalid-feedback">
                                    Valid last name is required.
                                  </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                  
                                  <input ref="phone" type="number" className="form-control" id="phone" placeholder='+628xxx' />
                                  <div className="invalid-feedback">
                                    Valid phone is required.
                                  </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                  {/* <label htmlFor="lastName">Last name</label> */}
                                  <input ref="email" type="email" className="form-control" id="email" placeholder='email' />
                                  <div className="invalid-feedback">
                                    Valid last name is required.
                                  </div>
                                </div>
                              </div>
                              <div className="mb-3">
                                <p>Alamat</p>
                                <input ref="address" type="text" className="form-control" id="address2" placeholder="Nama jalan dan nomor rumah" />
                              </div>
                              <div className="row">
                                <div className="col-md-5 mb-3">
                                  {/* <label htmlFor="country">Country</label> */}
                                  <select ref="kelurahan" className="custom-select d-block w-100" id="country" required>
                                    <option value>Kelurahan</option>
                                    <option>Tanah tinggi</option>
                                  </select>
                                  <div className="invalid-feedback">
                                    Please select a valid region.
                                  </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                  {/* <label htmlFor="state">State</label> */}
                                  <select ref="kota" className="custom-select d-block w-100" id="state" required>
                                    <option value>Kota</option>
                                    <option>Tangerang</option>
                                  </select>
                                  <div className="invalid-feedback">
                                    Please provide a valid city.
                                  </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                  {/* <label htmlFor="zip">Zip</label> */}
                                  <input ref="zipCode" type="text" className="form-control" id="zip" placeholder="kode pos"/>
                                  <div className="invalid-feedback">
                                    Zip code required.
                                  </div>
                                </div>
                              </div>
                              <hr className="mb-4" />
                              <div className="custom-control custom-checkbox">
                                <input ref="saveAddress" type="checkbox" className="custom-control-input" id="save-info" />
                                <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
                              </div>
                              <hr className="mb-4" />
                              <h4 className="mb-3">Payment</h4>
                              <div className="d-block my-3">
                                <div className="custom-control custom-radio">
                                  <input ref="bri" id="bri" name="paymentMethod" type="radio" className="custom-control-input" defaultChecked required />
                                  <label className="custom-control-label" htmlFor="bri">Transfer BRI</label>
                                </div>
                                <div className="custom-control custom-radio">
                                  <input ref="bni" id="bni" name="paymentMethod" type="radio" className="custom-control-input" required />
                                  <label className="custom-control-label" htmlFor="bni">Transfer BNI</label>
                                </div>
                                <div className="custom-control custom-radio">
                                  <input ref="bca" id="bca" name="paymentMethod" type="radio" className="custom-control-input" required />
                                  <label className="custom-control-label" htmlFor="bca">Transfer BCA</label>
                                </div>
                                <div className="custom-control custom-radio">
                                  <input ref="mandiri" id="mandiri" name="paymentMethod" type="radio" className="custom-control-input" required />
                                  <label className="custom-control-label" htmlFor="mandiri">Transfer Mandiri</label>
                                </div>
                              </div>
                              
                              <hr className="mb-4" />
                              <button onClick={this.onCheckoutClick} className="btn btn-primary btn-lg btn-block" type="button">Continue to checkout</button>
                            </form>
                          </div>
                        </div>
                        <footer className="my-5 pt-5 text-muted text-center text-small">
                          <p className="mb-1">© 2017-2018 Company Name</p>
                          <ul className="list-inline">
                            <li className="list-inline-item"><a href="#">Privacy</a></li>
                            <li className="list-inline-item"><a href="#">Terms</a></li>
                            <li className="list-inline-item"><a href="#">Support</a></li>
                          </ul>
                        </footer>
                      </div>
                        )
        }
        
    }
}
const mapStateToProps = (state) => {
    return{
        username:state.auth.username,
        produk: state.selectedProduk
    }
}
export default connect(mapStateToProps)(CheckOut);