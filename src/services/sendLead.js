import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ojkdd5u';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_v7t5hhm';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'H6Zq4DsAv8k3wvwyu';

const SOURCES = {
  hero: 'Первый экран',
  contact: 'Форма внизу сайта',
};

export async function sendLead({ name, phone, comment, source }) {
  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      name,
      phone,
      comment: comment || '—',
      source: SOURCES[source] || source,
      time: new Date().toLocaleString('ru-RU'),
    },
    { publicKey: PUBLIC_KEY }
  );
  return { ok: true };
}