import mysql.connector
from api.services.base_service import BaseService


class UserService(BaseService):
    connector = None

    def __init__(self):
        super().__init__()
        self.connector = mysql.connector.connect(
            host='parlai.cemkwtbxqpqj.eu-west-2.rds.amazonaws.com',
            user='root',
            passwd='rcbzY%vL#AXuf&4%1h^d',
            database='parlai'
        )

    def get_all_users(self):
        cursor = self.connector.cursor(buffered=True)

        select_script = "SELECT * FROM users"

        cursor.execute(select_script)
        data = cursor.fetchall()
        json_data = self.to_json_multiple(cursor, data)

        return json_data

    def get_user_by_id(self, userid):
        cursor = self.connector.cursor(buffered=True)
        select_script = "SELECT * FROM users WHERE id = %s"

        cursor.execute(select_script, (userid,))
        data = cursor.fetchone()
        json_data = self.to_json_single(cursor, data)

        return json_data
