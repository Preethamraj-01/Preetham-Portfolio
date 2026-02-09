import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";
import pdf from "pdf-parse";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5175;
const HF_API_KEY = process.env.HF_API_KEY;
const HF_MODEL = process.env.HF_MODEL || "mistralai/Mistral-7B-Instruct-v0.2";

app.use(cors());
app.use(express.json());

console.log(`[Config] AI_PROVIDER: hf, PORT: ${PORT}`);

/* ---- Helper: Fetch and parse PDF from Google Drive ---- */
async function fetchPdfText(url) {
  try {
    // Convert Google Drive share/view link to direct download
    if (url.includes("drive.google.com")) {
      const fileId = url.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
      if (fileId) {
        url = `https://drive.google.com/uc?id=${fileId}&export=pdf`;
        console.log(`[PDF] Converted Google Drive URL to download link`);
      }
    }
    
    console.log(`[PDF] Fetching from: ${url}`);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch resume: ${res.status}`);
    
    const buffer = await res.arrayBuffer();
    console.log(`[PDF] Downloaded ${buffer.byteLength} bytes`);
    
    const data = await pdf(Buffer.from(buffer));
    console.log(`[PDF] Parsed PDF, extracted ${data.text.length} characters`);
    return data.text;
  } catch (err) {
    console.error("[PDF] Error fetching/parsing:", err.message);
    return "";
  }
}

/* ---------------- HEALTH ---------------- */
app.get("/health", (req, res) => {
  res.json({ status: "ok", provider: "hf" });
});

/* ---------------- CHAT ---------------- */
app.post("/api/chat", async (req, res) => {
  try {
    const { messages = [], resumeUrl } = req.body;
    console.log("[Chat] Received query, resumeUrl:", resumeUrl ? "yes" : "no");

    let resumeText = "";

    if (resumeUrl) {
      resumeText = await fetchPdfText(resumeUrl);
      // ⚠️ IMPORTANT: trim resume (token safety)
      resumeText = resumeText.slice(0, 6000);
      console.log(`[Chat] Resume text fetched: ${resumeText.length} chars`);
    }

    const hfUrl = "https://router.huggingface.co/v1/chat/completions";
    console.log(`[HF] Calling ${hfUrl} with model ${HF_MODEL}`);

    const response = await fetch(hfUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: HF_MODEL,
        messages: [
          {
            role: "system",
            content: `You are a helpful assistant that answers questions using the resume text.

Answer the user's question concisely and professionally. 
Format your response naturally with clear section headings. Write headings as plain text ending with a colon (like "Contact Information:") on a new line.
When listing contact details, add clear labels before each item (like "Phone:", "Email:", "Location:", "GitHub:", "LinkedIn:", "LeetCode:" etc).
Do NOT use any special characters like asterisks, hyphens, underscores, or brackets around headings or text.
Just write naturally as if in a professional document.
Do not invent details - only use information from the resume.`
          },
          {
            role: "user",
            content: `Resume:\n${resumeText}\n\nQuestion:\n${messages[messages.length - 1]?.content || "summarize profile"}`
          }
        ],
        max_tokens: 400,
        temperature: 0.3
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("HF API error:", err);
      return res.status(500).json({ error: err });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "No response";

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.send(reply);

  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

/* ---------------- START ---------------- */
app.listen(PORT, () => {
  console.log(`AI proxy server listening on http://localhost:${PORT}`);
});
