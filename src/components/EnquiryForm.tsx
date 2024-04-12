"use client";

import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

type EnquiryFormProps = {
  name: string;
  email: string;
  contact: string;
  comments: string;
};

async function sendEmail(data: EnquiryFormProps) {
  const response = await fetch("/api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

const EnquiryForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<EnquiryFormProps>();

  function onSubmit(data: EnquiryFormProps) {
    toast.promise(sendEmail(data), {
      loading: "Sending...",
      success() {
        reset();
        return "Your enquiry has been sent successfully";
      },
      error: "An error occurred while sending your enquiry",
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-[10px]">
        <div className="mt-2">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Your name"
            {...register('name', { required: true })}
          />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="mt-2">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Your email"
            {...register('email', { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div>

        <div className="mt-2">
          <label htmlFor="contact" className="sr-only">
            Contact
          </label>
          <input
            type="text"
            id="contact"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Your contact number"
            {...register('contact', { required: true })}
          />
          {errors.contact && <span>This field is required</span>}
        </div>

        <div className="mt-2">
          <textarea
            rows={4}
            id="comments"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={""}
            placeholder="Leave your enquiry here..."
            {...register('comments', { required: true })}
          />
          {errors.comments && <span>This field is required</span>}
        </div>
        <div className="w-full text-center">
          <button
            type="submit"
            className="mt-2 mx-auto rounded-md bg-[#137765] px-4 py-2 font-medium text-white shadow-sm hover:bg-[#137765] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137765]"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );

}

export default EnquiryForm;
