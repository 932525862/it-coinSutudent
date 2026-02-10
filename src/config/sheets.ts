// sheets.ts
const SHEETS_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbzHbJi_q96iwpREX9Y5TFogqjK2Iqn6fICHxIdhumR_f_Hs1DIEmwyjbQ3tV5E9V_LOZw/exec";

export async function sendToSheets(payload: any): Promise<boolean> {
  try {
    const res = await fetch(SHEETS_WEBAPP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => null);
    return res.ok && data?.ok === true;
  } catch (e) {
    console.error("Sheets yuborishda xatolik:", e);
    return false;
  }
}
