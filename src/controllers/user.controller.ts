import Hapi from "@hapi/hapi";
import { GetAllUserDto, getAllUsers, UserInput } from "../repositories/user.repository";
import { registerHandler } from "../repositories/user.repository";

export async function createUser (
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
): Promise<any> {
  try {
    const payload = request.payload as UserInput;
    const result = await registerHandler(payload);

    return h.response(result).code(201);
  } catch (error) {
    console.log(error);
    return h.response(error).code(500);
  }
};

export async function getAllUsersCon (
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
): Promise<any> {
  try {
    const payload = request.payload as GetAllUserDto;
    const result = await getAllUsers({getAllUserDto: payload});

    return h.response(result).code(201);
  } catch (error) {
    console.log(error);
    return h.response(error).code(500);
  }
};
