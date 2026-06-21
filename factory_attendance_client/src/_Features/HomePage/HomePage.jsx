import React from 'react';
import {Box, Typography, Paper} from "@mui/material";

function HomePage() {
    return (
        <Box>
            <Typography variant="h3" sx={{textAlign:'center', mt:3}}>מערכת רישום כניסה ויציאה</Typography>
            <Paper sx={{p:3, mt:3}}>
                <Typography>במערכת זו אפשר לרשום כניסת עובד לפי תעודת זהות, לרשום יציאה, ולהציג דוח חודשי לפי חודש ושנה.</Typography>
            </Paper>
        </Box>
    );
}
export default HomePage;
