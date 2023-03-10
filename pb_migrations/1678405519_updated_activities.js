migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zrph7p4aliu972k")

  // remove
  collection.schema.removeField("qv2vg2aa")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zrph7p4aliu972k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qv2vg2aa",
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

  // remove
  collection.schema.removeField("h8mfxdiq")

  return dao.saveCollection(collection)
})
