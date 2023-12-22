"use client"

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react"

interface LeadGenContextProps {
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const defaultValue: LeadGenContextProps = {
    isModalOpen: false,
    setIsModalOpen: () => {}
}

const LeadGenContext = createContext<LeadGenContextProps>(defaultValue);
export default function LeadGenProvider({children}: { children: ReactNode }) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const contextValue: LeadGenContextProps = {
        isModalOpen,
        setIsModalOpen
    };

    return (
        <LeadGenContext.Provider value={contextValue}>
            {children}
        </LeadGenContext.Provider>
    )
}

export const useLeadGenContext = () => {
    const context = useContext(LeadGenContext);
    if (!context) {
        throw new Error("useLeadGenContext must be used within LeadGenProvider");
    }
    return context;
}