import axios from 'axios'

export const filterByCategory = (array, numCategory) => {
  const filteredArray = array.filter(product => product.category === numCategory)
  return filteredArray
}

export const service = axios.create({
  baseURL: process.env.APP_API,
  withCredentials: true
})

export const onCategoryChange = (e, updateState, array) => {
  const { name } = e.target
  if (e.target.checked) {
    updateState([...array, name])
    console.log(array, 'array')
  } else {
    const newArray = array.filter(category => {
      return category !== name
    })
    console.log(newArray, 'newArray')
    updateState(newArray)
  }
}
