import React, { useState } from "react";

import styled from "@emotion/styled";
import { getYato } from "../api/getShimo";
import { PostList } from "../components/templates/post-list";
import type { GetServerSideProps, NextPage } from "next";
import { YatoType, PagingLink } from "../types/yato";
import { Header } from "../components/molecules/header";
import { handleDebug, handleOnClickPaging, handleUser } from "../lib/handler";

export type TopPagePropType = {
  count: number;
  next: string;
  previous: string;
  results: YatoType[];
};
const TopPage: NextPage<TopPagePropType> = ({
  count,
  next,
  previous,
  results,
}) => {
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  return (
    <MainText>
      <HeaderContainer>
        <Header
          headerText="霜降りデータベース"
          colorType="dark"
          textType="24bold"
        ></Header>
      </HeaderContainer>
      <PostList
        yatoInfo={results}
        onClickNext={next ? () => handleOnClickPaging(next) : undefined}
        onClickPrev={previous ? () => handleOnClickPaging(previous) : undefined}
      />
    </MainText>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageNumber = Number(context.query.page) * 10;
  console.log("PagingNumber = ", pageNumber);
  let requestUrl: string;
  if (isNaN(pageNumber)) {
    requestUrl = `https://onikun.pythonanywhere.com/shimo/?limit=10`;
  } else {
    requestUrl = `https://onikun.pythonanywhere.com/shimo/?limit=10&offset=${pageNumber}`;
  }
  // console.log(requestUrl);
  if (requestUrl) {
    const response = await getYato(requestUrl);
    // console.log(response);
    return {
      props: {
        count: response.count,
        next: response.next,
        previous: response.previous,
        results: response.results,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

const MainText = styled.div();
const HeaderContainer = styled.div({});

export default TopPage;
