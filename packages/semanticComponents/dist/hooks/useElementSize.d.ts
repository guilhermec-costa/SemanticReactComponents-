import { default as React } from 'react';
interface Dimensions {
    width: number;
    height: number;
}
declare const useElementSize: <T extends HTMLElement>() => [React.RefObject<T>, Dimensions];
export default useElementSize;
//# sourceMappingURL=useElementSize.d.ts.map