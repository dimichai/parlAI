from services.base_service import BaseService


class KeywordService(BaseService):
    def __init__(self):
        super().__init__()

    def get_keyword_by_name(self, name):
        cursor = self.connector.cursor(buffered=True)

        select_script = "SELECT * FROM keyword where name = %s"

        cursor.execute(select_script, (name,))
        data = cursor.fetchone()
        json_data = self.to_json_single(cursor, data)

        self.connector.commit()

        return json_data

    def get_keywords_by_question(self, keywords):
        cursor = self.connector.cursor(buffered=True)

        # The where clauses here make sure that no document will be returned for no keywords
        select_script = """
            select *
            from keyword
            where name like ' '
        """

        for kw in keywords.split('#'):
            select_script += "or name like '%{}%'".format(kw.strip())

        cursor.execute(select_script)
        data = cursor.fetchall()
        json_data = self.to_json_multiple(cursor, data)

        self.connector.commit()

        return json_data
