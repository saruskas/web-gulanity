export interface Amenity {
  token: string;
  id: string;
  name: string;
  description: string;
  imageToken: string;
}

export interface AmenityResponse {
  items: Amenity[];
  pagination: {
    pages: number;
    size: number;
    elements: number;
    sort: string | null;
  };
}

export type AmenitiesConfig = {
  cloudHost: string;
};

const API_PATH = "/chef/rest/mobile/amenity";
const IMAGE_PATH = "/statics/rest/mobile/image";

export async function fetchAmenities(config: AmenitiesConfig): Promise<AmenityResponse | null> {
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
    const data: AmenityResponse = await response.json();
    return data;
  } catch {
    return null;
  }
}

export function getAmenityImageUrl(token: string, config: AmenitiesConfig): string {
  return `${config.cloudHost}${IMAGE_PATH}/${token}/download`;
}

