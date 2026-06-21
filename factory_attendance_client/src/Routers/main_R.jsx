import React from "react";
import {createBrowserRouter} from "react-router";
import HomePage from "../_Features/HomePage/HomePage.jsx";
import AppLayout from "../LayOut/AppLayout.jsx";
import EntryPage from "../_Features/Entry/EntryPage.jsx";
import ExitPage from "../_Features/Exit/ExitPage.jsx";
import ReportPage from "../_Features/Report/ReportPage.jsx";

const router = createBrowserRouter([
    {
        element:<AppLayout />,
        children:[
            {path:"/",        element:<HomePage />,},
            {path:"/Entry",   element:<EntryPage />,},
            {path:"/Exit",    element:<ExitPage />,},
            {path:"/Report",  element:<ReportPage />,},
        ]
    },
]);

import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import TableChartIcon from '@mui/icons-material/TableChart';

export const navItems = [
    {path:"/", name:"ראשי", icon:<HomeIcon />},
    {path:"/Entry", name:"כניסה למפעל", icon:<LoginIcon />},
    {path:"/Exit", name:"יציאה מהמפעל", icon:<LogoutIcon />},
    {path:"/Report", name:"דוח חודשי", icon:<TableChartIcon />},
]
export default router;
