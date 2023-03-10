migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p7qm8lexko9t465")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ofa9omzy",
    "name": "userId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p7qm8lexko9t465")

  // remove
  collection.schema.removeField("ofa9omzy")

  return dao.saveCollection(collection)
})
