migrate((db) => {
  const collection = new Collection({
    "id": "jrt9n504ae8kk05",
    "created": "2023-03-09 23:13:48.369Z",
    "updated": "2023-03-09 23:13:48.369Z",
    "name": "contacts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9xqxr1sm",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 2,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "p1ayojnp",
        "name": "company",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 2,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "9l60unxs",
        "name": "email",
        "type": "email",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "t7y3xy3i",
        "name": "phone",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 10,
          "max": 12,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ol3c3tia",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 2,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "rwqkszre",
        "name": "twitter",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "zntpimkz",
        "name": "github",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "ryup0ueq",
        "name": "linkedIn",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "ll2rjhir",
        "name": "location",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 2,
          "max": 60,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "do8ddcho",
        "name": "photo",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpeg",
            "application/pdf",
            "image/png"
          ],
          "thumbs": []
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jrt9n504ae8kk05");

  return dao.deleteCollection(collection);
})
