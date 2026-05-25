const dotenv = require('dotenv');
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error('No GEMINI_API_KEY found in .env');
  process.exit(1);
}

const word = 'Ausgleich';
const sourceLang = 'German';
const targetLang = 'Japanese';

const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

const prompt = `Analyze the vocabulary word: "${word}" in ${sourceLang}.
You must return the dictionary base form (原型) of the word in ${sourceLang}, its meaning in ${targetLang}, the core image/essence (コアイメージ) of the word in ${targetLang}, the etymology/word origin (語源) of the word in ${targetLang}, and a helpful example sentence in ${sourceLang} with its translation in ${targetLang}.`;

const payload = {
  contents: [
    {
      parts: [
        { text: prompt }
      ]
    }
  ],
  generationConfig: {
    responseMimeType: "application/json",
    responseSchema: {
      type: "OBJECT",
      properties: {
        baseForm: {
          type: "STRING"
        },
        gender: {
          type: "STRING"
        },
        article: {
          type: "STRING"
        },
        meaning: {
          type: "STRING"
        },
        coreImage: {
          type: "STRING"
        },
        etymology: {
          type: "STRING"
        },
        exampleSentence: {
          type: "OBJECT",
          properties: {
            original: {
              type: "STRING"
            },
            translation: {
              type: "STRING"
            }
          },
          required: ["original", "translation"]
        }
      },
      required: ["baseForm", "gender", "article", "meaning", "coreImage", "etymology", "exampleSentence"]
    }
  }
};

async function run() {
  try {
    const res = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    console.log('API Status:', res.status);
    if (!res.ok) {
      console.error(data);
      return;
    }
    console.log(data.candidates[0].content.parts[0].text);
  } catch (err) {
    console.error(err);
  }
}

run();
