# Recipilia

An Recipe API for various recipe

## Rest API Specification

- Production: <https://recipilia.carvey-ch.com>
- Local: <https://localhost:3000>

| Endpoint        | HTTP     | Description                     |
| --------------- | -------- | ------------------------------- |
| `/recipes`      | `GET`    | Get all recipes                 |
| `/recipes/:id`  | `GET`    | Get specific recipe using id    |
| `/recipes`      | `POST`   | Add new recipe                  |
| `/recipes`      | `DELETE` | Delete all recipes              |
| `/recipes/:id`  | `DELETE` | Delete specific recipe using id |
| `/recipes/:id`  | `PUT`    | Update specific recipe using id |
| `/recipes/seed` | `POST`   | Seed many recipes               |

To install dependencies:
`sh bun install`

To run:
`sh bun run dev`
