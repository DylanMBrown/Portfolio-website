"use server";

const PROFANITY_LIST = [
  "fuck",
  "shit",
  "ass",
  "damn",
  "hell",
  "bitch",
  "bastard",
  "whore",
  "slut",
  "piss",
  "crap",
];

function containsProfanity(text: string): boolean {
  const lowerText = text.toLowerCase();
  return PROFANITY_LIST.some((word) => lowerText.includes(word));
}

export async function submitGraffiti(formData: FormData) {
  const name = formData.get("name") as string;
  const tag = formData.get("tag") as string;
  const color = formData.get("color") as string;
  const retention = parseInt(formData.get("retention") as string);

  if (!name || !tag) {
    return { error: "Name and tag are required" };
  }

  if (containsProfanity(name) || containsProfanity(tag)) {
    return { error: "Please keep it clean. Profanity detected." };
  }

  return { success: true };
}
