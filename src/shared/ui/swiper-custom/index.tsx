import React from 'react';
import styles from './index.module.scss'
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-creative';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import SwiperCore, {EffectFade, Navigation} from 'swiper';
import {Image, List, Text} from "@mantine/core";
import SwiperImage1 from '@/shared/images/carousel-1.png';
import SwiperImage2 from '@/shared/images/carousel-2.png';
import SwiperImage3 from '@/shared/images/carousel-3.png';
import SwiperImage4 from '@/shared/images/carousel-4.png';
import SwiperImage5 from '@/shared/images/carousel-5.png';
import SwiperImage6 from '@/shared/images/carousel-6.png';
import SwiperImage7 from '@/shared/images/carousel-7.png';
import {ReactComponent as Icon1} from '@/shared/images/carousel-icon1.svg';
import {ReactComponent as Icon2} from '@/shared/images/carousel-icon2.svg';
import {ReactComponent as Icon3} from '@/shared/images/carousel-icon3.svg';
import {ReactComponent as Icon4} from '@/shared/images/carousel-icon4.svg';
import {ReactComponent as Icon5} from '@/shared/images/carousel-icon5.svg';
import {ReactComponent as Icon6} from '@/shared/images/carousel-icon6.svg';
import {ReactComponent as Icon7} from '@/shared/images/carousel-icon7.svg';
import {SvgIcon} from "@/shared/ui";
import cl from "classnames";

SwiperCore.use([Navigation, EffectFade]);
const SwiperCustom = () => {

    return (
        <>
            <Swiper
                effect={'fade'}
                fadeEffect={
                    {
                        crossFade: true,
                    }
                }
                navigation={true}
                modules={[Navigation, EffectFade]}
                className={styles.swiperCustomContainer}
            >
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.swiperCustomWrapper}>
                        <div className={styles.swiperCustomWrapperInfo}>
                            <SvgIcon Component={Icon1}/>
                            <Text className={styles.swiperCustomTitle}>Управление делами</Text>
                            <Text className={styles.swiperCustomDesc}>
                                Автоматизирует работу с официальными документами, что позволяет быстро и эффективно
                                регистрировать входящую и исходящую корреспонденцию, контролировать исполнение поручений
                                и указаний руководства, отслеживать местонахождение документов на любом этапе жизненного
                                цикла и помещать их в дело. Модуль также позволяет организовывать рассмотрение входящих
                                документов руководителем, запускать задачи на ознакомление сотрудников с
                                организационно-распорядительными документами и контролировать выдачу и возврат бумажных
                                экземпляров документов внутри компании.
                            </Text>
                        </div>
                        <div className={styles.swiperCustomWrapperImage}>
                            <Image src={SwiperImage1} width={'1056px'}/>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.swiperCustomWrapper}>
                        <div className={styles.swiperCustomWrapperInfo}>
                            <SvgIcon Component={Icon2}/>
                            <Text className={styles.swiperCustomTitle}>Договоры и закупки</Text>
                            <Text className={styles.swiperCustomDesc}>
                                Автоматизирует работу с договорами и связанными с ними документами, что позволяет быстро
                                и эффективно регистрировать, контролировать и отслеживать состояние договоров, актов
                                выполненных работ, дополнительных соглашений, входящих и исходящих счетов. Модуль также
                                позволяет добавлять контрольные точки для выполнения работ по договорам, контролировать
                                срок действия договоров и возврат бумажных экземпляров документов, отправленных
                                контрагентам.
                            </Text>
                        </div>
                        <div className={styles.swiperCustomWrapperImage}>
                            <Image src={SwiperImage2} width={'1056px'}/>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.swiperCustomWrapper}>
                        <div className={styles.swiperCustomWrapperInfo}>
                            <SvgIcon Component={Icon3}/>
                            <Text className={styles.swiperCustomTitle}>Проекты и команды</Text>
                            <Text className={styles.swiperCustomDesc}>
                                Создание проектных документов с помощью готовых шаблонов и согласование документации по
                                преднастроенным регламентам. Управление потоками работ и контроль их исполнения.
                                Прозрачное отслеживание хода проекта с учетом рекомендаций PMBoK.
                            </Text>
                            <Text className={styles.swiperCustomTitle}>Agile доски</Text>
                            <Text className={styles.swiperCustomDesc}>
                                Наглядная детализация командной работы, мониторинг статуса выполнения задач и загрузки
                                исполнителей, оперативная фиксация изменений по проекту.
                            </Text>
                        </div>
                        <div className={styles.swiperCustomWrapperImage}>
                            <Image src={SwiperImage3} width={'1000px'} height={'800px'}/>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.swiperCustomWrapper}>
                        <div className={styles.swiperCustomWrapperInfo}>
                            <SvgIcon Component={Icon4}/>
                            <Text className={styles.swiperCustomTitle}>Кадровые процессы и сервисы</Text>
                            <Text className={cl(styles.swiperCustomDesc, styles.swiperCustomDesc500)}>
                                Делопроизводство и внутренний документооборот
                            </Text>
                            <Text className={styles.swiperCustomDesc}>
                                Упорядоченная работа с корреспонденцией, приказами, ОРД. Выдача и контроль исполнения
                                поручений.
                            </Text>
                            <Text className={cl(styles.swiperCustomDesc, styles.swiperCustomDesc500)}>
                                Управление совещаниями и коллегиальными органами
                            </Text>
                            <Text className={styles.swiperCustomDesc}>
                                Формирование повестки, ведение протоколов. Автоматическая рассылка поручений по принятым
                                решениям.
                            </Text>
                            <Text className={cl(styles.swiperCustomDesc, styles.swiperCustomDesc500)}>
                                Электронный архив документов
                            </Text>
                            <Text className={styles.swiperCustomDesc}>
                                Хранение документов в едином электронном архиве с гарантией юридической значимости.
                            </Text>
                            <Text className={cl(styles.swiperCustomDesc, styles.swiperCustomDesc500)}>
                                Готовая интеграция с Microsoft Outlook и Office
                            </Text>
                            <Text className={styles.swiperCustomDesc}>
                                Регистрация документов из Microsoft Outlook напрямую
                            </Text>
                            <Text className={cl(styles.swiperCustomDesc, styles.swiperCustomDesc500)}>
                                Интеграция с ЕСЭДО
                            </Text>
                            <Text className={styles.swiperCustomDesc}>
                                Электронный документооборот с национальными холдингами и государственным сектором.
                                Отправитель получает автоматические уведомления о действиях с документом на стороне
                                получателя.
                            </Text>

                        </div>
                        <div className={styles.swiperCustomWrapperImage}>
                            <Image src={SwiperImage4} width={'948px'} height={'652px'} bgsz={'cover'}/>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.swiperCustomWrapper}>
                        <div className={styles.swiperCustomWrapperInfo}>
                            <SvgIcon Component={Icon5}/>
                            <Text className={styles.swiperCustomTitle}>Цифровая бухгалтерия</Text>
                            <Text className={cl(styles.swiperCustomDesc,)}>
                                Автоматизирует работу с официальными документами, что позволяет быстро и эффективно
                                регистрировать входящую и исходящую корреспонденцию, контролировать исполнение поручений
                                и указаний руководства, отслеживать местонахождение документов на любом этапе жизненного
                                цикла и помещать их в дело. Модуль также позволяет организовывать рассмотрение входящих
                                документов руководителем, запускать задачи на ознакомление сотрудников с
                                организационно-распорядительными документами и контролировать выдачу и возврат бумажных
                                экземпляров документов внутри компании.
                            </Text>
                        </div>
                        <div className={styles.swiperCustomWrapperImage}>
                            <Image src={SwiperImage5} width={'999px'} height={'680px'}/>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.swiperCustomWrapper}>
                        <div className={styles.swiperCustomWrapperInfo}>
                            <SvgIcon Component={Icon6}/>
                            <Text className={styles.swiperCustomTitle}>Low-code и no-code</Text>
                            <Text className={cl(styles.swiperCustomDesc,)}>
                                Адаптация под требования бизнеса своими силами. Используйте визуальный no-code-редактор
                                — настраивайте сами без помощи программистов:
                            </Text>
                            <List size="xs" className={styles.swiperCustomWrapperInfoList}>
                                <List.Item className={styles.listItem}>
                                    <Text className={cl(styles.swiperCustomDesc,)}>
                                        порядок и сроки согласования документов;
                                    </Text>
                                </List.Item>
                                <List.Item className={styles.listItem}>
                                    <Text className={cl(styles.swiperCustomDesc,)}>
                                        шаблоны документов с автоподстановкой
                                    </Text>
                                </List.Item>
                                <List.Item className={styles.listItem}>
                                    <Text className={cl(styles.swiperCustomDesc,)}>
                                        данных; вычисляемые роли пользователей;
                                    </Text>
                                </List.Item>
                                <List.Item className={styles.listItem}>
                                    <Text className={cl(styles.swiperCustomDesc,)}>
                                        оповещения на различные события.
                                    </Text>
                                </List.Item>
                            </List>
                        </div>
                        <div className={styles.swiperCustomWrapperImage}>
                            <Image src={SwiperImage6} width={'1056px'} height={'664px'}/>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.swiperCustomWrapper}>
                        <div className={styles.swiperCustomWrapperInfo}>
                            <SvgIcon Component={Icon7}/>
                            <Text className={styles.swiperCustomTitle}>Статистика и аналитика</Text>
                            <Text className={cl(styles.swiperCustomDesc,)}>
                                Панель наглядных инструментов для быстрого доступа к рабочим процессам, отчетам,
                                аналитике по различным показателям настраивается индивидуально под каждого пользователя.
                                Под рукой — только необходимое.
                            </Text>
                        </div>
                        <div className={styles.swiperCustomWrapperImage}>
                            <Image src={SwiperImage7} width={'955px'} height={'690px'}/>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </>
    )
        ;
};
// eslint-disable-next-line import/no-default-export
export default SwiperCustom;