import React from 'react'
import { AutoComplete  } from '@react-google-maps/api';
import {AppBar , Toolbar , Typography , InputBase , Box} from '@material-ui/core' ;
import SearchIcon from "@material-ui/icons/Search"

import useStyles from './styles';


const Header = () => {
    //useStyles hook
    const classes =useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant= "h5" className={classes.title}>
                    Travel 
                    </Typography>
                    <Box display="flex">
                    <Typography variant= "h6" className={classes.title}>
                        Explore new places
                    </Typography>
                    {/* <AutoComplete> */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}> 
                                <SearchIcon />
                            </div>
                        </div>
                        <InputBase placeholder ="Seaarch" classes = {{root: classes.inputRoot, input : classes.inputInput}} />

                    {/* </AutoComplete>  */}
                    </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
