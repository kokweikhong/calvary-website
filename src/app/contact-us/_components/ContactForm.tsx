import EnquiryForm from "@/components/EnquiryForm";

const ContactForm = () => {
  return (
    <div className="container-cp py-8 sm:py-12">
      <div className="flex flex-col justify-center items-center space-y-6 sm:space-y-8">
        <div className="py-3 sm:py-4 border-y-2 border-black px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-montserrat uppercase tracking-wider font-semibold">
            enquiry form
          </h2>
        </div>
        <div id="contact-form" className="w-full max-w-2xl">
          <EnquiryForm color="gray" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
