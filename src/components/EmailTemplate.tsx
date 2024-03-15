import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  contact: string;
  comments: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, contact, comments
}) => (
  <div>
    <h1>Calvary Carpentry Sdn. Bhd.</h1>
    <p>
      Enquiry from Calvary Carpentry Website (Malaysia)
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
