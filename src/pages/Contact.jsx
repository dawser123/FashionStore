import { useState } from "react";
import Button from "../components/UI/Button/Button";
import { useForm } from "react-hook-form";
 import Modal from "../components/UI/Modal/Modal";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    
    formState: { errors },
  } = useForm();

  const [msgIsSent, setMsgIsSent] = useState(false);

  const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const onSubmit = () => {
    setMsgIsSent(true);
    reset();
  };
  return (
    <>
      <div className="my-auto">
        <h1 className="text-center text-2xl font-bold text-white">
          Contact us
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-9 flex w-full flex-col gap-5 px-10 m:max-w-[650px]"
        >
          <input
            autoComplete="email"
            className="rounded-sm px-2 py-1 text-white placeholder:text-white xsm:py-2"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Enter valid email",
              pattern: {
                value: validateEmail,
                message: "Enter valid email and try again.",
              },
            })}
          />
          {errors.email && (
            <p className=" font-bold text-red-400">{errors.email.message}</p>
          )}
          <textarea
            className="max-h-[400px] min-h-[200px] rounded-sm border-pink-800 px-2 text-white  placeholder:text-white"
            placeholder="Your message"
            {...register("textarea", {
              required: "Fill the message area.",
              minLength: {
                value: 10,
                message: "Message must contain at least 10 characters.",
              },
            })}
          ></textarea>
          {errors.textarea && (
            <p className=" font-bold text-red-400">{errors.textarea.message}</p>
          )}
          <Button className="py-1 xsm:py-2 ">Send</Button>
        </form>
     
      </div>
      {msgIsSent && (
        <Modal
          onClose={() => {
            setMsgIsSent(false);
          }}
          className="py-12 lg:max-w-xl "
          title="Your message was sent"
        >
          <Button
            onClick={() => {
              setMsgIsSent(false);
            }}
            className="mx-auto my-auto mt-3 block w-full max-w-[80%] p-2  "
          >
            ok
          </Button>
        </Modal>
      )}
    </>
  );
};

export default Contact;
