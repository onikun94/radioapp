import styled from "@emotion/styled";
import Link from "next/link";
import React, { VFC } from "react";
import { getYato } from "../api/getShimo";
import { Header } from "../components/molecules/header";
import { RankingList } from "../components/templates/ranking-list";
import { YatoType } from "../types/yato";

type rankingPagePropType = {
  results: YatoType[];
};

const RankingPage: VFC<rankingPagePropType> = ({ results }) => {
  return (
    <div>
      <HeaderContainer>
        <Header
          headerText="霜降りデータベース"
          colorType="dark"
          textType="24bold"
        ></Header>
      </HeaderContainer>
      <RankingList rankingData={results} />
    </div>
  );
};

const HeaderContainer = styled.div({});

export const getServerSideProps = async () => {
  const requestUrl = `https://onikun.pythonanywhere.com/shimo/?limit=1000`;
  const response = await getYato(requestUrl);
  return {
    props: { results: response.results },
  };
};

export default RankingPage;
