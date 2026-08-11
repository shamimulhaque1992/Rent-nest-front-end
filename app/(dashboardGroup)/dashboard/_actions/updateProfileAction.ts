"use server";

import { validateAccessToken } from "@/service/validateAccessToken";
import { revalidateTag } from "next/cache";

export type IUpdateProfileState = {
  success: boolean;
  message: string;
  statusCode: number;
} | null;

export const updateProfileAction = async (
  userId: string,
  _prevState: IUpdateProfileState,
  formData: FormData,
): Promise<IUpdateProfileState> => {
  const accessToken = await validateAccessToken();

  const body = {
    name: (formData.get("name") as string)?.trim(),
    // email: (formData.get("email") as string)?.trim(),
    avatar: (formData.get("avatar") as string)?.trim(),
    bio: (formData.get("bio") as string)?.trim(),
    phone: (formData.get("phone") as string)?.trim(),
  };

  const res = await fetch(`${process.env.BACKEND_API_URL}/users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify(body),
    cache: "no-cache",
  });

  const result = await res.json();

  if (result.success) {
    revalidateTag("my-profile", { expire: 0 });
  }

  return result;
};
