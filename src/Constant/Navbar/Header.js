import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MDBIcon, MDBBtn } from "mdbreact";

import AppBar from '@material-ui/core/AppBar';
import './index.css';



function DenseAppBar(props) {
  const { classes } = props;
  return (
    <div className='root' >
      <AppBar style={{
        backgroundColor: '#424242', height: '7%', position: 'relative'}}>
        <Toolbar variant="dense">

          <div className='mailIcon'>
            <MDBIcon icon="envelope-o" />
          </div>

          <Typography color="inherit" className='mail'>
            muhammadsarim555@gmail.com
          </Typography>

          <div style={{ marginLeft: '25%' }}>
            <input type="search" placeholder="search" className='searchBar' active={false} />
            <button className='searchBar'>
              <MDBIcon icon="search" />
            </button>
          </div>

          <div className='searchIcon'>
          </div>

          <div style={{ border: 'black', marginLeft: '2%' }} className="account">
            <MDBIcon icon="user" />
            <span className="account"> Account </span>
          </div>

          <div style={{ marginLeft: '2%' }}>
            <MDBBtn color="deep-orange" >
              <MDBIcon icon="shopping-cart" /> My Cart </MDBBtn>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}

DenseAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles()(DenseAppBar);