import spacy


class EntityExtractor:
    def __init__(self):
        self.nlp = spacy.load('nl_core_news_sm')

    def extract_keywords(self, document):
        doc = self.nlp(document)

        entities = []
        for ent in doc.ents:
            if len(ent.text) > 1:
                entities.append({'text': ent.text, 'label': ent.label_})

        return entities
