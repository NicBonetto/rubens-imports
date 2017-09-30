function isActive(state, action) {
    switch(action.type) {
        case 'HOME_ACTIVE':
          return Object.assign({}, {home: true, inventory: false, about: false, directions: false})
        case 'INVENTORY_ACTIVE':
          return Object.assign({}, {home: false, inventory: true, about: false, directions: false})
        case 'ABOUT_ACTIVE': 
          return Object.assign({}, {home: false, inventory: false, about: true, directions: false})
        case 'DIRECTIONS_ACTIVE':
          return Object.assign({}, {home: false, inventory: false, about: false, directions: true})
        default: 
          return state
    }
}

export default isActive