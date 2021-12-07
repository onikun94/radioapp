import React, { VFC } from "react";
import styled from "@emotion/styled";
import { YatoType } from "../../types/yato";
import { YatoList } from "./yato-list";
import { colors } from "../../styles/color";
import { RankCard } from "../molecules/rank-card";
import { PostCard } from "../molecules/post-card";
import router from "next/router";
import { info } from "console";
import { Header } from "../molecules/header";

type RankingListPropType = {
  rankingData: YatoType[];
};

export const RankingList: VFC<RankingListPropType> = ({ rankingData }) => {
  const user = rankingData.map((data) => {
    return data.user;
  });

  const onlyUser = Array.from(new Set(user));

  const dst = rankingData.map((e) => ({
    id: e.id,
    user: e.user,
    address: e.address,
    pt: e.pt,
  }));

  const ptt = onlyUser.map((user) => {
    return dst.filter((rank) => {
      return rank.user == user;
    });
  });

  //各ユーザのポイント
  const totalPoint = ptt.map((result) => {
    const user = result.map((userData) => {
      return userData.user;
    });
    const simpleUser = Array.from(new Set(user));
    const sUser = simpleUser.join("");

    const id = result.map((userData) => {
      return userData.id;
    });
    const simpleId = Array.from(new Set(id));
    const sId = simpleId.join("");

    const address = result.map((userData) => {
      return userData.address;
    });
    const simpleAddress = Array.from(new Set(address));
    const sAddress = simpleAddress.join("");

    const point = result.reduce((n, m) => n + m.pt, 0);
    let duser: {
      id: number;
      userName: string;
      address: string;
      point: number;
    } = {
      id: Number(sId),
      userName: sUser,
      address: sAddress,
      point: point,
    };

    return duser;
  });

  //sort(降順)
  const sortPoint = totalPoint.sort((a, b) => b.point - a.point);

  const handleTest = () => {
    console.log("handleTest");
    console.log(totalPoint);
  };

  return (
    <Container>
      <HeaderContainer>
        <Header
          headerText="shimohuriDatabase"
          colorType="dark"
          textType="24bold"
        ></Header>
      </HeaderContainer>

      <CardContainer>
        {sortPoint.map((sp) => (
          <PostCard
            onClick={() =>
              router.push({
                pathname: "users/[name]",
                query: { name: sp.userName },
              })
            }
            cardKey={sp.id}
            thumbnail={sp.point.toString() + "pt"}
            detail1={sp.address}
            maintext1={sp.userName}
          ></PostCard>
        ))}
      </CardContainer>
    </Container>
  );
};

const Container = styled.div({
  // display: "flex",
  maxWidth: "100%",
  flexDirection: "column",
  // flexWrap: "wrap",
  backgroundColor: colors.background.primary,
});

const CardContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  // width: "1000",
});

const HeaderContainer = styled.div({});
