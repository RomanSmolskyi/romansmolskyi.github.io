import { useEffect } from "react";

export const useLogger = (value: any) => {
  useEffect(() => {
    console.log(value);
  }, [value]);
};

export const useSetLocalStorage = (value: any, key: string) => {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
};

export const useGetLocalStorage = (key: string, defaultValue: any) =>
  JSON.parse(localStorage.getItem(key) || defaultValue);
