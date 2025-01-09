import { default as React } from 'react';
/**
 * A component that memoizes its children, rendering them only when the provided dependencies change.
 * Similar to React's `useMemo` but used as a component to optimize rendering.
 *
 * @param {Array<any>} deps - The list of dependencies that will trigger a re-render when changed.
 * @param {React.ReactNode} children - The components to be memoized.
 *
 * Example usage:
 * <Memoized deps={[data]}>
 *   <ExpensiveComponent data={data} />
 * </Memoized>
 *
 * In this example, `ExpensiveComponent` will only re-render if `data` changes.
 */
interface MemoizedProps {
    deps?: React.DependencyList;
}
declare const Memoized: React.FC<React.PropsWithChildren<MemoizedProps>>;
export default Memoized;
//# sourceMappingURL=Memoized.d.ts.map