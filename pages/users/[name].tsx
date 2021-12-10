import styled from "@emotion/styled";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState, VFC } from "react";
import { searchUser } from "../../api/getShimo";
import { Header } from "../../components/molecules/header";
import { PostList } from "../../components/templates/post-list";
import { YatoType } from "../../types/yato";

export type UserPostPropType = {
  userdata: YatoType[];
};

const UserPost: VFC<UserPostPropType> = ({ userdata }) => {
  const router = useRouter();
  const pname = router.query.name.toString(); //nameは[name].tsxから
  const [count, setCount] = useState(0);

  return (
    <>
      <HeaderContainer>
        <Header
          headerText="霜降りデータベース"
          colorType="dark"
          textType="24bold"
        ></Header>
      </HeaderContainer>
      {/* <p>{pname}</p> */}
      <PostList userName={pname} yatoInfo={userdata} />
    </>
  );
};

const HeaderContainer = styled.div({});

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userdata = await searchUser(context.query.name);
  return {
    props: { userdata },
  };
};

export default UserPost;
