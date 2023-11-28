import { useForm } from "react-hook-form";
import Button from "./UI/Button/Button";
import { useState } from "react";
import Modal from "./UI/Modal/Modal";

const Newsletter = () => {
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const form = useForm();
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log(data);
    setEmailSubscribed(true);
    reset();
  };
  return (
    <>
      <h1 className="mt-36 text-center text-2xl font-bold uppercase text-white xsm:text-3xl ">
        newsletter
      </h1>
      <p className="my-10 px-10 text-center text-white m:mx-auto m:max-w-[500px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        cupiditate expedita quos temporibus labore quas itaque quo alias
        repellendus maxime.
      </p>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="mb-20 flex flex-col items-center  justify-center  px-10 text-white "
      >
        <input
          aria-label="Email"
          autoComplete="off"
          className="w-full rounded-lg px-3 py-1 placeholder:text-white xsm:w-[80%] m:max-w-xl"
          type="email"
          id="email"
          {...register("email", {
            required: "Enter valid email",
            pattern: {
              value: validateEmail,
              message: "Invalid email format",
            },
          })}
        />
        <p className="mt-4 text-red-500">{errors.email?.message}</p>
        <Button className="my-4 rounded-lg px-4 py-2 text-white">
          Subscribe
        </Button>
      </form>

      {emailSubscribed && (
        <Modal
          modalPosition="-bottom-full"
          isOpen={emailSubscribed}
          onClose={() => setEmailSubscribed(false)}
          title="Your have been subscribed!"
        >
          <Button
            onClick={() => setEmailSubscribed(false)}
            className="mx-auto mt-5 block w-[50%] py-1"
          >
            Close
          </Button>
        </Modal>
      )}
    </>
  );
};

export default Newsletter;
