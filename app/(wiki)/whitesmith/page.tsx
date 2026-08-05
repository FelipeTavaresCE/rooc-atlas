import { whitesmithPage } from '@/data/whitesmith'
import { WikiPageRenderer } from '@/components/wiki/wiki-page-renderer'

export default function WhitesmithPage() {
  return (
    <WikiPageRenderer
      page={whitesmithPage}
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Classes' }, { label: 'Whitesmith' }]}
    />
  )
}
