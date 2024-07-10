"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../validations/userSchema";
import { json } from "stream/consumers";

function Home() {
  const { register, handleSubmit, watch , formState: { errors } } = useForm({
    resolver: zodResolver(userSchema),
  }); 

  console.log(errors);

   return (
    <main>
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name"
        {...register("name", { required: true })} />

      <label htmlFor="email">Email</label>
      <input type="email" id="email"
        {...register("email", { required: true })} />

      {/* password */}
      <label htmlFor="password">Password</label>
      <input type="password" id="password" 
        {...register("password", { required: true })} />

      {/* confirm password */}
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input type="password" id="confirmPassword" 
        {...register("confirmPassword", { required: true })} />

      {/* weight */}
      <label htmlFor="weight">Weight</label>
      <input type="text" id="weight"
        {...register("weight", { required: true })}/>

      {/* plan */}
      <label htmlFor="plan">Plan</label>
      <select id="plan"
        {...register("plan", { required: true })}>
        <option value="free">Free</option>
        <option value="basic">Basic</option>
        <option value="medium">Medium </option>
        <option value="premium">Premium</option>
      </select>

      <button type="submit">Submit</button>
    </form>

    <div>
      {JSON.stringify(watch(), null, 2)}
    </div>
    </main>
  );
  } 

  export default Home;