migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zrph7p4aliu972k")

  collection.listRule = "@request.auth.id != \"\""
  collection.viewRule = ""
  collection.createRule = ""
  collection.updateRule = "@request.auth.id != \"\""
  collection.deleteRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zrph7p4aliu972k")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
