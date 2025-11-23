export interface Allergen {
  token: string;
  id: string;
  name: string;
  description: string;
  imageToken: string;
}

export interface AllergenResponse {
  items: Allergen[];
  pagination: {
    pages: number;
    size: number;
    elements: number;
    sort: string | null;
  };
}

export type AllergensConfig = {
  cloudHost: string;
};

const API_PATH = "/chef/rest/mobile/allergen";
const IMAGE_PATH = "/statics/rest/mobile/image";

export async function fetchAllergens(config: AllergensConfig): Promise<AllergenResponse | null> {
  try {
    if (!config.cloudHost) {
      return null;
    }
    const apiUrl = `${config.cloudHost}${API_PATH}`;
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      return null;
    }
    const data: AllergenResponse = await response.json();
    return data;
  } catch {
    return null;
  }
}

export function getAllergenImageUrl(token: string, config: AllergensConfig): string {
  return `${config.cloudHost}${IMAGE_PATH}/${token}/download`;
}

