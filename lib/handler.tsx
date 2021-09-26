import React from "react";
import { Router } from "next/router";

export const handleUser = () => {
  console.log("ok");
};

export const handleOnSearch = async () => {
  console.log("search is ok");
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
