migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jrt9n504ae8kk05")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5xmbbdu5",
    "name": "userId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "kqi43ofvttzkzwc",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jrt9n504ae8kk05")

  // remove
  collection.schema.removeField("5xmbbdu5")

  return dao.saveCollection(collection)
})
