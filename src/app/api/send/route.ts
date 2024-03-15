import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY as string)

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  try {
    const data = await resend.emails.send({
      from: 'Calvary Carpentry <enquiry@calvarycarpentry.org>',
      // to: ["sales@calvarycarpentry.com", "kokwei@calvarycarpentry.com"],
      // to: ["kokweikhong@gmail.com"],
      to: ["kokwei@calvarycarpentry.com"],
      subject: 'Malaysia Enquiry from Calvary Carpentry Website',
      react: EmailTemplate({ ...body }),
    } as any);

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
