import { create } from "zustand";

export type NavTag = 'Showcase' | "About" | "Services"

interface NavTagsStore {
    selectedTag: NavTag | null;
    updateTag: (newTag: NavTag) => void;
}

const useNavTagsStore = create<NavTagsStore>((set) => ({
    selectedTag: null,
    updateTag: newTag => set({ selectedTag: newTag })
}))

export default useNavTagsStore