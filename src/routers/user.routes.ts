import { ServerRoute } from "@hapi/hapi";
import Joi from "joi";
import { createUser, deleteUserCon, getAllUsersCon, updateUserCon } from "../controllers/user.controller";

export const userRoutes: ServerRoute[] = [
  {
    method: "POST",
    path: "/users/new",
    handler: createUser,
  },
  {
    method: "POST",
    path: "/users",
    handler: getAllUsersCon,
  },
  {
    method: "PUT",
    path: "/users/{id}",
    handler: updateUserCon,
    options: {
        validate: {
          params: Joi.object({
            id: Joi.number()
          }),
          payload: Joi.object({
            full_name: Joi.string().min(3).max(10),
            conutry_code: Joi.number()
          })
        }
      }
  },
  {
    method: "DELETE",
    path: "/users/{id}",
    handler: deleteUserCon,
  },
];
