import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export function handleScrollDownClick(): void {
  const headerHeight: number | undefined =
    document.querySelector('header')?.offsetHeight

  gsap.to(window, {
    duration: 1.5,
    scrollTo: { y: '#work', offsetY: headerHeight, autoKill: true },
    ease: 'power2',
  })
}
