import { useCallback, useEffect, useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      if (typeof window === 'undefined') return initialValue;
      const raw = window.localStorage.getItem(key);
      return raw !== null ? JSON.parse(raw) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch {}
  }, [key, state]);

  const setStored = useCallback((val) => {
    setState(val);
  }, []);

  return [state, setStored];
}
