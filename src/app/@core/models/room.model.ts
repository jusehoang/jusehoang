export interface Room {
  id: string;
  room_name: string;
  price: number;
  electric_price: number;
  water_price: number;
  network_price: number;
  max_number_people: number;
  type: string;
  description: string;
  location: string;
  images: string;
  store?: string;
  isBooking?: boolean;
  customer?: string;
}
