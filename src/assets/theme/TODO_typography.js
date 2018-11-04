// Typography JS start
import Typography from "typography";

const headerFontFamily = ['LeagueSpartan', 'Lato', 'Lucida Grande', 'Tahoma', 'Sans-Serif']
const bodyFontFamily = ['BrandonGrotesque', 'Lato', 'Lucida Grande', 'Tahoma', 'Sans-Serif']

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: headerFontFamily,
  bodyFontFamily: bodyFontFamily,
  // See below for the full list of options.
})

// Output CSS as string.
typography.toString()

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles()

// Typography JS end

export default typography