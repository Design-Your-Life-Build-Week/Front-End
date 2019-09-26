import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const item = JSON.parse(localStorage.getItem(key))

    const [storedValue, setStoreValue ] = useState(item || initialValue);

    const setValue = value => {
        window.localStorage.setItem(key, JSON.stringify(value))
        setStoreValue(value);
    }

    return [storedValue, setValue];
}