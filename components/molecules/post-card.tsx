import styled from "@emotion/styled";
import React, { VFC } from "react";
import { colors } from "../../styles/color";
import { Typography } from "../atoms/typography";
import Link from "next/link";
import { Divider } from "../atoms/divider";

export type PostCardPropType = {
  onClick: () => void;
  cardKey: number;
  thumbnail: string;
  detail1: string;
  detail2?: string;
  detail3?: string;
  detail4?: number;
  maintext1: string;
  maintext2?: string;
  height?: number;
};

export const PostCard: VFC<PostCardPropType> = ({
  onClick,
  cardKey,
  thumbnail,
  detail1,
  detail2,
  detail3,
  detail4,
  maintext1,
  maintext2,
  height,
}) => {
  return (
    <Link href="detail">
      <Container key={cardKey} onClick={onClick} height={height}>
        <Thumbnail>
          <Typography text={thumbnail} type="14bold"></Typography>
        </Thumbnail>
        <SideText>
          <Detail>
            <Typography text={detail1} type="14normal" />
            <Typography text={detail2} type="14normal" />
            <Typography text={detail3} type="14normal" />
            {detail4 ? (
              <Typography text={String(detail4)} type="14normal" />
            ) : (
              <Typography text={""} type="14normal" />
            )}

            {/* <Typography text={segment} type="14normal" />
          <Typography text={contents} type="14normal" />
          <Typography text={answer} type="14normal" /> */}
          </Detail>
          <MainText>
            <Typography text={maintext1} type="20bold" />
          </MainText>
          <MainText>
            <Typography text={maintext2} type="20bold" />
          </MainText>
        </SideText>
      </Container>
    </Link>
  );
};

const Container = styled.div<{ height: number }>((props) => ({
  // display: "table-cell",
  cursor: "pointer", //カーソルを当てたときの変化
  verticalAlign: "middle",
  backgroundColor: colors.background.alphaPrimary,
  ":hover": { backgroundColor: colors.background.dark },
  margin: "15px 5px",
  boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
  width: "400px",
  height: `${props.height}px` ?? "300px",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  transition: ".3s",
}));

const Thumbnail = styled.div({
  textAlign: "center",
  display: "block",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10%",
  position: "relative",
  overflow: "hidden",
  padding: "10px",
});

const SideText = styled.div({
  // width: "80%",
  textAlign: "center",
  display: "block",
});

const MainText = styled.div({
  padding: "10px",
});

const Detail = styled.div({
  padding: "10px",
  margin: "10px",
});
