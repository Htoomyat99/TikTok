import styles from './Modal.module.scss';
import { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import Image from 'next/dist/client/image';

const Modal = ({ children, show, closeModal, title, footer, backHandler, showBackIcon,
    signupHandler, isFooter, showPara }) => {


    const [isBrowser, setIsBrowser] = useState(false);
    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const modalContent = show ? (
        <div className={styles.modalBody}>
            <div className={styles.modalContent}>
                <div className={styles.closeModelContent}>
                    <div className={styles.backIcon}>
                        {showBackIcon ? (
                            <Image onClick={backHandler}
                                src="/static/icons/back.svg"
                                alt="back icon"
                                width={18}
                                height={18}
                            />
                        ) : null}
                    </div>
                    <a onClick={closeModal}>X</a>
                </div>

                <div className={styles.modalContentItem}>
                    <h3>{title}</h3>
                    <div className={styles.modalContainer}>{children}</div>
                </div>

                {showPara ? (
                    <p className={styles.para}>
                        By continuing, you agree to TikTok’s <b>Terms of Service</b> and
                        confirm that you have read TikTok’s <b>Privacy Policy</b>.
                    </p>
                ) : null}
            </div>

            <div className={styles.footerContent}>
                <p>{footer}</p>
                <div onClick={signupHandler}>
                    {isFooter ?
                        (<a>Log in</a>
                        ) : (
                            <a>Sign up</a>)
                    }
                </div>
            </div>
        </div>
    ) : null

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById('modal-root')
        );
    } else {
        return null;
    }

};

export default Modal;