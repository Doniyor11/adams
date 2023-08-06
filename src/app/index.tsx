import React from 'react';
import {createRoot} from 'react-dom/client';

import {App} from './app';
import {Container, MantineProvider} from "@mantine/core";

const reactRoot = createRoot(document.getElementById('root') as HTMLElement);

reactRoot.render(
    <MantineProvider
        withGlobalStyles withNormalizeCSS
        theme={{
            fontFamily: 'Mabry Pro, sans-serif',
            components: {
                Container: {
                    defaultProps: {
                        sizes: {
                            xs: 540,
                            sm: 720,
                            md: 960,
                            lg: 1140,
                            xl: 1440,
                        },
                    },
                },
            },
        }}
    >
        <App/>
    </MantineProvider>
);
