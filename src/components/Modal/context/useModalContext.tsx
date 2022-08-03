import React, { useState, useContext } from 'react';

interface MenuProps {
  title: string;
  description: string;
  img: string;
  background: string;
}

interface AppProviderProps {
  children: Array<JSX.Element> | JSX.Element;
}

interface AppContextType {
  modalState: string;
  isDetailOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  currentDetailMenu: MenuProps;
  openDetailModal: (menu: MenuProps) => void;
  closeDetailModal: () => void;
}

const initialState: MenuProps = {
  title: '',
  description: '',
  img: '',
  background: '',
};

export const AppContext = React.createContext<AppContextType>({
  modalState: 'init',
  isDetailOpen: false,
  openModal: () => {},
  closeModal: () => {},
  currentDetailMenu: initialState,
  openDetailModal: () => {},
  closeDetailModal: () => {},
});

export const AppProvider = ({ children }: AppProviderProps) => {
  const [modalState, setModalState] = useState<string>('init');
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);
  const [currentDetailMenu, setCurrentDetailMenu] =
    useState<MenuProps>(initialState);

  const openDetailModal = (menu: MenuProps) => {
    setIsDetailOpen(true);
    setCurrentDetailMenu(menu);
  };
  const closeDetailModal = () => setIsDetailOpen(false);
  const openModal = () => setModalState('open');
  const closeModal = () => setModalState('close');

  return (
    <AppContext.Provider
      value={{
        modalState,
        isDetailOpen,
        currentDetailMenu,
        openDetailModal,
        closeDetailModal,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(AppContext);
};
