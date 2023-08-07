import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import carousel_1 from '../../../app/img/carousel-1.png';
import icon_1 from '../../../app/img/icon_1.svg';
import './swiper.scss';

export const SwiperSlider = () => {
  return (
    <Swiper
      direction={'horizontal'}
      slidesPerView={1}
      spaceBetween={300}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="carousel">
          <div className="mantine-x9en3a">
            <ul className="carousel__list">
              <li className="carousel__item">
                <img className="carousel__img" src={carousel_1} alt="" />
                <div className="carousel__wrap">
                  <img src={icon_1} alt="" />
                  <h3 className="carousel__title">Управление делами</h3>
                  <p className="carousel__desc">
                    Автоматизирует работу с официальными документами, что
                    позволяет быстро и эффективно регистрировать входящую и
                    исходящую корреспонденцию, контролировать исполнение
                    поручений и указаний руководства, отслеживать
                    местонахождение документов на любом этапе жизненного цикла и
                    помещать их в дело. Модуль также позволяет организовывать
                    рассмотрение входящих документов руководителем, запускать
                    задачи на ознакомление сотрудников с
                    организационно-распорядительными документами и
                    контролировать выдачу и возврат бумажных экземпляров
                    документов внутри компании.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel">
          <div className="mantine-x9en3a">
            <ul className="carousel__list">
              <li className="carousel__item">
                <img className="carousel__img" src={carousel_1} alt="" />
                <div className="carousel__wrap">
                  <img src={icon_1} alt="" />
                  <h3 className="carousel__title">Управление делами</h3>
                  <p className="carousel__desc">
                    Автоматизирует работу с официальными документами, что
                    позволяет быстро и эффективно регистрировать входящую и
                    исходящую корреспонденцию, контролировать исполнение
                    поручений и указаний руководства, отслеживать
                    местонахождение документов на любом этапе жизненного цикла и
                    помещать их в дело. Модуль также позволяет организовывать
                    рассмотрение входящих документов руководителем, запускать
                    задачи на ознакомление сотрудников с
                    организационно-распорядительными документами и
                    контролировать выдачу и возврат бумажных экземпляров
                    документов внутри компании.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel">
          <div className="mantine-x9en3a">
            <ul className="carousel__list">
              <li className="carousel__item">
                <img className="carousel__img" src={carousel_1} alt="" />
                <div className="carousel__wrap">
                  <img src={icon_1} alt="" />
                  <h3 className="carousel__title">Управление делами</h3>
                  <p className="carousel__desc">
                    Автоматизирует работу с официальными документами, что
                    позволяет быстро и эффективно регистрировать входящую и
                    исходящую корреспонденцию, контролировать исполнение
                    поручений и указаний руководства, отслеживать
                    местонахождение документов на любом этапе жизненного цикла и
                    помещать их в дело. Модуль также позволяет организовывать
                    рассмотрение входящих документов руководителем, запускать
                    задачи на ознакомление сотрудников с
                    организационно-распорядительными документами и
                    контролировать выдачу и возврат бумажных экземпляров
                    документов внутри компании.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel">
          <div className="mantine-x9en3a">
            <ul className="carousel__list">
              <li className="carousel__item">
                <img className="carousel__img" src={carousel_1} alt="" />
                <div className="carousel__wrap">
                  <img src={icon_1} alt="" />
                  <h3 className="carousel__title">Управление делами</h3>
                  <p className="carousel__desc">
                    Автоматизирует работу с официальными документами, что
                    позволяет быстро и эффективно регистрировать входящую и
                    исходящую корреспонденцию, контролировать исполнение
                    поручений и указаний руководства, отслеживать
                    местонахождение документов на любом этапе жизненного цикла и
                    помещать их в дело. Модуль также позволяет организовывать
                    рассмотрение входящих документов руководителем, запускать
                    задачи на ознакомление сотрудников с
                    организационно-распорядительными документами и
                    контролировать выдачу и возврат бумажных экземпляров
                    документов внутри компании.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel">
          <div className="mantine-x9en3a">
            <ul className="carousel__list">
              <li className="carousel__item">
                <img className="carousel__img" src={carousel_1} alt="" />
                <div className="carousel__wrap">
                  <img src={icon_1} alt="" />
                  <h3 className="carousel__title">Управление делами</h3>
                  <p className="carousel__desc">
                    Автоматизирует работу с официальными документами, что
                    позволяет быстро и эффективно регистрировать входящую и
                    исходящую корреспонденцию, контролировать исполнение
                    поручений и указаний руководства, отслеживать
                    местонахождение документов на любом этапе жизненного цикла и
                    помещать их в дело. Модуль также позволяет организовывать
                    рассмотрение входящих документов руководителем, запускать
                    задачи на ознакомление сотрудников с
                    организационно-распорядительными документами и
                    контролировать выдачу и возврат бумажных экземпляров
                    документов внутри компании.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};