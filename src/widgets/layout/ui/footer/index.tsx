import React from 'react';
import {useTranslation} from 'react-i18next';
import styles from './index.module.scss';

const Footer = () => {
    const {t} = useTranslation();
    return (
        <div className={styles.footer}>
            Footer
        </div>
    );
};
// eslint-disable-next-line import/no-default-export
export default Footer;
