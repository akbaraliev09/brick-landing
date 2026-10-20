import emailjs from '@emailjs/browser';

const SOURCES = {
  hero: 'Первый экран',
  contact: 'Форма внизу сайта',
};

export async function sendLead({ name, phone, comment, source }) {
  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name,
      phone,
      comment: comment || '—',
      source: SOURCES[source] || source,
      time: new Date().toLocaleString('ru-RU'),
    },
    { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
  );
  return { ok: true };
}