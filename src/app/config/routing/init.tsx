import React, {lazy, useEffect, useLayoutEffect, useState} from 'react';
import {Navigate, Route, Router, Routes} from 'react-router-dom';

import {routePaths} from '@/shared/config/routing';
import {routeHistory} from '@/shared/config/routing/historyRouter';
import {ChildrenProp} from '@/shared/types/utility';

import {PublicRoute} from './private-route';
import ScrollToTop from "@/shared/ui/scroll-to-top";
import {useTranslation} from "react-i18next";
import {useLanguageStore} from "@/shared/store/language";

const Home = lazy(() => import('@/pages/home'));

interface RouteView {
    element: React.ReactNode;
    children?: RouteView[];
    path?: string;
}

const routesView: RouteView[] = [
    {
        element: <PublicRoute/>,
        children: [
            {
                path: routePaths.root,
                element: <Home/>,
            },
        ],
    },
    {
        path: routePaths.notFound,
        element: <Navigate to={routePaths.root}/>,
    },
];

const CustomRouter = ({children}: ChildrenProp) => {
    const [state, setState] = useState({
        action: routeHistory.action,
        location: routeHistory.location,
    });

    useLayoutEffect(() => routeHistory.listen(setState), []);

    return (
        <Router
            location={state.location}
            navigationType={state.action}
            navigator={routeHistory}
        >
            <ScrollToTop/>
            {children}
        </Router>
    );
};

const renderRoutes = (routes: RouteView[]) => {
    return routes.map((route, index) => {
        if (route.children) {
            return (
                <Route key={index} path={route.path} element={route.element}>
                    {renderRoutes(route.children)}
                </Route>
            );
        } else {
            return <Route key={index} path={route.path} element={route.element}/>;
        }
    });
};

export const RoutesViews = () => {
    const {i18n} = useTranslation();
    const lang = useLanguageStore((state) => state.lang);

    useEffect(() => {
        i18n.changeLanguage(lang?.value || 'ru');
    }, [lang]);
    return (
        <CustomRouter>
            <Routes>{renderRoutes(routesView)}</Routes>
        </CustomRouter>
    );
};
