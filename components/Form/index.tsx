import React from "react";

interface FormProps {
  register: any;
  errors: any;
  handleSubmit: any;
  submit: any;
}

function Form({ register, errors, handleSubmit, submit }: FormProps) {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="container bg-slate-100 rounded-xl mx-auto max-w-md p-6 drop-shadow-xl">
        <h1 className="text-3xl font-bold mb-6">Testing Form</h1>
        <form onSubmit={handleSubmit(submit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              {...register("username")}
              type="text"
              placeholder="Enter your username"
            />
            {errors?.username?.message && (
              <span className="text-[12px] text-red-600 italic ml-1">
                {errors.username?.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              {...register("email")}
              placeholder="Enter your email"
            />
            {errors?.email?.message && (
              <span className="text-[12px] text-red-600 italic ml-1">
                {errors.email?.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              {...register("password")}
              placeholder="Enter your password"
            />
            {errors?.password?.message && (
              <span className="text-[12px] text-red-600 italic ml-1">
                {errors.password?.message}
              </span>
            )}
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
