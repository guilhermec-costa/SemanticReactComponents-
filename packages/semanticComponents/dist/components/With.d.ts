import { default as React } from 'react';
/**
 * Passes additional props to the wrapped children.
 *
 * @param {object} props - The additional props to pass to the children.
 *
 * Example usage:
 * <With props={{ className: 'my-class' }}>
 *   <div>Content with extra props</div>
 * </With>
 */
interface WithProps<T> {
    value: T;
    children: any;
}
declare const With: <T>({ value, children }: WithProps<T>) => React.ReactNode;
export default With;
//# sourceMappingURL=With.d.ts.map