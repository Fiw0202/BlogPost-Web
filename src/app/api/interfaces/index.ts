export interface ICryptoDetail {
  coin?: string;
  wallet?: string;
  network?: string;
}

export interface ICompanyDetailAdrCoor {
  lat?: string;
  lng?: string;
}

export interface ICompanyDetailAdr {
  address?: string;
  city?: string;
  coordinates?: ICompanyDetailAdrCoor;
  postalCode?: string;
  state?: string;
}

export interface IUserCompany {
  address: ICompanyDetailAdr;
  department: string;
  name: string;
  title: string;
}

export interface IBankDetail {
  cardExpire?: string;
  cardNumber?: string;
  cardType?: string;
  currency?: string;
  iban?: string;
}

export interface IAddressCoor {
  lat?: string;
  lng?: string;
}

export interface IUserAddressDetail {
  address?: string;
  city?: string;
  coordinates?: IAddressCoor;
  postalCode: string;
  state?: string;
}

export interface IUserHairStyle {
  color?: string;
  type?: string;
}
export interface IUserDetail {
  id?: number;
  firstName: string;
  lastName: string;
  maidenName?: string;
  age: number;
  gender?: string;
  email?: string;
  phone?: string;
  username?: string;
  password?: string;
  birthDate?: string;
  image?: string;
  bloodGroup?: string;
  height?: number;
  weight?: number;
  eyeColor?: string;
  hair?: IUserHairStyle;
  domain?: string;
  ip?: string;
  address: IUserAddressDetail;
  macAddress?: string;
  university?: string;
  bank?: IBankDetail;
  company: IUserCompany;
  ein?: string;
  ssn?: string;
  userAgent?: string;
  crypto?: ICryptoDetail;
}

export interface IResp {
  users: IUserDetail[];
}
