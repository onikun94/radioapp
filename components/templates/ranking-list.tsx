import React, { VFC } from "react";
import styled from "@emotion/styled";
import { YatoType } from "../../types/yato";
import { YatoList } from "./yato-list";
import { colors } from "../../styles/color";
import { RankCard } from "../molecules/rank-card";

type RankingListPropType = {
  rankingData: YatoType[];
};

export const RankingList: VFC<RankingListPropType> = ({ rankingData }) => {
  const user = rankingData.map((data) => {
    return data.user;
  });
  //重複ユーザ削除
  // const onlyUser = user.filter((x, i, self) => {
  //   return self.indexOf(x) === i;
  // });

  const onlyUser = Array.from(new Set(user));

  const dst = rankingData.map((e) => ({
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

    const address = result.map((userData) => {
      return userData.address;
    });
    const simpleAddress = Array.from(new Set(address));
    const sAddress = simpleAddress.join("");

    const point = result.reduce((n, m) => n + m.pt, 0);
    // let a: { [key: string]: number | string } = {};
    let duser: { userName: string; address: string; point: number } = {
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
      <div>
        <p>this is ranking page !</p>
        <button onClick={handleTest}>test</button>
        {sortPoint.map((anstData) => (
          <div>
            <p>{anstData.userName}</p>
            <p>{anstData.address}</p>
            <p>{anstData.point}</p>
          </div>
        ))}

        {onlyUser.map((user) => (
          <CardContainer>
            <RankCard
              cardKey={1}
              onClick={handleTest}
              maintext1={user}
            ></RankCard>
          </CardContainer>
        ))}
      </div>
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
