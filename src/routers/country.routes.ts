import { ServerRoute } from "@hapi/hapi";
import Joi from "joi";
import {createCountryCon, getAllCountriesCon, updateCountryCon} from "../controllers/country.controller";


export const countryRoutes: ServerRoute[] = [
  {
    method: "POST",
    path: "/country",
    handler: createCountryCon
  },
  {
    method: "GET",
    path: "/country",
    handler: getAllCountriesCon
  },
  {
    method: "PUT",
    path: "/country/{code}",
    handler: updateCountryCon,
    options: {
      validate: {
        params: Joi.object({
          code: Joi.number()
        }),
        payload: Joi.object({
          name: Joi.string().min(3).max(10)
        })
      }
    }
  },
];
