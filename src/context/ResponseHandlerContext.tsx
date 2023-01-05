import { createContext, ReactNode, useEffect } from "react";
import { api } from "../services/api";

interface ResponseHandlerProps {
  children: ReactNode;
}

const ResponseHandlerContext = createContext({});

export function ResponseHandlerProvider({ children }: ResponseHandlerProps) {
  useEffect(() => {
    const responseInterceptor = api.interceptors.response.use(
      (response) => {
        return Promise.resolve(response);
      },
      (error) => {
        alert(error.response.data.message);
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return <ResponseHandlerContext.Provider value={{}}>{children}</ResponseHandlerContext.Provider>;
}
