import React, { VFC } from "react";
import { YatoType } from "../../types/yato";

import { handleOnPage, handleUser } from "../../lib/handler";
import styled from "@emotion/styled";
import { colors } from "../../styles/color";
import { Header } from "../molecules/header";
import { PostCard } from "../molecules/post-card";
import Link from "next/link";
import { DataLink } from "../atoms/data-link";
import { useRouter } from "next/router";
import { StringifyOptions } from "querystring";
import { Typography } from "../atoms/typography";

export type YatoListPropType = {
  yatoInfo: YatoType[];
  userName?: string;
};

export const PostList: VFC<YatoListPropType> = ({ userName, yatoInfo }) => {
  const router = useRouter();
  return (
    <Container>
      <NameContainer>
        <Typography text={userName ? userName : ""} type="20bold" />
      </NameContainer>
      <CardContainer>
        {yatoInfo.map((info) => (
          <div key={info.id}>
            <PostCard
              onClick={() =>
                router.push({
                  pathname: "users/[name]",
                  query: { name: info.user },
                })
              }
              cardKey={info.id}
              thumbnail={info.segment}
              detail1={info.on_air}
              detail2={info.address}
              detail3={info.user}
              maintext1={info.contents}
              maintext2={info.answer}
              detail4={info.pt}
              height={400}
            />
          </div>
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

const NameContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  padding: "16px",
});
