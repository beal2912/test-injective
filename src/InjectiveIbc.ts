


import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { IndexerGrpcSpotApi, IndexerGrpcSpotStream, Orderbook, PriceLevel } from "@injectivelabs/sdk-ts";
import { injectiveAllMarket } from "./InjectiveMarket";



interface OrderBookLevel {
    price: string,
    quantity: string
}
interface OrderBook {
    market: string,
    asks: OrderBookLevel[],
    bids: OrderBookLevel[],
}

(async () => {

    const network = getNetworkInfo(Network.MainnetK8s);
    const indexerGrpcSpotStream = new IndexerGrpcSpotStream(network.indexer);
    const indexerGrpcSpotApi = new IndexerGrpcSpotApi(network.indexer);
    interface Market{
        [index:string]: Orderbook
    }
    const marketIds = [
        "0x0511ddc4e6586f3bfe1acb2dd905f8b8a82c97e1edaef654b12ca7e6031ca0fa",
        "0xa508cb32923323679f29a032c70342c147c17d0145625922b0ef22e955c844c0",
        "0x719f1617efc6e998472b70436549e0999fab8c05701177b15ba8910f2c5e7ab2",
        "0xcd4b823ad32db2245b61bf498936145d22cdedab808d2f9d65100330da315d29",
        "0xe03df6e1571acb076c3d8f22564a692413b6843ad2df67411d8d8e56449c7ff4",
    ];
    var market = {} as Market
    const injectiveOrderbook = await indexerGrpcSpotApi.fetchOrderbooksV2(marketIds)
    for(let orderbook of injectiveOrderbook){
        market[orderbook.marketId] = orderbook.orderbook
        let marketData = injectiveAllMarket.find( w => w.contract == orderbook.marketId)
        if(marketData){
            let result = getBookFromMarket(orderbook.orderbook,marketData.name)
            let filename = "/home/project/tmp/orderbook/injective-"+marketData.name+".json"
            let data =  JSON.stringify(result)

        }
    }


    await indexerGrpcSpotStream.streamSpotOrderbookV2({
      marketIds,
      callback: (streamSpotOrderbook) => {
  
        if(streamSpotOrderbook.orderbook){
          if(!market[streamSpotOrderbook.marketId]){
                market[streamSpotOrderbook.marketId] = streamSpotOrderbook.orderbook
                let marketData = injectiveAllMarket.find( w => w.contract == streamSpotOrderbook.marketId)
                if(marketData){
                    let result = getBookFromMarket(streamSpotOrderbook.orderbook,marketData.name)
                    let filename = "/home/project/tmp/orderbook/injective-"+marketData.name+".json"
                    let data =  JSON.stringify(result)

                }
          }
          else if(market[streamSpotOrderbook.marketId].buys[0].price < streamSpotOrderbook.orderbook.buys[0].price || market[streamSpotOrderbook.marketId].sells[0].price > streamSpotOrderbook.orderbook.sells[0].price
              ){
                market[streamSpotOrderbook.marketId] = streamSpotOrderbook.orderbook
                let marketData = injectiveAllMarket.find( w => w.contract == streamSpotOrderbook.marketId)
                if(marketData){
                    let result = getBookFromMarket(streamSpotOrderbook.orderbook,marketData.name)
                    let filename = "/home/project/tmp/orderbook/injective-"+marketData.name+".json"
                    let data =  JSON.stringify(result)

                }
          }
        }
        
        
        
      },
      onEndCallback: (status) => {
        console.log("Stream has ended with status: " + status)
        process.exit(0)
      },
      onStatusCallback: (status) => {
        console.log("Stream onStatus with status: " + status)
      },
    })


function getBookFromMarket(market: Orderbook, name: string){
    try{
        let book = {} as OrderBook
        book.market = name
        book.asks = formatBookLevel(market.sells)
        book.bids = formatBookLevel(market.buys)
    
        return book
    }
    catch(e: any){

        return undefined
    }
}

function formatBookLevel(response: PriceLevel[]){
    let result: OrderBookLevel[] = []
    for(let order of response){
        let item = {} as OrderBookLevel
        item.price = order.price
        item.quantity = order.quantity
        result.push(item)
    }
    return result
}


})();