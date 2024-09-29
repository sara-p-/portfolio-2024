export function setTheme(themeName: string): void {
  localStorage.setItem('theme', themeName)
  document.documentElement.className = themeName
}

export function keepTheme(): void {
  if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') === 'theme-light') {
      setTheme('theme-light')
    } else if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark')
    }
  } else {
    setTheme('theme-light')
  }
}
