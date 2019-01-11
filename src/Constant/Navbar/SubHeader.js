import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Logo from '../../Assets/logo.png';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
        borderBottom: '1px solid darkgray',
        paddingBottom: '2%',
        marginTop: '2%',
    },
    bg: {
        backgroundColor: 'gray',
        marginTop: '3.3%',
        height: '22%',
        paddingRight: '12%',
        paddingLeft: '10%',
    },
};

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar style={styles.bg}>
                <Toolbar >
                    <Typography color="inherit" className={classes.grow}>
                        <img src={Logo} style={{ width: 150, height: 50 }} />
                    </Typography>
                </Toolbar>
                <div style={{ paddingLeft: '1%', marginTop: 15 }}>
                    <a href="#" className="navLink">Home</a>
                    <a href="#" className="navLink">Shop</a>
                    <a href="#" className="navLink">Blog</a>
                    <a href="#" className="navLink">Contact</a>
                </div>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);