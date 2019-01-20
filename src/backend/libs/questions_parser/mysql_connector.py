# Provides access to the database using mysql-connector.

import mysql.connector


class MySqlConnector:
    def __init__(self, databaseName):
        # todo: change password to get it from environmental variables.
        self.connector = mysql.connector.connect(
            host='localhost',
            user='root',
            passwd='dspparlai',
            database=databaseName
        )

    def insert_question_document(self, data):
        cursor = self.connector.cursor()

        insert_script = ("INSERT INTO questionDocument (title, answeredby, keywords, questionContent) "
                         "VALUES (%s, %s, %s, %s)")

        cursor.execute(insert_script, data)

        id = cursor.lastrowid

        self.connector.commit()
        cursor.close()

        return id

    def insert_question(self, data):
        cursor = self.connector.cursor()

        insert_script = ("INSERT INTO question (docId, content) "
                         "VALUES (%s, %s)")

        cursor.execute(insert_script, data)

        self.connector.commit()
        cursor.close()

    def get_all_questions_cursor(self):
        cursor = self.connector.cursor(buffered=True)
        select_script = ("SELECT * FROM question")

        cursor.execute(select_script)

        return cursor

    def get_all_question_documents_cursor(self):
        cursor = self.connector.cursor(buffered=True)
        select_script = ("SELECT * FROM questionDocument")

        cursor.execute(select_script)

        return cursor