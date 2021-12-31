import React, { VFC } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { getYato } from "../api/getShimo";
import { YatoList } from "../components/templates/yato-list";
import { YatoType } from "../types/yato";
import { Header } from "../components/molecules/header";

export type DetailPagePropType = {
  results: YatoType[];
};

const UsersPage: VFC<DetailPagePropType> = ({ results }) => {
  return (
    <MainText>
      <HeaderContainer>
        <Header
          headerText="霜降りデータベース"
          colorType="dark"
          textType="24bold"
        ></Header>
      </HeaderContainer>
      <YatoList yatoInfo={results} />
    </MainText>
  );
};

export const getServerSideProps = async () => {
  //ユーザページも次のページとか作ったほうがいい？
  const requestUrl = `https://onikun.pythonanywhere.com/shimo/?limit=30`;
  const response = await getYato(requestUrl);
  return {
    props: { results: response.results },
  };
};

const MainText = styled.div({});
const HeaderContainer = styled.div({});

export default UsersPage;
