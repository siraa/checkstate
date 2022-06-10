import logo from './logo.svg';
import React from 'react';
import img     from  './photo.jpg' ;
import './App.css';



class App extends React.Component {
  constructor(props){
    super(props);
      this.state={
        show:false  ,

person :{
 
    fullName:"Taysir Ouaslati",
    profession:"Developper",
    photo:img,
    count:0
  
 } 
  }
  };
  componentDidMount() {
    console.log("hello ");
    this.person = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }

show=()=> {
this.setState({show:!this.state.show})

}
 render() {
  return (
    <div>
     
      <h1>my profile : {this.state.person.fullName}</h1>
      <button onClick={this.show}>My Profile</button>  <br/>
    
      { this.state.show ? 
        <div>

          <img src={this.state.person.photo} alt="Photo" style={{margin:"10px",width:"400px",display:'inline-block'}}></img>
          <div> {this.state.person.fullName}</div> <br/>
          <div>{this.state.person.profession}</div><br/>
        </div>  : null}
       
       
    </div>
  );
}


}


export default App;
