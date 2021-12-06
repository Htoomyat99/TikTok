import styles from "./LoginPage.module.scss";
import UseQr from '../../components/useQr/useQr';
import UserName from "../username/username";

import Image from "next/dist/client/image";
import { useState } from "react";
import Signup from "../Signup/Signup";

const LoginPage = ({ authItemHandler, showItem, data, leftLabel, show1stBox, show2ndBox,
    show3rdBox, emailtheme, showPassword, showLogin, enterDigitcode, password, loginHandler,
    logincodeHandler, forgotPassHandler, rightLabelHandler, showRightLabel, showOneRightLabelHandler,
    showTwoRightLabelHandler, showThreeRightLabelHandler, forgotPwdHandler, hidePs, PsHandler,
    showThing, signupItem, signupThingHandler }) => {

    const [hideqr, setHideqr] = useState(true);

    const mouseLeaveHandler = () => {
        setHideqr(true);
    }

    const mouseOverHandler = () => {
        setHideqr(false);
    }

    return (
        showItem === 0 ? (
            <>
                {data.map((item) =>
                    <div
                        className={styles.loginContainer}
                        onClick={() => authItemHandler(item)}
                        key={item.id}>
                        <a className={styles.loginIconContainer}>
                            <Image
                                src={item.icon}
                                alt={item.alt}
                                width={20}
                                height={20}
                            />
                        </a>
                        <div className={styles.loginTextContainer}>
                            {item.name}
                        </div>
                    </div>
                )}
            </>) : showItem === 1 ? (
                <UseQr
                    mouseLeaveHandler={mouseLeaveHandler}
                    mouseOverHandler={mouseOverHandler}
                    hideqr={hideqr}
                />) : showItem === 2 ? (
                    <UserName
                        leftLabel={leftLabel}
                        show1stBox={show1stBox}
                        show2ndBox={show2ndBox}
                        show3rdBox={show3rdBox}
                        emailtheme={emailtheme}
                        showPassword={showPassword}
                        showLogin={showLogin}
                        enterDigitcode={enterDigitcode}
                        password={password}
                        loginHandler={loginHandler}
                        logincodeHandler={logincodeHandler}
                        forgotPassHandler={forgotPassHandler}
                        rightLabelHandler={rightLabelHandler}
                        showRightLabel={showRightLabel}
                        showOneRightLabelHandler={showOneRightLabelHandler}
                        showTwoRightLabelHandler={showTwoRightLabelHandler}
                        showThreeRightLabelHandler={showThreeRightLabelHandler}
                        forgotPwdHandler={forgotPwdHandler}
                        hidePs={hidePs}
                        PsHandler={PsHandler}
                    />

                ) : showItem === 3 ? (
                    <h3 className={styles.apiContainer}>facebook modal</h3>
                ) : showItem === 4 ? (
                    <h3 className={styles.apiContainer}>google modal</h3>
                ) : showItem === 5 ? (
                    <h3 className={styles.apiContainer}>twitter modal</h3>
                ) : showItem === 6 ? (
                    <h3 className={styles.apiContainer}>apple modal</h3>
                ) : showItem === 7 ? (
                    <h3 className={styles.apiContainer}>instagram modal</h3>
                ) : (
            <Signup
                showThing={showThing}
                signupItem={signupItem}
                signupThingHandler={signupThingHandler} />
        )
    );
};

export default LoginPage;