import React,{ Component } from 'react';
class Jumbotron extends Component{
    render(){
        return (
            <div className="jumbo">
            <div className="container">
            <div style={{position:"absolute", marginTop:"30vh"}} >
            <span className="bg-dark text-light" style={{fontSize:"4vh",padding:10}} >Welcome to अन्नPoorna Kitchen</span><br />
            <blockquote className="blockquote" style={{fontSize:"2.5vh",paddingTop:20,display:'block',width:'50%'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </blockquote><br />
            <a href="Order"><button className="btn btn-success">Book a Meal!</button></a>
            </div>
            </div>
            <div>
            <img src="banner.jpg" style={{width:"100vw",height:"80vh"}} />
            </div>
            <div className="container text-center" id="rev">
            <em style={{fontSize:"56px"}}>People love <span className="text-success">our food</span></em>
            <br /><br /><br />
            </div>
            </div>
            
        );
    }
    }
    export default Jumbotron;
