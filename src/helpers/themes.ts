export function setTheme(themeName: string) {
  localStorage.setItem('theme', themeName)
  document.documentElement.className = themeName
}

export function keepTheme() {
  const theme = localStorage.getItem('theme')
  if (theme) {
    setTheme(theme)
    return
  }

  const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)')
  console.log(prefersLightTheme)
  if (prefersLightTheme.matches) {
    setTheme('theme-light')
    return
  }

  setTheme('theme-dark')
}
