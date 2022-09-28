export const palette = {
  primary: {
    main: '#ff4400'
  },
  secondary: {
    light: '#0066ff',
    main: '#0044ff',
    // dark: will be calculated from palette.secondary.main,
    contrastText: '#ffcc00'
  },
  // Provide every color token (light, main, dark, and contrastText) when using
  // custom colors for props in Material UI's components.
  // Then you will be able to use it like this: `<Button color="custom">`
  // (For TypeScript, you need to add module augmentation for the `custom` value)
  custom: {
    light: '#ffa726',
    main: '#f57c00',
    dark: '#ef6c00',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },

  contrastThreshold: 3,

  tonalOffset: 0.2
}