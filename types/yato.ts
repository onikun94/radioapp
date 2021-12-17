export type YatoType = {
  id: number;
  on_air: string;
  segment: string;
  address: string;
  user: string;
  contents: string;
  answer: string;
  pt: number;
  link: number;
};

export type PagingLink = {
  next?: string;
  prev?: string;
};

export type Response = {
  yatos: YatoType[];
  // link: PagingLink;
};
