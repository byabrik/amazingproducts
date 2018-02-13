import { Product } from "./product";
import { AvailabilityCalendar } from "./availability_calendar";  

export class Deal {
    constructor(
        public id: Number,
        public total_products: Number,
        public start_datetime: Date,
        public end_datetime: Date,
        public product: Product,
        public subscribedUsers: Number[]
    ) {}
}