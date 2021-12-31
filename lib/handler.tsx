import React, { useState } from "react";
import Router, { useRouter } from "next/router";

export const handleUser = (test: string) => {
  console.log(test);
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

export const handleOnClickPaging = async (url: string | undefined) => {
  if (url) {
    // const urlParams = new URLSearchParams(url.slice(-2));
    console.log("url = ", url);
    const urlParams = new URLSearchParams(url.split("?")[1]);
    const pageNumber = Number(urlParams.get("offset")) / 10;
    console.log("pageNumber =", pageNumber);
    if (pageNumber) {
      console.log("pagenumber is ", pageNumber);
      Router.push(`/?page=${pageNumber}`);
    } else {
      Router.push(`/`);
    }
    // const searchWord = String(urlParams.get("keyword"));
    // if (searchWord !== "null") {
    // if (pageNumber && pageNumber >= 2) {
    //   Router.push(`/serarch?keyword=${searchWord}&pages=${pageNumber}`);
    // } else {
    //   Router.push(`search?keyword=${searchWord}`);
    // }
    // } else {
    //   if (pageNumber && pageNumber >= 2) {
    //     Router.push(`/?page=${pageNumber}`);
    //   } else {
    //     Router.push(`/`);
    //   }
    // }
  }
};
