import { default as React } from 'react';
/**
 * A conditional rendering component, similar to an `if` statement in JavaScript.
 *
 * @param {boolean} condition - The condition to evaluate.
 *
 * Example usage:
 * <If condition={isLoggedIn}>
 *   <div>Welcome back!</div>
 * </If>
 */
interface IfProps {
    condition: boolean;
    render: React.ReactNode;
}
declare const If: React.FC<IfProps>;
export default If;
//# sourceMappingURL=If.d.ts.map