import MainNavgation from "./MainNavgation"
import { Fragment } from "react";

const Layout = (props) => {
    return (
        <Fragment>
            <MainNavgation />
            <main>{props.children}</main>
        </Fragment>
    );
};

export default Layout;