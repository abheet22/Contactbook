define({ "api": [
  {
    "description": "<p>Get contacts details present in the system This API could be used to get contact details present in the system. If name or email_address filter is given, it outputs all the relevant records that matches those filters.</p>",
    "type": "get",
    "url": "/api/v1/contactbook/get-contacts/?name=ramesh1&page=1",
    "title": "GET Contact Details",
    "version": "1.0.0",
    "name": "GET_Contact_Details",
    "group": "Contacts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization:",
            "description": "<p>Basic Creds</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language to accept</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>To retrieve contacts which matches the given name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email_address",
            "description": "<p>To retrieve contacts which matches the given email_address</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>To fetch specific page data.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"response\": {\n        \"message\": \"Contact information successfully retrieved\",\n        \"payload\": [\n            {\n                \"email_address\": \"abheet881.gupta@gmail.com\",\n                \"phone_details\": [\n                    {\n                        \"type\": \"other\",\n                        \"id\": \"e387f925-98dd-48ff-a40c-65e88cc1a89d\",\n                        \"created_ts\": \"2021-03-03 15:36:39\",\n                        \"update_ts\": \"2021-03-03 15:36:39\",\n                        \"number\": \"9876543212\"\n                    }\n                ],\n                \"id\": \"05e845aa-bd16-4db9-a8ef-acee78f596c4\",\n                \"created_ts\": \"2021-03-03 15:36:39\",\n                \"update_ts\": \"2021-03-03 15:36:39\",\n                \"name\": \"abheetg\"\n            },\n            {\n                \"email_address\": \"abheet88.gupta@gmail.com\",\n                \"phone_details\": [\n                    {\n                        \"type\": \"other\",\n                        \"id\": \"cb779a78-f8de-4240-b255-ad8128161a73\",\n                        \"created_ts\": \"2021-03-03 15:12:39\",\n                        \"update_ts\": \"2021-03-03 15:12:39\",\n                        \"number\": \"9876543212\"\n                    }\n                ],\n                \"id\": \"123d481b-d57f-4088-a985-dc23d5eac4bb\",\n                \"created_ts\": \"2021-03-03 15:12:39\",\n                \"update_ts\": \"2021-03-03 15:12:39\",\n                \"name\": \"abheetg\"\n            },\n            {\n                \"email_address\": \"abheet1211.gupta@gmail.com\",\n                \"phone_details\": [\n                    {\n                        \"type\": \"mobile\",\n                        \"id\": \"f967a846-ae13-447a-8e4d-d8fd3cb6b8a7\",\n                        \"created_ts\": \"2021-03-03 11:52:08\",\n                        \"update_ts\": \"2021-03-03 11:52:08\",\n                        \"number\": \"7876543212\"\n                    },\n                    {\n                        \"type\": \"mobile\",\n                        \"id\": \"fbdbc3ce-1e1b-43d1-851e-dcdfa7ec34b7\",\n                        \"created_ts\": \"2021-03-03 11:51:39\",\n                        \"update_ts\": \"2021-03-03 11:52:08\",\n                        \"number\": \"7876543212\"\n                    }\n                ],\n                \"id\": \"3ed5c809-b956-405e-a111-ff9b55369704\",\n                \"created_ts\": \"2021-03-03 08:02:13\",\n                \"update_ts\": \"2021-03-03 11:52:08\",\n                \"name\": \"ramesh1\"\n            },\n            {\n                \"email_address\": \"abheet8811.gupta@gmail.com\",\n                \"phone_details\": [\n                    {\n                        \"type\": \"other\",\n                        \"id\": \"135b3df5-95f0-4a3d-921b-c611f71e7b05\",\n                        \"created_ts\": \"2021-03-03 15:36:51\",\n                        \"update_ts\": \"2021-03-03 15:36:51\",\n                        \"number\": \"9876543212\"\n                    },\n                    {\n                        \"type\": \"other\",\n                        \"id\": \"afff921d-9720-4d78-a68a-21e81af31475\",\n                        \"created_ts\": \"2021-03-03 15:36:51\",\n                        \"update_ts\": \"2021-03-03 15:36:51\",\n                        \"number\": \"9876543212\"\n                    }\n                ],\n                \"id\": \"764f79c2-a530-4950-b958-5d5556b4e555\",\n                \"created_ts\": \"2021-03-03 15:36:51\",\n                \"update_ts\": \"2021-03-03 15:36:51\",\n                \"name\": \"abheetg\"\n            },\n            {\n                \"email_address\": \"abheet121.gupta@gmail.com\",\n                \"phone_details\": [\n                    {\n                        \"type\": \"other\",\n                        \"id\": \"1285408b-f695-422c-a754-455456a9f434\",\n                        \"created_ts\": \"2021-03-03 08:01:46\",\n                        \"update_ts\": \"2021-03-03 08:01:46\",\n                        \"number\": \"9876543212\"\n                    }\n                ],\n                \"id\": \"7ea16213-dedc-434d-9c0f-b91ec1169de2\",\n                \"created_ts\": \"2021-03-03 08:01:46\",\n                \"update_ts\": \"2021-03-03 08:01:46\",\n                \"name\": \"abheet\"\n            },\n            {\n                \"email_address\": \"abheet12.gupta@gmail.com\",\n                \"phone_details\": [\n                    {\n                        \"type\": \"mobile\",\n                        \"id\": \"6ebb2abf-b3e3-411f-8dde-27c7eb13d9f7\",\n                        \"created_ts\": \"2021-03-03 08:00:03\",\n                        \"update_ts\": \"2021-03-03 08:00:03\",\n                        \"number\": \"9876543212\"\n                    }\n                ],\n                \"id\": \"9224f7de-ad86-4d5b-a2fa-4e3656c5ae10\",\n                \"created_ts\": \"2021-03-03 07:59:54\",\n                \"update_ts\": \"2021-03-03 07:59:54\",\n                \"name\": \"abheet\"\n            }\n        ],\n        \"status_code\": 200\n    },\n    \"meta\": {\n        \"base\": \"http://127.0.0.1:8000\",\n        \"next\": null,\n        \"count\": 6\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: get device with invalid name or email_address",
          "content": "        HTTP/1.1 200 OK\n        {\n    \"response\": {\n        \"message\": \"Contact information successfully retrieved\",\n        \"payload\": [],\n        \"status_code\": 200\n    },\n    \"meta\": {\n        \"base\": \"http://127.0.0.1:8000\",\n        \"next\": null,\n        \"count\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "contacts/api/contacts.py",
    "groupTitle": "Contacts"
  }
] });
