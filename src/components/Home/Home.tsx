import React from 'react';
 
// Imports for styling
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import bus_image from '../../assets/images/hippie_bus.jpg'

import { Link } from 'react-router-dom';
import { classicNameResolver } from 'typescript';

interface Props {
    title: String;
}

// New Make Styles Code
const useStyles = makeStyles({
    root: {
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'rgb(28, 24, 22)'
    },
    logo_navigation: {
        listStyle:'none',
        textTransformation: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a: {
        display: 'block',
        padding: '1em',
        color: 'black'
    },
    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bus_image})`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute'
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white'
    }

})

export const Home= (props:Props) => {

    //New Classes Variable using useStyles hook
    const classes= useStyles();

    return(
        <div className={classes.root}>
            {/* Nav Bar */}
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={`${classes.logo}`}>
                        <Link to ='/' className={`${classes.logo_a} ${classes.logo_navigation}`}>Model</Link>

                    </h1>
                    <ul className={`${classes.navigation} ${classes.logo_navigation}`}>
                        <li>
                            <Link to= '/' className={classes.nav_a}>Home</Link>
                        </li>
                        <li>
                            <Link to= '/dashboard' className={classes.nav_a}>About</Link>
                        </li>
                        <li>
                            <Link to= '/singin' className={classes.nav_a}>Learn More</Link>
                        </li>

                    </ul>
                </div>
            </nav>

            {/* Main Home Area */}
            <main className= {classes.main}>
                <div className={classes.main_text}>
                    <h1> { props.title } </h1>
                    <p>I like Hippie Busses!</p>
                    <Button color= 'primary' variant ='contained'>Click Me</Button>
                </div>
            </main>
            Hello World
        </div>
    )
}