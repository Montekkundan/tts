import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
import 'dotenv/config';
import fetch from 'node-fetch';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const speechFile = path.resolve("./speech.mp3");
const profanityName = "f***ing Pixelhead";

async function checkProfanity(text) {
  const response = await fetch('https://vector.profanity.dev', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: text }),
  });
  const data = await response.json();
  return data.isProfanity;
}

async function main() {
  const isProfane = await checkProfanity(profanityName);
  let inputText = isProfane ?
    `It's the final round! Are you nervous, oh that's a name I cannot say!` :
    `It's the final round! Are you nervous ${profanityName}?`;

  const mp3 = await openai.audio.speech.create({
    model: "tts-1-hd",
    voice: "alloy",
    input: inputText,
  });
  console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}

main();
