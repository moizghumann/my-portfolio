import { create } from "zustand";

interface AllPostsData {
    id: string;
    date?: string;
    title?: string;
    contentHtml?: string
}

interface AllPostsDataStore {
    allPostsData: AllPostsData;
    updateID: (id: string) => void;
    updateDate: (date: string) => void;
    updateTitle: (title: string) => void;
    updateBody: (body: string) => void;
}

const useAllPostsDataStore = create<AllPostsDataStore>(set => ({
    allPostsData: {} as AllPostsData,
    updateID: id => set(store => ({ allPostsData: { ...store.allPostsData, id } })),
    updateDate: date => set(store => ({ allPostsData: { ...store.allPostsData, date } })),
    updateTitle: title => set(store => ({ allPostsData: { ...store.allPostsData, title } })),
    updateBody: body => set(store => ({ allPostsData: { ...store.allPostsData, body } }))
}))

export default useAllPostsDataStore