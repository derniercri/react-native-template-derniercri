import palette from './palette';

/**
 * Roles for colors. Prefer using these over the palette. It makes it easier
 * to changes things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color, it makes more sense to
 * put that in the <Spinner /> component.
 */

const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: 'rgba(0, 0, 0, 0)',
  /**
   * The screen background
   */
  background: palette.background,
  /**
   * The main tinting color
   */
  primary: palette.blue,
  /**
   * The main tinting color, but darker
   */
  // primaryDarker: palette.sunGreenEnd,
  /**
   * The secondary tinting color
   */
  secondary: palette.cyan,
  /**
   * The default color of text in many components.
   */
  text: palette.black,
};

export default color;
