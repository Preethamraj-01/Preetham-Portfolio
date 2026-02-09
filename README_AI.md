# AI Chat Integration (Hugging Face)

This project includes a small Node server that can call either OpenAI or Hugging Face inference APIs to answer questions about the resume PDF linked on the Landing page. The server extracts text from the resume and provides it as context to the model.

## Requirements
- Node.js 18+ (recommended)
- An API key for Hugging Face (recommended free tier) or OpenAI

## Getting a Hugging Face API key
1. Create an account at https://huggingface.co/
2. Go to your account settings -> Access Tokens: https://huggingface.co/settings/tokens
3. Click "New token", name it and copy the token.

Set environment variables (example for PowerShell):

```powershell
$env:HF_API_KEY="hf_xxx_your_token_here"
$env:AI_PROVIDER="hf"
```

Or using `.env` file at project root:

```
AI_PROVIDER=hf
HF_API_KEY=hf_xxx_your_token_here
HF_MODEL=google/flan-t5-large
```

Make sure to add `.env` to `.gitignore` if you create it.

## Install and run

```bash
npm install
npm run server
npm run dev
```

- `npm run server` starts the node server on port `5174` by default.
- `npm run dev` runs the Vite dev server for the frontend.

## Notes
- For better answers, set `HF_MODEL` to a capable instruction-tuned text-generation model (example: `google/flan-t5-large`). You can change `HF_MODEL` in your `.env` if you prefer another model.
- The chat UI includes quick-action buttons: `Summarize Profile`, `Get Contact`, `Experience`, and `Education` which send prefilled queries to the model.
- Hugging Face streaming is simulated by chunking the full response; true SSE streaming depends on model endpoint support.
- Keep your API keys secret and never expose them to the frontend.
