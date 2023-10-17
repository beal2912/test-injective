"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testnetTokens = exports.overrideCw20s = void 0;
const tokens_1 = __importDefault(require("./tokens"));
const types_1 = require("../../types");
const overrideCw20s = (source, cw20sList) => {
    if (!cw20sList) {
        return [source];
    }
    const overrideCw20ItemIndex = cw20sList.findIndex(({ symbol }) => symbol === source.symbol);
    if (overrideCw20ItemIndex === -1) {
        return [...cw20sList, source];
    }
    cw20sList[overrideCw20ItemIndex] = source;
    return cw20sList;
};
exports.overrideCw20s = overrideCw20s;
const testnetTokens = () => ({
    wBTC: Object.assign(Object.assign({}, tokens_1.default.wBTC), { cw20s: [
            ...(tokens_1.default.wBTC.cw20s || []),
            ...(0, exports.overrideCw20s)({
                decimals: 8,
                symbol: 'wBTC',
                source: types_1.Cw20TokenSource.Cosmos,
                address: 'wbtc',
                tokenType: types_1.TokenType.Cw20,
            }, tokens_1.default.wBTC.cw20s),
        ] }),
    ATOM: Object.assign(Object.assign({}, tokens_1.default.ATOM), { cw20s: [
            ...(tokens_1.default.ATOM.cw20s || []),
            {
                decimals: 8,
                symbol: 'ATOM',
                source: types_1.Cw20TokenSource.Cosmos,
                address: 'atom',
                tokenType: types_1.TokenType.Cw20,
            },
        ] }),
    INJ: Object.assign(Object.assign({}, tokens_1.default.INJ), { erc20: Object.assign(Object.assign({}, tokens_1.default.INJ.erc20), { address: '0xAD1794307245443B3Cb55d88e79EEE4d8a548C03' }) }),
    USDT: Object.assign(Object.assign({}, tokens_1.default.USDT), { erc20: Object.assign(Object.assign({}, tokens_1.default.USDT.erc20), { address: '0x87aB3B4C8661e07D6372361211B96ed4Dc36B1B5' }) }),
    APE: Object.assign(Object.assign({}, tokens_1.default.APE), { erc20: Object.assign(Object.assign({}, tokens_1.default.APE.erc20), { address: '0x44C21afAaF20c270EBbF5914Cfc3b5022173FEB7' }) }),
    wETH: Object.assign(Object.assign({}, tokens_1.default.wETH), { erc20: Object.assign(Object.assign({}, tokens_1.default.wETH.erc20), { address: '0xdB309Bb079EB419C18fe7D568c61cD2FdB65D9aF' }), cw20s: [
            ...(tokens_1.default.wETH.cw20s || []),
            {
                decimals: 8,
                symbol: 'wETH',
                source: types_1.Cw20TokenSource.EthereumWh,
                address: 'weth',
                tokenType: types_1.TokenType.Cw20,
            },
        ] }),
    ASTRO: Object.assign(Object.assign({}, tokens_1.default.ASTRO), { ibc: Object.assign(Object.assign({}, tokens_1.default.ASTRO.ibc), { hash: 'E8AC6B792CDE60AB208CA060CA010A3881F682A7307F624347AB71B6A0B0BF89', path: 'transfer/channel-13', channelId: 'channel-13', baseDenom: 'ASTRO' }) }),
    SOL: Object.assign(Object.assign({}, tokens_1.default.SOL), { cw20: Object.assign(Object.assign({}, tokens_1.default.SOL.cw20), { address: 'inj12ngevx045zpvacus9s6anr258gkwpmthnz80e9' }) }),
    USDC: Object.assign(Object.assign({}, tokens_1.default.USDC), { erc20: Object.assign(Object.assign({}, tokens_1.default.USDC.erc20), { address: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F' }), cw20s: [
            ...(0, exports.overrideCw20s)({
                decimals: 6,
                symbol: 'USDCet',
                source: types_1.Cw20TokenSource.EthereumWh,
                address: 'inj12sqy9uzzl3h3vqxam7sz9f0yvmhampcgesh3qw',
                tokenType: types_1.TokenType.Cw20,
            }, tokens_1.default.USDC.cw20s),
            {
                decimals: 6,
                symbol: 'USDC',
                source: types_1.Cw20TokenSource.Cosmos,
                address: 'usdc',
                tokenType: types_1.TokenType.Cw20,
            },
        ] }),
    MATIC: Object.assign(Object.assign({}, tokens_1.default.MATIC), { evm: Object.assign(Object.assign({}, tokens_1.default.MATIC.evm), { address: '0x9c3c9283d3e44854697cd22d3faa240cfb032889' }) }),
    MITOTEST1: Object.assign(Object.assign({}, tokens_1.default.MITOTEST1), { cw20s: [
            {
                decimals: 18,
                symbol: 'MT1',
                source: types_1.Cw20TokenSource.EthereumWh,
                address: 'mitotest1',
                tokenType: types_1.TokenType.Cw20,
            },
        ] }),
});
exports.testnetTokens = testnetTokens;
//# sourceMappingURL=testnet-tokens.js.map