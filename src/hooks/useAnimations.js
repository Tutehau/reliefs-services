import { useEffect } from 'react'

export function useScrollReveal(pathname) {
  useEffect(() => {
    let observer

    // Small delay so React has committed the new page's DOM before we observe
    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      )

      // Only observe elements not yet revealed
      document.querySelectorAll('[data-reveal]:not(.visible)').forEach((el) => {
        observer.observe(el)
      })
    }, 60)

    return () => {
      clearTimeout(timer)
      if (observer) observer.disconnect()
    }
  }, [pathname])
}

export function useCursor(pathname) {
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

    document.addEventListener('mousemove', moveCursor, { passive: true })

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
  }, [pathname])
}
