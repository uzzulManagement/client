export type postAssetDataType = {
  name: string;
  department?: string;
  product: string;
  category: string;
  quantity: number;
  status?: string;
  manufacturer?: string;
  acquisitionDate?: string;
  note?: string;
  identifier?: string;
};

export type patchAssetDataType = {
  assetNumber: number;
  name: string;
  department?: string;
  product: string;
  category: string;
  quantity: number;
  status?: string;
  manufacturer?: string;
  acquisitionDate?: string;
  note?: string;
  identifier: string;
};
export type subNavListType = {
  id: string;
  link: string;
  title: string;
};
export type getAssetListType = {
  assetNumber: number;
  name: string;
  department?: string;
  product: string;
  category: string;
  quantity: number;
  status?: string;
  manufacturer?: string;
  acquisitionDate?: string;
  note?: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  identifier: string;
};
