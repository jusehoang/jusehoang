import { Bill } from "./bill.model"
import { Room } from "./room.model"

export interface BookRoom {
  bill: Bill[]
  end_date: null
  note: string
  room: Room
  start_date: string
  status: string
}
