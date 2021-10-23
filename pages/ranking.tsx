import Link from "next/link";
import React, { VFC } from "react";
import { getYato } from "../api/getShimo";
import { RankingList } from "../components/templates/ranking-list";
import { YatoType } from "../types/yato";

type rankingPagePropType = {
  response: YatoType[];
};

const RankingPage: VFC<rankingPagePropType> = ({ response }) => {
  return (
    <div>
      <Link href="/">home</Link>
      <RankingList rankingData={response} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await getYato();
  return {
    props: { response },
  };
};

export default RankingPage;
