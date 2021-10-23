import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState, VFC } from "react";
import { searchUser } from "../../api/getShimo";
import { PostList } from "../../components/templates/post-list";
import { YatoList } from "../../components/templates/yato-list";
import { YatoType } from "../../types/yato";

export type UserPostPropType = {
  userdata: YatoType[];
};

const UserPost: VFC<UserPostPropType> = ({ userdata }) => {
  const router = useRouter();
  const pname = router.query.name;
  const [count, setCount] = useState(0);

  return (
    <>
      <Link href="/">home</Link>　<p>{pname}</p>
      <PostList yatoInfo={userdata} />
    </>
  );
};

// this serversideprops will be removed
export const getServerSideProps: GetServerSideProps = async (context) => {
  const userdata = await searchUser(context.query.name);
  return {
    props: { userdata },
  };
};

export default UserPost;
