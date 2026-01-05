"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormProps>();
  const router = useRouter();
  function onSubmit(data: EnquiryFormProps) {
    try {
      sendEmail(data);
      toast.success("Email sent successfully");
      reset();
      router.push("/thank-you");
    } catch (error) {
      toast.error("Failed to send email");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
      <div className="space-y-4 sm:space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white mb-1.5"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            className="block w-full rounded-lg border-2 border-gray-300 px-4 py-2.5 text-white placeholder:text-gray-400 focus:border-[#137765] focus:ring-2 focus:ring-[#137765]/20 focus:outline-none transition-all duration-200 sm:text-sm"
            placeholder="Enter your full name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500 text-xs mt-1 block">
              This field is required
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white mb-1.5"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="block w-full rounded-lg border-2 border-gray-300 px-4 py-2.5 text-white placeholder:text-gray-400 focus:border-[#137765] focus:ring-2 focus:ring-[#137765]/20 focus:outline-none transition-all duration-200 sm:text-sm"
            placeholder="your.email@example.com"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1 block">
              This field is required
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="contact"
            className="block text-sm font-medium text-white mb-1.5"
          >
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contact"
            className="block w-full rounded-lg border-2 border-gray-300 px-4 py-2.5 text-white placeholder:text-gray-400 focus:border-[#137765] focus:ring-2 focus:ring-[#137765]/20 focus:outline-none transition-all duration-200 sm:text-sm"
            placeholder="+65 1234 5678"
            {...register("contact", { required: true })}
          />
          {errors.contact && (
            <span className="text-red-500 text-xs mt-1 block">
              This field is required
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="comments"
            className="block text-sm font-medium text-white mb-1.5"
          >
            Your Enquiry <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={5}
            id="comments"
            className="block w-full rounded-lg border-2 border-gray-300 px-4 py-2.5 text-white placeholder:text-gray-400 focus:border-[#137765] focus:ring-2 focus:ring-[#137765]/20 focus:outline-none transition-all duration-200 sm:text-sm resize-none"
            defaultValue={""}
            placeholder="Tell us about your project or inquiry..."
            {...register("comments", { required: true })}
          />
          {errors.comments && (
            <span className="text-red-500 text-xs mt-1 block">
              This field is required
            </span>
          )}
        </div>
        <div className="w-full pt-2">
          <button
            type="submit"
            className="w-full sm:w-auto sm:min-w-50 mx-auto block rounded-lg bg-[#137765] px-6 py-3 font-semibold text-white shadow-md hover:bg-[#0f5f51] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#137765] focus:ring-offset-2 transition-all duration-300 text-sm sm:text-base cursor-pointer"
          >
            Send Enquiry
          </button>
        </div>
      </div>
    </form>
  );
};

export default EnquiryForm;
