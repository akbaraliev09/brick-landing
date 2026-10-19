export async function sendLead(data) {
  console.log('Новая заявка:', data);
  await new Promise((resolve) => setTimeout(resolve, 800));
  return { ok: true };
}
