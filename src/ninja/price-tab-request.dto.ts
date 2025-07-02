import { type League, StashTab } from "@meepen/poe-common";
import { Type } from "class-transformer";
import { IsString } from "class-validator";

export class PriceTabRequest {
    @IsString()
    leagueId!: League['id'];
    @Type(() => StashTab)
    tab!: StashTab;
}