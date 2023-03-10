migrate((db) => {
  const collection = new Collection({
    "id": "p7qm8lexko9t465",
    "created": "2023-03-09 22:54:58.354Z",
    "updated": "2023-03-09 22:54:58.354Z",
    "name": "jobs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4yzoclax",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 3,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "hrvlvuzg",
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
        "id": "qlmk4r8r",
        "name": "status",
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
        "id": "lne6jxth",
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
        "id": "xfpn7u1j",
        "name": "url",
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
        "id": "nxe8jdud",
        "name": "salary",
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
        "id": "qlth1kk8",
        "name": "deadline",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "1w9zlgqi",
        "name": "description",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "jmxusdad",
        "name": "note",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("p7qm8lexko9t465");

  return dao.deleteCollection(collection);
})
