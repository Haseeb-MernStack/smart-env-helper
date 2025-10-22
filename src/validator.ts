import fs from "fs";
import chalk from "chalk";
import dotenv from "dotenv";

export const validateEnv = async () => {
  if (!fs.existsSync(".env")) {
    console.log(chalk.red("❌ No .env file found."));
    return;
  }
  if (!fs.existsSync("env.spec.json")) {
    console.log(chalk.red("❌ Missing env.spec.json. Run `smart-env-helper init` first."));
    return;
  }

  const spec = JSON.parse(fs.readFileSync("env.spec.json", "utf8"));
  const env = dotenv.parse(fs.readFileSync(".env", "utf8"));
  let valid = true;

  for (const key of Object.keys(spec)) {
    if (!env[key]) {
      console.log(chalk.red(`❌ Missing variable: ${key}`));
      valid = false;
    }
  }

  if (valid) console.log(chalk.green("✅ All environment variables are valid!"));
};
