export interface PortalProps {
  /**
   * The children to render inside the portal.
   */
  children: React.ReactNode;

  /**
   * The ID of the container element to render the portal into.
   * If cannot find the target element, the document body element will be used.
   */
  containerId?: string;
}
