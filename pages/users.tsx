import React, { VFC } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { getYato } from "../api/getShimo";
import { YatoList } from "../components/templates/yato-list";
import { YatoType } from "../types/yato";
import { Header } from "../components/molecules/header";

export type DetailPagePropType = {
  response: YatoType[];
};

const UsersPage: VFC<DetailPagePropType> = ({ response }) => {
  return (
    <MainText>
      <HeaderContainer>
        <Header
          headerText="霜降りデータベース"
          colorType="dark"
          textType="24bold"
        ></Header>
      </HeaderContainer>
      <YatoList yatoInfo={response} />
    </MainText>
  );
};

export const getServerSideProps = async () => {
  const response = await getYato();
  return {
    props: { response },
  };
};

const MainText = styled.div({});
const HeaderContainer = styled.div({});

export default UsersPage;
