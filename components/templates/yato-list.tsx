import React, { useState, VFC } from "react";
import { YatoType } from "../../types/yato";
import Link from "next/link";
import { handleUser } from "../../lib/handler";
import { Button } from "../atoms/button";
import { Divider } from "../atoms/divider";
import { Typography } from "../atoms/typography";
import styled from "@emotion/styled";
import { colors } from "../../styles/color";
import { Header } from "../molecules/header";
import { SearchBar } from "../organisms/search-bar";

export type YatoListPropType = {
  yatoInfo: YatoType[];
  searchValue: string;
  onChangeSearch: (text: string) => void;
  onClickSearch: () => void;
};

export const YatoList: VFC<YatoListPropType> = ({
  yatoInfo,
  searchValue,
  onChangeSearch,
  onClickSearch,
}) => {
  // export const YatoList = (props) => {
  //   const yato = props.yato;
  //   const [users, setUser] = useState([]);

  // const handleTest = () => {
  //   console.log("this is test");
  //   console.log(yato);
  //   console.log(typeof yato);
  // };

  return (
    <Container>
      <HeaderContainer>
        <Header
          headerText="shimohuriDatabase"
          colorType="dark"
          textType="24bold"
        ></Header>
      </HeaderContainer>
      <SearchBar
        value={searchValue}
        onChange={onChangeSearch}
        onClickSearch={onClickSearch}
      />
      {/* {yatoInfo.map((item) => (
        <></>
      ))} */}
    </Container>
  );
  // <div>
  //   <p>投稿一覧</p>
  //     {/* <Button
  //       backgroundColor={"primary"}
  //       textColor={"primary"}
  //       onClick={handleUser}
  //     >
  //       <Typography text="okボタン" type="24bold" />
  //     </Button> */}
  //     {/* <button onClick={handleTest}>検証</button> */}
  //     {/* <>
  //       {yato.map((d) => (
  //         <>
  //           <p>{d.on_air}</p>
  //           <p>{d.address}</p>
  //           <p>{d.user}</p>
  //           <p>{d.contents}</p>
  //           <p>{d.answer}</p>
  //           <p>{d.pt}</p>
  //           <p>-------------</p>
  //         </>
  //       ))}
  //     </> */}
  //   // </div>
  // );
};

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  backgroundColor: colors.background.primary,
});

const ButtonContainer = styled.div({
  display: "flex",
  padding: "10px",
  justifyContent: "space-between",
});

const LinkContainer = styled.a({});

const HeaderContainer = styled.div({});
