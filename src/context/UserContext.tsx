import { createContext, Dispatch, SetStateAction } from "react";

interface ShowNavigationContextType {
    showNavigation: boolean;
    setShowNavigation: Dispatch<SetStateAction<boolean>>;
}

export const ShowNavigationContext = createContext<ShowNavigationContextType>({
    showNavigation: true,
    setShowNavigation: () => { },
});