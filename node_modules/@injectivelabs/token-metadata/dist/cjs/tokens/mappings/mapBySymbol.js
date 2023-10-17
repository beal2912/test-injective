"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMappedTokensBySymbol = void 0;
const getMappedTokensBySymbol = (tokens) => Object.keys(tokens).reduce((result, token) => {
    const tokenMeta = tokens[token];
    const symbolKey = token.toUpperCase();
    const symbol = tokenMeta.symbol.toUpperCase();
    const symbolDiffs = symbol !== symbolKey;
    if (tokenMeta.ibc && tokenMeta.ibc.baseDenom) {
        return Object.assign(Object.assign(Object.assign({}, result), { [tokenMeta.ibc.baseDenom.toUpperCase()]: tokenMeta, [symbol.toUpperCase()]: tokenMeta }), (symbolDiffs && {
            [symbolKey.toUpperCase()]: tokenMeta,
        }));
    }
    if (tokenMeta.cw20 && tokenMeta.cw20.address) {
        return Object.assign(Object.assign(Object.assign({}, result), { [tokenMeta.cw20.address.toUpperCase()]: tokenMeta, [symbol.toUpperCase()]: tokenMeta }), (symbolDiffs && {
            [symbolKey.toUpperCase()]: tokenMeta,
        }));
    }
    if (tokenMeta.spl && tokenMeta.spl.address) {
        return Object.assign(Object.assign(Object.assign({}, result), { [tokenMeta.spl.address.toUpperCase()]: tokenMeta, [symbol.toUpperCase()]: tokenMeta }), (symbolDiffs && {
            [symbolKey.toUpperCase()]: tokenMeta,
        }));
    }
    if (tokenMeta.cw20s) {
        const cw20Maps = tokenMeta.cw20s.reduce((result, cw20) => (Object.assign(Object.assign({}, result), { [cw20.symbol.toUpperCase()]: tokenMeta })), {});
        return Object.assign(Object.assign(Object.assign(Object.assign({}, result), cw20Maps), { [symbol.toUpperCase()]: tokenMeta }), (symbolDiffs && {
            [symbolKey.toUpperCase()]: tokenMeta,
        }));
    }
    return Object.assign(Object.assign(Object.assign({}, result), { [symbol.toUpperCase()]: tokenMeta }), (symbolDiffs && {
        [symbolKey.toUpperCase()]: tokenMeta,
    }));
}, {});
exports.getMappedTokensBySymbol = getMappedTokensBySymbol;
//# sourceMappingURL=mapBySymbol.js.map