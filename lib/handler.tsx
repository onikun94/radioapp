import React, { useState } from "react";
import Router, { useRouter } from "next/router";

export const handleUser = () => {
  console.log("ok handleUser");
};

export const handleOnPage = () => {
  const router = useRouter();
  console.log("this is handleOnPage");
  router.push("/detail");
};

export const handleOnChangeSearch = (
  value: string,
  setSearchWord: React.Dispatch<React.SetStateAction<string>>
) => {
  setSearchWord(value);
};

export const handleOnSearch = (searchWord: string) => {
  Router.push(`/search?q=${encodeURIComponent(searchWord)}`);
};

export const handleOnClickHeader = async () => {
  console.log("headerclick is ok");
};
export const handleDebug = () => {
  console.log("button is pushed");
};
