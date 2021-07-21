import React,{ Component } from 'react';
class Header extends Component {
    render(){
        return (
            <header className="fixed-top">
<div className="navbar navbar-expand-sm navbar-dark">
<div className="container"><span className="navbar-brand">
अन्नpoorna Kitchen
</span>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mynav"><span className="navbar-toggler-icon" /></button>
<div className="collapse navbar-collapse" id="mynav">
<nav className="navbar-nav">
<a href="/" className="nav-item nav-link">Home</a>
<a href="Order" className="nav-item nav-link">Order</a>
<a href="/#rev" className="nav-item nav-link">Reviews</a>
<a href="/#contact" className="nav-item nav-link">Contact Us</a>
</nav>
</div>
</div>
</div>
</header>
        );
    }
}
export default Header;