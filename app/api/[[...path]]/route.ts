import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, type Db } from 'mongodb';
import { Resend } from 'resend';

const uri = process.env.MONGO_URL as string;
const dbName = process.env.DB_NAME || 'venus_grandeur';
const resendKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
const adminEmail = process.env.RESEND_ADMIN_EMAIL;

const resend = resendKey ? new Resend(resendKey) : null;

let _client: MongoClient | null = null;
async function getDb(): Promise<Db> {
  if (!_client) {
    _client = new MongoClient(uri);
    await _client.connect();
  }
  return _client.db(dbName);
}

const BRAND_GOLD = '#D4AF37';
const BRAND_PURPLE = '#4A154B';
const BRAND_DARK = '#2E0D2E';

interface EnquiryPayload {
  name: string;
  email: string;
  eventType: string;
  message: string;
}

const baseWrap = (title: string, bodyHtml: string): string => `
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<title>${title}</title>
</head>
<body style="margin:0;padding:0;background:#F5F3F4;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:${BRAND_DARK};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F5F3F4;padding:40px 16px;">
  <tr><td align="center">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border:1px solid #eee;border-radius:6px;overflow:hidden;">
      <tr><td style="background:${BRAND_DARK};padding:32px;text-align:center;">
        <div style="font-family:Georgia,serif;color:${BRAND_GOLD};letter-spacing:8px;font-size:14px;">VENUS</div>
        <div style="font-family:Georgia,serif;color:#ffffff;font-size:22px;margin-top:4px;letter-spacing:2px;">GRANDEUR EVENTS</div>
        <div style="height:1px;background:${BRAND_GOLD};width:40px;margin:16px auto 0;opacity:0.7;"></div>
      </td></tr>
      <tr><td style="padding:40px 40px 16px;">${bodyHtml}</td></tr>
      <tr><td style="padding:24px 40px 40px;border-top:1px solid #f0ecec;color:#888;font-size:12px;line-height:1.7;">
        Venus Grandeur Events · Private Atelier<br>
        One Grandeur Square, Mumbai · hello@venusgrandeurevents.com
      </td></tr>
    </table>
    <div style="color:#b3b3b3;font-size:11px;margin-top:16px;">© ${new Date().getFullYear()} Venus Grandeur Events</div>
  </td></tr>
</table>
</body></html>`;

const adminEnquiryHtml = ({ name, email, eventType, message }: EnquiryPayload): string =>
  baseWrap('New Enquiry · Venus Grandeur', `
    <div style="color:${BRAND_GOLD};font-size:11px;letter-spacing:4px;text-transform:uppercase;margin-bottom:8px;">New Enquiry</div>
    <h1 style="font-family:Georgia,serif;font-size:26px;margin:0 0 24px;color:${BRAND_DARK};line-height:1.25;">A new celebration enquiry has arrived.</h1>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-top:8px;">
      <tr><td style="padding:14px 0;border-bottom:1px solid #f0ecec;font-size:11px;color:${BRAND_GOLD};text-transform:uppercase;letter-spacing:2px;width:110px;">Name</td><td style="padding:14px 0;border-bottom:1px solid #f0ecec;font-size:15px;color:${BRAND_DARK};">${name}</td></tr>
      <tr><td style="padding:14px 0;border-bottom:1px solid #f0ecec;font-size:11px;color:${BRAND_GOLD};text-transform:uppercase;letter-spacing:2px;">Email</td><td style="padding:14px 0;border-bottom:1px solid #f0ecec;font-size:15px;color:${BRAND_DARK};"><a href="mailto:${email}" style="color:${BRAND_PURPLE};text-decoration:none;">${email}</a></td></tr>
      <tr><td style="padding:14px 0;border-bottom:1px solid #f0ecec;font-size:11px;color:${BRAND_GOLD};text-transform:uppercase;letter-spacing:2px;">Event</td><td style="padding:14px 0;border-bottom:1px solid #f0ecec;font-size:15px;color:${BRAND_DARK};">${eventType}</td></tr>
    </table>
    <div style="margin-top:28px;padding:20px;background:#faf7f2;border-left:3px solid ${BRAND_GOLD};font-size:15px;line-height:1.7;color:${BRAND_DARK};white-space:pre-wrap;">${message}</div>
    <div style="margin-top:32px;">
      <a href="mailto:${email}" style="display:inline-block;background:${BRAND_GOLD};color:${BRAND_DARK};padding:14px 28px;border-radius:999px;font-size:11px;letter-spacing:3px;text-transform:uppercase;text-decoration:none;font-weight:bold;">Reply to ${name.split(' ')[0]}</a>
    </div>`);

const clientAckHtml = ({ name }: Pick<EnquiryPayload, 'name'>): string =>
  baseWrap('Thank you · Venus Grandeur', `
    <div style="color:${BRAND_GOLD};font-size:11px;letter-spacing:4px;text-transform:uppercase;margin-bottom:8px;">Enquiry Received</div>
    <h1 style="font-family:Georgia,serif;font-size:28px;margin:0 0 20px;color:${BRAND_DARK};line-height:1.25;">Dear ${name.split(' ')[0]},<br>thank you for reaching the atelier.</h1>
    <p style="font-size:15px;line-height:1.8;color:#555;margin:0 0 16px;">Your enquiry has arrived safely with our team. A founding partner will personally review your note and respond within <strong style="color:${BRAND_DARK};">two working days</strong>.</p>
    <p style="font-size:15px;line-height:1.8;color:#555;margin:0 0 24px;">In the meantime, we are compiling a small portfolio of recent celebrations we believe you will love.</p>
    <div style="height:1px;background:#f0ecec;margin:32px 0;"></div>
    <p style="font-family:Georgia,serif;font-style:italic;color:${BRAND_PURPLE};font-size:16px;margin:0 0 4px;">With warmth,</p>
    <p style="font-family:Georgia,serif;color:${BRAND_DARK};font-size:18px;margin:0;">The Atelier · Venus Grandeur Events</p>`);

const newsletterWelcomeHtml = (): string =>
  baseWrap('Welcome to The Atelier Letter', `
    <div style="color:${BRAND_GOLD};font-size:11px;letter-spacing:4px;text-transform:uppercase;margin-bottom:8px;">Welcome</div>
    <h1 style="font-family:Georgia,serif;font-size:28px;margin:0 0 20px;color:${BRAND_DARK};line-height:1.25;">You are now on the<br><span style="color:${BRAND_GOLD};font-style:italic;">Atelier Letter</span> list.</h1>
    <p style="font-size:15px;line-height:1.8;color:#555;margin:0 0 16px;">A private correspondence from our house — behind-the-scenes stories, quiet inspiration, and the occasional private invitation.</p>
    <p style="font-size:15px;line-height:1.8;color:#555;margin:0 0 28px;">We send rarely, and only when we have something worth your time.</p>
    <div style="height:1px;background:#f0ecec;margin:28px 0;"></div>
    <p style="font-family:Georgia,serif;font-style:italic;color:${BRAND_PURPLE};font-size:16px;margin:0;">Yours, with care.</p>`);

async function handler(
  request: NextRequest,
  { params }: { params: { path?: string[] } }
): Promise<NextResponse> {
  const path = (params?.path || []).join('/');

  try {
    if (path === 'newsletter' && request.method === 'POST') {
      const { email } = (await request.json()) as { email?: string };
      if (!email || typeof email !== 'string' || !email.includes('@')) {
        return NextResponse.json({ ok: false, error: 'Invalid email' }, { status: 400 });
      }
      const clean = email.toLowerCase().trim();
      const db = await getDb();
      await db.collection('newsletter').updateOne(
        { email: clean },
        {
          $set: { email: clean, updatedAt: new Date() },
          $setOnInsert: { createdAt: new Date() },
        },
        { upsert: true }
      );

      if (resend) {
        resend.emails
          .send({
            from: `Venus Grandeur Events <${fromEmail}>`,
            to: [clean],
            subject: 'Welcome to The Atelier Letter',
            html: newsletterWelcomeHtml(),
          })
          .catch((e: unknown) =>
            console.warn('Newsletter welcome email failed:', (e as Error)?.message)
          );
      }

      return NextResponse.json({ ok: true });
    }

    if (path === 'contact' && request.method === 'POST') {
      const body = (await request.json()) as Partial<EnquiryPayload>;
      const { name, email, eventType, message } = body || {};
      if (!name || !email || !email.includes('@') || !message) {
        return NextResponse.json(
          { ok: false, error: 'Missing required fields' },
          { status: 400 }
        );
      }
      const clean: EnquiryPayload = {
        name: String(name).trim().slice(0, 200),
        email: String(email).toLowerCase().trim().slice(0, 200),
        eventType: String(eventType || 'Other').trim().slice(0, 100),
        message: String(message).trim().slice(0, 5000),
      };
      const db = await getDb();
      await db.collection('enquiries').insertOne({
        ...clean,
        createdAt: new Date(),
      });

      if (resend && adminEmail) {
        resend.emails
          .send({
            from: `Venus Grandeur Enquiries <${fromEmail}>`,
            to: [adminEmail],
            replyTo: clean.email,
            subject: `New enquiry · ${clean.name} · ${clean.eventType}`,
            html: adminEnquiryHtml(clean),
          })
          .catch((e: unknown) =>
            console.warn('Admin enquiry email failed:', (e as Error)?.message)
          );
      }
      if (resend) {
        resend.emails
          .send({
            from: `Venus Grandeur Events <${fromEmail}>`,
            to: [clean.email],
            subject: 'We have received your enquiry · Venus Grandeur Events',
            html: clientAckHtml(clean),
          })
          .catch((e: unknown) =>
            console.warn('Client ack email failed:', (e as Error)?.message)
          );
      }

      return NextResponse.json({ ok: true });
    }

    if (path === '' || path === 'health') {
      return NextResponse.json({
        ok: true,
        service: 'venus-grandeur',
        email: !!resend,
      });
    }

    return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
