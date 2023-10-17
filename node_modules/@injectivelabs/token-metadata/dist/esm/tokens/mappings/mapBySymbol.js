export const getMappedTokensBySymbol = (tokens) => Object.keys(tokens).reduce((result, token) => {
    const tokenMeta = tokens[token];
    const symbolKey = token.toUpperCase();
    const symbol = tokenMeta.symbol.toUpperCase();
    const symbolDiffs = symbol !== symbolKey;
    if (tokenMeta.ibc && tokenMeta.ibc.baseDenom) {
        return {
            ...result,
            [tokenMeta.ibc.baseDenom.toUpperCase()]: tokenMeta,
            [symbol.toUpperCase()]: tokenMeta,
            ...(symbolDiffs && {
                [symbolKey.toUpperCase()]: tokenMeta,
            }),
        };
    }
    if (tokenMeta.cw20 && tokenMeta.cw20.address) {
        return {
            ...result,
            [tokenMeta.cw20.address.toUpperCase()]: tokenMeta,
            [symbol.toUpperCase()]: tokenMeta,
            ...(symbolDiffs && {
                [symbolKey.toUpperCase()]: tokenMeta,
            }),
        };
    }
    if (tokenMeta.spl && tokenMeta.spl.address) {
        return {
            ...result,
            [tokenMeta.spl.address.toUpperCase()]: tokenMeta,
            [symbol.toUpperCase()]: tokenMeta,
            ...(symbolDiffs && {
                [symbolKey.toUpperCase()]: tokenMeta,
            }),
        };
    }
    if (tokenMeta.cw20s) {
        const cw20Maps = tokenMeta.cw20s.reduce((result, cw20) => ({
            ...result,
            [cw20.symbol.toUpperCase()]: tokenMeta,
        }), {});
        return {
            ...result,
            ...cw20Maps,
            [symbol.toUpperCase()]: tokenMeta,
            ...(symbolDiffs && {
                [symbolKey.toUpperCase()]: tokenMeta,
            }),
        };
    }
    return {
        ...result,
        [symbol.toUpperCase()]: tokenMeta,
        ...(symbolDiffs && {
            [symbolKey.toUpperCase()]: tokenMeta,
        }),
    };
}, {});
//# sourceMappingURL=mapBySymbol.js.map