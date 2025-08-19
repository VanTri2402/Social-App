"use server";

import prisma from "@/lib/prisma";
import { getDbUserId } from "./user.actions";
import { revalidatePath } from "next/cache";

export async function createPost(content: string, image: string) {
  try {
    const userID = await getDbUserId();
    const post = await prisma.post.create({
      data: {
        authorId: userID,
        content,
        image,
      },
    });

    revalidatePath("/");
    return { success: true, post };
  } catch (error) {
    console.error("error : ", error);
    return { success: false };
  }
}
