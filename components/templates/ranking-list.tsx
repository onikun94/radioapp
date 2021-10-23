import React, { VFC } from "react";
import { on } from "stream";
import { YatoType } from "../../types/yato";
import { YatoList } from "./yato-list";

type RankingListPropType = {
  rankingData: YatoType[];
};

// type UserPt = {
//   [userName: string]: number;
// };

export const RankingList: VFC<RankingListPropType> = ({ rankingData }) => {
  //   const savePt: UserPt[] = [{ ポストカード: 1 }];
  //   savePt.push({ ポストカード: 1 });
  // const totalPt = Array.from(
  //   rankingData
  //     .reduce(
  //       (map, currentitem) => map.set(currentitem.user, currentitem),
  //       new Map()
  //     )
  //     .values()
  // );
  const user = rankingData.map((data) => {
    return data.user;
  });

  const onlyUser = user.filter((x, i, self) => {
    return self.indexOf(x) === i;
  });

  const allPt = onlyUser.map((user) => {
    // return user;
    return rankingData.filter((ranking) => {
      return ranking.user == user;
    });
  });

  const ptArray = allPt.map((pts) => {
    return pts.map((pt) => {
      return pt.pt;
    });
  });

  const total = ptArray.map((arr) => {
    return arr.reduce((n, m) => n + m);
  });

  const ray = total.reduce((x, y, index) => {
    x[index] = y;
    return x;
  }, {});

  const dst = rankingData.map((e) => ({ user: e.user, pt: e.pt }));
  const ptt = onlyUser.map((user) => {
    return dst.filter((rank) => {
      return rank.user == user;
    });
  });
  const anst = ptt.map((result) => {
    return result.reduce((n, m) => n + m.pt, 0);
  });

  const userPt = [...total, ...onlyUser];
  let userMap = new Map();
  //should change method
  for (let i = 0; i < userPt.length / 2; i++) {
    userMap.set(userPt[i], userPt[userPt.length / 2 + i]);
  }

  const handleTest = () => {
    console.log(ptt);
    console.log("---------");
    console.log(anst);
  };

  return (
    <div>
      <p>this isranking page !</p>
      <button onClick={handleTest}>test</button>
      {/* <button onClick={addUser}>add</button> */}
      {/* {savePt.map((data) => (
        <p>{data.userName}</p>
      ))} */}
      {/* {rankingData.map((data) => (
        <div>
          <p>{data.user}</p>
          <p>{data.pt}pt</p>
        </div>
      ))} */}
      
      {userPt.map((up) => (
        <div>
          <p>{up}</p>
        </div>
      ))}
      {total.map((pt) => (
        <div>
          <p>{pt}</p>
        </div>
      ))}
      {onlyUser.map((user) => (
        <div>
          <p>{user}</p>
        </div>
      ))}
    </div>
  );
};
