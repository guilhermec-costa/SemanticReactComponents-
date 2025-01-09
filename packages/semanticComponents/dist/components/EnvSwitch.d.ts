import { default as React } from 'react';
/**
 * Switches between different environment configurations (useful for multiple environments like dev, staging, prod).
 *
 * @param {string} env - The environment name to switch.
 * @param {React.ReactNode} children - The elements to render based on the current environment.
 *
 * Example usage:
 * <EnvSwitch env="production">
 *   <div>This content appears in production</div>
 * </EnvSwitch>
 */
declare const EnvSwitch: React.FC<{
    dev: React.ReactNode;
    hml: React.ReactNode;
    prod: React.ReactNode;
}>;
export default EnvSwitch;
//# sourceMappingURL=EnvSwitch.d.ts.map