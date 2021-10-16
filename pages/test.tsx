import styled from "@emotion/styled";
import { GetServerSideProps } from "next";
import { text } from "node:stream/consumers";
import React, { VFC } from "react";
import { searchUser } from "../api/getShimo";
import { SearchBar } from "../components/organisms/search-bar";
import { PostList } from "../components/templates/post-list";
import { handleOnSearch } from "../lib/handler";
import { YatoType } from "../types/yato";
import { useRouter } from "next/router";
// import { TextInput } from '../components/atoms/text-input'

export type TestPropType = {
  userdata: YatoType[];
};

const Test: VFC<TestPropType> = ({ userdata }) => {
  const router = useRouter();
  const pname = router.query.test;

  const handleTest = () => {
    console.log("handleTest");
  };

  const handleTest1 = () => {
    console.log("handleTest1S");
  };
  return (
    <>
      <p>this is testpage</p>
      <p>{pname}</p>
      <button
        onClick={() => {
          handleOnSearch("hoge");
        }}
      >
        please add query
      </button>
    </>
  );
};

export default Test;
