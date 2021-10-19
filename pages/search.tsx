import React, { VFC } from "react";
import { YatoType } from "../types/yato";
import styled from "@emotion/styled";
import Link from "next/link";
import { PostList } from "../components/templates/post-list";
import { getYato, searchContents } from "../api/getShimo";
import { SearchBar } from "../components/organisms/search-bar";
import { handleOnChangeSearch, handleOnSearch } from "../lib/handler";
import { useContents } from "../lib/hook";

type SearchPagePropsType = {
  response: YatoType[];
  paramSerachWord: string;
};

const SearchPage: VFC<SearchPagePropsType> = ({
  response,
  paramSerachWord,
}) => {
  const { searchWord, setSearchWord } = useContents(paramSerachWord);

  return (
    <SearchText>
      <Link href="/">home</Link>　
      <SearchBar
        onChange={(e) => handleOnChangeSearch(e, setSearchWord)}
        iconSearch="検索"
        onClickSearch={() => handleOnSearch(searchWord)}
      ></SearchBar>
      <PostList yatoInfo={response}></PostList>
    </SearchText>
  );
};

export const getServerSideProps = async (context) => {
  const searchWord = String(context.query.q);
  console.log(searchWord);

  const response = await searchContents(searchWord);

  return {
    props: {
      response: response,
      paramSerachWord: searchWord,
    },
  };
};

const SearchText = styled.div({});

export default SearchPage;
