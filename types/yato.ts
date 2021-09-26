export type YatoType = {
  on_air: string;
  segment: string;
  address: string;
  user: string;
  contents: string;
  answer: string;
  pt: number;
};

export type Respon = {
  yatos: YatoType[];
};
