import React, {FC} from 'react';
import styles from './index.module.scss';
import Footer from '@/widgets/layout/ui/footer';
import Header from '@/widgets/layout/ui/header';

interface IProps {
    children: React.ReactNode;
}

export const Layout: FC<IProps> = ({children}) => {
    return (
        <div className={styles.wrapper}>
            <>{children}</>
            <Footer/>
        </div>

    );
};
