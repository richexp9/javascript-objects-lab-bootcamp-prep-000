var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  newObj = Object.assign(object, {key: value})
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.key = value
  return object
}

function deleteFromObjectByKey(object, key) {

}

function destructivelyDeleteFromObjectByKey(object, key) {

}
