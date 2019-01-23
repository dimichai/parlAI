from services.base_service import BaseService


class QuestionAssignmentService(BaseService):
    def __init__(self):
        super().__init__()

    def get_assignments_by_user(self, userid):
        cursor = self.connector.cursor(buffered=True)

        select_script = "SELECT * FROM questionAssignment where userId = %s"

        cursor.execute(select_script, (userid,))
        data = cursor.fetchall()
        json_data = self.to_json_multiple(cursor, data)

        self.connector.commit()

        return json_data
