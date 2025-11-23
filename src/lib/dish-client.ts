export interface Dish {
  token: string;
  id: string;
  name: string;
  description: string;
}

export interface DishResponse {
  items: Dish[];
  pagination: {
    pages: number;
    size: number;
    elements: number;
    sort: string | null;
  };
}

export type DishesConfig = {
  cloudHost: string;
};

const API_PATH = "/chef/rest/mobile/dish/all";

export async function fetchDishes(config: DishesConfig): Promise<DishResponse | null> {
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
        chainTokens: [],
        ingredientTokens: [],
        allergenTokens: [],
        cuisineTokens: [],
        menuTokens: [],
        amenityTokens: [],
      }),
    });
    if (!response.ok) {
      return null;
    }
    const data: DishResponse = await response.json();
    return data;
  } catch {
    return null;
  }
}

