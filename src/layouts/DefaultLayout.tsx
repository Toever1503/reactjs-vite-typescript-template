import { Outlet, useRoutes } from "react-router-dom";
import TheHeader from "../components/TheHeader";

export default function DefaultLayout(props: any) {

    return (
        <>
            <TheHeader />
            <Outlet />
        </>
    )
}