import { Outlet, useRoutes } from "react-router-dom";

export default function DefaultLayout({ }: any) {
    if (window.location.pathname === "/") {
        console.log('redirect dashboard');
    }
    return (
        <div>
            Default layout 12
        </div>
    )
}