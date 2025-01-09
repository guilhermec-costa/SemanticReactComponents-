import { default as React } from 'react';
/**
 * A conditional rendering component that works like "else if" in JavaScript. It should be used in conjunction with `If`.
 *
 * @param {boolean} condition - The condition to evaluate.
 *
 * Example usage:
 * <If condition={isLoggedIn}>
 *   <div>Logged In</div>
 * </If>
 * <ElseIf condition={!isLoggedIn}>
 *   <div>Logged Out</div>
 * </ElseIf>
 */
interface ElseIfProps {
    condition: boolean;
    renderIf: React.ReactNode;
    renderElse: React.ReactNode;
}
declare const ElseIf: React.FC<ElseIfProps>;
export default ElseIf;
//# sourceMappingURL=ElseIf.d.ts.map