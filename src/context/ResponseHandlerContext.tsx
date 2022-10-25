import { createContext, ReactNode, useEffect } from "react";
import { api } from "../services/api";

interface ResponseHandlerProps {
  children: ReactNode;
}

const ResponseHandlerContext = createContext({});

export function ResponseHandlerProvider({ children }: ResponseHandlerProps) {
  useEffect(() => {
    api.interceptors.response.use(
      (response) => {
        return Promise.resolve(response);
      },
      (error) => {
        console.log(error.response.data);

        alert(error.response.data.message);
        return Promise.reject(error);
      }
    );
  }, []);

  return (
    <ResponseHandlerContext.Provider value={{}}>
      {children}
    </ResponseHandlerContext.Provider>
  );
}
