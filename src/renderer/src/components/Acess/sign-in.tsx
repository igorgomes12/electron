/* eslint-disable prettier/prettier */
import { CardAcessImage } from "./card-acess-images";
import { FormSignIn } from "./form-sign-in";

export function SignIn() {
  return (
    <div className="grid min-h-screen w-full grid-cols-2">
      <CardAcessImage />
      <FormSignIn />
    </div>
  );
}
