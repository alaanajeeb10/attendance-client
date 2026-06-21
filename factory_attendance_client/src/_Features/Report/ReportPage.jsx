import React, {useState} from 'react';
import {Box, Button, TextField, Typography, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {useGetReport} from "./apiHookReport.js";

function ReportPage() {
    const today = new Date();
    const [worker_id, setWorkerId] = useState('');
    const [month, setMonth] = useState(today.getMonth()+1);
    const [year, setYear] = useState(today.getFullYear());
    const [enabled, setEnabled] = useState(false);
    const { data: { list: ReportArr } = {}, isLoading, isError, error} = useGetReport(worker_id, month, year, enabled);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEnabled(true);
    }

    return (
        <Paper sx={{p:3}}>
            <Typography variant="h3" sx={{textAlign:'center', mb:3}}>דוח נוכחות חודשי לעובד</Typography>            <form onSubmit={handleSubmit}>
                <Box sx={{ display:'flex', gap:2, mb:3, flexWrap:'wrap' }}>
                    <TextField label="תעודת זהות" value={worker_id} onChange={(e)=>{setWorkerId(e.target.value); setEnabled(false)}} required />
                    <TextField type="number" label="חודש" value={month} onChange={(e)=>{setMonth(e.target.value); setEnabled(false)}} required />
                    <TextField type="number" label="שנה" value={year} onChange={(e)=>{setYear(e.target.value); setEnabled(false)}} required />
                    <Button type="submit" variant="contained">הצג דוח</Button>
                </Box>
            </form>
            {isLoading && <p>Loading...</p>}
            {isError && <p>אירעה שגיאה בטעינת הנתונים</p>}
            {ReportArr && ReportArr.length === 0 && <Typography>לא נמצאו רשומות לעובד בחודש שנבחר</Typography>}
            {ReportArr && ReportArr.length > 0 && <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>מספר</TableCell>
                        <TableCell>תעודת זהות</TableCell>
                        <TableCell>שם העובד</TableCell>
                        <TableCell>סוג פעולה</TableCell>
                        <TableCell>תאריך</TableCell>
                        <TableCell>שעה</TableCell>
                        <TableCell>הערה</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ReportArr.map((item)=>(
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.worker_id}</TableCell>
                            <TableCell>{item.full_name}</TableCell>
                            <TableCell>{item.action_type === 'IN' ? 'כניסה' : 'יציאה'}</TableCell>
                            <TableCell>{item.action_date}</TableCell>
                            <TableCell>{item.action_time}</TableCell>
                            <TableCell>{item.note}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>}
        </Paper>
    );
}
export default ReportPage;
