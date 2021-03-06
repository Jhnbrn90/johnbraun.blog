import React from 'react';
import { useEffect } from 'react';

import * as Fathom from 'fathom-client';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import '../styles/app.css';

export default function App({ Component, pageProps }: AppProps): React.ReactNode {
    const router = useRouter();

    useEffect(() => {
    // Initialize Fathom when the app loads
        Fathom.load('FEFGUBIP', {
            includedDomains: ['johnbraun.blog'],
        });

        function onRouteChangeComplete() {
            Fathom.trackPageview();
        }

        // Record a pageview when route changes
        router.events.on('routeChangeComplete', onRouteChangeComplete);

        // Unassign event listener
        return () => {
            router.events.off('routeChangeComplete', onRouteChangeComplete);
        };
    }, []);

    return <Component {...pageProps} />;
}
