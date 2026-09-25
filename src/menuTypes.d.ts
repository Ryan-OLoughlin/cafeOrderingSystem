// ---------------------------------------------------------------
// Data types for the cafe ordering system.
// Types only - this file contains no runtime code.
// Everything is exported so that cafe.ts can import it with `import type`.
// ---------------------------------------------------------------

// TS: literal (union) type - 'course' may only ever be one of these three values.
export type Course = "starter" | "main" | "dessert";

// TS: nested type - 'nutrition' is an object, so it gets its own interface.
export interface Nutrition {
  calories: number;
  allergens: string[];
}

// TS: the shape shared by every item on the menu.
export interface MenuItem {
  id: number;
  name: string;
  course: Course;
  price: number;
  nutrition: Nutrition;
  // TS: optional properties - only some items are on offer / in season.
  discountPercent?: number;
  availableFrom?: Date;
}

// TS: a combo is a named bundle of menu items sold at a fixed price.
export interface ComboDeal {
  id: number;
  name: string;
  items: MenuItem[];
  price: number;
}

// TS: an order line is either a single MenuItem or a ComboDeal.
export type OrderLine = MenuItem | ComboDeal;
