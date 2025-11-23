export interface Cuisine {
  token: string;
  id: string;
  name: string;
  description: string;
}

export interface CuisineResponse {
  items: Cuisine[];
  pagination: {
    pages: number;
    size: number;
    elements: number;
    sort: string | null;
  };
}

export type CuisinesConfig = {
  cloudHost: string;
};

const API_PATH = "/chef/rest/mobile/cuisine";

export async function fetchCuisines(config: CuisinesConfig): Promise<CuisineResponse | null> {
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
    const data: CuisineResponse = await response.json();
    return data;
  } catch {
    return null;
  }
}

