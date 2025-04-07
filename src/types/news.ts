export interface News {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string; // You can also use Date if you plan to convert the string into a Date object
  category: string;
}
