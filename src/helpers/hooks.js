import { useState, useCallback, useEffect } from 'react';
import debounce from 'lodash/debounce';

const useMediaQuery = query => {
  const [isMatch, setIsMatch] = useState(false);
  const [width, setWidth] = useState(document.documentElement.clientWidth);

  const decipherQuery = query => {
    const attributeRegex = new RegExp(/(max-width:|min-width:)/g);
    const valuesRegex = new RegExp(/\d+/g);
    const attributes = query.match(attributeRegex);
    const values = query.match(valuesRegex);
    return attributes.map((e, index) => [e, Number(values[index])]);
  };

  const updateMatchState = useCallback(() => {
    const expressions = decipherQuery(query);
    setIsMatch(expressions.every(([attr, value]) => {
      switch (attr) {
        case 'max-width:':
          return width < value;
        case 'min-width:':
          return width > value;
        default:
          return false;
      }
    }));
  }, [width]);

  const handleResize = () => {
    setWidth(document.documentElement.clientWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', debounce(handleResize, 500));

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    updateMatchState();
  }, [width]);
  return isMatch;
};

// eslint-disable-next-line import/prefer-default-export
export { useMediaQuery };
