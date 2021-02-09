import React from 'react';

export class Fahrenheit extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
       cv:0,
       fv:0
    };
    
}

  celsius(event){
    
    let fvalue=event.target.value;
     this.setState({
        fv:fvalue
            })
}
fvalue(){
  var v1=this.state.fv-32;
    let final=(v1*5)/9;
    this.setState({
        cv:final
            })
}
    render() {
        return (
          <div className="container">
            <div className="ml-5 pl-5">
            <div className="form-group form-inline">
              <label for="celsius">Fahrenheit :</label>
              <input type="number" className="form-control w-10" id="celsius" placeholder="Enter your Fahrenheit value" onChange={this.celsius.bind(this)}/>
              <button className="btn btn-md btn-primary m-2" onClick={this.fvalue.bind(this)}>Convert to Celsius</button>
            </div>
            <div className="form-group form-inline">
              <label for="celsius">Converted Celsius value :</label>
            <input type="text" className="form-control m-2 ml-4 w-auto" value={this.state.cv} disabled/>
            </div>
        </div>
        </div>
    )
  } 

}
