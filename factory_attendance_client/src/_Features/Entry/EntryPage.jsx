import React, {useState} from 'react';
import {Box, Button, TextField, Typography, Paper} from "@mui/material";
import {useAddEntry} from "./apiHookEntry.js";

function EntryPage() {
    const {isAdding, addEntry} = useAddEntry();
    const [formData, setFormData] = useState({ worker_id:'', full_name:'', note:'' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({...prevData,[name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addEntry(formData);
    }

    return (
        <Paper sx={{p:3}}>
            <Typography variant="h3" sx={{textAlign:'center', mb:3}}>רישום כניסה למפעל</Typography>
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField name="worker_id" label="תעודת זהות" value={formData.worker_id} onChange={handleChange} fullWidth required />
                    <TextField name="full_name" label="שם העובד" value={formData.full_name} onChange={handleChange} fullWidth required />
                    <TextField name="note" label="הערה" value={formData.note} onChange={handleChange} fullWidth />
                    <Button type="submit" variant="contained" color="primary" disabled={isAdding}>שמור כניסה</Button>
                </Box>
            </form>
        </Paper>
    );
}
export default EntryPage;
