import styled from "@emotion/styled";
import { PostContents } from "../molecules/post-contents";
import { Header } from "../molecules/header";
import { VFC } from "react";

export type postContentsContainerPropType = {
  postContentsInfo: {
    user: string;
    answer: string;
  }[];
};

export const PostContentsContainer: VFC<postContentsContainerPropType> = ({
  postContentsInfo,
}) => {
  return (
    <Container>
      <Header headerText="投稿内容" colorType="light" textType="16bold" />

      {postContentsInfo.map((info, index) => (
        <>
          <PostContents
            postContentName={info.user}
            postContentAnswer={info.answer}
          />
        </>
      ))}
    </Container>
  );
};

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
});
