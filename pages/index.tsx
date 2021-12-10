import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { getYato } from "../api/getShimo";
import { PostList } from "../components/templates/post-list";
import type { NextPage } from "next";
import { YatoType } from "../types/yato";
import { Header } from "../components/molecules/header";

export type TopPagePropType = {
  response: YatoType[];
};
const TopPage: NextPage<TopPagePropType> = ({ response }) => {
  return (
    <MainText>
      <HeaderContainer>
        <Header
          headerText="霜降りデータベース"
          colorType="dark"
          textType="24bold"
        ></Header>
      </HeaderContainer>
      <PostList yatoInfo={response} />
    </MainText>
  );
};

export const getServerSideProps = async () => {
  const response = await getYato();
  return {
    props: { response },
  };
};

const MainText = styled.div();
const HeaderContainer = styled.div({});

export default TopPage;
