export function getShowRegistry(): boolean {
  if (typeof window === 'undefined') {
    return false
  }

  const params = new URLSearchParams(window.location.search)
  return params.get('showRegistry') === 'true'
}
