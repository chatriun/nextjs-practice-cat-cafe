"use server";

import { redirect } from "next/navigation";
import { saveCat } from "./cats";

export const shareCat = async (formData) => {
  const cat = {
    name: formData.get("cat-name"),
    age: formData.get("cat-age"),
    gender: formData.get("cat-gender"),
    description: formData.get("description"),
    image: formData.get("cat-image"),
    owner: formData.get("owner-name"),
    owner_email: formData.get("owner-email"),
  };

  console.log(cat);

  await saveCat(cat);
  redirect("/cats");
};
