from flask import Flask, request, jsonify
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
import json
from typing import List, Dict

app: Flask = Flask(__name__)
api: Api = Api(app)
CORS(app)

todos: List[Dict] = [{
    "userId": 1,
    "id": 1,
    "title": "eating",
    "completed": False,
}
]

parser: reqparse.RequestParser = reqparse.RequestParser()
parser.add_argument('title')
parser.add_argument('completed')
parser.add_argument('id')


class TodoAPI(Resource):
    def get(self) -> List[Dict]:
        return todos

    def post(self) -> List[Dict]:
        args: reqparse.Namespace = parser.parse_args()
        try:
            current_max = int(max([todo["id"] for todo in todos]))
        except ValueError:
            current_max = 0
        id_key: int = current_max + 1
        todo: dict = {
            "userId": 1,
            "id": id_key,
            "title": args['title'],
            "completed": False if args['completed'] == 'False' else True,
        }
        todos.append(todo)
        return todos
    
    def delete(self) -> List[Dict]:
        args: reqparse.Namespace = parser.parse_args()
        id_key: int = int(args["id"])
        index_to_drop = ([todo["id"] for todo in todos].index(id_key))
        del todos[index_to_drop]
        return todos

api.add_resource(TodoAPI, '/')

if __name__ == '__main__':
    app.run(debug=True)
