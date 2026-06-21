import { Paper, Typography } from '@mui/material';
import {FooterHeight} from '../theme_params.jsx';
import React from "react";

function Footer() {
    return (
        <Paper variant="footer" component="footer" sx={{position:'fixed',bottom:0,width:'100%',height:FooterHeight,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Typography variant="body2">&copy; {new Date().getFullYear()} Factory Attendance</Typography>
        </Paper>
    );
}
export default Footer;
