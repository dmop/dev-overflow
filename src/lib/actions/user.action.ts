"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import {
  CreateUserParams,
  CreateUserParams,
  DeleteUserParams,
  DeleteUserParams,
  UpdateUserParams,
} from "./shared.types";
import error from "next/error";
import { revalidatePath } from "next/cache";
import path from "path";
import Question from "@/database/question.model";

export async function getUserById(params: any) {
  try {
    connectToDatabase();

    const { userId } = params;

    return await User.findOne({ clerkId: userId });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createUser(userData: CreateUserParams) {
  try {
    connectToDatabase();

    const newUser = User.create(userData);

    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateUser(params: UpdateUserParams) {
  try {
    connectToDatabase();

    const { clerkId, updateData, path } = params;

    await User.findByIdAndUpdate({ clerkId }, updateData, {
      new: true,
    });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteUser(params: DeleteUserParams) {
  try {
    connectToDatabase();

    const { clerkId } = params;

    const user = await User.findOne({ clerkId });

    if (!user) {
      throw new Error("User not found");
    }

    const userQuestionIds = await Question.find({
      author: user._id,
    }).distinct("_id");

    await Question.deleteMany({
      author: user._id,
    });

    const deletedUser = await User.findByIdAndDelete(user._id);

    return deletedUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}