import { useEffect } from 'react'

export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title
    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
      let og = document.querySelector('meta[property="og:title"]')
      if (og) og.setAttribute('content', title)
      if (description) {
        og = document.querySelector('meta[property="og:description"]')
        if (og) og.setAttribute('content', description)
      }
    }
  }, [title, description])
}
