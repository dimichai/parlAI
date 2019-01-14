from lxml import etree
import csv

namespaces = {'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}

root = etree.parse('./document_dummy.xml').getroot()

Question_data = open('question_data.csv', 'w')

csvwriter = csv.writer(Question_data,dialect='excel',delimiter=';')
question_head = []

# create some switches for the different elements
title_next = 0
questions_next = 0
keyword_next = 0
function_next = 0

# create empty arrays to gather the contents of our elements
title_filler = []
questions_filler = []
keyword_filler = []
question = []
function_filler = []

# create a header and for the csv table and a counter
questions_header = []
count = 0

# create an array of numbers to tag seperate questions
number_array = list(range(2,100,1))

# convert the items in the range to strings
string_array = []
stringed = ""
for number in number_array:
    stringed = str(number)
    string_array.append(stringed)

# go through all elements with text in them (with <w:t> tag)
# and decide wether or not they should be saved in the csv
for e in root.findall('.//w:t', namespaces):
    # first create a header for the csv (when there is none)
    if count == 0:
        questions_header.extend(['Title','Funtion','Keywords','Questions'])
        csvwriter.writerow(questions_header)
        count = count + 1
    elif e.text == '':
        continue
    elif e.text == 'Antwoord':
        questions_next = 0
        questions_filler.append('</question>')
        questions_concat = ''.join(questions_filler)
        question.append(questions_concat)
        questions_filler = []
        print(questions_concat)
        csvwriter.writerow(question)
        question = []
    elif e.text == 'Tekst vraag':
        keyword_next = 0
        keyword_concat = ''.join(keyword_filler)
        question.append(keyword_concat)
        keyword_filler = []
        print(keyword_concat)
        questions_next = 1
    elif questions_next == 1:
        if e.text == '1':
            questions_filler.append('<question>')
            questions_field = e.text
            questions_filler.append(questions_field)
            questions_filler.append(' ')
        elif e.text in string_array:
            questions_filler.append('</question><question>')
            questions_field = e.text
            questions_filler.append(questions_field)
            questions_filler.append(' ')
        else:
            questions_field = e.text
            questions_filler.append(questions_field)
    elif e.text == 'Trefwoord':
        keyword_next = 1
    elif keyword_next == 1:
        keyword_field = e.text
        keyword_filler.append(keyword_field)
        keyword_filler.append('#')
    elif e.text == 'Trefwoord(en)':
        function_next = 0
        function_concat = ''.join(function_filler)
        question.append(function_concat)
        function_filler = []
        print(function_concat)
    elif e.text == 'Functie':
        function_next += 1
    elif function_next == 1:
        continue
    elif function_next == 2:
        function_field = e.text
        function_filler.append(function_field)
    elif e.text == 'Indiener':
        title_next = 0
        title_concat = ''.join(title_filler)
        question.append(title_concat)
        title_filler = []
        print(title_concat)
    elif e.text == 'Titel':
        title_next = 1
    elif title_next == 1:
        title = e.text
        title_filler.append(title)

Question_data.close()
