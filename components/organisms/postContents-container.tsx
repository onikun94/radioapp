import styled from "@emotion/styled";
import { PostContents } from "../molecules/post-contents";
import { Header } from "../molecules/header";
import { VFC } from "react";

export type postContentsContainerPropType = {
  postContentsInfo: {
    id: number;
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

      {postContentsInfo.map((info) => (
        <div key={info.id}>
          <PostContents
            postContentName={info.user}
            postContentAnswer={info.answer}
            postKey={info.id}
          />
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
});
