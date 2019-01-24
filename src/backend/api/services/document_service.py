from services.base_service import BaseService
from services.question_document_service import QuestionDocumentService


class DocumentService(BaseService):
    def __init__(self):
        super().__init__()
        self.questionDocumentService = QuestionDocumentService()

    def get_document_by_question(self, question_id, keywords):
        cursor = self.connector.cursor(buffered=True)

        # The where clauses here make sure that no document will be returned for no keywords
        select_script = """
            select id, title, frontenddate, type, canonical
            from document
            where title_keywords like ' ' or intro_keywords like ' '
        """

        for kw in keywords.split('#'):
            select_script += "or title_keywords like '%{}%' or intro_keywords like '%{}%' ".format(kw.strip(), kw.strip())

        select_script += "limit 10"

        cursor.execute(select_script)
        data = cursor.fetchall()
        json_data = self.to_json_multiple(cursor, data)

        self.connector.commit()

        return json_data
