import React, { ReactElement, useEffect, useRef } from 'react'
import {
  View,
  SectionList,
  Text,
  SectionListData,
  DefaultSectionT,
} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import Product from '@customtypes/product'
import ProductItem from './ProductItem'
import SectionType from '@customtypes/section'
import ItemLayoutType from '@customtypes/itemLayout'
import { useTypedSelector } from '@utils/store'

const ITEM_HEIGHT = 75
const ITEM_PADDING = 200
const FOOTER_PADDING = 120

interface Props {
  categories: string[]
  products: Product[]
  activeIndex: number
}

const keyExtractor = (_: Product, index: number): string => index.toString()

const renderItem = ({ item }: { item: Product }): ReactElement => {
  return <ProductItem item={item} />
}

const sectionHeader = ({
  section,
}: {
  section: SectionListData<Product>
}): ReactElement | null => {
  return section?.data?.length ? (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionHeaderText}>{section.title}</Text>
    </View>
  ) : null
}

const Products: React.FC<Props> = (props) => {
  const { activeIndex, categories, products } = props
  const sectionRef = useRef<SectionList>(null)
  const cart = useTypedSelector((store) => store.cart)

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollToLocation({
        itemIndex: 0,
        sectionIndex: activeIndex,
      })
    }
  }, [activeIndex])

  const sections: SectionType[] = categories.map((category: string) => ({
    title: category,
    data: products
      .filter((item: Product): boolean => item.category === category)
      .sort((a: Product, b: Product): number => {
        const itemA = a.name
        const itemB = b.name

        let comparison = 0
        if (itemA > itemB) {
          comparison = 1
        } else if (itemA < itemB) {
          comparison = -1
        }
        return comparison
      }),
    renderItem,
  }))

  return (
    <SectionList
      ref={sectionRef}
      style={styles.container}
      sections={sections}
      extraData={products}
      keyExtractor={keyExtractor}
      renderSectionHeader={sectionHeader}
      stickySectionHeadersEnabled={false}
      scrollEventThrottle={16}
      initialNumToRender={100}
      initialScrollIndex={activeIndex}
      getItemLayout={(
        _data: SectionListData<Product, DefaultSectionT>[] | null,
        index: number,
      ): ItemLayoutType => {
        return {
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index + ITEM_PADDING,
          index,
        }
      }}
      ListFooterComponent={cart.length ? <View style={styles.footer} /> : null}
    />
  )
}

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$white',
  },
  sectionHeaderContainer: {
    borderBottomWidth: '$s1',
    borderBottomColor: '$mercury',
    paddingLeft: '$s20',
    backgroundColor: '$white',
  },
  sectionHeaderText: {
    fontSize: '$s20',
    color: '$mineShaft',
    fontFamily: '$bold',
    paddingTop: '$s12',
    paddingBottom: '$s12',
  },
  footer: {
    height: FOOTER_PADDING,
  },
})

export default Products
