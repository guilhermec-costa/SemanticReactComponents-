import { default as React } from 'react';
/**
 * A component that provides a smooth scroll to a specified element when rendered.
 * It scrolls to the target element identified by the `target` prop.
 *
 * @param {string} target - The selector of the element to scroll to.
 * @param {number} duration - The duration of the scrolling animation in milliseconds.
 * @param {boolean} [active=true] - A flag to activate or deactivate the scrolling behavior.
 *
 * Example usage:
 * ```tsx
 * <ScrollTo target="#section1" duration={500}>
 *   <button>Scroll to Section 1</button>
 * </ScrollTo>
 * ```
 */
declare const ScrollTo: React.FC<React.PropsWithChildren<{
    targetId: string;
}>>;
export default ScrollTo;
//# sourceMappingURL=ScrollTo.d.ts.map