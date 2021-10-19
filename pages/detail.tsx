import React, { VFC } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { getYato } from "../api/getShimo";
import { YatoList } from "../components/templates/yato-list";
import { YatoType } from "../types/yato";

export type DetailPagePropType = {
  response: YatoType[];
};

const DetailPage: VFC<DetailPagePropType> = ({ response }) => {
  return (
    <MainText>
      <Link href="/">
        <a>home</a>
      </Link>
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

export default DetailPage;
