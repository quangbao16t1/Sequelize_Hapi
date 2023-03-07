import Hapi from "@hapi/hapi";
import { CountryInput, updateCountry } from "../repositories/country.repository";
import { createCountry, getAllCountries } from "../repositories/country.repository";

export async function createCountryCon (
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
): Promise<any> {
  try {
    const payload = request.payload as CountryInput;
    const result = await createCountry(payload);

    return h.response(result).code(201);
  } catch (error) {
    console.log(error);
  }
};

export async function getAllCountriesCon (
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
): Promise<any> {
  try {
    const result = await getAllCountries(request.query.keyWord);

    return h.response(result).code(201);
  } catch (error) {
    console.log(error);
    return h.response(error).code(500);
  }
};

export async function updateCountryCon (
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
): Promise<any> {
  try {
    const code = request.params.code;
    const payload = request.payload as CountryInput
    const result = await updateCountry({code, countryUpdate: payload});

    return h.response(result).code(201);
  } catch (error) {
    console.log(error);
    return h.response(error).code(500);
  }
};

