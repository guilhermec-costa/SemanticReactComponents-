import { default as React } from 'react';
/**
 * A component that mimics the functionality of a switch-case statement.
 * It renders the child component that matches the provided case value.
 *
 * @param {any} expression - The value to match against each case.
 * @param {React.ReactNode} children - An array of `Case` components. Each `Case` should have a `value` prop that matches the value.
 *
 * Example usage:
 * <SwitchCase value={status}>
 *   <Case value="loading">
 *     <div>Loading...</div>
 *   </Case>
 *   <Case value="error">
 *     <div>Error occurred!</div>
 *   </Case>
 *   <Case value="success">
 *     <div>Data loaded successfully!</div>
 *   </Case>
 * </SwitchCase>
 */
interface CaseProps {
    value?: any;
    default?: boolean;
}
type CaseElement = React.ReactElement<CaseProps>;
interface SwitchProps {
    expression: any;
    children: CaseElement[] | CaseElement;
}
declare const Switch: React.FC<SwitchProps>;
declare const Case: React.FC<React.PropsWithChildren<CaseProps>>;
export { Case, Switch };
//# sourceMappingURL=SwitchCase.d.ts.map