# 🚀 smart-env-helper

A **TypeScript-safe `.env` manager** that validates, generates, and syncs environment variables across your Node.js or MERN stack projects.

## ✨ Features
- Validate `.env` keys based on a schema
- Generate type-safe `env.ts` file automatically
- Sync `.env.example` with `.env`
- Easy CLI interface

## 🧠 Commands
```bash
npx smart-env-helper init
npx smart-env-helper validate
npx smart-env-helper generate


## Example Usage
import { env } from "./env";
console.log(env.MONGO_URI); // fully typed

