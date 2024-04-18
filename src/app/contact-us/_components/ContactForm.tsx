import EnquiryForm from "@/components/EnquiryForm";

const ContactForm = () => {
  return (
    <div className="container-cp">
      <div className="flex flex-col justify-center items-start space-y-4">
        <div className="py-2 border-y border-black mx-auto">
          <h2 className="text-2xl font-montserrat uppercase">enquiry form</h2>
        </div>
        <div id="contact-form" className="w-full mx-auto">
          <EnquiryForm />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
