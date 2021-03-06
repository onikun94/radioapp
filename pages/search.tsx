import React, { VFC } from "react";
import { YatoType } from "../types/yato";
import styled from "@emotion/styled";
import Link from "next/link";
import { PostList } from "../components/templates/post-list";
import { getYato, searchContents } from "../api/getShimo";
import { SearchBar } from "../components/organisms/search-bar";
import { handleOnChangeSearch, handleOnSearch } from "../lib/handler";
import { useContents } from "../lib/hook";
import { Header } from "../components/molecules/header";
import { Footer } from "../components/molecules/footer";

type SearchPagePropsType = {
  results: YatoType[];
  paramSerachWord: string;
};

const SearchPage: VFC<SearchPagePropsType> = ({ results, paramSerachWord }) => {
  const { searchWord, setSearchWord } = useContents(paramSerachWord);

  return (
    <SearchText>
      <HeaderContainer>
        <Header
          headerText="霜降りデータベース"
          colorType="dark"
          textType="24bold"
        ></Header>
      </HeaderContainer>
      <SearchBar
        onChange={(e) => handleOnChangeSearch(e, setSearchWord)}
        iconSearch="検索"
        onClickSearch={() => handleOnSearch(searchWord)}
      ></SearchBar>
      <PostList yatoInfo={results}></PostList>
      {/* <FooterContainer>
        <Footer
          headerText="霜降りデータベースについて"
          colorType="light"
          textType="12bold"
        ></Footer>
      </FooterContainer> */}
    </SearchText>
  );
};

export const getServerSideProps = async (context) => {
  const searchWord = String(context.query.q);
  console.log(searchWord);

  const response = await searchContents(searchWord);

  return {
    props: {
      results: response.results,
      paramSerachWord: searchWord,
    },
  };
};

const SearchText = styled.div({});
const HeaderContainer = styled.div({});
const FooterContainer = styled.div({});

export default SearchPage;
