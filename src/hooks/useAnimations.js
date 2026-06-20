import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('[data-reveal]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

export function useCursor() {
  useEffect(() => {
    const ring = document.querySelector('.cursor-ring')
    const dot = document.querySelector('.cursor-dot')
    if (!ring || !dot) return

    const moveCursor = (e) => {
      ring.style.left = e.clientX + 'px'
      ring.style.top = e.clientY + 'px'
      dot.style.left = e.clientX + 'px'
      dot.style.top = e.clientY + 'px'
    }

    const addHover = () => ring.classList.add('hovering')
    const removeHover = () => ring.classList.remove('hovering')

    document.addEventListener('mousemove', moveCursor)

    const hoverTargets = document.querySelectorAll('a, button, .card-lux, [data-hover]')
    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      hoverTargets.forEach((el) => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
      })
    }
  })
}
