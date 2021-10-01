import React from "react";
import { useRouter } from "next/router";

export const handleUser = () => {
  console.log("ok");
};

export const handleOnSearch = async () => {
  console.log("search is ok");
};

export const handleOnPage = () => {
  const router = useRouter();
  console.log("this is handleOnPage");
  router.push("/detail");
};
export const handleOnChangeSearch = async (searchWord: string) => {
  if (searchWord !== "") {
    console.log("changesearch is ok");
    console.log(searchWord);
  }
};
export const handleOnClickHeader = async () => {
  console.log("headerclick is ok");
};
export const handleDebug = () => {
  console.log("button is pushed");
};
