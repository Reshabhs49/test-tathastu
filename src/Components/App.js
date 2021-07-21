import React from 'react';
import '../App.css';
import '../fontawesome/css/all.css';
import { Router } from '@reach/router';
import Reviews from './Reviews';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
import Header from './Header';
import Order from './Order.js'

class Home extends React.Component {
render(){ 
 return (<div>
     <Header />
     <Jumbotron />
     <Reviews />
     <Footer />
 </div>);
}
}

class App extends React.Component {
render(){ 
 return (
<Router>
   <Home path="/"/>  
   <Order path="/Order" />
</Router>
 );
}
}

export default App;
