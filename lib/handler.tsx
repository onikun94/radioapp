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

export const handleOnSearch = async (searchWord: string) => {
  // const router = useRouter();
  // const [input,setInput] = useState();
  if (searchWord !== "") {
    Router.push(`/test?q=${encodeURIComponent(searchWord)}`);
  } else {
    return null;
  }
};
