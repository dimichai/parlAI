from api.services.base_service import BaseService


class QuestionService(BaseService):
    def __init__(self):
        super().__init__()

    def get_questions_by_userid(self, userid):
        cursor = self.connector.cursor(buffered=True)

        select_script = "" \
                        "select q.* from questionAssignment qa " \
                        "inner join questionDocument qD on qa.docId = qD.id " \
                        "inner join question q on qD.id = q.docId " \
                        "where qa.userId = %s"

        cursor.execute(select_script, (userid,))
        data = cursor.fetchall()
        json_data = self.to_json_multiple(cursor, data)

        self.connector.commit()

        return json_data

    def get_questions_by_doc_id(self, docid):
        cursor = self.connector.cursor(buffered=True)

        select_script = "select * from question where docId = %s"

        cursor.execute(select_script, (docid,))
        data = cursor.fetchall()
        json_data = self.to_json_multiple(cursor, data)

        self.connector.commit()

        return json_data
