import { ReactElement } from 'react'
import Product from './product'

interface SectionType {
  title: string
  data: Product[]
  renderItem: ({ item }: { item: Product }) => ReactElement
}

export default SectionType
