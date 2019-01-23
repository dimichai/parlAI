from _mysql_connector import MySQLInterfaceError
from typing import List, Any

import mysql.connector

if __name__ == '__main__':
    connector = mysql.connector.connect(
        host='parlai.cemkwtbxqpqj.eu-west-2.rds.amazonaws.com',
        user='root',
        passwd='rcbzY%vL#AXuf&4%1h^d',
        database='parlai'
    )

    cursor = connector.cursor(buffered=True)

    select_script = "select keywords from questionDocument"

    cursor.execute(select_script)
    data = cursor.fetchall()

    results = [item[0] for item in data]
    unique_keywords = []
    for result in results:
        keywords = result.split('#')
        [unique_keywords.append(kw) for kw in keywords if kw not in unique_keywords]

    for kw in unique_keywords:
        kw = kw.replace("'", "''")  # avoid syntax errors for apostrophes like weapon's
        cursor.execute("select COUNT(id) from questionDocument where keywords like '%{}%'".format(kw.strip()))
        count = cursor.fetchone()[0]

        query = "INSERT INTO keyword(name, docCount) VALUES (%s, %s)"
        cursor.execute(query, (kw, count))

    connector.commit()
    cursor.close()
