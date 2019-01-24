from services.base_service import BaseService


class UserService(BaseService):
    connector = None

    def __init__(self):
        super().__init__()

    def get_all_users(self):
        cursor = self.connector.cursor(buffered=True)

        select_script = "SELECT * FROM users"

        cursor.execute(select_script)
        data = cursor.fetchall()
        json_data = self.to_json_multiple(cursor, data)

        self.connector.commit()

        return json_data

    def get_user_by_id(self, userid):
        cursor = self.connector.cursor(buffered=True)
        select_script = "SELECT * FROM users WHERE id = %s"

        cursor.execute(select_script, (userid,))
        data = cursor.fetchone()
        json_data = self.to_json_single(cursor, data)

        self.connector.commit()

        return json_data

    def get_users_by_keywords(self, keywords):
        cursor = self.connector.cursor(buffered=True)

        select_script = """
                    select * from users
                    where spec_keywords like ' '
                """
        for kw in keywords:
            select_script += "or spec_keywords like '%{}%'".format(kw.strip())

        print(select_script)

        cursor.execute(select_script)
        data = cursor.fetchall()
        json_data = self.to_json_multiple(cursor, data)

        self.connector.commit()

        return json_data
