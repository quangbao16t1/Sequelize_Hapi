import { Op } from "sequelize";
import Country from "../models/countries";
import User from "../models/users";

export interface UserInput {
  full_name: string;
  conutry_code: number;
}

export interface GetAllUserDto {
  keyWord?: string;
  filter?: number;
  page: number;
  pageSize: number;
}

export async function registerHandler(userRegister: UserInput) {
  try {
    const { full_name, conutry_code } = userRegister;

    const countryExit = await Country.findOne({
      where: { code: conutry_code },
    });

    if (!countryExit) throw new Error("Country_code does not exit");
    const createdUser = await User.create({
      full_name,
      conutry_code,
    });

    return createdUser;
  } catch (err) {
    console.log(err);
  }
}

export const getAllUsers = async function ({
  getAllUserDto,
}: {
  getAllUserDto: GetAllUserDto;
}): Promise<any> {
  try {
    const { keyWord = "", filter = 1, page = 1, pageSize = 10 } = getAllUserDto;
    const offset = (page - 1) * pageSize;
    const limit = pageSize;

    let condition = {
      [Op.or]: [
        { full_name: keyWord ? { [Op.like]: `%${keyWord}%` } : "" },
        { conutry_code: keyWord ? { [Op.like]: `%${keyWord}%` } : "" },
      ],
    };

    const result = await User.findAndCountAll({
      where: { full_name: keyWord ? { [Op.like]: `%${keyWord}%` } : "" },
      include: ["country"],
      offset,
      limit,
      order:
        filter === 1 ? [["created_at", "DESC"]] : [["country", "code", "ASC"]],
    });

    return {
      page: page,
      pageSize,
      result: result.rows,
      total_item: result.count,
    };
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = async ({
  id,
  userUpdateDto,
}: {
  id: number;
  userUpdateDto: UserInput;
}) => {
  try {
    const userUpdate = await User.findOne({ where: { id } });

    if (!userUpdate) throw new Error("User not found!!!");

    Object.assign(userUpdate, userUpdateDto);

    return await userUpdate.save();
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async ({ id }: { id: number }) => {
  try {
    const userDelete = await User.findOne({ where: { id } });

    if (!userDelete) throw new Error("User not found!!!");

    return await User.destroy({ where: { id } });
  } catch (error) {
    console.log(error);
  }
};
