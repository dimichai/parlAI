import mysql.connector


class UserService:
    connector = None

    def __init__(self):
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

        row_headers = [x[0] for x in cursor.description]
        data = cursor.fetchall()
        json_data = []
        for result in data:
            json_data.append(dict(zip(row_headers, result)))

        return json_data
