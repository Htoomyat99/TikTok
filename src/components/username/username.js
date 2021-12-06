import styles from "./username.module.scss";
import Image from "next/dist/client/image";

const UserName = ({ leftLabel, show1stBox, show2ndBox, emailtheme, show3rdBox, showPassword, showLogin,
    enterDigitcode, password, loginHandler, logincodeHandler, forgotPassHandler, rightLabelHandler,
    showRightLabel, showOneRightLabelHandler, showTwoRightLabelHandler, showThreeRightLabelHandler,
    forgotPwdHandler, hidePs, PsHandler }) => {

    return (
        <div className={styles.LoginContainer}>

            {/* header */}
            <div className={styles.LoginContent}>
                <label className={styles.phoneContent}>{leftLabel}</label>
                {showRightLabel === 0 ? (
                    <label className={styles.usernameContent}
                        onClick={rightLabelHandler}>Log in with email or username
                    </label>
                ) : showRightLabel === 1 ? (
                    <label className={styles.usernameContent}
                        onClick={showOneRightLabelHandler}>Log in with Phone
                    </label>
                ) : showRightLabel === 2 ? (
                    <label className={styles.usernameContent}
                        onClick={showTwoRightLabelHandler}>Reset with email
                    </label>
                ) : (
                    <label className={styles.usernameContent}
                        onClick={showThreeRightLabelHandler}>Reset with phone number
                    </label>
                )}
            </div>

            {/* 1st box */}
            {show1stBox ? (
                <div className={styles.phoneContainer}>
                    <div className={styles.regionContent}>
                        <a>US+1</a>
                        <Image
                            src="/static/icons/down-arrow.svg"
                            alt="down arrow"
                            width={10}
                            height={10}
                        />
                    </div>
                    <div className={styles.spaceContent}><p></p></div>
                    <div className={styles.searchContent}>
                        <input type="text" placeholder="Phone number" />
                    </div>
                </div>) : null}

            {/* 2nd box */}
            {show2ndBox ? (
                <div className={styles.codeContainer}>
                    <input type="text" placeholder={emailtheme} />
                </div>) : null}

            {/* 3rd box */}
            {show3rdBox ? (
                <div className={styles.codeContainer}>
                    <input type="text" placeholder={enterDigitcode} />
                    <label>Send code</label>
                </div>) : null}

            {/* password box */}
            {showPassword ? (
                <div className={styles.codeContainer} onClick={PsHandler}>
                    <input type="text" placeholder={password} />
                    {hidePs ? (
                        <div className={styles.imagestyle}>
                            <Image
                                src="/static/icons/eyeOn.svg"
                                alt="eyeOn"
                                width={15}
                                height={15}
                            />
                        </div>
                    ) : (
                        <div className={styles.imagestyle}>
                            <Image
                                src="/static/icons/eyeOff.svg"
                                alt="eyeOff"
                                width={15}
                                height={15}
                            />
                        </div>
                    )}
                </div>) : null}

            {/* login and forgot password*/}
            {showLogin === 0 ? (
                <div className={styles.passwordContent} onClick={loginHandler}>
                    <label>Log in with password</label>
                </div>) : showLogin === 1 ? (
                    <div className={styles.passwordContent} onClick={forgotPwdHandler}>
                        <label>Forgot password?</label>
                    </div>) : showLogin === 2 ? (
                        <div className={styles.forgotPassword}>
                            <div>
                                <label onClick={forgotPassHandler}>Forgot password?</label>
                            </div>
                            <p></p>
                            <label onClick={logincodeHandler}>Log in with code</label>
                        </div>) : null}

            {/* Login box */}
            <div className={styles.loginBarContent}>
                <p>Log in</p>
            </div>
        </div >
    );
};

export default UserName;