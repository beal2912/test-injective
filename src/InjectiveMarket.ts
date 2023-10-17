
export interface MarketData{
    id: number,
    name: string,
    exchange: string,
    base: string,
    quote: string,
    basePrecision: number,
    quotePrecision: number,
    lotSize: number,
    fee: number,
    minQuantity: number,
    marketType: string,
    isActive: boolean,
    contract: string,
}

export interface OrderBookLevel {
    price: string;
    quantity: string;
}

export interface Books {
    asks: OrderBookLevel[],
    bids: OrderBookLevel[],
}





    


export const injectiveAllMarket: MarketData[] = [
    // inj-usdt
    { 
        id: 1,
        name: "inj-usdt",
        exchange: "injective",
        base: "inj",
        quote: "peggy0xdAC17F958D2ee523a2206206994597C13D831ec7",
        basePrecision: 18,
        quotePrecision: 6,
        lotSize: 0.01,
        fee: 0.001,
        minQuantity: 2,
        marketType: 'spot',
        isActive: true,
        contract: "0xa508cb32923323679f29a032c70342c147c17d0145625922b0ef22e955c844c0",
    },
    // atom-usdt
    { 
        id: 2,
        name: "atom-usdt",
        exchange: "injective",
        base: "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
        quote: "peggy0xdAC17F958D2ee523a2206206994597C13D831ec7",
        basePrecision: 6,
        quotePrecision: 6,
        lotSize: 0.01,
        fee: 0.001,
        minQuantity: 0.5,
        marketType: 'spot',
        isActive: true,
        contract: "0x0511ddc4e6586f3bfe1acb2dd905f8b8a82c97e1edaef654b12ca7e6031ca0fa",
    },
    // evmos-usdt
    { 
        id: 3,
        name: "evmos-usdt",
        exchange: "injective",
        base: "ibc/16618B7F7AC551F48C057A13F4CA5503693FBFF507719A85BC6876B8BD75F821",
        quote: "peggy0xdAC17F958D2ee523a2206206994597C13D831ec7",
        basePrecision: 18,
        quotePrecision: 6,
        lotSize: 0.01,
        fee: 0.001,
        minQuantity: 4,
        marketType: 'spot',
        isActive: true,
        contract: "0x719f1617efc6e998472b70436549e0999fab8c05701177b15ba8910f2c5e7ab2",
    },
    // strd-usdt
    { 
        id: 4,
        name: "strd-usdt",
        exchange: "injective",
        base: "ibc/3FDD002A3A4019B05A33D324B2F29748E77AF501BEA5C96D1F28B2D6755F9F25",
        quote: "peggy0xdAC17F958D2ee523a2206206994597C13D831ec7",
        basePrecision: 6,
        quotePrecision: 6,
        lotSize: 0.01,
        fee: 0.001,
        minQuantity: 10,
        marketType: 'spot',
        isActive: true,
        contract: "0xcd4b823ad32db2245b61bf498936145d22cdedab808d2f9d65100330da315d29",
    },
    // cre-usdt
    { 
        id: 5,
        name: "cre-usdt",
        exchange: "injective",
        base: "ibc/3A6DD3358D9F7ADD18CDE79BA10B400511A5DE4AE2C037D7C9639B52ADAF35C6",
        quote: "peggy0xdAC17F958D2ee523a2206206994597C13D831ec7",
        basePrecision: 6,
        quotePrecision: 6,
        lotSize: 0.01,
        fee: 0.001,
        minQuantity: 10,
        marketType: 'spot',
        isActive: true,
        contract: "0xe03df6e1571acb076c3d8f22564a692413b6843ad2df67411d8d8e56449c7ff4",
    },

];