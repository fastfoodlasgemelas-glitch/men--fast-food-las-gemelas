import type { MenuItem, Category } from '../types/menu';

export const categories: Category[] = [
  { id: 'alitas', name: 'Alitas', icon: '\uD83C\uDF57' },
  { id: 'tortas', name: 'Tortas', icon: '\uD83E\uDD6A' },
  { id: 'hamburguesas', name: 'Hamburguesas', icon: '\uD83C\uDF54' },
  { id: 'hot-dogs', name: 'Hot Dogs', icon: '\uD83C\uDF2D' },
  { id: 'info', name: 'Info', icon: '\uD83D\uDCCD' },
  { id: 'siguenos', name: 'S\u00EDguenos', icon: '\uD83D\uDCF1' },
];

export const menuItems: MenuItem[] = [
  // === Alitas ===
  {
    id: 'alitas-9',
    name: '9 Alitas',
    description: '9 alitas + 1 orden de papas + 3 salsas de tu elecci\u00F3n. Salsas: B\u00FAfalo, BBQ, Chipotle, Ranch, Jalape\u00F1o.',
    price: 6.00,
    category: 'alitas',
  },
  {
    id: 'alitas-13',
    name: '13 Alitas',
    description: '13 alitas + 1 orden de papas + 3 salsas de tu elecci\u00F3n. Salsas: B\u00FAfalo, BBQ, Chipotle, Ranch, Jalape\u00F1o.',
    price: 8.00,
    category: 'alitas',
  },
  {
    id: 'alitas-18',
    name: '18 Alitas',
    description: '18 alitas + 1 orden de papas + 3 salsas de tu elecci\u00F3n. Salsas: B\u00FAfalo, BBQ, Chipotle, Ranch, Jalape\u00F1o.',
    price: 10.00,
    category: 'alitas',
  },

  // === Tortas ===
  {
    id: 'torta-clasica',
    name: 'Torta Cl\u00E1sica',
    description: 'Carne de res, jam\u00F3n, vegetales, aguacate, aderezos y queso.',
    price: 3.50,
    category: 'tortas',
  },
  {
    id: 'torta-mixta',
    name: 'Torta Mixta',
    description: 'Carne de res, jam\u00F3n, salchicha, vegetales, aguacate, aderezos y queso.',
    price: 4.00,
    category: 'tortas',
  },
  {
    id: 'torta-especial',
    name: 'Torta Especial',
    description: 'Carne de res, jam\u00F3n, vegetales, aguacates, aderezos y queso, acompa\u00F1ada de papitas.',
    price: 4.50,
    category: 'tortas',
  },
  {
    id: 'torta-mixta-especial',
    name: 'Torta Mixta Especial',
    description: 'Carne de res, jam\u00F3n, salchicha, vegetales, aguacate, aderezos y queso, acompa\u00F1ada de papitas.',
    price: 5.00,
    category: 'tortas',
  },
  {
    id: 'torta-hula-hula',
    name: 'Torta Hula Hula',
    description: 'Doble carne, doble salchicha, vegetales, aguacate, aderezos, queso amarillo, queso blanco, acompa\u00F1ada de papitas.',
    price: 8.00,
    category: 'tortas',
  },
  {
    id: 'torta-extra-cebolla',
    name: 'Cebolla Frita',
    description: 'Porci\u00F3n extra de cebolla frita crujiente.',
    price: 1.00,
    category: 'tortas',
  },
  {
    id: 'torta-extra-jalapeno',
    name: 'Jalape\u00F1o',
    description: 'Porci\u00F3n extra de jalape\u00F1o.',
    price: 1.00,
    category: 'tortas',
  },

  // === Hamburguesas ===
  {
    id: 'hamburguesa-clasica',
    name: 'Hamburguesa Cl\u00E1sica',
    description: 'Carne de res, jam\u00F3n, vegetales, lechuga, aderezos y queso amarillo.',
    price: 3.50,
    category: 'hamburguesas',
  },
  {
    id: 'hamburguesa-doble',
    name: 'Hamburguesa Doble',
    description: 'Doble carne, jam\u00F3n, aderezos, vegetales, lechuga y doble queso amarillo.',
    price: 4.50,
    category: 'hamburguesas',
  },
  {
    id: 'hamburguesa-especial',
    name: 'Hamburguesa Especial',
    description: 'Carne de res, jam\u00F3n, vegetales, lechuga, aderezos y queso amarillo, acompa\u00F1ada de papitas.',
    price: 4.50,
    category: 'hamburguesas',
  },
  {
    id: 'hamburguesa-mega',
    name: 'Hamburguesa Mega',
    description: 'Doble carne, doble jam\u00F3n, doble queso amarillo, vegetales, lechuga, aderezos, acompa\u00F1ada de papitas.',
    price: 7.00,
    category: 'hamburguesas',
  },
  {
    id: 'hamburguesa-extra-cebolla',
    name: 'Cebolla Frita',
    description: 'Porci\u00F3n extra de cebolla frita crujiente.',
    price: 1.00,
    category: 'hamburguesas',
  },
  {
    id: 'hamburguesa-extra-jalapeno',
    name: 'Jalape\u00F1o',
    description: 'Porci\u00F3n extra de jalape\u00F1o.',
    price: 1.00,
    category: 'hamburguesas',
  },

  // === Hot Dogs ===
  {
    id: 'hotdog-clasico',
    name: 'Hot Dog Cl\u00E1sico',
    description: 'Salchicha, lechuga, aderezos, queso.',
    price: 2.00,
    category: 'hot-dogs',
  },
  {
    id: 'hotdog-especial',
    name: 'Hot Dog Especial',
    description: 'Salchicha, lechuga, aderezos, queso, acompa\u00F1ado de papitas.',
    price: 3.00,
    category: 'hot-dogs',
  },
  {
    id: 'hotdog-super',
    name: 'Super Hot Dog',
    description: 'Salchicha, aguacate, cebolla frita, lechuga, aderezos, acompa\u00F1ado de papitas.',
    price: 4.50,
    category: 'hot-dogs',
  },
  {
    id: 'hotdog-extra-cebolla',
    name: 'Cebolla Frita',
    description: 'Porci\u00F3n extra de cebolla frita crujiente.',
    price: 1.00,
    category: 'hot-dogs',
  },
  {
    id: 'hotdog-extra-jalapeno',
    name: 'Jalape\u00F1o',
    description: 'Porci\u00F3n extra de jalape\u00F1o.',
    price: 1.00,
    category: 'hot-dogs',
  },
];

export const negocioInfo = {
  nombre: 'Fast Food Las Gemelas',
  tipo: 'Comida Rapida',
  telefono: '6992-2006',
  telefonoWhatsApp: '50369922006',
  ubicacion: 'Corinto, Morazan, El Salvador',
};
