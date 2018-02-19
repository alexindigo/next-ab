import Link from 'next/link'

export default () => (
  <div>
    <Link href="/woot_no_prefetch"><a>Woot (no prefetch)</a></Link>
    <br />
    <Link href="/woot_prefetch" prefetch><a>Woot (with prefetch)</a></Link>
  </div>
)
