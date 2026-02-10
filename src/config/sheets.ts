// sheets.ts
const SHEETS_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbwhuG_UGpP_40XPGETOaZA2gj69ouZZOA1pwgVIGaHKOYrle_c-06Wp7mBX1_MBn7NvZw/exec";

export async function sendToSheets(payload: any): Promise<boolean> {
  try {
    const body = new URLSearchParams();
    body.set("data", JSON.stringify(payload));

    const res = await fetch(SHEETS_WEBAPP_URL, {
      method: "POST",
      // MUHIM: header qo'ymang! (shunda preflight yo'q)
      body,
    });

    // res.ok ba'zan true bo'ladi, ba'zan redirect bo'ladi.
    // Ammo yozib qo'yishning o'zi ishlaydi.
    return res.ok;
  } catch (e) {
    console.error("Sheets yuborishda xatolik:", e);
    return false;
  }
}
