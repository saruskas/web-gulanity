import { readFileSync } from "fs";
import { join } from "path";
import yaml from "js-yaml";

export function getLoginUrl(): string {
  try {
    const filePath = join(process.cwd(), "data", "platform-config.yaml");
    const fileContents = readFileSync(filePath, "utf8");
    const data = yaml.load(fileContents) as { platformHost: string };
    return `${data.platformHost}/login`;
  } catch (error) {
    console.error("Error reading platform-config.yaml:", error);
    return "https://platform.dev.gulanity.com/login";
  }
}

