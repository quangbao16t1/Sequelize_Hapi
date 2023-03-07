import Country, { CountryOuput } from "../models/countries";
import { Op } from "sequelize";

export interface CountryInput {
  name: string;
  continent_name: string;
}

export const createCountry = async function (
  countryInput: CountryInput
): Promise<any> {
  try {
    const { name, continent_name } = countryInput;
    const createdCountry = await Country.create({ name, continent_name });

    return createdCountry;
  } catch (err) {
    console.log(err);
  }
};

export const getAllCountries = async function (keyWord: string): Promise<any> {
  try {
    const countries = await Country.findAll({
      where: { name: keyWord ? { [Op.like]: `%${keyWord}%` } : "" },
    });

    return countries;
  } catch (err) {
    console.log(err);
  }
};

export const updateCountry = async ({
  countryUpdate,
  code,
}: {
  countryUpdate: CountryInput;
  code: number;
}): Promise<any> => {
  try {
    const country = await Country.findOne({
      where: { code },
    });

    if (!country) throw new Error("Country does not exit!!!");

    Object.assign(country, countryUpdate);

    return await country.save();
  } catch (err) {
    console.log(err);
  }
};
