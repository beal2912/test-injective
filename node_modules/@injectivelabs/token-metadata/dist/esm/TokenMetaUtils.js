import { getMappedTokensByErc20Address, getMappedTokensByCw20Address, } from './tokens/mappings/mapByAddress';
import { getMappedTokensByName } from './tokens/mappings/mapByName';
import { getMappedTokensByHash } from './tokens/mappings/mapByHash';
import { getMappedTokensBySymbol } from './tokens/mappings/mapBySymbol';
import { TokenVerification, TokenType } from './types';
export class TokenMetaUtils {
    tokens;
    tokensByErc20Address;
    tokensByCw20Address;
    tokensByHash;
    tokensByName;
    constructor(tokens) {
        this.tokens = getMappedTokensBySymbol(tokens);
        this.tokensByErc20Address = getMappedTokensByErc20Address(this.tokens);
        this.tokensByCw20Address = getMappedTokensByCw20Address(this.tokens);
        this.tokensByHash = getMappedTokensByHash(this.tokens);
        this.tokensByName = getMappedTokensByName(this.tokens);
    }
    /**
     * Symbol can be:
     * - Main symbol of the token meta,
     * - BaseDenom based on the ibc hash
     * - Variation of a symbol for multiple versions of the same token (ex: USDC, USDCet, USDCso)
     */
    getMetaBySymbol(symbol) {
        const { tokens: tokensBySymbol } = this;
        const tokenSymbol = symbol.toUpperCase();
        if (!tokensBySymbol[tokenSymbol] && !tokensBySymbol[symbol]) {
            return;
        }
        const tokenMeta = tokensBySymbol[tokenSymbol] || tokensBySymbol[symbol];
        return {
            ...tokenMeta,
            tokenVerification: TokenVerification.Verified,
        };
    }
    getMetaByAddress(address) {
        return address.startsWith('0x')
            ? this.getMetaByErc20Address(address)
            : this.getMetaByCw20Address(address);
    }
    getMetaByCw20Address(address) {
        const { tokensByCw20Address } = this;
        const contractAddress = address.toLowerCase();
        if (!tokensByCw20Address[contractAddress] &&
            !tokensByCw20Address[address]) {
            return;
        }
        const tokenMeta = tokensByCw20Address[contractAddress] || tokensByCw20Address[address];
        return tokenMeta
            ? {
                ...tokenMeta,
                tokenType: TokenType.Cw20,
                tokenVerification: TokenVerification.Verified,
            }
            : undefined;
    }
    getMetaByErc20Address(address) {
        const { tokensByErc20Address } = this;
        const contractAddress = address.toLowerCase();
        if (!tokensByErc20Address[contractAddress] &&
            !tokensByErc20Address[address]) {
            const checksumAddress = Object.keys(tokensByErc20Address).find((checksumAddress) => checksumAddress.toLowerCase() === address ||
                checksumAddress.toLowerCase() === contractAddress);
            if (checksumAddress) {
                const tokenMeta = tokensByErc20Address[checksumAddress];
                return {
                    ...tokenMeta,
                    tokenType: tokenMeta.erc20 ? TokenType.Erc20 : TokenType.Evm,
                    tokenVerification: TokenVerification.Verified,
                };
            }
            return;
        }
        const tokenMeta = tokensByErc20Address[contractAddress] || tokensByErc20Address[address];
        return tokenMeta
            ? {
                ...tokenMeta,
                tokenType: tokenMeta.erc20 ? TokenType.Erc20 : TokenType.Evm,
                tokenVerification: TokenVerification.Verified,
            }
            : undefined;
    }
    getMetaByHash(hash) {
        const { tokensByHash } = this;
        const ibcHash = hash
            .toUpperCase()
            .replace('IBC/', '');
        if (!tokensByHash[ibcHash] && !tokensByHash[hash]) {
            return;
        }
        const tokenMeta = tokensByHash[ibcHash] || tokensByHash[hash];
        return tokenMeta
            ? {
                ...tokenMeta,
                tokenType: TokenType.Ibc,
                tokenVerification: TokenVerification.Verified,
            }
            : undefined;
    }
    getMetaByName(name) {
        const { tokensByName } = this;
        const tokenName = name.toLowerCase();
        if (!tokensByName[tokenName] && !tokensByName[name]) {
            return;
        }
        const tokenMeta = tokensByName[tokenName] || tokensByName[name];
        return {
            ...tokenMeta,
            tokenVerification: TokenVerification.Verified,
        };
    }
    getCoinGeckoIdFromSymbol(symbol) {
        const { tokens: tokensBySymbol } = this;
        const symbolToUppercase = symbol.toUpperCase();
        if (!tokensBySymbol[symbolToUppercase]) {
            return '';
        }
        return tokensBySymbol[symbolToUppercase].coinGeckoId || '';
    }
}
//# sourceMappingURL=TokenMetaUtils.js.map