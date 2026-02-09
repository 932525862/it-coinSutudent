// telegram.ts

const BOT_TOKEN = "8135708661:AAE9_qomSGxaCwXtfGKkbIxTEMc25b9Zk0w";
const CHAT_ID = "-1003802640695";

export async function sendToTelegram(message: string): Promise<boolean> {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      }
    );

    return response.ok;
  } catch (error) {
    console.error("Telegram yuborishda xatolik:", error);
    return false;
  }
}
