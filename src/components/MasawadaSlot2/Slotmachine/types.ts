export const masawadaSymbols = ["ma", "sa", "wa", "da"] as const;
export type MasawadaSymbol = typeof masawadaSymbols[number];
export type IncompleteSlotItem = string | undefined;
export type IncompleteSlots = Array<IncompleteSlotItem>;
export type StoppedSlotItem = string;
export type StoppedSlots = Array<StoppedSlotItem>;
export type Slots = StoppedSlots | IncompleteSlots;
