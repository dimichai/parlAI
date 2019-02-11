import mysql.connector


class BaseService:

    def __init__(self):
        self.connector = mysql.connector.connect(
            host='localhost',
            user='root',
            passwd='dspparlai',
            database='parlai'
        )

    def to_json_multiple(self, cursor, data):
        """

        :param data: data returned from fetch
        :type cursor: mysql cursor object
        """
        row_headers = [x[0] for x in cursor.description]
        json_data = []
        for result in data:
            json_data.append(dict(zip(row_headers, result)))

        return json_data

    def to_json_single(self, cursor, data):
        """

            :param data: data returned from fetch
            :type cursor: mysql cursor object
        """
        row_headers = [x[0] for x in cursor.description]
        json_data = dict(zip(row_headers, data))
        return json_data
