import React from 'react';
import {useTranslation} from 'react-i18next';
import styles from './index.module.scss';
import FooterLogo from '@/shared/images/footer-logo.png';
import {Image, List, ThemeIcon} from "@mantine/core";

const Footer = () => {
    const {t} = useTranslation();
    return (
        <div className={styles.footer}>
            <div>
                <Image src={FooterLogo} alt="footer-logo" width={'200px'}/>
            </div>
            <div>
                <List
                    spacing="xs"
                    size="sm"
                    center
                >
                    <List.Item>+ 998 94 084 66 86</List.Item>
                    <List.Item>Ташкент, Мирзо-Улугбекский район, 7-ой проезд Сайрам, 92</List.Item>
                    <List.Item>Режим работы: 09:00 - 18:00</List.Item>
                    <List.Item>Run tests to make sure your changes do not break the build</List.Item>
                    <List.Item
                        icon={
                            <ThemeIcon color="blue" size={24} radius="xl">

                            </ThemeIcon>
                        }
                    >
                        Submit a pull request once you are done
                    </List.Item>
                </List>
            </div>
        </div>
    );
};
// eslint-disable-next-line import/no-default-export
export default Footer;
