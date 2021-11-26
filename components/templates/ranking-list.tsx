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
  const onlyUser = user.filter((x, i, self) => {
    return self.indexOf(x) === i;
  });

  const dst = rankingData.map((e) => ({
    user: e.user,
    address: e.address,
    pt: e.pt,
  }));
  //住所などの情報も一緒に絞れるか試した.
  // const userInfo = dst.filter((x, i, self) => {
  //   return self.indexOf(x.address) === i;
  // });
  const ptt = onlyUser.map((user) => {
    return dst.filter((rank) => {
      return rank.user == user;
    });
  });

  //各ユーザのポイント
  const anst = ptt.map((result) => {
    const test = result.map((userData) => {
      return userData.user;
    });
    const testdata = Array.from(new Set(test));

    const test2 = result.reduce((n, m) => n + m.pt, 0);
    let a = {};
    a[testdata] = test2;

    return a;
  });

  const handleTest = () => {
    console.log("handleTest");
    console.log(anst);
  };

  return (
    <Container>
      <div>
        <p>this is ranking page !</p>
        <button onClick={handleTest}>test</button>
        {/* {anst.map((an) => (
          <p>{an}</p>
        ))} */}

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
