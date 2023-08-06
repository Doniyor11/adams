import React from 'react';
import {Button, Checkbox, Container, Input, List, Select, Text, ThemeIcon} from '@mantine/core';
import { useId } from '@mantine/hooks';
import { IMaskInput } from 'react-imask';
import {useTranslation} from 'react-i18next';
import styles from './index.module.scss';
import Header from "@/widgets/layout/ui/header";
import SvgIcon from "@/shared/ui/svg-icon";
import {ReactComponent as Icon1} from '@/shared/images/icon1.svg';
import {ReactComponent as Icon2} from '@/shared/images/icon2.svg';
import {ReactComponent as Icon3} from '@/shared/images/icon3.svg';
import {ReactComponent as Icon4} from '@/shared/images/icon4.svg';
import {ReactComponent as Icon5} from '@/shared/images/icon5.svg';
import {ReactComponent as IconList} from '@/shared/images/list-arrow.svg';
import {ReactComponent as IconListLogo} from '@/shared/images/list-logo.svg';
import {ReactComponent as IconSocial1} from '@/shared/images/social1.svg';
import {ReactComponent as IconSocial2} from '@/shared/images/social2.svg';
import {ReactComponent as IconSocial3} from '@/shared/images/social3.svg';
import {ReactComponent as IconSocial4} from '@/shared/images/social4.svg';
import {ReactComponent as InfoImg} from '@/shared/images/image1.svg';
import {ReactComponent as InfoImg2} from '@/shared/images/image2.svg';
import {ReactComponent as InfoImg3} from '@/shared/images/image3.svg';
import {ReactComponent as IconSelectArrow} from '@/shared/images/form-select-arrow.svg';

import cl from "classnames";
import {Link} from "react-router-dom";

export const Home = () => {
    const {t} = useTranslation();
    const id = useId();
    return (
        <>
            <Container size={'100%'} className={styles.heroWrapperContainer}>
                <Container size={'1440px'} className={styles.heroWrapper}>
                    <Header/>
                    <div className={styles.heroWrapperInfo}>
                        <Text className={styles.heroWrapperTitle}>
                            ADAMS — <br/>
                            электронный документооборот
                            и цифровые процессы
                        </Text>
                        <Text className={styles.heroWrapperSubTitle}>
                            Комплекс программных средств, позволяющих автоматизировать процессы создания, отправки,
                            получения и хранения электронных документов
                        </Text>
                        <Button variant={'outline'} className={styles.heroWrapperInfoBtn}>Получить демо-доступ</Button>
                    </div>
                </Container>
            </Container>
            <Container size={'1440px'}>
                {/* services */}
                <article className={styles.services}>
                    <div className={styles.servicesTop}>
                        <div className={cl(styles.servicesTopBoxes, styles.topBoxes)}>
                            <SvgIcon Component={Icon1}/>
                            <Text className={styles.servicesTopBoxesTitle}>Управление делами</Text>
                            <List
                                icon={
                                    <ThemeIcon size={12} radius="xl" className={styles.listIcon}>
                                        <IconList/>
                                    </ThemeIcon>
                                }
                            >
                                <List.Item>Делопроизводство и контроль исполнительской дисциплины</List.Item>
                                <List.Item>Совещания</List.Item>
                                <List.Item>Обращения граждан</List.Item>
                                <List.Item>Долговременный архив</List.Item>
                                <List.Item>Конфиденциальное делопроизводство</List.Item>
                                <List.Item>Шифрование документов</List.Item>
                                <List.Item>Управление нормативной документацией</List.Item>
                                <List.Item>Коллегиальные органы</List.Item>
                            </List>
                        </div>
                        <div className={cl(styles.servicesTopBoxes, styles.topBoxes)}>
                            <SvgIcon Component={Icon2}/>
                            <Text className={styles.servicesTopBoxesTitle}>Кадровые процессы и сервисы</Text>
                            <List
                                icon={
                                    <ThemeIcon size={12} radius="xl" className={styles.listIcon}>
                                        <IconList/>
                                    </ThemeIcon>
                                }
                            >
                                <List.Item>Движение персонала</List.Item>
                                <List.Item>Отпуска</List.Item>
                                <List.Item>Командировки</List.Item>
                                <List.Item>Сервисные заявки</List.Item>
                                <List.Item>Развитие сотрудников</List.Item>
                            </List>
                        </div>
                    </div>
                    <div className={styles.servicesCenter}>
                        <div className={cl(styles.servicesTopBoxes, styles.centerBoxes)}>
                            <SvgIcon Component={Icon3}/>
                            <Text className={styles.servicesTopBoxesTitle}>Договоры и закупки</Text>
                            <List
                                icon={
                                    <ThemeIcon size={12} radius="xl" className={styles.listIcon}>
                                        <IconList/>
                                    </ThemeIcon>
                                }
                            >
                                <List.Item>Договоры</List.Item>
                                <List.Item>Доверенности</List.Item>
                                <List.Item>Счета на оплату</List.Item>
                                <List.Item>Закупки</List.Item>
                                <List.Item>Ассистент юриста</List.Item>
                                <List.Item>Контроль бюджетных лимитов</List.Item>
                                <List.Item>Контроль благонадежности поставщика</List.Item>
                            </List>
                        </div>
                        <div className={cl(styles.servicesTopBoxes, styles.centerText)}>
                            <SvgIcon Component={IconListLogo}/>
                            <Text className={styles.centerTitle}>Экосистема
                                решений ADAMS</Text>

                        </div>
                        <div className={cl(styles.servicesTopBoxes, styles.centerBoxes)}>
                            <SvgIcon Component={Icon4}/>
                            <Text className={styles.servicesTopBoxesTitle}>Проекты и команды</Text>
                            <List
                                icon={
                                    <ThemeIcon size={12} radius="xl" className={styles.listIcon}>
                                        <IconList/>
                                    </ThemeIcon>
                                }
                            >
                                <List.Item>Планирование проектов</List.Item>
                                <List.Item>Agile-доски</List.Item>
                                <List.Item>Task Manager</List.Item>
                                <List.Item>Корпоративная база знаний</List.Item>
                                <List.Item>Проектно-сметная документация</List.Item>
                            </List>
                        </div>
                    </div>
                    <div className={styles.servicesBottom}>
                        <div className={cl(styles.servicesTopBoxes, styles.centerBottom)}>
                            <SvgIcon Component={Icon5}/>
                            <Text className={styles.servicesTopBoxesTitle}>Цифровая бухгалтерия</Text>
                            <List
                                icon={
                                    <ThemeIcon size={12} radius="xl" className={styles.listIcon}>
                                        <IconList/>
                                    </ThemeIcon>
                                }
                            >
                                <List.Item>Интеллектуальная обработка первичных документов</List.Item>
                                <List.Item>Авансовые отчеты</List.Item>
                                <List.Item>Внутренние регистры</List.Item>
                            </List>
                        </div>
                    </div>
                </article>
            </Container>
            {/* Slider */}
            <Container size={'100%'} p={0}>
                <article className={styles.slider}>

                </article>
            </Container>
            <Container size={'1440px'}>
                {/* Info */}
                <article className={styles.info}>
                    <Text className={styles.infoTitle}>Кроссплатформенность</Text>
                    <SvgIcon Component={InfoImg}/>
                    <div className={styles.infoSocialWrapper}>
                        <Text className={styles.infoSubTitle}>ADAMS доступен на всех основных платформах</Text>
                        <div className={styles.infoSocialWrapperIcon}>
                            <Link to={''} className={styles.infoLink}>
                                <SvgIcon Component={IconSocial1}/>
                            </Link>
                            <Link to={''} className={styles.infoLink}>
                                <SvgIcon Component={IconSocial2}/>
                            </Link>
                            <Link to={''} className={styles.infoLink}>
                                <SvgIcon Component={IconSocial3}/>
                            </Link>
                            <Link to={''} className={styles.infoLink}>
                                <SvgIcon Component={IconSocial4}/>
                            </Link>
                        </div>
                    </div>
                    <Button className={cl(styles.infoBtn, 'button_orange')}>Получить демо-доступ</Button>
                </article>
                {/* Card */}
                <article className={styles.card}>
                    <div className={styles.cardHeader}>
                        <Text className={styles.cardTitle}>Все, что нужно <br/>
                            для эффективной цифровизации</Text>
                        <Text className={styles.cardSubTitle}>
                            Стандартная настройка ADAMS не требует навыков программирования: в несколько кликов
                            создаются виды документов
                            и их категории, а принятые регламенты отражаются в графическом редакторе.
                        </Text>
                    </div>
                    <div className={styles.cardWrapper}>
                        <div className={styles.cardWrapperItem}>
                            <div className={styles.cardWrapperItemText}>
                                <Text className={styles.cardWrapperItemTitle}>Надежность и быстродействие</Text>
                                <Text className={styles.cardWrapperItemSubTitle}>Регулярные нагрузочные тесты и
                                    подтвержденная отказоустойчивость ADAMS при одновременном подключении 50 тыс.
                                    пользователей.</Text>
                            </div>
                            <div>
                                <SvgIcon Component={InfoImg2}/>
                            </div>
                        </div>
                        <div className={styles.cardWrapperItem}>
                            <div className={styles.cardWrapperItemText}>
                                <Text className={styles.cardWrapperItemTitle}>AI-решения и сервисы</Text>
                                <Text className={styles.cardWrapperItemSubTitle}>Автоматическая обработка текстовой
                                    информации с помощью искусственного интеллекта.</Text>
                            </div>
                            <div>
                                <SvgIcon Component={InfoImg3}/>
                            </div>
                        </div>
                    </div>
                </article>
                {/* Contact */}
                <article className={styles.contact}>
                    <div className={styles.contactForm}>
                       <div className={styles.contactFormHeader}>
                           <SvgIcon Component={IconListLogo} className={styles.contactFormIcon}/>
                           <Text className={styles.contactFormTitle}>Получите демо-доступ</Text>
                       </div>
                        <Input className={styles.contactFormInput} placeholder={'Фамилия, имя и отчество'}/>
                        <Input className={styles.contactFormInput} placeholder={'Название компании или ИНН'}/>
                        <Input.Wrapper id={id} required maw={320} mx="auto" className={styles.contactFormInputPhone}>
                            <Input<any>
                                component={IMaskInput}
                                mask="+998 00 000-00-00"
                                id={id}
                                className={styles.contactFormInput}
                                placeholder={'Телефон'}
                                defaultValue="+998"
                            />
                        </Input.Wrapper>
                        <Input className={styles.contactFormInput} placeholder={'Электронная почта'} type={'email'}/>
                        <Select
                            className={styles.contactFormInput}
                            placeholder="Причина интереса"
                            data={[
                                {value: 'react', label: 'React'},
                                {value: 'ng', label: 'Angular'},
                                {value: 'svelte', label: 'Svelte'},
                                {value: 'vue', label: 'Vue'},
                            ]}
                            rightSection={<IconSelectArrow/>}
                        />
                        <Checkbox
                            className={styles.contactFormCheckbox}
                            label="Согласен на обработку моих персональных данных"
                        />
                        <Button className={cl(styles.contactFormBtn, 'button_orange')} fullWidth>Получить демо-доступ</Button>
                    </div>
                </article>
            </Container>
        </>
    );
};
// Compare this snippet from src\widgets\layout\ui\footer\index.tsx: