import { create } from 'zustand';

// useInfoModalStore is a custom hook used to manage the state of a modal
// It provides an interface for setting the movieId, opening and closing the modal, and checking if the modal is open
export interface ModalStoreInterface {
  movieId?: string;
  isOpen: boolean;
  openModal: (movieId: string) => void;
  closeModal: () => void;
}

const useInfoModalStore = create<ModalStoreInterface>((set) => ({
  movieId: undefined,
  isOpen: false,
  openModal: (movieId: string) => set({ isOpen: true, movieId }),
  closeModal: () => set({ isOpen: false, movieId: undefined }),
}));

export default useInfoModalStore;