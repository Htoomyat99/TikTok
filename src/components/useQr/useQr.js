import styles from './useQr.module.scss';

import Image from 'next/dist/client/image';

const UseQr = ({ mouseLeaveHandler, mouseOverHandler, hideqr }) => {
    return (
        <div className={styles.qrContainer}>
            {hideqr ? (
                <div className={styles.qrContent}>
                    <Image
                        src="/static/images/qr code.png"
                        alt="qr code"
                        width={160}
                        height={160}
                    />
                    <div className={styles.qrTextContainer}>
                        <p>1. Open the TikTok app on your mobile device and tap <b>Discover</b></p>
                        <p className={styles.barcodeContent}>2. Tap <Image
                            src="/static/icons/barcode.svg"
                            alt="barcode"
                            width={20}
                            height={20}
                        /> and scan QR code</p>
                        <p>3. Confirm your login on your mobile device</p>
                    </div>
                </div>
            ) : (
                <Image
                    src="/static/images/titokqr.jpg"
                    alt="iphone screen"
                    width={150}
                    height={300}
                />
            )}

            <div
                className={styles.instructContent}
                onMouseLeave={mouseLeaveHandler}
                onMouseOver={mouseOverHandler}>
                <div className={styles.questionIcon}>
                    <Image
                        src="/static/icons/questionmark.svg"
                        alt="question mark"
                        width={14}
                        height={14}
                    />
                </div>
                <div>Check the instruction</div>
            </div>
        </div >
    );
};

export default UseQr;