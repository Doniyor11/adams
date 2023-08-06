import React, { useMemo } from 'react';
// import { FunctionComponent } from 'react';
// import { useTranslation } from 'react-i18next';
//
// export const useList = () => {
//   const { t } = useTranslation();
//   return useMemo(
//     () => [
//       {
//         title: t('list_1'),
//       },
//       {
//         title: t('list_2'),
//       },
//       {
//         title: t('list_3'),
//       },
//       {
//         title: t('list_4'),
//       },
//       {
//         title: t('list_5'),
//       },
//       {
//         title: t('list_6'),
//       },
//     ],
//     [t],
//   );
// };
//
// export const useCatalogCards = () => {
//   const { t } = useTranslation();
//   return useMemo(
//     () => [
//       {
//           image: '',
//         title: t('paced'),
//         link: '/services',
//         showTitle: t('extraction_sand'),
//         showDesc: t('sand_ravel_desc'),
//       },
//       {
//         image: '',
//         title: t('production_concrete'),
//         link: '/production',
//         showTitle: t('production_concrete'),
//         showDesc: t('production_concrete_info_title_desc'),
//       },
//       {
//           image: '',
//         title: t('materials'),
//         link: '/production_materials',
//         showTitle: t('production_materials'),
//         showDesc: t('production_materials_sb_title'),
//       },
//       {
//           image: '',
//         title: t('concrete_delivery'),
//         link: '/delivery_concrete',
//         showTitle: t('delivery_concrete_title'),
//         showDesc: t('delivery_concrete_sb_title_two_c'),
//       },
//     ],
//     [t],
//   );
// };
//
// export const useSliderSwiper = () => {
//   const { t } = useTranslation();
//   return useMemo(
//     () => [
//       {
//         id: 1,
//         title: t('quality_concrete'),
//         // subTitle: 'Рыба текст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.',
//           image: '',
//       },
//       {
//         id: 2,
//         title: t('highly_professionals'),
//         // subTitle: 'Рыба текст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.',
//           image: '',
//       },
//       {
//         id: 3,
//         title: t('large_special'),
//         // subTitle: 'Рыба текст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.',
//           image: '',
//       },
//     ],
//     [t],
//   );
// };
//
// export const iconObj: Record<number, FunctionComponent> = {
//   0: infoImg1,
//   1: infoImg2,
//   2: infoImg3,
//   3: '',
// };
//
// export const useAboutUsCardsMobileSlider = () => {
//   const { t } = useTranslation();
//   return useMemo(
//     () => [
//       {
//         title: t('extraction_sand'),
//         desc: t('sand_ravel_desc'),
//         link: '/services',
//       },
//       {
//         title: t('production_concrete'),
//         desc: t('production_concrete_info_title_desc'),
//         link: '/production',
//       },
//       {
//         title: t('production_materials'),
//         desc: t('production_materials_sb_title'),
//         link: '/production_materials',
//       },
//       {
//         title: t('delivery_concrete_title'),
//         desc: t('delivery_concrete_sb_title_two_c'),
//         link: '/delivery_concrete',
//       },
//     ],
//     [t],
//   );
// };
