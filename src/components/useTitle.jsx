import React, { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Chef Aditya Jaimini | Official Website`;
  }, [title]);
};

export default useTitle;