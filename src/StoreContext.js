import React from "react"

const StoreContext = React.createContext(null)

//ИНКАПСУЛИРУЕМ, чтобы потом index.js проще было обращаться через Provider, а не через длинное название <StoreContext.Provider value={props.store}>

export const Provider = (props) => {
  return (
    <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContext