from services.base_service import BaseService


class QuestionDocumentService(BaseService):
    def __init__(self):
        super().__init__()

    def get_question_document_by_userid(self, userid):
        cursor = self.connector.cursor(buffered=True)

        select_script = """
            select qD.id, qD.title, qD.keywords from questionAssignment qa
            inner join questionDocument qD on qa.docId = qD.id
            where qa.userId = %s
        """

        cursor.execute(select_script, (userid,))
        data = cursor.fetchall()
        json_data = self.to_json_multiple(cursor, data)

        self.connector.commit()

        return json_data

    def get_question_document_by_keyword(self, keyword):
        cursor = self.connector.cursor(buffered=True)

        select_script = """
            select id, title, keywords from questionDocument
            where keywords like '%{}%'
        """.format(keyword)

        cursor.execute(select_script)
        data = cursor.fetchall()
        json_data = self.to_json_multiple(cursor, data)

        self.connector.commit()

        return json_data
