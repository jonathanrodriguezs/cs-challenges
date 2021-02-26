function recursiveObjectMapper(object, path, value) {
  const splittedPath = path.split('.')
  if (splittedPath.length === 1) return (object[path] = value)
  const [firstPath, ...restPath] = splittedPath
  object[firstPath] = { ...object[firstPath] }
  return recursiveObjectMapper(object[firstPath], restPath.join('.'), value)
}

// Converts a URL Query String into an object map
function convertQueryToMap(query) {
  if (query.length === 0) return {}
  const splitted = query.split('&')
  const objectMap = splitted.reduce((object, item) => {
    const [path, value] = item.split('=')
    recursiveObjectMapper(object, path, decodeURIComponent(value))
    return object
  }, {})
  return objectMap
}
