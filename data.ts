
import { MenuItem, Category } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Hot Coffee
  { id: 'hc1', name: 'Espresso', price: 90, description: 'A concentrated shot of our signature roast with a rich, golden crema.', image: 'https://i.pinimg.com/736x/4c/28/e2/4c28e2420bf38c50120dba0cbaf42e8d.jpg', isVeg: true, category: Category.HOT_COFFEE },
  { id: 'hc2', name: 'Americano', price: 110, description: 'Rich espresso shots topped with hot water for a smooth, bold finish.', image: 'https://i.pinimg.com/1200x/cb/48/db/cb48db04009801523739569e0f33cfc3.jpg', isVeg: true, category: Category.HOT_COFFEE },
  { id: 'hc3', name: 'Cappuccino', price: 130, description: 'The perfect harmony of espresso, steamed milk, and a thick layer of foam.', image: 'https://i.pinimg.com/736x/52/41/31/52413159c7f291bbc186422481b3ac50.jpg', isVeg: true, category: Category.HOT_COFFEE },
  { id: 'hc4', name: 'Flat White', price: 130, description: 'Velvety micro-foam poured over a double shot of espresso.', image: 'https://i.pinimg.com/1200x/05/6c/b6/056cb654f9e040d930476d57009c28dc.jpg', isVeg: true, category: Category.HOT_COFFEE },
  { id: 'hc5', name: 'Cafe Latte', price: 150, description: 'Silky smooth steamed milk over a shot of our premium espresso.', image: 'https://i.pinimg.com/1200x/81/92/7e/81927ee1cf8fcd7715530b0856cf553d.jpg', isVeg: true, category: Category.HOT_COFFEE },
  { id: 'hc6', name: 'Double Espresso', price: 160, description: 'A powerful double shot for those who appreciate the true depth of coffee.', image: 'https://i.pinimg.com/736x/a4/cb/c5/a4cbc54984597c317afb7325e949a599.jpg', isVeg: true, category: Category.HOT_COFFEE },
  { id: 'hc7', name: 'Cranberry Coffee', price: 150, description: 'Our signature bold fusion of robust espresso and tart cranberry notes.', image: 'https://i.pinimg.com/736x/68/9d/d1/689dd12abe46c91cb29003c5eb424ae1.jpg', isVeg: true, category: Category.HOT_COFFEE },
  { id: 'hc8', name: 'Caramel Latte', price: 150, description: 'Indulgent espresso blended with buttery caramel and creamy milk.', image: 'https://i.pinimg.com/736x/99/11/bb/9911bb6c2dad5bbe2d7a868bcaa565ef.jpg', isVeg: true, category: Category.HOT_COFFEE },
  { id: 'hc9', name: 'Hazelnut Latte', price: 150, description: 'Fragrant roasted hazelnut syrup meeting our smooth, signature roast.', image: 'https://i.pinimg.com/1200x/cd/74/a0/cd74a0bcd9e5a18b14ada452c29d9cca.jpg', isVeg: true, category: Category.HOT_COFFEE },
  { id: 'hc10', name: 'Vanilla Latte', price: 150, description: 'A timeless classic enriched with premium vanilla bean essence.', image: 'https://i.pinimg.com/736x/b0/5a/0f/b05a0f6554fed3f511fa468a8fee6f30.jpg', isVeg: true, category: Category.HOT_COFFEE },
  { id: 'hc11', name: 'Mocha Coffee', price: 150, description: 'Decadent dark chocolate blended with our signature espresso roast.', image: 'https://i.pinimg.com/736x/22/8b/72/228b72a03cb98c19063193cf0188a6a3.jpg', isVeg: true, category: Category.HOT_COFFEE },

  // Cold Coffee & Frappes
  { id: 'cc1', name: 'Classic Cold Coffee', price: 150, description: 'Creamy, frothy and perfectly chilled coffee goodness.', image: 'https://i.pinimg.com/736x/44/dd/82/44dd823b63615cdfc4d85b3bca12a521.jpg', isVeg: true, category: Category.COLD_COFFEE },
  { id: 'cc2', name: 'Iced Latte', price: 150, description: 'Chilled espresso and cold milk served over handcrafted ice.', image: 'https://i.pinimg.com/736x/4d/e0/68/4de068124212961d6481e6c631774053.jpg', isVeg: true, category: Category.COLD_COFFEE },
  { id: 'cc3', name: 'Coffee Frappe', price: 170, description: 'Blended icy coffee delight topped with a swirl of whipped cream.', image: 'https://i.pinimg.com/736x/98/d0/3b/98d03bd7c2a93f2e4f9972efa9da61be.jpg', isVeg: true, category: Category.COLD_COFFEE },
  { id: 'cc4', name: 'Oreo Coffee Frappe', price: 170, description: 'A crunchy treat with real Oreo chunks and our signature espresso.', image: 'https://i.pinimg.com/736x/eb/82/0f/eb820f79741ba97d2f240dd7e9d56057.jpg', isVeg: true, category: Category.COLD_COFFEE },
  { id: 'cc5', name: 'Chocolate Cold Coffee', price: 170, description: 'Rich cocoa and coffee blended to a smooth, chocolatey perfection.', image: 'https://i.pinimg.com/1200x/49/d2/1b/49d21be8b47cee64b48fbe15bdab109b.jpg', isVeg: true, category: Category.COLD_COFFEE },

  // Refreshers
  { id: 'r1', name: 'Fresh Lime Soda', price: 100, description: 'Zesty lime and sparkling soda for a crisp, refreshing kick.', image: 'https://i.pinimg.com/736x/91/00/7f/91007fd507aa9b78e9c76b779d787f9c.jpg', isVeg: true, category: Category.REFRESHERS },
  { id: 'r2', name: 'Lemon Iced Tea', price: 130, description: 'Hand-crafted tea with a refreshing citrus punch.', image: 'https://i.pinimg.com/736x/95/67/1b/95671b9bb292a423175d3c39fa87d1ab.jpg', isVeg: true, category: Category.REFRESHERS },
  { id: 'r3', name: 'Peach Iced Tea', price: 130, description: 'Sweet summer peaches infused with our signature tea blend.', image: 'https://i.pinimg.com/736x/4b/3c/d4/4b3cd40cb88a2f8a9901727959559e35.jpg', isVeg: true, category: Category.REFRESHERS },
  { id: 'r4', name: 'Cranberry Mojito', price: 170, description: 'Fresh mint, lime, and cranberry juice in a sparkling blend.', image: 'https://i.pinimg.com/736x/55/e0/0b/55e00b53720ada404218771b43c55882.jpg', isVeg: true, category: Category.REFRESHERS },

  // Snacks
  { id: 's1', name: 'Veg Grilled Sandwich', price: 150, description: 'A classic grilled treat stuffed with fresh, crunchy vegetables.', image: 'https://i.pinimg.com/736x/ae/ae/d6/aeaed6bec36f22b475f6a09dccf0f434.jpg', isVeg: true, category: Category.SNACKS },
  { id: 's2', name: 'Paneer Sandwich', price: 180, description: 'Spiced paneer cubes grilled with fresh veggies and cheese.', image: 'https://i.pinimg.com/1200x/7b/ea/06/7bea068aade92477e339ee3bdae706b3.jpg', isVeg: true, category: Category.SNACKS },
  { id: 's3', name: 'Cheese Corn Sandwich', price: 150, description: 'Sweet corn and gooey melted cheese in perfectly toasted bread.', image: 'https://i.pinimg.com/736x/2c/8a/6a/2c8a6a672854d6db73395d0ece8cb5fd.jpg', isVeg: true, category: Category.SNACKS },
  { id: 's4', name: 'Cheese Garlic Bread', price: 160, description: 'Artisanal bread with garlic butter and a blanket of melted cheese.', image: 'https://i.pinimg.com/1200x/48/43/32/484332b8f7b62780aa79466a7e29a7bb.jpg', isVeg: true, category: Category.SNACKS },
  { id: 's5', name: 'Veg Puff', price: 70, description: 'Golden, flaky pastry filled with a savory, spiced vegetable mix.', image: 'https://i.pinimg.com/736x/fe/15/5d/fe155d08cd8c83601d926ced7c9533d8.jpg', isVeg: true, category: Category.SNACKS },

  // Desserts
  { id: 'd1', name: 'Chocolate Brownie', price: 130, description: 'Decadent, fudgy chocolate treat with a rich cocoa finish.', image: 'https://i.pinimg.com/736x/a1/b3/85/a1b385e4ffd662993a2cbb5e91cdf297.jpg', isVeg: true, category: Category.DESSERTS },
  { id: 'd2', name: 'Brownie with Ice Cream', price: 180, description: 'Warm chocolate brownie topped with a scoop of vanilla bean ice cream.', image: 'https://i.pinimg.com/736x/0f/ce/b8/0fceb803cfa5ac4ddee46ccd9cf2874b.jpg', isVeg: true, category: Category.DESSERTS },
  { id: 'd3', name: 'Chocolate Pastry', price: 140, description: 'Moist sponge layers with silky smooth dark chocolate ganache.', image: 'https://i.pinimg.com/1200x/2c/30/24/2c302496197d48115f20a161aa49a9ea.jpg', isVeg: true, category: Category.DESSERTS },
  { id: 'd4', name: 'Red Velvet Pastry', price: 160, description: 'Elegant red velvet layers with our signature cream cheese frosting.', image: 'https://i.pinimg.com/736x/25/c6/20/25c620e93456b923a6ad4e6de1ddfafb.jpg', isVeg: true, category: Category.DESSERTS },
];
