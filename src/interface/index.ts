export interface Book {
  id: string;
  cover: string;
  title: string;
  price: string;
}

export interface SelectedItem {
  qty: number;
  total: number;
  detail: Book;
}

export interface SetSelectedItem extends SelectedItem {
  index: number;
}
