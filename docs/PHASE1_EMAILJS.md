# Contact delivery setup

Create a free EmailJS account, connect an email service, and create ONE notification template. Set To Email to pranavshindeji5001@gmail.com as a fixed literal. Set Reply-To to {{reply_to}}. Disable auto replies. Never place email credentials or private keys in this project.

Subject: Sarvana inquiry — {{name}}

Body variables: {{name}}, {{organization}}, {{email}}, {{phone}}, {{service}}, {{timeline}}, {{budget}}, {{description}}, {{consent}}, {{source}}, {{submitted_at}}. Include every variable in the template body. Reply-To uses the browser-validated email.

Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in root .env.local for development. These are public browser settings. Restart development after configuring. In Vercel project Settings → Environment Variables add the same three values for the intended environment, then rebuild/redeploy only when authorized. Public values are frozen at build time.

Free plan currently provides 200 requests/month and two templates. Each inquiry uses one request. At quota exhaustion requests are dropped; the form handles provider errors and offers WhatsApp/email alternatives. Provider acceptance does not prove inbox receipt. Check the inbox and spam folder after one clearly labeled test inquiry.

Origin allowlisting is currently listed as a paid feature. Do not upgrade. If available in your account restrict to https://sarvana-nine.vercel.app and http://localhost:3000 only. Client validation and duplicate-submit protection do not prevent abuse; CAPTCHA and dedicated anti-spam are deferred.

No delivery test has been sent without configuration. Verify the configured template's fixed recipient and Reply-To before the approved test. Official references: https://www.emailjs.com/docs/sdk/send/ and https://www.emailjs.com/pricing/.

Later phases: sitemap, structured data, legal content supplied/approved by owner, analytics, detailed case studies. No production deployment authorized in this phase.
