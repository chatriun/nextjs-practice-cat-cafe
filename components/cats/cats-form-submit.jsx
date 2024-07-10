"use client";

import { useFormStatus } from "react-dom";
const CatsFormSubmit = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "submiting..." : "share!"}
    </button>
  );
};

export default CatsFormSubmit;
