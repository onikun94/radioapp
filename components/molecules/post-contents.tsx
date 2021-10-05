import styled from "@emotion/styled";
import { Typography } from "../atoms/typography";
import { colors } from "../../styles/color";
import { VFC } from "react";

export type PostContentsPropType = {
  postContentName: string;
  postContentAnswer: string;
  postKey: number;
  className?: string;
};

export const PostContents: VFC<PostContentsPropType> = ({
  postContentName,
  postContentAnswer,
  postKey,
  className,
}) => {
  return (
    <Container>
      <PostContentName key={postKey}>
        <Typography text={postContentName} type="14normal" />
      </PostContentName>
      <PostContentAnswer>
        <Typography text={postContentAnswer} type="14normal" />
      </PostContentAnswer>
    </Container>
  );
};

const Container = styled.div({
  display: "flex",
  backgroundColor: colors.background.primary,
});

const PostContentName = styled.div({
  width: "200px",
  padding: "20px",
  textAlign: "left",
});

const PostContentAnswer = styled.div({
  width: "300px",
  padding: "20px",
  textAlign: "right",
});
