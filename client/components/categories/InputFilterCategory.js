
const onCategoryChange = e => {
  const { name } = e.target
  if (e.target.checked) {
    setCategoriesSelected([...categoriesSelected, name])
  } else {
    const newArray = categoriesSelected.filter(category => {
      return category !== name
    })
    setCategoriesSelected(newArray)
  }
}
const InputFilterCategory = () => {
  return (
    <div className='input-wrapper'>
      <div className='switch'>
        <input
          onChange={onCategoryChange}
          name={`1.${i + 1}`}
          id={`switch-${i + 1}`}
          type='checkbox'
          className='switch-input'
        />
        <label htmlFor={`switch-${i + 1}`} className='switch-label'>
          {category}
        </label>
      </div>
      <div>{category}</div>
    </div>
  )
}

export default InputFilterCategory
