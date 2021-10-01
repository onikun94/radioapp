import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Link from "next";
import { getYato, searchUser } from "../api/getShimo";
import { YatoList } from "../components/templates/yato-list";
import type { GetServerSideProps, NextPage } from "next";
import { YatoType } from "../types/yato";
import { handleOnChangeSearch, handleOnSearch } from "../lib/handler";
import { Button } from "../components/atoms/button";
import { Divider } from "../components/atoms/divider";
import { Icon } from "../components/atoms/icon";
import { TextArea } from "../components/atoms/text-input";
import { Typography } from "../components/atoms/typography";
import { Header } from "../components/molecules/header";
import { IconButton } from "../components/molecules/icon-button";
import { PostCard } from "../components/molecules/post-card";
import { PostContents } from "../components/molecules/post-contents";
import { PostContentsContainer } from "../components/organisms/postContents-container";
import { Respon } from "../types/yato";
// export type TopPagePropType = {
//   yatos: YatoType[];
// };
// const PostData: YatoType = {
//   on_air: "2021-09-03",
//   segment: "野党",
//   address: "東京都葛飾区",
//   user: "ポストカードクラフトスマン",
//   contents: "「これどう？おいしい？」「ん〜、なんかアホアホな味するなぁ。」",
//   answer: "大喜利のお題でしか聞かない形容詞",
//   pt: 0,
// };
const TopPage = () => {
  const [yatos, setYatos] = useState([]);
  const handleLog = () => {
    console.log("button is pushed");
  };
  // // // 後にSSRに変換する
  useEffect(() => {
    (async () => {
      const res = await getYato();
      setYatos(res);
      console.log(yatos);
    })();
  }, []);
  // const logo = "https://gyazo.com/74a4f1c158b3bb397f3d30f0ff1fc53e";
  const logo = "https://cdn.rawgit.com/emotion-js/emotion/main/emotion.png";
  return (
    <MainText>
      {/* <Header headerText="this is header" colorType="light"></Header>
      <p>this is button</p>
      <Button onClick={handleLog} backgroundColor="dark">
        <p>test</p>
      </Button>
      <p>this is test</p>
      <Divider />
      <p>this is test</p>
      <Divider />
      <p>this is test</p>
      <Divider />
      <p>this is test</p>
      <Divider />
      <TextArea
        // value={""}
        placeholder={"進撃の巨人"}
        backgroundColor={"primary"}
      />
      <Typography text="this is typography" type="16bold" />
      <IconButton onClick={handleLog} iconImage={logo}></IconButton>
      <PostCard
        cardKey={1}
        user="ポストカードクラフトスマン"
        address="東京都葛飾区"
        segment="野党"
        contents="ぐわ〜っ、斬られた〜！"
        answer="波田陽区の斬撃が、今になって命中した！"
        on_air="2021/09/03"
      ></PostCard>
      <PostContents
        postContentName="ポストカードクラフトスマン"
        postContentAnswer="波田陽区の斬撃が、今になって命中した！"
        postKey={1}
      ></PostContents>
      <Divider /> */}
      <p>投稿内容一覧（postContents-container）</p>
      <PostContentsContainer postContentsInfo={yatos} />
      <YatoList yatoInfo={yatos} />
    </MainText>

    // <YatoList
    //   yatoInfo={yatos}
    //   searchValue={""}
    //   onChangeSearch={(e) => handleOnChangeSearch}
    //   onClickSearch={() => handleOnSearch}
    // ></YatoList>
  );
};

// export const getServerSideProps:GetServerSideProps = async () =>{
//   const response = await getYato()

//   return(
//    props:{
//      yatos:response.yato,
//    }
//   )

// }
const MainText = styled.div({});

export default TopPage;
