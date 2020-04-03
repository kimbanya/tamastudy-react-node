import { useCallback } from 'react';

const useCutString = () => {
  const cutString = useCallback((inputString, index) => {
    let result = '';
    if (typeof inputString === 'string') {
      if (inputString.length < index) {
        return inputString;
      }
      result = inputString.substr(0, index) + '...';
    }
    return result;
  }, []);
  return { cutString };
};

export default useCutString;
