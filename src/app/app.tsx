import React, {FC, Suspense, useEffect} from 'react';
import {ErrorBoundary} from 'react-error-boundary';

import {AppError} from '@/app/config/app-error';
import {RoutesViews} from '@/app/config/routing/init';
import './styles/global.scss';
import i18n from "@/shared/localization/i18n";
import {I18nextProvider, useTranslation} from "react-i18next";
import {useLanguageStore} from "@/shared/store/language";

const ErrorFallback = () => {
  return <AppError />;
};

export const App: FC = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>

            <Suspense fallback={<div>Loading...</div>}>
                <I18nextProvider i18n={i18n}>
                    <RoutesViews />
                </I18nextProvider>
            </Suspense>
      </ErrorBoundary>
    </>
  );
};
