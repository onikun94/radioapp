import React, { useState } from "react";
import router, { useRouter } from "next/router";
import {
  searchUser,
  searchAddress,
  searchcontents,
  searchAnswer,
} from "../api/getShimo";
import { Layout } from "../components/Layout";
import { YatoType } from "../types/yato";
// import { YatoData } from ".";
import styled from "@emotion/styled";
import { TextInput } from "../components/atoms/text-input";

export const YatoData: YatoType = {
  on_air: "",
  segment: "",
  address: "",
  user: "",
  contents: "",
  answer: "",
  pt: 0,
};

const SearchPage = () => {
  const [user, setUser] = useState([YatoData]);
  const [keyword, setKeyword] = useState<string>("");
  const [link, setLink] = useState(null);
  const router = useRouter();

  const handleSubmit = async (words: string) => {
    console.log("handle");
    if (keyword !== "") {
      router.push({
        // pathname: "/result",
        query: { word: words },
      });
      const res = await searchUser(words);
      // console.log(`res = ${res[0].answer}`);
      console.log(typeof res);
      setUser(res);
      setLink(res.links);
    }
  };

  const handleWord = (word) => {
    setKeyword(word);
  };

  return (
    <Layout>
      <div>this is searchPage</div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(keyword);
          console.log("submit");
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            handleWord(e.target.value);
          }}
        />
      </form>
      <>
        {user.map((d) => (
          <>
            <p>{d.on_air}</p>
            <p>{d.address}</p>
            <p>{d.user}</p>
            <p>{d.contents}</p>
            <p>{d.answer}</p>
            <p>{d.pt !== 0 ? d.pt : ""}</p>
            <p>-------------</p>
          </>
        ))}
      </>
    </Layout>
  );
};

export default SearchPage;
