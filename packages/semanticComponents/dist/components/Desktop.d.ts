import { default as React } from 'react';
/**
 * Conditionally renders children only when the screen width is above a specified value (usually for desktop screens).
 *
 * @param {number} width - The minimum screen width for rendering the children (default could be 1024 for desktop).
 *
 * Example usage:
 * <Desktop>
 *   <div>This content will only appear on desktop</div>
 * </Desktop>
 */
interface DesktopProps {
    baseWidth?: number;
}
declare const Desktop: React.FC<React.PropsWithChildren<DesktopProps>>;
export default Desktop;
//# sourceMappingURL=Desktop.d.ts.map