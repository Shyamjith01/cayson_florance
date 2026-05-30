/**
 * components/SEO/Breadcrumb.jsx
 * Visible breadcrumb navigation with embedded BreadcrumbList JSON-LD schema.
 * Renders accessible breadcrumbs and enables rich snippet breadcrumbs in SERPs.
 */

import Link from 'next/link'
import JsonLd from './JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/seo'

/**
 * @param {Array<{label: string, href: string}>} items
 */
export default function Breadcrumb({ items = [] }) {
  const schemaItems = items.map((item) => ({
    name: item.label,
    url: item.href.startsWith('http')
      ? item.href
      : `${siteConfig.url}${item.href}`,
  }))

  return (
    <>
      <JsonLd schema={breadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb navigation" className="flex items-center">
        <ol
          className="flex items-center gap-1.5 text-xs text-emerald2-800/70 font-mono-display tracking-wide"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            return (
              <li
                key={item.href}
                className="flex items-center gap-1.5"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {isLast ? (
                  <span
                    className="text-emerald2-900 font-medium"
                    aria-current="page"
                    itemProp="name"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-emerald2-900 transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                )}
                {!isLast && (
                  <span aria-hidden="true" className="text-emerald2-400">
                    /
                  </span>
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
