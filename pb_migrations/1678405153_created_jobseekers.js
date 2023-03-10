migrate((db) => {
  const collection = new Collection({
    "id": "kqi43ofvttzkzwc",
    "created": "2023-03-09 23:39:13.082Z",
    "updated": "2023-03-09 23:39:13.082Z",
    "name": "jobseekers",
    "type": "auth",
    "system": false,
    "schema": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kqi43ofvttzkzwc");

  return dao.deleteCollection(collection);
})
