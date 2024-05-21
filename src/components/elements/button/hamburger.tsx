"use client";

import React, { useContext } from 'react';
import { ShowNavigationContext } from '../../../context/UserContext';

const Hamburger = () => {
    const { showNavigation, setShowNavigation } = useContext(ShowNavigationContext);

    const toggleNavigation = () => {
        setShowNavigation(!showNavigation);
    };

    return (
        <div className="hamburger-menu z-20 mr-4" onClick={toggleNavigation}>
            {showNavigation ? (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ zIndex: 10, transform: "scaleX(-1)" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ transform: "scaleX(-1)" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            )}
        </div>
    );
};

export default Hamburger;

