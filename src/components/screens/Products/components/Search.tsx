import React, { useRef } from 'react'
import { TextInput, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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
        <Icon name={'magnify'} size={25} color={EStyleSheet.value('$laurel')} />
      </TouchableOpacity>
      <TextInput
        ref={inputRef}
        style={inputStyles}
        onChangeText={onChangeSearchInput}
        value={value}
        selectionColor={EStyleSheet.value('$laurel')}
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
            size={25}
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
    paddingVertical: '$s10',
    paddingHorizontal: '$s20',
    margin: '$s10',
    borderRadius: '$s8',
    backgroundColor: '$mercury',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBox: {
    flex: 1,
    marginHorizontal: '$s8',
    color: '$mineShaft',
    fontSize: '$s16',
    fontFamily: '$normal',
  },
  placeHolder: {
    fontSize: '$s14',
  },
  close: {
    flex: 1,
    justifyContent: 'flex-end',
  },
})

export default Search
