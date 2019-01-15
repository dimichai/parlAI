# Needs the database to be setup in order to work
# For all the documents in the database, it parses the content and generates keywords.

from rake_nltk import Rake

# rake_object = Rake(language='dutch')
rake_object = Rake()
rake_object.extract_keywords_from_text('''
(CNN)Approve my deal or risk no Brexit at all, British Prime Minister Theresa May warned Monday as she made a final effort to shore up support ahead of Tuesday's crucial vote on her beleaguered withdrawal deal with the European Union.

In a speech to workers at a factory in Stoke-on-Trent, a part of the UK that voted heavily in favor of leaving the EU, May argued that Parliament is more likely to prevent Brexit than allowing it to leave without a deal.
She said if lawmakers voted down her deal, the likely outcome would be a "paralysis in parliament that risks there being no Brexit."
"The only deal on the table is the one MPs will vote on tomorrow night," May said. "You can take no deal off the table by voting for that deal. If no deal is as bad as you believe it is, it will be the height of recklessness to do anything else."
''')
# rake_object.extract_keywords_from_text("REACTIES De reistijdwinst die bereikt wordt door de verhoging van de maximumsnelheid is minimaal. Het traject bestaat uit enkele kilometers, waardoor de reistijd maximaal 1 minuut afneemt. In de rapporten die dit plan onderbouwen staat echter geen voorspelling van de toename van de gemiddelde snelheid. Blijkbaar is de verkorting van de daadwerkelijke reistijd geen beleidsdoel, maar gaat het erom dat de automobilist niet langer belemmerd mag worden door een in hun ogen te lage maximumsnelheid. Het gevoel van de automobilist is hierin dus belangrijker dan de gezondheid van de omwonenden. ANTWOORD Met de snelheidsverhoging naar 100 km/h neemt de reistijd af en wordt beter aangesloten bij de beleving van de automobilist. Op die manier komt het kabinet met deze verhoging van de maximumsnelheid tegemoet aan een maatschappelijke wens. Ook sluit een maximumsnelheid van 100 km/h aan op dezelfde maximumsnelheid die op het overgrote deel van de autosnelwegen rond Rotterdam geldt. Voorts wordt ook bij een maximumsnelheid van 100 km/h voldaan aan de grenswaarden voor luchtkwaliteit. Het voldoen aan de wettelijke eisen voor luchtkwaliteit en geluid is een effectieve wijze om de gezondheid van mensen te beschermen; effecten op de gezondheid worden hiermee in belangrijke mate voorkomen. De maximumsnelheid op de Nederlandse autosnelwegen is in het algemeen 100 km/h of 120 km/h en per 1 september a.s. 130 km/h. Bij uitzondering kan de maximumsnelheid op een autosnelwegtraject ook 80 km/h zijn. De zogenoemde 80 kilometerzones, waarvan de A13 Overschie er één van is, zijn een aantal jaren geleden ook als zodanig ingesteld. In haar brief aan de Tweede Kamer van 20 april 20011 oplossing van luchtkwaliteitknelpunten in stedelijke gebieden langs autosnelwegen ingrijpend, kostbaar en alleen op de lange termijn haalbaar zou zijn. De Minister heeft voorts aangegeven dat ook voor de korte termijn gezocht diende te worden naar mogelijke maatregelen om de luchtkwaliteit te verbeteren.")

keywords = rake_object.get_ranked_phrases()