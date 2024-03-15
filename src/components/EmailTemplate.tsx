import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  contact: string;
  comments: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, contact, comments
}) => {

  const country = process.env.NEXT_PUBLIC_COUNTRY || 'Singapore';
  return (
    <div>
      <h1>{`Calvary Carpentry ${country === "Malaysia" ? 'Sdn Bhd' : 'Pte Ltd'}`}</h1>
      <p>
        {`Enquiry from ${country} website`}
      </p>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Contact:</strong> {contact}
      </p>
      <p>
        <strong>Message:</strong> {comments}
      </p>
    </div>
  );
}
