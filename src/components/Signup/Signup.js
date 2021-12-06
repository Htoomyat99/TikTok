import styles from "./signup.module.scss";
import Image from "next/image";
import { useState } from "react";

const Signup = ({ showThing, signupItem, signupThingHandler }) => {

    const [leftLabel, setLeftLabel] = useState("Phone");
    const [rightLabel, setRightLabel] = useState("Sign up with email");
    const [digit, setDigit] = useState("Enter 4-digit code");
    const [showBox, setShowBox] = useState(true);
    const [hidePs, setHidePs] = useState(false);

    const rightLabelHandler = () => {
        console.log("hello");
        setShowBox(!showBox);
        if (showBox) {
            setLeftLabel("Email");
            setRightLabel("Sign up with phone");
            setDigit("Enter 6-digit code")
        } else {
            setLeftLabel("Phone");
            setRightLabel("Sign up with email");
            setDigit("Enter 4-digit code")
        }
    }

    const PsHandler = () => {
        setHidePs(!hidePs)
    }

    return (
        <>
            {showThing === 0 ? (
                <>
                    {signupItem.map((item) => (
                        <div
                            className={styles.loginContainer}
                            key={item.id}
                            onClick={() => signupThingHandler(item)}>
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
                    ))}
                </>
            ) : showThing === 1 ? (
                <div className={styles.signupModal}>
                    <div className={styles.textContent1}>
                        When's your birthday?
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.calendarContainer}>
                            <div>Month</div>
                            <Image
                                src="/static/icons/down-arrow.svg"
                                alt="down arrow"
                                width={10}
                                height={10}
                            />
                        </div>
                        <div className={styles.calendarContainer}>
                            <div>Day</div>
                            <Image
                                src="/static/icons/down-arrow.svg"
                                alt="down arrow"
                                width={10}
                                height={10}
                            />
                        </div>
                        <div className={styles.calendarContainer}>
                            <div>Year</div>
                            <Image
                                src="/static/icons/down-arrow.svg"
                                alt="down arrow"
                                width={10}
                                height={10}
                            />
                        </div>                    </div>
                    <div className={styles.textContent2}>
                        Your birthday won't be shown publicly.
                    </div>

                    <div className={styles.LoginContent}>
                        <label className={styles.phoneContent}>{leftLabel}</label>
                        <label className={styles.usernameContent}
                            onClick={rightLabelHandler}>{rightLabel}
                        </label>
                    </div>

                    {showBox ? (
                        <div className={styles.phoneContainer}>
                            <div className={styles.regionContent}>
                                <a>CA+1</a>
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
                        </div>) : (
                        <>
                            <div className={styles.codeContainer}>
                                <input type="text" placeholder="Email address" />
                            </div>
                            <div className={styles.codeContainer} onClick={PsHandler}>
                                <input type="text" placeholder="Password" />
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
                            </div>
                        </>
                    )}
                    <div className={styles.codeContainer}>
                        <input type="text" placeholder={digit} />
                        <label>Send code</label>
                    </div>
                    <div className={styles.loginBarContent}><p>Next</p></div>
                </div>
            ) : showThing === 2 ? (
                <h3>Facebook Modal</h3>
            ) : showThing === 3 ? (
                <h3>Google Modal</h3>
            ) : (
                <h3>Twitter Modal</h3>
            )}
        </>
    );
}

export default Signup;