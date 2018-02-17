import Link from 'next/link'

export default () => (
  <div>
    <Link href="/woot"><a>Woot (no prefetch)</a></Link>
    <br />
    <Link href="/woot" prefetch><a>Woot (with prefetch)</a></Link>
  </div>
)
