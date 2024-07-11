"use client";
import CatsFormSubmit from "@/components/cats/cats-form-submit";
import ImagePicker from "@/components/cats/image-picker";
import { shareCat } from "@/lib/action";
import { useFormState } from "react-dom";

const SharePage = () => {
  const [state, formAction] = useFormState(shareCat, { message: null });
  return (
    <>
      <header style={{ marginBottom: 50 }}>
        <h3>Add Your Cat's Profile</h3>
        <h5>help them find the purrfect match!</h5>
      </header>
      <main>
        <form action={formAction}>
          <div
            style={{
              display: "flex",
              gap: 20,
            }}
          >
            <div>
              <label htmlFor="cat-name">Cat's Name:</label>
              <input id="cat-name" name="cat-name" type="text" required />
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <label htmlFor="cat-gender">Gender:</label>
              <input id="cat-gender" name="cat-gender" type="text" required />
            </div>
            <div>
              <label htmlFor="cat-age">Age:</label>
              <input id="cat-age" name="cat-age" type="number" required />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 20,
            }}
          >
            <div>
              <label htmlFor="owner-name">Your name:</label>
              <input id="owner-name" name="owner-name" type="text" required />
            </div>
            <div>
              <label htmlFor="owner-email">Your email:</label>
              <input
                id="owner-email"
                name="owner-email"
                type="email"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <input id="description" name="description" type="text" required />
          </div>
          <ImagePicker label="cat image" name="cat-image" />
          {state.message && <p>{state.message}</p>}
          <CatsFormSubmit />
        </form>
      </main>
    </>
  );
};

export default SharePage;
