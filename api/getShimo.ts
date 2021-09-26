import { Response } from "../types/yato";
export const getYato = async (): Promise<Response> => {
  const res = await fetch("http://localhost:8000/yato", {
    method: "GET",
  });

  const _res: Response = await res.json();
  console.log("getshimo");
  console.log(_res);

  return _res;
};

export const searchUser = async (user) => {
  const res = await fetch(`http://localhost:8000/yato/?user=${user}`, {
    method: "GET",
  });

  const _res = await res.json();
  console.log("getUser");
  console.log(_res);

  return _res;
};

export const searchAddress = async (address) => {
  const res = await fetch(`http://localhost:8000/yato/?address=${address}`, {
    method: "GET",
  });

  const _res = await res.json();
  console.log("getAddress");
  console.log(_res);

  return _res;
};
export const searchSegment = async (segment) => {
  const res = await fetch(`http://localhost:8000/yato/?segment=${segment}`, {
    method: "GET",
  });

  const _res = await res.json();
  console.log("getSegment");
  console.log(_res);

  return _res;
};

export const searchcontents = async (contents) => {
  const res = await fetch(`http://localhost:8000/yato/?contents=${contents}`, {
    method: "GET",
  });

  const _res = await res.json();
  console.log("getContents");
  console.log(_res);

  return _res;
};

export const searchAnswer = async (answer) => {
  const res = await fetch(`http://localhost:8000/yato/?answer=${answer}`, {
    method: "GET",
  });

  const _res = await res.json();
  console.log("getAnswer");
  console.log(_res);

  return _res;
};

export const searchOnAir = async (on_air) => {
  const res = await fetch(`http://localhost:8000/yato/?on_air=${on_air}`, {
    method: "GET",
  });

  const _res = await res.json();
  console.log("getOnAir");
  console.log(_res);

  return _res;
};

export const searchPt = async (pt) => {
  const res = await fetch(`http://localhost:8000/yato/?pt=${pt}`, {
    method: "GET",
  });

  const _res = await res.json();
  console.log("getPt");
  console.log(_res);

  return _res;
};

// export const postYato = async (pd) => {
//   const data = pd;
//   const res = await fetch("http://localhost:8000/yato/post", {
//     method: "POST",
//     headers: { "Content-Type": "application/json;charset=utf-8" },
//     body: JSON.stringify(data),
//   });
//   const _res = await res.json();
//   console.log("postshimo");
//   console.log(_res);
//   return _res;
// };
