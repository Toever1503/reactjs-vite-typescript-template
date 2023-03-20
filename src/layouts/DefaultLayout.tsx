import { Outlet, useRoutes } from "react-router-dom";

export default function DefaultLayout({ }: any) {
    if (window.location.pathname === "/") {
        console.log('redirect dashboard');
    }
    return (
        <div className="text-3xl text-red-500 font-bold underline">
            Default layout 12
        </div>
    )
}