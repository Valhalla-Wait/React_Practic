export const required = value => {
  if(value) return undefined

  return 'Field is required'
}

export const maxLengthCreator = (maxLength) => (value) => { //Thunk
  if(value && value.length > maxLength) return `Max lengtn is ${maxLength}`

  return undefined
}
