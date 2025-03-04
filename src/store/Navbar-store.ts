import { create } from 'zustand';

interface NavbarState {
    isVisible: boolean;
    setIsVisible: (visible: boolean) => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
    isVisible: true, // Default navbar terlihat
    setIsVisible: (visible) => set({ isVisible: visible }),
}));
