import React from 'react';
import {Outlet} from "react-router";

function EmptyLayout(props) {
    return (
        <>
            <h3>זה משהו שנראה בראש כל אחד מהעמודים</h3>
            <Outlet />
        </>
    );
}

export default EmptyLayout;