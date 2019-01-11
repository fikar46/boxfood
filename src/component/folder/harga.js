import React, { Component } from 'react'
import { Button, ButtonGroup } from 'reactstrap';

class Harga extends Component{
    constructor (props) {
        super(props);
        this.state = { 
            NumberSelected1:[3],
            NumberSelected2:[3],
            NumberSelected3:[3],
            PersonSelected1:[2],
            PersonSelected2:[2],
            PersonSelected3:[4]
        };
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
      }
      onRadioBtnClick(rSelected) {
        this.setState({ rSelected });
      }
      number1(NumberSelected1) {
        this.setState({ NumberSelected1 });
      }
      number2(NumberSelected2) {
        this.setState({ NumberSelected2 });
      }
      number3(NumberSelected3) {
        this.setState({ NumberSelected3 });
      }
      person1(PersonSelected1) {
        this.setState({ PersonSelected1 });
      }
      person2(PersonSelected2) {
        this.setState({ PersonSelected2 });
      }
      person3(PersonSelected3) {
        this.setState({ PersonSelected3 });
      }
    render(){
        return(
    
            <div className="container">
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h2>Pilih paket makanan anda</h2>
        <p className="lead">Sekarang menawarkan variasi resep dan makanan mulai dari $ 6,99</p>
      </div>
                <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Veggie Plan</h4>
                        </div>
                        
                        <img src='https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_auto,w_768/v1/hellofresh_website/us/cms/bags/img/2-person-veggiec-3-desktop-shop2x.jpg' alt='plan-image' className='plan-image'/>
                        <div className="card-body">
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>Veggie Plan</li>
                        <li> $ 8.99 / serving</li>
                        <li>  + $5.99 Shipping</li>
                        <li className='button-plan-food-1'>
                                <p className="sub-plan">Number of people</p>
                                <ButtonGroup>
                                    <Button color="primary" onClick={() => this.person1(2)} active={this.state.PersonSelected1 === 2}>Two</Button>
                                    <Button color="primary" onClick={() => this.person1(3)} active={this.state.PersonSelected1 === 3}>Three</Button>
                                    <Button color="primary" onClick={() => this.person1(4)} active={this.state.PersonSelected1 === 4}>Four</Button>
                                </ButtonGroup></li>
                        <li className='button-plan-food-2'> 
                                <p className="sub-plan">Recipes per week</p>
                                <ButtonGroup>
                                <Button color="primary" onClick={() => this.number1(3)} active={this.state.NumberSelected1 === 3}>Three</Button>
                                <Button color="primary" onClick={() => this.number1(4)} active={this.state.NumberSelected1 === 4}>Four</Button>
                                </ButtonGroup>
                                {/* <p>Selected: {this.state.rSelected}</p> */}
                        </li>
                                
                            <li><p>Resep vegetarian dengan protein nabati, biji-bijian, dan produk musiman.</p></li>
                        </ul>
                            <a href={`/meal-selection?plan=vegan&&person=${this.state.PersonSelected1}&&recipes=${this.state.NumberSelected1}`}><button type="button" className="btn btn-lg btn-block btn-primary">Select this plan</button>
                            </a>
                        </div>
                    </div>
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Classic plan</h4>
                        </div>
                        <img src='https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_auto,w_768/v1/hellofresh_website/us/cms/bags/img/2-person-c-3-desktop-shop2x_AB.jpg' alt='plan-image' className='plan-image'/>
                        <div className="card-body">
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>Classic Plan</li>
                        <li> $ 8.99 / serving</li>
                        <li>  + $5.99 Shipping</li>
                        <li className='button-plan-food-1'>
                                <p className="sub-plan">Number of people</p>
                                <ButtonGroup>
                                    <Button color="primary" onClick={() => this.person2(2)} active={this.state.PersonSelected2 === 2}>Two</Button>
                                    <Button color="primary" onClick={() => this.person2(3)} active={this.state.PersonSelected2 === 3}>Three</Button>
                                    <Button color="primary" onClick={() => this.person2(4)} active={this.state.PersonSelected2 === 4}>Four</Button>
                                </ButtonGroup></li>
                        <li className='button-plan-food-2'> 
                                <p className="sub-plan">Recipes per week</p>
                                <ButtonGroup>
                                <Button color="primary" onClick={() => this.number2(3)} active={this.state.NumberSelected2 === 3}>Three</Button>
                                <Button color="primary" onClick={() => this.number2(4)} active={this.state.NumberSelected2 === 4}>Four</Button>
                                </ButtonGroup>
                                {/* <p>Selected: {this.state.rSelected}</p> */}
                        </li>
                            <li><p>Berbagai macam daging, ikan, dan produk musiman kami.</p></li>
                        </ul>
                        <a href={`/checkout?plan=classic&&person=${this.state.PersonSelected2}&&recipes=${this.state.NumberSelected2}`}><button type="button" className="btn btn-lg btn-block btn-primary">Select this plan</button>
                            </a>
                        </div>
                    </div>
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Family plan</h4>
                        </div>
                        <img src='https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_auto,w_768/v1/hellofresh_website/us/cms/bags/img/family-2-desktop-shop2x_AB.jpg' alt='plan-image' className='plan-image'/>
                        <div className="card-body">
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>Family Plan</li>
                        <li> $ 8.99 / serving</li>
                        <li>  + $5.99 Shipping</li>
                        <li className='button-plan-food-1'>
                                <p className="sub-plan">Number of people</p>
                                <ButtonGroup>
                                    <Button color="primary" onClick={() => this.person3(4)} active={this.state.PersonSelected3 === 4}>Four</Button>
                                    <Button color="primary" onClick={() => this.person3(5)} active={this.state.PersonSelected3 === 5}>Five</Button>
                                    <Button color="primary" onClick={() => this.person3(6)} active={this.state.PersonSelected3 === 6}>Six</Button>
                                </ButtonGroup></li>
                        <li className='button-plan-food-2'> 
                                <p className="sub-plan">Recipes per week</p>
                                <ButtonGroup>
                                <Button color="primary" onClick={() => this.number3(3)} active={this.state.NumberSelected3 === 3}>Three</Button>
                                <Button color="primary" onClick={() => this.number3(4)} active={this.state.NumberSelected3 === 4}>Four</Button>
                                </ButtonGroup>
                                {/* <p>Selected: {this.state.rSelected}</p> */}
                        </li>
                            <li><p>Makanan cepat dan mudah dengan semua rasa yang dicintai seluruh keluarga.</p></li>
                        </ul>
                        <a href={`/checkout?plan=family&&person=${this.state.PersonSelected3}&&recipes=${this.state.NumberSelected3}`}><button type="button" className="btn btn-lg btn-block btn-primary">Select this plan</button>
                            </a>
                        </div>
                    </div>
                </div>
      </div>
        )
    }
}
export default Harga;