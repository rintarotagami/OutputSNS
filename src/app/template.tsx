"use client";

import React, { useContext } from 'react';
import Navigation from '../components/layouts/navigation/navigation';
import { ShowNavigationContext } from '../context/UserContext';

export default function Template({ children }: { children: React.ReactNode }) {
    const { showNavigation } = useContext(ShowNavigationContext);

    return (
        <div style={{ display: 'flex' }}>
            {showNavigation && <Navigation />}
            <div style={{ flex: 1 }}>{children}</div>
        </div>
    );
}