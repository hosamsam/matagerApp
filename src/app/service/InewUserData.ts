export enum IlevelId {
  store =2,
  exporter,
  client
}
export enum levelToAr {
  'متجر'= 2,
  'مورد',
  'عميل'
}
export interface ImodalData {
  AreaId?: number,
  AreaName?: string,
  CityId?: number,
  CityName?:string,
  DistId?: number,
  DistName?: string
}
export interface Iplace {
  id: number,
  name; string,
  parent: number,
  parent_name: string| null
}
export interface IuserData{
  apiKey: string,
  Name: string,
  Username: string,
  Email:string,
  Mobile: string,
  Gender: string,
  Address:string,
  Map: string,
  Area: number,
  City: number,
  Dist: number,
  level_id: number,
  commercialRegisterId?: number,
  directorProductName?: string
}
