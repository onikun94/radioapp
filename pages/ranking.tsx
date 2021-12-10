import styled from "@emotion/styled";
import Link from "next/link";
import React, { VFC } from "react";
import { getYato } from "../api/getShimo";
import { Header } from "../components/molecules/header";
import { RankingList } from "../components/templates/ranking-list";
import { YatoType } from "../types/yato";

type rankingPagePropType = {
  response: YatoType[];
};

const RankingPage: VFC<rankingPagePropType> = ({ response }) => {
  return (
    <div>
      <HeaderContainer>
        <Header
          headerText="霜降りデータベース"
          colorType="dark"
          textType="24bold"
        ></Header>
      </HeaderContainer>
      <RankingList rankingData={response} />
    </div>
  );
};

const HeaderContainer = styled.div({});

export const getServerSideProps = async () => {
  const response = await getYato();
  return {
    props: { response },
  };
};

export default RankingPage;
