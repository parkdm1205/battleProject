interface IHostCountry {
  name: string,
  stamp_duty: number,
  country_id: string,
  default_currency_id: string
  id: number,
  product_id: number,
  language_id: number,
  government_tax: number,
  insurance_tax: number,
  loading: number,
  is_disabled: boolean,
  country_group: string,
  mini_table_id: number,
  host_country_states: Array<ICountryList>
}
interface ICountryList{
  name: string,
  stamp_duty: number,
  country_id: string,
  default_currency_id: string,
  id: number,
  product_id: number,
  language_id: number,
  government_tax: number,
  insurance_tax: number,
  loading: number,
  is_disabled: boolean,
  country_group: string,
  mini_table_id: number,
  country_state: ICountry
}

interface ICountry{
  id: number,
  name: string,
  country_id: string,
  code: string,
  created_at: string,
  updated_at: string
}
interface IDestinationCountry {
  name: string,
  conflict_zone_id: number,
  country_id: string,
  default_currency_id: string,
  id: number,
  product_id: number,
  language_id: number,
  is_disabled: boolean,
  admin_only: boolean,
  show_sanction_note: boolean,
  mini_table_id: number,
  country: ICountryFD,
  conflict_zone: IConflictZone
}
interface IConflictZone{
  id: number,
  mini_table_id: null,
  name: string,
  loading_factor: number,
  risk_index: number,
  product_id: number,
  enabled: boolean,
  created_at: string,
  updated_at: string
}
interface ICountryFD{
  id: string,
  name: string,
  default_currency_id: string,
  language_id: number
  region_id: number,
  created_at: string,
  updated_at: string,
  deleted_at: null,
  is_eea: boolean,
  aliases: [],
  alternative_names: []
}
interface ICurrency{
  iso_code: string,
  name: string
}

interface ITravelForm{
  age: string,
  countryName: string,
  currency: string,
  depositDate: string,
  destination: string,
  endDate: string,
  no: boolean,
  productId: number,
  startDate: string,
  stateName: string,
  tripCost: number,
  yes: boolean
}

export {
  IDestinationCountry,
  IHostCountry,
  ICurrency,
  ITravelForm,
}
