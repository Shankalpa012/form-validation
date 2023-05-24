import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import Form from "@/components/Form";

interface FormValues {
  username: string;
  email: string;
  password: string;
}

export default function Home() {
  const zodSchema = zod.object({
    username: zod.string({}).nonempty("Username is Required"),
    email: zod.string({}).nonempty("Email is required").email(),
    password: zod
      .string()
      .nonempty("Password is Required")
      .min(5, { message: "Password Length Should be more than 5" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(zodSchema),
  });

  const submit = (data: any) => {
    console.log(data);
  };

  return (
    <Form
      register={register}
      errors={errors}
      handleSubmit={handleSubmit}
      submit={submit}
    />
  );
}
