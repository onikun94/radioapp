import React from "react";

export const useContents = (_searchWord: string) => {
  const [searchWord, setSearchWord] = React.useState<string>(_searchWord);

  return {
    searchWord,
    setSearchWord,
  };
};
