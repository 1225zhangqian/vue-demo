const STORAGE_KEY = 'notebook'
export default {
  fetch () {
    return JSON.parse(window.localStorage.getItem(
            STORAGE_KEY) || '[]')
  },
  save (items) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  },
  remove (id) {
    var items = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
    items.splice(id, 1)
    // delete items[id - 1]
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }
}
