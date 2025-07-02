import { Item } from "@meepen/poe-common";
import { Type } from "class-transformer";
import { Price } from "./price.dto.js";

export class PricedItem {
    @Type(() => Item)
    item!: Item;
    @Type(() => Price)
    price!: Price;
}