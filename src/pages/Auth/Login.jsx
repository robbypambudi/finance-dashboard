import { useForm } from "react-hook-form";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
export default function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="min-h-screen login flex justify-center items-center">
        <div className="px-4 py-2 bg-white font-primary w-[60%] flex flex-col justify-center items-center rounded-xl">
          <p className="font-bold text-3xl  my-4 rounded-xl">Member Login</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-gray-200 md:w-[420px] w-[320px] px-3  mt-10 rounded-3xl flex items-center z-0 hover:text-green-500 ">
              <HiOutlineMail size={24} className="ml-4" />
              <input
                type="text"
                name="nrp"
                className=" h-10 mx-3 my-1 w-full z-10 bg-gray-200 !text-black"
                placeholder="NRP"
                {...register("email", { required: true, maxLength: 20 })}
              ></input>
            </div>
            <div className="bg-gray-200 md:w-[420px] w-[320px] px-3  mt-5 rounded-3xl flex items-center z-0 hover:text-green-500">
              <RiLockPasswordFill size={24} className="ml-4 " />
              <input
                type="email"
                name="email,"
                className=" h-10 mx-3 my-1  w-full z-10 bg-gray-200 !text-black"
                placeholder="Password"
                {...register("password", { required: true, maxLength: 20 })}
              ></input>
            </div>

            <button className="md:w-[420px] w-[320px] px-3 my-2 h-12 bg-green-500 hover:bg-gray-700 rounded-3xl mt-10">
              <p className="font-bold text-white">Login</p>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
