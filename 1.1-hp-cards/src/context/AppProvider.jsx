import { useState } from 'react';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [house, setHouse] = useState('');

  return (
    <AppContext.Provider value={{ selectedCharacter, setSelectedCharacter, house, setHouse }}>
      {children}
    </AppContext.Provider>
  );
}