import styled from "@emotion/styled";
import { PostContents } from "../molecules/post-contents";
import { Header } from "../molecules/header";
import { Divider } from "../atoms/divider";
import { VFC } from "react";

export type postContentsContainerPropType = {
  postContentsInfo: {
    name: string;
    answer: string;
  }[];
};

export const PostContentsContainer: VFC<postContentsContainerPropType> = ({
  postContentsInfo,
}) => {
  return (
    <Container>
      <Header headerText="投稿内容" colorType="light" textType="16bold" />
      {postContentsInfo.map((info, index) => {
        <>
          <PostContents
            postContentName={info.name}
            postContentAnswer={info.answer}
          />
          <Divider />
        </>;
      })}
    </Container>
  );
};

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
});
