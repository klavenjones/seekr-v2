migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zrph7p4aliu972k")

  // remove
  collection.schema.removeField("h8mfxdiq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5bznryvr",
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
  const collection = dao.findCollectionByNameOrId("zrph7p4aliu972k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h8mfxdiq",
    "name": "field",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("5bznryvr")

  return dao.saveCollection(collection)
})
