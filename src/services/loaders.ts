import { getMenu } from "./restaurantApi";

export async function menuLoader() {
  return await getMenu();
}
