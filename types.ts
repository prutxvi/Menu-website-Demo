
export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  isVeg: boolean;
  category: string;
}

export enum Category {
  HOT_COFFEE = 'Hot Coffee',
  COLD_COFFEE = 'Cold Coffee & Frappes',
  REFRESHERS = 'Refreshers & Coolers',
  SNACKS = 'Veg Snacks & Bites',
  DESSERTS = 'Desserts'
}
