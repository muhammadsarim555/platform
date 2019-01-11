import React, { Component } from 'react';
import Navbar from '../Constant/Navbar';
import Footer from '../Constant/Footer/Footer';

export default class Container extends Component {
  render() {
    return (
      <div >
        <Navbar />
        <h3>Home</h3>
        <Footer />
      </div>
    );
  }
}


