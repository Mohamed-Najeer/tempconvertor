import React from 'react';

export class Celsius extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
       cv:0,
       fv:0
    };
    
}

  celsius(event){
    
    let cvalue=event.target.value;
     this.setState({
        cv:cvalue
            })
}
fvalue(){
  var v1=(this.state.cv*9)/5;
    let final=v1+32;
    this.setState({
        fv:final
            })
}
    render() {
        return (
          <div className="container">
            <div className="ml-5 pl-5">
            <div className="form-group form-inline">
              <label for="celsius">Celsius :</label>
              <input type="number" className="form-control w-10" id="celsius" placeholder="Enter your celsius value" onChange={this.celsius.bind(this)}/>
              <button className="btn btn-md btn-primary m-2" onClick={this.fvalue.bind(this)}>Convert to Fahrenheit</button>
            </div>
            <div className="form-group form-inline">
              <label for="celsius">Converted Fahrenheit value :</label>
            <input type="text" className="form-control m-2 ml-4 w-auto" value={this.state.fv} disabled/>
            </div>
        </div>
        </div>
    )
  } 
}
