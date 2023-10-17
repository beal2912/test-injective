export var TokenType;
(function (TokenType) {
    TokenType["Ibc"] = "ibc";
    TokenType["Cw20"] = "cw20";
    TokenType["Spl"] = "spl";
    TokenType["Erc20"] = "erc20";
    TokenType["Evm"] = "evm";
    TokenType["Native"] = "native";
    TokenType["TokenFactory"] = "tokenFactory";
    TokenType["InsuranceFund"] = "insuranceFund";
    TokenType["Unknown"] = "unknown";
})(TokenType || (TokenType = {}));
export var TokenVerification;
(function (TokenVerification) {
    TokenVerification["Verified"] = "verified"; /** verified on token-metadata package */
    TokenVerification["Internal"] = "internal"; /** verified from on-chain data */
    TokenVerification["External"] = "external"; /** verified on external source */
    TokenVerification["Unverified"] = "unverified"; /** unverified on any source */
})(TokenVerification || (TokenVerification = {}));
export var Cw20TokenSource;
(function (Cw20TokenSource) {
    Cw20TokenSource["Solana"] = "solana";
    Cw20TokenSource["Cosmos"] = "cosmos";
    Cw20TokenSource["Ethereum"] = "ethereum";
    Cw20TokenSource["EthereumWh"] = "ethereum-wormhole";
    Cw20TokenSource["Polygon"] = "polygon";
    Cw20TokenSource["Klaytn"] = "klaytn";
    Cw20TokenSource["Arbitrum"] = "arbitrum";
    Cw20TokenSource["Sui"] = "sui";
})(Cw20TokenSource || (Cw20TokenSource = {}));
//# sourceMappingURL=types.js.map