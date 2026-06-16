import type { MarkedExtension, Tokens } from 'marked'

// Custom renderer for external links to open in a new tab
export function externalLinks(): MarkedExtension {
  return {
    renderer: {
      link({ href, title, tokens }: Tokens.Link) {
        const text = this.parser.parseInline(tokens)
        const cleanHref = cleanUrl(href)
        if (cleanHref === null) {
          return text
        }
        href = cleanHref

        const localLink =
          href.startsWith('/') || href.startsWith(`${location.protocol}//${location.hostname}`)

        let out = '<a'
        if (!localLink) {
          out += ' target="_blank" rel="noreferrer noopener nofollow"'
        }
        out += ' href="' + href + '"'
        if (title) {
          out += ' title="' + title + '"'
        }
        out += '>' + text + '</a>'
        return out
      },
    },
  }
}

export function cleanUrl(href: string): string | null {
  try {
    href = encodeURI(href).replace(/%25/g, '%')
  } catch {
    return null
  }
  return href
}
