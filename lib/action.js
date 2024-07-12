"use server";

import { redirect } from "next/navigation";
import { saveCat } from "./cats";
import { revalidatePath } from "next/cache";

const isValidText = (input) => {
  return !input || input.trim() === "";
};

export const shareCat = async (prevState, formData) => {
  const cat = {
    name: formData.get("cat-name"),
    age: formData.get("cat-age"),
    gender: formData.get("cat-gender"),
    description: formData.get("description"),
    image: formData.get("cat-image"),
    owner: formData.get("owner-name"),
    owner_email: formData.get("owner-email"),
  };

  if (
    isValidText(cat.name) ||
    isValidText(cat.age) ||
    isValidText(cat.gender) ||
    isValidText(cat.description) ||
    isValidText(cat.owner) ||
    isValidText(cat.owner_email) ||
    !cat.owner_email.includes("@") ||
    !cat.image ||
    cat.image.size === 0
  ) {
    return {
      message: "invalid input",
    };
  }

  await saveCat(cat);
  revalidatePath("/cats");
  redirect("/cats");
};
