import { ServerRoute } from "@hapi/hapi";
import { createUser, getAllUsersCon } from "../controllers/user.controller";


export const userRoutes: ServerRoute[] = [
    {
        method: "POST",
        path: "/users/new",
        handler: createUser
    },
    {
        method: "POST",
        path: "/users",
        handler: getAllUsersCon
    }
]