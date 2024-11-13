import React, { createContext, useState, ReactNode, Dispatch, SetStateAction, useContext } from 'react';

interface TripContextType {
  tripData: any; 
  setTripData: Dispatch<SetStateAction<any>>;
}

export const CreateTripContext = createContext<TripContextType | undefined>(undefined);

interface CreateTripProviderProps {
    children: ReactNode;
  }
  
  export const CreateTripProvider: React.FC<CreateTripProviderProps> = ({ children }) => {
    const [tripData, setTripData] = useState<any>(null);
  
    return (
      <CreateTripContext.Provider value={{ tripData, setTripData }}>
        {children}
      </CreateTripContext.Provider>
    );
  };

  export const useCreateTripContext = (): TripContextType => {
    const context = useContext(CreateTripContext);
    if (!context) {
      throw new Error('No context');
    }
    return context;
  };
  