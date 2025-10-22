#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import chalk from "chalk";
import { validateEnv } from "./validator";
import { generateTypes } from "./generator";
import fs from "fs";

const argv = yargs(hideBin(process.argv))
  .command("validate", "Validate your .env file", {}, async () => {
    await validateEnv();
  })
  .command("generate", "Generate typed env.ts file", {}, async () => {
    await generateTypes();
  })
  .command("init", "Create env.spec.json and .env.example", {}, () => {
    if (!fs.existsSync("env.spec.json")) {
      fs.writeFileSync(
        "env.spec.json",
        JSON.stringify(
          {
            MONGO_URI: "string",
            JWT_SECRET: "string",
            PORT: "number"
          },
          null,
          2
        )
      );
      fs.writeFileSync(".env.example", "MONGO_URI=\nJWT_SECRET=\nPORT=3000\n");
      console.log(chalk.green("✅ Initialized env.spec.json and .env.example"));
    } else {
      console.log(chalk.yellow("⚠️ env.spec.json already exists."));
    }
  })
  .demandCommand(1)
  .help().argv;
