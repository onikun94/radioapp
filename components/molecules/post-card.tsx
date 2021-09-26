import styled from "@emotion/styled";
import { VFC } from "react";
import { colors } from "../../styles/color";
import { Typography } from "../atoms/typography";

export type PostCardPropType = {
  user: string;
  address: string;
  segment: string;
  contents: string;
  answer: string;
  on_air: string;
  className?: string;
};

export const PostCard: VFC<PostCardPropType> = ({
  user,
  address,
  segment,
  contents,
  answer,
  on_air,
}) => {
  return (
    <Container>
      <Thumbnail></Thumbnail>
      <SideText>
        <User>
          <Typography text={user} type="16bold" />
        </User>
        <Detail>
          <Typography text={address} type="14normal" />
          <Typography text={segment} type="14normal" />
          <Typography text={contents} type="14normal" />
          <Typography text={answer} type="14normal" />
          <Typography text={on_air} type="14normal" />
        </Detail>
      </SideText>
    </Container>
  );
};

const Container = styled.div({
  display: "flex",
  backgroundColor: colors.background.alphaPrimary,
  margin: "15px auto",
  boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
  width: "80%",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

const Thumbnail = styled.div({
  width: "70%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10%",
  position: "relative",
  overflow: "hidden",
  margin: "10px",
});

const SideText = styled.div({
  width: "80%",
  textAlign: "center",
  display: "block",
});

const User = styled.div({
  padding: "10px",
});

const Detail = styled.div({
  padding: "10px",
});
