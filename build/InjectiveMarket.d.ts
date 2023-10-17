export interface MarketData {
    id: number;
    name: string;
    exchange: string;
    base: string;
    quote: string;
    basePrecision: number;
    quotePrecision: number;
    lotSize: number;
    fee: number;
    minQuantity: number;
    marketType: string;
    isActive: boolean;
    contract: string;
}
export interface OrderBookLevel {
    price: string;
    quantity: string;
}
export interface Books {
    asks: OrderBookLevel[];
    bids: OrderBookLevel[];
}
export declare const injectiveAllMarket: MarketData[];
