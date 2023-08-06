import cl from 'classnames';
import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {ReactComponent as IconLogo} from '@/shared/images/logo.svg';
import {ReactComponent as IconArrow} from '@/shared/images/select-icon.svg';
import {useLanguageStore} from '@/shared/store/language';

import styles from './index.module.scss';
import SvgIcon from "@/shared/ui/svg-icon";
import {Button, Container, Select, Text} from "@mantine/core";

interface IProps {
    logo?: boolean;
}

const Header: FC<IProps> = ({logo}) => {
    const [openLanguage, setOpenLanguage] = React.useState(false);
    const [openMenu, setOpenMenu] = React.useState(false);
    const [mobileLangActive, setMobileLangActive] = React.useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    };

    const handleOpenLanguage = () => {
        setOpenLanguage(!openLanguage);
    };

    const handleMobileLangActive = () => {
        setMobileLangActive(!mobileLangActive);
    };

    // Language
    const [setLang, lang] = useLanguageStore((state) => [
        state.setLang,
        state.lang,
    ]);

    const handleChangeLanguage = (lang: string) => {
        setLang({value: lang});
    };

    // <Link
    //     className={cl(styles.langLink, [
    //         !mobileLangActive && styles.active,
    //     ])}
    //     to={''}
    //     onClick={() => {
    //         handleChangeLanguage('ru');
    //         handleMobileLangActive();
    //     }}
    // >
    //     Русский
    // </Link>
    // <Link
    //     className={cl(styles.langLink, [
    //         mobileLangActive && styles.active,
    //     ])}
    //     to={''}
    //     onClick={() => {
    //         handleChangeLanguage('uz');
    //         handleMobileLangActive();
    //     }}
    // >
    //     Uzbekcha
    // </Link>

    const {t} = useTranslation();
    return (
       <>
           <div className={styles.header}>
               <div className={styles.headerLogo}>
                   <SvgIcon Component={IconLogo} className={styles.headerLogoIcon}/>
               </div>
               <div className={styles.headerMenu}>
                   <Link to={'/'} className={styles.headerMenuLink}>
                       <Text>Экосистема</Text>
                   </Link>
                   <Link to={'/'} className={styles.headerMenuLink}>
                       <Text>Решения</Text>
                   </Link>
                   <Link to={'/'} className={styles.headerMenuLink}>
                       <Text>Кроссплатформенность</Text>
                   </Link>
                   <Link to={'/'} className={styles.headerMenuLink}>
                       <Text>Контакты</Text>
                   </Link>
               </div>
               <div className={styles.headerInfo}>
                   <Button className={cl('button_orange', styles.headerInfoDesktopBtn)}>Получить демо-доступ</Button>
                   <Select
                       className={styles.headerInfoLang}
                       placeholder={'РУ'}
                       data={[
                           {value: 'ru', label: 'РУ',},
                           {value: 'uz', label: 'Узб',},
                       ]}
                       rightSection={<IconArrow/>}
                       rightSectionWidth={40}
                       classNames={{
                           rightSection: styles.headerInfoLangIcon,
                       }}
                       variant={'unstyled'}
                   />
               </div>
               <Button className={cl('button_orange', styles.headerInfoMobileBtn)}>Получить демо-доступ</Button>

           </div>
       </>
    );
};

// eslint-disable-next-line import/no-default-export
export default Header;
