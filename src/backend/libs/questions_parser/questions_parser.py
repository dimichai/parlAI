import pandas as pd

if __name__ == "__main__":
    questions = pd.read_csv('./data/question_data.csv', delimiter=';')

    # Keep only the questions that reference the ministry of infrastructure
    ministry_questions = questions[questions['function'].str.lower().str.contains("infrastructuur en waterstaat")]

    # Clean special characters
    ministry_questions['keywords'] = ministry_questions['keywords'].str.replace(u'\xa0', u' ')

    # Clean the keywords
    cleaned_keywords = []
    for row in ministry_questions['keywords']:
        keywords_list = [kw.strip() for kw in str(row).split('#')]
        keywords_list = [kw for kw in keywords_list if kw]
        cleaned_keywords.append('#'.join(keywords_list))

    ministry_questions['keywords'] = cleaned_keywords

    # Save to new file
    ministry_questions.to_csv('./data/question_data_cleaned.csv', sep=';', index=False)

