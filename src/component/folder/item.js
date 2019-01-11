import React, { Component } from 'react';
import { connect } from 'react-redux';
import { select_produk } from '../../actions';
class Item extends Component{
    onItemClick = () => {
        this.props.select_produk(this.props.produk);
    }

    render(){
        const {id,namaproduk,image,caption} = this.props.produk;
        return(
        
          <div onClick={this.onItemClick} className="col-sm-4 file">
            <div className="panel panel-primary">
            
              <div className="panel-body"><img src={image} className="img-responsive" style={{width: '100%'}} alt="Image" /></div>
              <div className="panel-heading"><p className="text-produk">{namaproduk}</p><p className="text-produk">{caption}</p></div>
              <div className="panel-footer"><a href={`/produkdetail?produkid=${id}&namaproduk=${namaproduk}`}><p className='detail-item'>Detail</p></a></div>
            </div>
          </div>
       
    
        );
    }
}
export default connect(null, { select_produk })(Item);











