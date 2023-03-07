import { createContext, FC, PropsWithChildren, useContext, useState } from "react";
import { IEducation } from "../data/education";

type TypeSetContent = (value: IEducation | null) => void 

interface IAppContextProvider {
  item: IEducation | null
  setContent: TypeSetContent | null
}

const initialState = {
  item: null,
  setContent: null
}

export const EducationContext = createContext<IAppContextProvider>(initialState)

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [content, setContent] = useState<IEducation | null>(null)
  
  return (
    <EducationContext.Provider
      value={{ item: content, setContent }}
    >
      {children}
    </EducationContext.Provider>
  );
};

export const useSelectorAppContextProvider = () => useContext(EducationContext);