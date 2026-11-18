import { WikiPageRenderer } from '@/components/wiki/wiki-page-renderer'
import { whitesmithPage } from '@/data/whitesmith'

export default function WhitesmithPage() {
  return (
    <WikiPageRenderer
      page={whitesmithPage}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Classes' },
        { label: 'Whitesmith' },
      ]}
    />
  )
}
