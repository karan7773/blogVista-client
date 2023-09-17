import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout(params) {
    return(
        <main>
            <Header/>
            <Outlet/>
        </main>
    )
};
