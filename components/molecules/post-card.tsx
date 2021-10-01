import styled from "@emotion/styled";
import { VFC } from "react";
import { colors } from "../../styles/color";
import { Typography } from "../atoms/typography";
import Link from "next/link";
export type PostCardPropType = {
  onClick: () => void;
  cardKey: number;
  user: string;
  address: string;
  segment: string;
  contents: string;
  answer: string;
  on_air: string;
  className?: string;
};

export const PostCard: VFC<PostCardPropType> = ({
  onClick,
  cardKey,
  user,
  address,
  segment,
  contents,
  answer,
  on_air,
}) => {
  return (
    <Link href="detail">
      <Container key={cardKey} onClick={onClick}>
        <Thumbnail>
          <Typography text={segment} type="14bold"></Typography>
        </Thumbnail>
        <SideText>
          <Detail>
            <Typography text={on_air} type="14normal" />
            <Typography text={address} type="14normal" />
            {/* <Typography text={segment} type="14normal" />
          <Typography text={contents} type="14normal" />
          <Typography text={answer} type="14normal" /> */}
          </Detail>
          <User>
            <Typography text={user} type="20bold" />
          </User>
        </SideText>
      </Container>
    </Link>
  );
};

const Container = styled.div({
  // display: "table-cell",
  cursor: "pointer", //カーソルを当てたときの変化
  verticalAlign: "middle",
  backgroundColor: colors.background.alphaPrimary,
  ":hover": { backgroundColor: colors.background.dark },
  margin: "15px 5px",
  boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
  width: "400px",
  height: "250px",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  transition: ".3s",
});

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

const User = styled.div({
  padding: "10px",
});

const Detail = styled.div({
  padding: "10px",
  margin: "10px",
});
