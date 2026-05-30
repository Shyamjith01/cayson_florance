/**
 * components/SEO/JsonLd.jsx
 * Reusable JSON-LD structured data renderer.
 * Injects schema markup into <script type="application/ld+json"> for:
 * - Rich Snippets (Google, Bing)
 * - Knowledge Graph eligibility
 * - AI search discoverability (ChatGPT, Gemini, Perplexity)
 */

export default function JsonLd({ schema }) {
  if (!schema) return null
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
    />
  )
}
