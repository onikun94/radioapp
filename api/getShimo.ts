import { Response } from "../types/yato";

export const getYato = async (url: string | null): Promise<Response> => {
  const res = await fetch(
    url ? url : "https://onikun.pythonanywhere.com/shimo",
    {
      method: "GET",
    }
  );

  const _res: Response = await res.json();
  console.log("getshimo");
  console.log(url);
  console.log(_res);

  return _res;
};

export const searchUser = async (user) => {
  console.log("user is ");
  console.log(user);
  const data = encodeURI(user);
  const res = await fetch(
    `https://onikun.pythonanywhere.com/shimo/?user=${data}`,
    {
      method: "GET",
    }
  );

  const _res = await res.json();
  console.log("getUser");
  console.log(_res);

  return _res;
};

export const searchAddress = async (address) => {
  const res = await fetch(
    `https://onikun.pythonanywhere.com/shimo/?address=${address}`,
    {
      method: "GET",
    }
  );

  const _res = await res.json();
  console.log("getAddress");
  console.log(_res);

  return _res;
};
export const searchSegment = async (segment) => {
  const res = await fetch(
    `https://onikun.pythonanywhere.com/shimo/?segment=${segment}`,
    {
      method: "GET",
    }
  );

  const _res = await res.json();
  console.log("getSegment");
  console.log(_res);

  return _res;
};

export const searchContents = async (contents) => {
  const data = encodeURI(contents);
  const res = await fetch(
    `https://onikun.pythonanywhere.com/shimo/?contents=${data}`,
    {
      method: "GET",
    }
  );

  const _res = await res.json();
  console.log("getContents");
  console.log(_res);

  return _res;
};

export const searchAnswer = async (answer) => {
  const res = await fetch(
    `https://onikun.pythonanywhere.com/shimo/?answer=${answer}`,
    {
      method: "GET",
    }
  );

  const _res = await res.json();
  console.log("getAnswer");
  console.log(_res);

  return _res;
};

export const searchOnAir = async (on_air) => {
  const res = await fetch(
    `https://onikun.pythonanywhere.com/shimo/?on_air=${on_air}`,
    {
      method: "GET",
    }
  );

  const _res = await res.json();
  console.log("getOnAir");
  console.log(_res);

  return _res;
};

export const searchPt = async (pt) => {
  const res = await fetch(`https://onikun.pythonanywhere.com/shimo/?pt=${pt}`, {
    method: "GET",
  });

  const _res = await res.json();
  console.log("getPt");
  console.log(_res);

  return _res;
};
