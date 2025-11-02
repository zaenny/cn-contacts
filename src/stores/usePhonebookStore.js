import { create } from 'zustand';

const usePhonebookStore = create((set)=>({
    phoneBook: [],
    searchTerm : "",
    addContact: (name, phoneNumber) => 
        set((state) => ({ 
            phoneBook: [...state.phoneBook,{id:Date.now(), name, phoneNumber}],
        })),
     setSearchTerm: (term) => set({ searchTerm: term })

}))

export default usePhonebookStore;