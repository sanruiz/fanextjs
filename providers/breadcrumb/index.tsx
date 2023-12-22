"use client"

import { BreadcrumbItem } from '@/types/common';
import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

interface BreadcrumbContextProps {
    breadcrumbItems: BreadcrumbItem[];
    setBreadcrumbItems: Dispatch<SetStateAction<BreadcrumbItem[]>>;
}

const BreadcrumbContext = createContext<BreadcrumbContextProps | undefined>(undefined);

export default function BreadcrumbProvider({ children }: { children: ReactNode }) {
    const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItem[]>([]);

    const contextValue: BreadcrumbContextProps = {
        breadcrumbItems,
        setBreadcrumbItems,
    };

    return (
        <BreadcrumbContext.Provider value={contextValue}>
            {children}
        </BreadcrumbContext.Provider>
    );
}

export const useBreadcrumbContext = () => {
    const context = useContext(BreadcrumbContext);
    if (!context) {
        throw new Error("useBreadcrumbContext must be used within BreadcrumbProvider");
    }
    return context;
};