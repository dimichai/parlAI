from api.services.base_service import BaseService


class QuestionDocumentService(BaseService):
    def __init__(self):
        super().__init__()

    def get_question_document_by_userid(self, userid):
        cursor = self.connector.cursor(buffered=True)

        select_script = """
            select qD.title, qD.keywords from questionAssignment qa
            inner join questionDocument qD on qa.docId = qD.id
            where qa.userId = %s
        """

        cursor.execute(select_script, (userid,))
        data = cursor.fetchall()
        json_data = self.to_json_multiple(cursor, data)

        self.connector.commit()

        return json_data
