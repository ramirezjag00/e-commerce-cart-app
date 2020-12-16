import React, { useRef } from 'react'
import { TextInput, View, TouchableOpacity, Platform } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import rem from '@utils/remSizeCalculator'

interface Props {
  value: string
  onChangeSearchInput: (input: string) => void
}

const Search: React.FC<Props> = (props) => {
  const { value, onChangeSearchInput } = props
  const inputRef = useRef<TextInput>(null)
  const onFocus = (): void => inputRef?.current?.focus()
  const onClearForm = (): void => onChangeSearchInput('')
  const inputStyles = EStyleSheet.flatten([
    styles.searchBox,
    !value.length && styles.placeHolder,
  ])
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity onPress={onFocus}>
        <Icon
          name={'magnify'}
          size={EStyleSheet.value(rem(25))}
          color={EStyleSheet.value('$laurel')}
        />
      </TouchableOpacity>
      <TextInput
        ref={inputRef}
        style={inputStyles}
        onChangeText={onChangeSearchInput}
        value={value}
        selectionColor={EStyleSheet.value('$westar')}
        underlineColorAndroid="transparent"
        autoCorrect={false}
        returnKeyType="search"
        placeholder="Search product name, brand or category"
        placeholderTextColor={EStyleSheet.value('$boulder')}
        defaultValue={value}
      />
      {!!value.length && (
        <TouchableOpacity onPress={onClearForm} style={styles.close}>
          <Icon
            name={'close'}
            size={EStyleSheet.value(rem(25))}
            color={EStyleSheet.value('$boulder')}
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = EStyleSheet.create({
  searchContainer: {
    position: 'relative',
    ...Platform.select({
      ios: {
        paddingVertical: rem(10),
        paddingHorizontal: rem(20),
      },
      android: {
        paddingVertical: rem(5),
        paddingHorizontal: rem(20),
      },
    }),
    margin: rem(10),
    borderRadius: rem(8),
    backgroundColor: '$mercury',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBox: {
    flex: 1,
    marginHorizontal: rem(8),
    color: '$mineShaft',
    fontSize: rem(16),
    fontFamily: '$normal',
  },
  placeHolder: {
    fontSize: rem(14),
  },
  close: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
})

export default Search
