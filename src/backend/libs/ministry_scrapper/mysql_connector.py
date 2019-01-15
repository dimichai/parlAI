# Provides access to the database using mysql-connector.

import mysql.connector

class MySqlConnector: 
    def __init__(self, databaseName):
        # todo: change password to get it from environmental variables.
        self.connector = mysql.connector.connect(
            host = 'localhost',
            user = 'root',
            passwd = 'dspparlai',
            database = databaseName
        )

    def insert_documentType(self, data):
        cursor = self.connector.cursor()
        insert_script = ("INSERT INTO documentType (informationtype, infoId, name, namesingular, lastmodified) "
                "VALUES (%s, %s, %s, %s, %s)")

        cursor.execute(insert_script, data)
        
        self.connector.commit()
        cursor.close()

    def get_documentType_by_name(self, name):
        cursor = self.connector.cursor(buffered=True)
        select_script = ("SELECT id FROM documentType WHERE informationtype = %s")

        cursor.execute(select_script, (name,))
        response = dict(zip(cursor.column_names, cursor.fetchone()))
        cursor.close()

        return response['id']

    def get_all_documents_cursor(self):
        cursor = self.connector.cursor(buffered=True)
        select_script = ("SELECT * FROM document")

        cursor.execute(select_script)

        return cursor

    def get_empty_fileurls_documents_cursor(self):
        cursor = self.connector.cursor(buffered=True)
        select_script = ("SELECT * FROM document WHERE fileurls IS NULL")

        cursor.execute(select_script)
        
        return cursor
    
    def update_document_set_file_url(self, data):
        cursor = self.connector.cursor()
        update_script = ("UPDATE document SET fileurls = %s WHERE id = %s")
        
        cursor.execute(update_script, data)
        self.connector.commit()
        cursor.close()

    def insert_document(self, data):
        cursor = self.connector.cursor()
        insert_script = ("INSERT INTO document "
            "(docid, type, typeId, canonical, dataurl, title, introduction, lastmodified, frontenddate) "
            "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)")

        cursor.execute(insert_script, data)

        self.connector.commit()
        cursor.close()
