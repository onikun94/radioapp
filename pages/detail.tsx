import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { getYato } from "../api/getShimo";
import { PostList } from "../components/templates/post-list";
import { YatoList } from "../components/templates/yato-list";

const TopPage = () => {
  const [yatos, setYatos] = useState([]);
  const handleLog = () => {
    console.log("button is pushed");
  };
  // // // 後にSSRに変換する
  useEffect(() => {
    (async () => {
      const res = await getYato();
      console.log("res is ");
      console.log(res);
      setYatos(res);
    })();
  }, []);
  return (
    <MainText>
      <Link href="/">
        <a>home</a>
      </Link>
      <YatoList yatoInfo={yatos} />
    </MainText>
  );
};

const MainText = styled.div({});

export default TopPage;
