import Link from 'next/link';
import styles from './mainnav.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';

//components
import Modal from '../Modal/Modal';
import LoginPage from '../LoginPage/LoginPage';
import LoginPageItem from '../../data/loginPage';
import signupItem from "./../../data/SignupItem";

const MainNavgation = () => {

    const [showModal, setShowModal] = useState(true);
    const [showBackIcon, setShowBackIcon] = useState(false);
    const [loginAction, setLoginAction] = useState("Log in to TikTok");
    const [showPara, setShowPara] = useState(false);
    const [showItem, setShowItem] = useState(0);
    const [footer, setFooter] = useState("Don't have an account?")
    const [leftLabel, setLeftLabel] = useState("");
    const [show1stBox, setShow1stBox] = useState(true);
    const [show2ndBox, setShow2ndBox] = useState(false);
    const [show3rdBox, setShow3rdBox] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showLogin, setShowLogin] = useState(0);
    const [emailtheme, setEmailtheme] = useState("Email or Username");
    const [enterDigitcode, setEnterDigitcode] = useState("Enter 4-digit code");
    const [password, setPassword] = useState("Password");
    const [showRightLabel, setShowRightLabel] = useState(0);
    const [hidePs, setHidePs] = useState(false);
    const [isFooter, setIsFooter] = useState(false);
    const [showThing, setShowThing] = useState(0);


    useEffect(() => {
        setShowModal(false);
    }, []);

    const uploadHandler = () => {
        setShowModal(true);
        setLoginAction("Log in to TikTok");
        setIsFooter(false);
    };

    const backHandler = () => {
        setHidePs(false)
        if (showLogin === 3 && showRightLabel === 2) {
            setLoginAction("Log in");
            setLeftLabel("Phone");
            setShowRightLabel(0);
            setShow3rdBox(false);
            setPassword("Password")
            setShowLogin(2);
        } else if (showLogin === 3 && showRightLabel === 3) {
            setLoginAction("Log in");
            setLeftLabel("Email or Username");
            setShowRightLabel(1);
            setEmailtheme("Email or Username");
            setShow3rdBox(false);
            setPassword("Password")
            setShowLogin(1);
        } else if (showLogin === 2) {
            setShowLogin(0);
            setShow3rdBox(true);
            setShowPassword(false);
        } else if (showThing !== 0) {
            setShowThing(0);
            setLoginAction("Sign up for TikTok");
            setShowBackIcon(false);
        } else {
            setLoginAction("Log in to TikTok");
            setShowBackIcon(false);
            setShowItem(0);
        }
    }

    const authItemHandler = (item) => {
        setShowBackIcon(true);
        setShowItem(item.id)
        if (item.id === 1) {
            setLoginAction("Log in with QR code")
        } else if (item.id === 2) {
            setLoginAction("Log in");
            setLeftLabel("Phone");
            setShow1stBox(true);
            setShow2ndBox(false);
            setShow3rdBox(true);
            setEnterDigitcode("Enter 4-digit code")
            setShowPassword(false);
            setShowLogin(0);
            setShowRightLabel(0);

        } else if (item.id === 3) {
            setLoginAction("Facebook")
        } else if (item.id === 4) {
            setLoginAction("Google")
        } else if (item.id === 5) {
            setLoginAction("Twitter")
        } else if (item.id === 6) {
            setLoginAction("Apple")
        } else if (item.id === 7) {
            setLoginAction("Instagram")
        }
    }

    const loginHandler = () => {
        setShow3rdBox(false);
        setShowLogin(2);
        setShowPassword(true);
        setPassword("Password");
        setHidePs(false);
    }

    const logincodeHandler = () => {
        setShow3rdBox(true);
        setShowLogin(0);
        setShowPassword(false);
    }

    const forgotPassHandler = () => {
        setLoginAction("Reset Password");
        setLeftLabel("Enter phone number");
        setShowRightLabel(2);
        setShow3rdBox(true);
        setShowPassword(true);
        setPassword("Enter new password");
        setShowLogin(3);
        setHidePs(false);
    }

    const rightLabelHandler = () => {
        setLeftLabel("Email or Username")
        setShowRightLabel(1);
        setShow1stBox(false);
        setShow2ndBox(true);
        setShow3rdBox(false);
        setShowPassword(true);
        setShowLogin(1);
    }

    const showOneRightLabelHandler = () => {
        setLeftLabel("Phone");
        setShowRightLabel(0);
        setShow1stBox(true);
        setShow2ndBox(false);
        setShow3rdBox(true);
        setShowPassword(false);
        setShowLogin(0);
    }

    const showTwoRightLabelHandler = () => {
        setShowRightLabel(3);
        setLeftLabel("Enter email address");
        setShow1stBox(false);
        setShow2ndBox(true);
        setEmailtheme("Email Address");
        setEnterDigitcode("Enter 6-digit code");
        setHidePs(false);
    }

    const showThreeRightLabelHandler = () => {
        setShowRightLabel(2);
        setLeftLabel("Enter phone number");
        setShow1stBox(true);
        setShow2ndBox(false);
        setEmailtheme("Email or Username");
        setEnterDigitcode("Enter 4-digit code");
        setHidePs(false);
    }

    const forgotPwdHandler = () => {
        setLoginAction("Reset Password");
        setLeftLabel("Enter email address");
        setShowRightLabel(3);
        setEmailtheme("Email address");
        setShow3rdBox(true);
        setEnterDigitcode("Enter 6-digit code")
        setPassword("Enter new password");
        setShowLogin(3);
    }

    const PsHandler = () => {
        setHidePs(!hidePs);
    }

    const signupHandler = () => {
        if (isFooter) {
            setIsFooter(!isFooter)
            setShowItem(0);
            setLoginAction("Log in to TikTok");
            setFooter("Don't have an account?");
            setShowPara(false);
            setShowThing(0);
            setShowBackIcon(false);
        } else {
            setIsFooter(!isFooter)
            setShowItem(8);
            setLoginAction("Sign up for TikTok");
            setFooter("Already have an account?");
            setShowPara(true);
        }
    }

    const signupThingHandler = (item) => {
        setLoginAction("Sign up");
        setShowBackIcon(true);
        setShowThing(item.id);
    }

    return (
        <>
            {showModal ? (<Modal
                show={showModal}
                closeModal={() => setShowModal(false) & setShowBackIcon(false) &
                    setShowItem(0) & setShowPara(false) & setShowThing(0)}
                backHandler={backHandler}
                showBackIcon={showBackIcon}
                title={loginAction}
                footer={footer}
                isFooter={isFooter}
                signupHandler={signupHandler}
                showPara={showPara}
            >
                <LoginPage
                    data={LoginPageItem}
                    authItemHandler={authItemHandler}
                    showBackIcon={showBackIcon}
                    showItem={showItem}
                    leftLabel={leftLabel}
                    show1stBox={show1stBox}
                    show2ndBox={show2ndBox}
                    show3rdBox={show3rdBox}
                    showPassword={showPassword}
                    emailtheme={emailtheme}
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
                    showThing={showThing}
                    signupItem={signupItem}
                    signupThingHandler={signupThingHandler}
                />
            </Modal>) : null}

            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/static/images/tik-tok.png"
                        alt="TikTok"
                        width={32}
                        height={32}
                    />
                    <Link href='/'>
                        <a>TikTok</a>
                    </Link>
                </div>

                <div className={styles.inputContainer}>
                    <input placeholder='Search account and videos' />
                    <button>
                        <Image
                            src="/static/icons/search.svg"
                            alt="search icon"
                            width={20}
                            height={18}
                        />
                    </button>
                </div>

                <div className={styles.restContainer}>
                    <div className={styles.uploadContainer} onClick={uploadHandler}>
                        Upload
                    </div>

                    <button className={styles.loginContainer}>
                        <Link href='/Login'>Log in</Link>
                    </button>

                    <div className={styles.iconContent}>
                        <Image
                            src="/static/icons/more.svg"
                            alt="more icon"
                            width={25}
                            height={25}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainNavgation;