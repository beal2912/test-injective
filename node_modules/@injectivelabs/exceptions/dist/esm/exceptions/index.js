import { GrpcUnaryRequestException } from './GrpcUnaryRequestException';
import { HttpRequestException } from './HttpRequestException';
import { Web3Exception } from './Web3Exception';
import { GeneralException } from './GeneralException';
import { LedgerException } from './LedgerException';
import { MetamaskException } from './MetamaskException';
import { TrustWalletException } from './TrustWalletException';
import { TrezorException } from './TrezorException';
import { CosmosWalletException } from './CosmosWalletException';
import { TransactionException } from './TransactionException';
import { WalletException } from './WalletException';
import { ConcreteException } from '../exception';
export const isThrownException = (exception) => {
    if (exception instanceof ConcreteException) {
        return true;
    }
    if ([
        'GrpcUnaryRequestException',
        'HttpRequestException',
        'Web3Exception',
        'GeneralException',
        'LedgerException',
        'MetamaskException',
        'TrezorException',
        'CosmosWalletException',
        'TransactionException',
        'WalletException',
        'TrustWalletException',
    ].includes(exception.constructor.name)) {
        return true;
    }
    return false;
};
export { GrpcUnaryRequestException, HttpRequestException, Web3Exception, GeneralException, LedgerException, MetamaskException, TrezorException, TrustWalletException, CosmosWalletException, TransactionException, WalletException, };
//# sourceMappingURL=index.js.map