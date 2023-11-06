import * as React from 'react';
type OwnProps = {
    duration?: number;
    auto?: boolean;
    storageKey?: string;
    basePath?: string;
    filename?: string;
    children?: any;
};
type Result = {
    loading: boolean;
    isLatestVersion: boolean;
    emptyCacheStorage: (version?: string | undefined) => Promise<void>;
};
export declare const ClearCacheProvider: React.FC<OwnProps>;
export declare const useClearCacheCtx: () => Result;
export declare const useClearCache: (props?: OwnProps) => {
    loading: boolean;
    isLatestVersion: boolean;
    emptyCacheStorage: (version?: string) => Promise<void>;
    latestVersion: unknown;
};
declare const ClearCache: React.FC<OwnProps>;
export default ClearCache;
