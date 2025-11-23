export interface Restaurant {
  token: string;
  id: string;
  name: string;
  description: string;
}

export interface RestaurantResponse {
  items: Restaurant[];
  pagination: {
    pages: number;
    size: number;
    elements: number;
    sort: string | null;
  };
}

export type RestaurantsConfig = {
  cloudHost: string;
};

const API_PATH = "/chef/rest/mobile/restaurant/all";

export async function fetchRestaurants(config: RestaurantsConfig): Promise<RestaurantResponse | null> {
  try {
    if (!config.cloudHost) {
      return null;
    }
    const apiUrl = `${config.cloudHost}${API_PATH}`;
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amenityTokens: [],
      }),
    });
    if (!response.ok) {
      return null;
    }
    const data: RestaurantResponse = await response.json();
    return data;
  } catch {
    return null;
  }
}

