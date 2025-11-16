import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // Coffee
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'Klasické silné espresso z praženej kávy',
    price: 1.80,
    category: 'coffee',
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Espresso s napeneným mliekom a mliečnou penou',
    price: 2.50,
    category: 'coffee',
  },
  {
    id: 'latte',
    name: 'Latte',
    description: 'Espresso s väčším množstvom napeneného mlieka',
    price: 2.70,
    category: 'coffee',
  },
  {
    id: 'americano',
    name: 'Americano',
    description: 'Espresso s horúcou vodou',
    price: 2.20,
    category: 'coffee',
  },
  {
    id: 'macchiato',
    name: 'Macchiato',
    description: 'Espresso s trochou napeneného mlieka',
    price: 2.30,
    category: 'coffee',
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    description: 'Dvojité espresso s jemným napeneným mliekom',
    price: 2.80,
    category: 'coffee',
  },
  {
    id: 'mocha',
    name: 'Mocha',
    description: 'Espresso s čokoládou a napeneným mliekom',
    price: 3.20,
    category: 'coffee',
  },
  {
    id: 'filter-coffee',
    name: 'Filter káva',
    description: 'Čerstvo pripravená filter káva',
    price: 2.00,
    category: 'coffee',
  },
  
  // Drinks
  {
    id: 'hot-chocolate',
    name: 'Horúca čokoláda',
    description: 'Bohatá horúca čokoláda s mliekom',
    price: 3.00,
    category: 'drinks',
  },
  {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    description: 'Japonský zelený čaj matcha s napeneným mliekom',
    price: 3.50,
    category: 'drinks',
  },
  {
    id: 'chai-latte',
    name: 'Chai Latte',
    description: 'Aromatický čaj chai s mliekom a korením',
    price: 3.20,
    category: 'drinks',
  },
  {
    id: 'fresh-juice',
    name: 'Čerstvá šťava',
    description: 'Čerstvo stlačená ovocná šťava (pomaranč, jablko)',
    price: 3.50,
    category: 'drinks',
  },
  {
    id: 'lemonade',
    name: 'Limonáda',
    description: 'Domáca limonáda s citrónom a mätou',
    price: 2.80,
    category: 'drinks',
  },
  {
    id: 'iced-coffee',
    name: 'Studená káva',
    description: 'Espresso s ľadom a mliekom',
    price: 3.00,
    category: 'drinks',
  },
  
  // Desserts
  {
    id: 'cheesecake',
    name: 'Cheesecake',
    description: 'Klasický cheesecake s ovocnou polevou',
    price: 4.50,
    category: 'desserts',
  },
  {
    id: 'tiramisu',
    name: 'Tiramisu',
    description: 'Tradičné talianske tiramisu',
    price: 4.80,
    category: 'desserts',
  },
  {
    id: 'brownie',
    name: 'Brownie',
    description: 'Čokoládový brownie s vanilkovou zmrzlinou',
    price: 4.20,
    category: 'desserts',
  },
  {
    id: 'apple-strudel',
    name: 'Jablkový štrúdľa',
    description: 'Tradičný jablkový štrúdľa s vanilkovou omáčkou',
    price: 3.80,
    category: 'desserts',
  },
  {
    id: 'croissant',
    name: 'Croissant',
    description: 'Čerstvý francúzsky croissant (čistý, čokoládový, mandľový)',
    price: 2.50,
    category: 'desserts',
  },
  {
    id: 'muffin',
    name: 'Muffin',
    description: 'Domáci muffin (čokoládový, borůvkový, vanilkový)',
    price: 2.80,
    category: 'desserts',
  },
];

