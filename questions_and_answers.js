const questionsAndAnswers = [
    {
        question: "How tall is the Eiffel Tower in ft?",
        answer: "1063 ft"
    },
    {
        question: "Which country has the most castles?",
        answer: "Wales"
    },
    {
        question: "Who is the all-time leading goalscorer for Barcelona?",
        answer: "Lionel Messi"
    },
    {
        question: "What year did Elvis die?",
        answer: "1977"
    },
    {
        question: "In which English city do the Blues and the Villans play football?",
        answer: "Birmingham"
    },
    {
        question: "The term 'GHG' refers to which type of gas?",
        answer: "Greenhouse gas"
    },
    {
        question: "Which British monarch was the final ruler in The House of Tudor?",
        answer: "Elizabeth I"
    },
    {
        question: "In a game of draughts how many pieces are on the board at the start of play?",
        answer: "24"
    },
    {
        question: "What does SD stand for in memory cards?",
        answer: "Secure Digital"
    },
    {
        question: "What did Clarence Birdseye invent in 1930?",
        answer: "Frozen food"
    },
    {
        question: "Which river is the longest — The Nile or the Amazon?",
        answer: "The Nile"
    },
    {
        question: "In the UK, which island might you be referring to by the initials IOW?",
        answer: "Isle of Wight"
    },
    {
        question: "Which is the larger lake – Lake Superior or Lake Michigan?",
        answer: "Lake Superior"
    },
    {
        question: "Actress Charlize Theron was born in which country?",
        answer: "South Africa"
    },
    {
        question: "In architecture, which ‘B’ is a German school of design founded by Walter Gropius in 1919?",
        answer: "Bauhaus"
    },
    {
        question: "Monarch Edward IV ruled which sport illegal in 1477?",
        answer: "Cricket"
    },
    {
        question: "Which New York museum is known by the initials MOMA?",
        answer: "Museum of Modern Art"
    },
    {
        question: "Which former Manchester United footballer wrote an autobiography entitled ‘Blessed’?",
        answer: "George Best"
    },
    {
        question: "Musician Shane MacGowan of Pogues fame was born in which country?",
        answer: "England"
    },
    {
        question: "Which British athlete won gold in both the 5000m and 10000m events at the 2016 Olympic Games?",
        answer: "Mo Farah"
    },
    {
        question: "At an airport, what does ATC stand for?",
        answer: "Air Traffic Control"
    },
    {
        question: "On your payslip, what do the initials PAYE stand for?",
        answer: "Pay As You Earn"
    },
    {
        question: "What did the Wright Brothers invent in 1903?",
        answer: "The aeroplane"
    },
    {
        question: "Which athlete won gold in both the Men’s 100m and 200m sprint events at the 2016 Olympic Games?",
        answer: "Usain Bolt"
    },
    {
        question: "Who played boxer Muhammed Ali in the 2001 biopic ‘Ali’?",
        answer: "Will Smith"
    },
    {
        question: "Chardonnay, Malaga and Merlot are all types of which fruit?",
        answer: "Grape"
    },
    {
        question: "Baku is the capital city of which country?",
        answer: "Azerbaijan"
    },
    {
        question: "Yerevan is the capital city of which country?",
        answer: "Armenia"
    },
    {
        question: "In a car, what does ABS stand for?",
        answer: "Anti-lock Breaking System"
    },
    {
        question: "The UK towns of Bootle and Birkenhead sit on which river?",
        answer: "Mersey"
    },
    {
        question: "Kevin Spacey plays Lester Burnham in which 1999 film?",
        answer: "American Beauty"
    },
    {
        question: "Jack Dorsey founded which social network in March 2006?",
        answer: "Twitter"
    },
    {
        question: "The Tan Hill Inn in Arkengarthdale, North Yorkshire holds which award?",
        answer: "Highest pub in Britain"
    },
    {
        question: "Tripoli is the capital city of which country?",
        answer: "Libya"
    },
    {
        question: "Actress Mila Kunis was born in which country?",
        answer: "Ukraine"
    },
    {
        question: "Astana is the capital city of which country?",
        answer: "Kazakhstan"
    },
    {
        question: "Americans call this vegetable an Eggplant, but what is it known as in the UK?",
        answer: "Aubergine"
    },
    {
        question: "True or false: Homer is named after creator Matt Groening's father?",
        answer: "True"
    },
    {
        question: "True or false: Japanese snooker tables have shorter legs than normal ones?",
        answer: "True"
    },
    {
        question: "True or false: Doughnuts originated in Holland?",
        answer: "True"
    },
    {
        question: "True or false: The first tea bags were made of silk?",
        answer: ""
    },
    {
        question: "True or false: Chai tea comes from Russia?",
        answer: "False"
    },
    {
        question: "True or false: The first international match of cricket was held between the United States of America and Canada?",
        answer: "True"
    },
    {
        question: "Which planet spins fastest, Earth or Jupiter?",
        answer: "Jupiter"
    },
    {
        question: "As of 2018, the five tallest buildings in the United States are all located in New York and which other city?",
        answer: "Chicago"
    },
    {
        question: "Which English striker scored six goals at the 2018 World Cup Finals?",
        answer: "Harry Kane"
    },
    {
        question: "Which US President declared: 'Ask not what your country can do for you; ask what you can do for your country'?",
        answer: "John Fitzgerald Kennedy"
    },
    {
        question: "Who American rock band composed the song 'Eye of the Tiger?'",
        answer: "Survivor"
    },
    {
        question: "The Pulitzer Prize is best associated with which profession?",
        answer: "Journalism"
    },
    {
        question: "Which is the eighth and further known planet from the sun in the solar system?",
        answer: "Neptune"
    },
    {
        question: "Coco, Cars and Inside Out are all films produced by which US animated film company?",
        answer: "Pixar"
    },
    {
        question: "Who did Queen Elizabeth II surpass as Britain's longest serving monarch in September 2015?",
        answer: "Queen Victoria"
    },
    {
        question: "Biffy Clyro were founded in which country?",
        answer: "Scotland"
    },
    {
        question: "Which American band had a 1997 UK number one single with 'Don't Speak'?",
        answer: "No Doubt"
    },
    {
        question: "Which US actor plays the title character in the movie franchise 'Deadpool'?",
        answer: "Ryan Reynolds"
    },
    {
        question: "What is commonly known as the national fruit of India?",
        answer: "Mango"
    },
    {
        question: "According to the popular English proverb, what colour cheese is the moon made out of?",
        answer: "Green"
    },
    {
        question: "Boris Grishenko is a fictional Russian James Bond villian in which movie from the franchise?",
        answer: "GoldenEye"
    },
    {
        question: "Linus Torvalds is best known for creating which open-source computer operating system?",
        answer: "Linux"
    },
    {
        question: "Ennio Morricone won a 2016 Academy Award for Best Original Score for which Tarantino western?",
        answer: "The Hateful Eight"
    },
    {
        question: "Which American group had a 2010 UK number one single with 'Fireflies'?",
        answer: "Owl City"
    },
    {
        question: "What does GDPR stand for?",
        answer: "General Data Protection Regulation"
    },
    {
        question: "LeBron James and Kobe Bryant are well known names in which sport?",
        answer: "Basketball"
    },
    {
        question: "Which 2001 animated film has the tagline: 'The greatest fairy tale never told'?",
        answer: "Shrek"
    },
    {
        question: "Which footballer topped the ESPN World Fame 100 for the third year in succession in May 2018?",
        answer: "Cristiano Ronaldo"
    },
    {
        question: "Which 1971 Stanley Kubrick film stars Malcolm McDowell as Alex and Patrick Magee as Mr. Alexander?",
        answer: "A Clockwork Orange"
    },
    {
        question: "Bakewell tarts are closely associated with a town in which British county?",
        answer: "Derbyshire"
    },
    {
        question: "Which 'C' is the tenth astrological sign of the zodiac?",
        answer: "Capricorn"
    },
    {
        question: "Betsy Ross is widely credited with making the first what in 1876?",
        answer: "American flag"
    },
    {
        question: "Which English football club used to play their home games at Highfield Road?",
        answer: "Coventry City"
    },
    {
        question: "Which football team were known as the 'Biscuitmen' up until the 1980's?",
        answer: "Reading"
    },
    {
        question: "At Hogwarts, what is used to assign pupils to their houses?",
        answer: "Magical sorting hats"
    },
    {
        question: "Which country had the Escudo as it's currency before the Euro?",
        answer: "Portugal"
    },
    {
        question: "Film and television actor Michael J Fox was born in which country?",
        answer: "Canada"
    },
    {
        question: "Currer Bell, Ellis Bell and Acton Bell were the pen names of which three sisters?",
        answer: "Bronte Sisters"
    },
    {
        question: "Which British supermarket chain was originally founded by Jack Cohen in 1919?",
        answer: "Tesco"
    },
    {
        question: "On which UK island would you find Holyhead, Beaumaris and the Menai Bridge?",
        answer: "Anglesey"
    },
    {
        question: "What is the biggest selling music album of all time?",
        answer: "Thriller"
    },
    {
        question: "According to the FBI, which day of the week is most popular for bank robberies?",
        answer: "Friday"
    },
    {
        question: "True or false: Footballers Mark Viduka and Luca Modric are cousins?",
        answer: "True"
    },
    {
        question: "Which historic agreement was sealed in Runnymede, Windsor in June 1215?",
        answer: "Magna Carta"
    },
    {
        question: "Holly Johnson and Paul Rutherford fronted which 1980s pop group?",
        answer: "Frankie Goes to Hollywood"
    },
    {
        question: "What is the name of the style of bed which feature a raisable mattress to expose storage space beneath?",
        answer: "Ottoman"
    },
    {
        question: "Abuja is the capital of which country?",
        answer: "Nigeria"
    },
    {
        question: "Peter Jackson, director of Lord of the Rings and The Hobbit trilogies, was born in which country?",
        answer: "New Zealand"
    },
    {
        question: "For which group was 'Rumours' their best selling album?",
        answer: "Fleetwood Mac"
    },
    {
        question: "Which British pop star had a 2015 hit with 'Hold My Hand'?",
        answer: "Jesse Glynne"
    },
    {
        question: "Jack & Meg White make up which musical duo?",
        answer: "The White Stripes"
    },
    {
        question: "Aneto is the highest point in which European mountain range?",
        answer: "Pyranees"
    },
    {
        question: "Peter the Great ruled which country between 1682 and 1725?",
        answer: "Russia"
    },
    {
        question: "Which American TV series starring Elisabeth Moss based on a 1985 novel by Margaret Atwood won a Golden Globe in 2017?",
        answer: "The Handmaid's Tale"
    },
    {
        question: "Will & Grace actor Eric McCormack was originally cast as which Friends character?",
        answer: "Ross Geller"
    },
    {
        question: "Which British TV presenter was known for his 'Cheap as chips' catchphrase?",
        answer: "David Dickinson"
    },
    {
        question: "Can you name Europe's highest volcano?",
        answer: "Mount Etna"
    },
    {
        question: "Which American pop star has the birth name Kathryn Hudson?",
        answer: "Katy Perry"
    },
    {
        question: "William Cullen of the University of Glasgow first demonstrated the effectiveness of an early version of which common kitchen appliance in 1748?",
        answer: "Fridge"
    },
    {
        question: "Caracas is the capital city of which country?",
        answer: "Venezuela"
    },
    {
        question: "Grand Central Terminal is in which city?",
        answer: "New York City"
    },
    {
        question: "Director Damien Chazelle and actress Emma Stone both won Oscars in 2017 for which film?",
        answer: "La La Land"
    },
    {
        question: "In the drinks industry, what do the letters ABV describe?",
        answer: "Alcohol By Volume"
    },
    {
        question: "Which Welsh football team used to play their home games at Ninian Park?",
        answer: "Cardiff City"
    },
    {
        question: "In which city was the world's first steam passenger railway opened?",
        answer: "Manchester"
    },
    {
        question: "Which US rapper had a June 2010 UK number one single with 'Not Afraid'?",
        answer: "Eminem"
    },
    {
        question: "Which football team plays their home games at Bramall Lane?",
        answer: "Sheffield United"
    },
    {
        question: "In Spain, what is a 'pastel'?",
        answer: "A small cake / desert"
    },
    {
        question: "Between 2000 and 2010, which country won the most Rugby Six Nations Championships?",
        answer: "France"
    },
    {
        question: "Which public body was the UK's largest employer in 2017?",
        answer: "NHS (England)"
    },
    {
        question: "Which Canadian rapper topped the UK singles charts in February 2018 with 'God's Plan'?",
        answer: "Drake"
    },
    {
        question: "The origins of which type of fast food take aways can be traced to Mossley in Greater Manchester in 1860?",
        answer: "Fish & Chips"
    },
    {
        question: "The city of Detroit is known by which nickname?",
        answer: "Motor City"
    },
    {
        question: "Which city's airport is named after George Best?",
        answer: "Belfast"
    },
    {
        question: "Which two colours form the flag of Albania?",
        answer: "Red & Black"
    },
    {
        question: "Who played Mark Watney in the 2015 Ridley Scott film The Martian?",
        answer: "Matt Damon"
    },
    {
        question: "How many players are there on a netball team?",
        answer: "7"
    },
    {
        question: "Fionn Whitehead plays Tommy in which 2017 Christopher Nolan film?",
        answer: "Dunkirk"
    },
    {
        question: "Which English DJ had chart success with The Rockafeller Skank in 1998?",
        answer: "Fatboy Slim"
    },
    {
        question: "Sacramento is the state capital of which state in the USA?",
        answer: "California"
    },
    {
        question: "Zealand is the largest island of which country?",
        answer: "Denmark"
    },
    {
        question: "SpaceX is an aerospace manufacturer founded by which entrepreneur?",
        answer: " Elon Musk"
    },
    {
        question: "Which Austrian went on to become Governor of California?",
        answer: "Arnold Schwarzenegger"
    },
    {
        question: "Which 'ology' is the study of animals?",
        answer: "Zoology"
    },
    {
        question: "Doncaster Sheffield Airport was previously named after which character?",
        answer: "Robin Hood"
    },
    {
        question: "What are the names of the 5 original members of One Direction",
        answer: "Niall Horan, Liam Payne, Harry Styles, Louis Tomlinson, Zayn Malik "
    },
    {
        question: "Who was responsible for killing Harry Potters parents?",
        answer: " Lord Voldemort"
    },
    {
        question: "Switzerland has how many official languages?",
        answer: "4"
    },
    {
        question: "Mozart was born in which country?",
        answer: "Austria"
    },
    {
        question: "Samarkand is on which famous route?",
        answer: "Silk Road"
    },
    {
        question: "Britain's largest National Park is in which country?",
        answer: "Scotland"
    },
    {
        question: "Which river discharges the greatest volume of water in the world?",
        answer: "Amazon"
    },
    {
        question: "The airport at Skopje, Macedonia is named after which ancient king?",
        answer: "Alexander the Great"
    },
    {
        question: "Which US President appeared at Wrestlemania 23?",
        answer: "Donald Trump"
    },
    {
        question: "Which well-known American actor played Mr Wormwood in the 1996 film Matilda?",
        answer: "Danny DeVito"
    },
    {
        question: "What was the name of Roy Cropper's cafe in Coronation Street?",
        answer: "Roy's Rolls"
    },
    {
        question: "'Wall of Glass' was the first single taken from the debut solo album of which British front man?",
        answer: "Liam Gallagher"
    },
    {
        question: "Who was 'All About That Bass' in 2014?",
        answer: "Meghan Trainor"
    },
    {
        question: "Which English TV presenter and mathematician has presented the Channel 4 quiz show Countdown since 2009?",
        answer: "Rachel Riley"
    },
    {
        question: "Which British Prime Minister was known as 'Big Jim'?",
        answer: "James Callaghan"
    },
    {
        question: "Which 'V' was a video service where users could share six second long video clips?",
        answer: "Vine"
    },
    {
        question: "David John Moore Cornwell is the real name of which 20th century British author?",
        answer: "John Le Carre"
    },
    {
        question: "Patna, Allahabad and Kolkata are cities on which great river?",
        answer: "Gagnes"
    },
    {
        question: "Sodium bicarbonate is often better known as what?",
        answer: "Baking Soda"
    },
    {
        question: "Which castle, used to hold prisoners of war in WWII, is situated in a town near Leipzig?",
        answer: "Colditz"
    },
    {
        question: "Which 'Pass' connects Afghanistan and Pakistan",
        answer: "Khyber Pass"
    },
    {
        question: "In what year was Justin Bieber born?",
        answer: "1994"
    },
    {
        question: "Arriana Huffington, who started the news platform 'The Huffington Post' was born in which mediteranean country?",
        answer: "Greece"
    },
    {
        question: "What is a traditional gift for a couple celebrating a 15 year marriage anniversary?",
        answer: "Crystal"
    },
    {
        question: "Carbon Dioxide in a solid form is known as what?",
        answer: "Dry Ice"
    },
    {
        question: "In what month is Australian Day celebrated?",
        answer: "January"
    },
    {
        question: "As of 2017, which has the highest population London or Hong Kong?",
        answer: "London"
    },
    {
        question: "Which city, on the Miljacka River, was the location of events said to have sparked World War 1?",
        answer: "Sarajevo"
    },
    {
        question: "Who directed the film in which Jonny Depp played Edward Scissorhands?",
        answer: "Tim Burton"
    },
    {
        question: "From which European country did the United States acquire the Louisiana territory in 1803?",
        answer: "France"
    },
    {
        question: "In which year was the first generation iPhone released?",
        answer: "2007"
    },
    {
        question: "Which former British Prime Minister was born in Edinburgh in 1953?",
        answer: "Tony Blair"
    },
    {
        question: "The Scottish city of Glasgow is situated on which river?",
        answer: " Clyde"
    },
    {
        question: "Real Madrid beat which Italian club 4-1 in final of the 2017 UEFA Champions League?",
        answer: "Juventus"
    },
    {
        question: "Reed Hastings and Marc Randolph founded which streaming and video on-demand company in Scotts Valley, California in August 1997?",
        answer: "Netflix"
    },
    {
        question: "'Strange Case of Dr Jekyll and Mr Hyde' is set in which city?",
        answer: "London"
    },
    {
        question: "Diana Prince is the civilian identity of which DC Comics superhero?",
        answer: "Wonder Woman"
    },
    {
        question: "What colour is the 'L' in the Google logo?",
        answer: "Green"
    },
    {
        question: "Who replaced Sir Alex Ferguson as manager of Manchester United?",
        answer: "David Moyes"
    },
    {
        question: "Which now-deceased world leader was born in Cape Province, South Africa in 1918?",
        answer: "Nelson Mandela"
    },
    {
        question: "Which British Tudor monarch reigned from 1491 to 1547?",
        answer: "Henry VIII"
    },
    {
        question: "Which British actor played Scrooge in the 1992 film 'The Muppets Christmas Carol'?",
        answer: "Michael Caine"
    },
    {
        question: "Which politician served as leader of the British Labour Party between 2010 and 2015?",
        answer: "Ed Miliband"
    },
    {
        question: "Originally conceived by a Sheffield theatre owner, the Youdan Cup is the oldest trophy still being contested in which sport?",
        answer: "Football"
    },
    {
        question: "Which English county borders South Yorkshire to the north-west, Lincolnshire to the east, Leicestershire to the south and Derbyshire to the east?",
        answer: "Nottinghamshire"
    },
    {
        question: "What was the second film in the Pirates of the Caribbean series?",
        answer: "Pirates of the Caribbean: Dead Man's Chest"
    },
    {
        question: "The two largest cities in the world are in China, but which is the largest?",
        answer: "Shanghai"
    },
    {
        question: "In which country is the world's highest waterfall?",
        answer: "Venezuela"
    },
    {
        question: "Kurt Cobain, Jimi Hendrix, Jim Morrison and Amy Winehouse all died at the same age. How old were they?",
        answer: "27"
    },
    {
        question: "What is the official currency of Turkey?",
        answer: "Turkish Lira"
    },
    {
        question: "Sergio Aguero became the leading 'non-European' goalscorer in the Premier League history in September 2017 with 124 goals. Who did he surpass?",
        answer: "Dwight Yorke"
    },
    {
        question: "Which video game classic features Gordon Freeman at the Black Mesa Research Facility?",
        answer: "Half-Life"
    },
    {
        question: "How many stars are on the flag of China?",
        answer: "5"
    },
    {
        question: "What was the second film in the Harry Potter series?",
        answer: "Harry Potter and the Chamber of Secrets"
    },
    {
        question: "Which crime drama was set around a New Jersey-based Italian American mobster starring James Gandolfini?",
        answer: "The Sopranos"
    },
    {
        question: "In 1938 the world speed record for a steam locomotive was set in England at a speed of 125.88 miles per hour, by which engine?",
        answer: "Mallard"
    },
    {
        question: "British Saddleback and Berkshire are breeds of which animal?",
        answer: "Pig"
    },
    {
        question: "True or false: Tim Berners Lee invented the Internet?",
        answer: "False - he invented the World Wide Web"
    },
    {
        question: "Which lake holds the largest volume of water in the UK?",
        answer: "Loch Ness"
    },
    {
        question: "Samuel Pepys is famous for his diary that he kept from 1660 to 1669. Why did he then stop?",
        answer: "He feared it was damaging his eyesight"
    },
    {
        question: "Melbourne is the capital of which Australian state?",
        answer: "Victoria"
    },
    {
        question: "How many children did Queen Victoria have?",
        answer: "9"
    },
    {
        question: "What was built as the entrance to the 1889 World's Fair?",
        answer: "Eiffel Tower"
    },
    {
        question: "Which country in 1966, launched the first space probe to orbit the moon?",
        answer: "Soviet Union"
    },
    {
        question: "Henry IV was the first king of which royal house?",
        answer: "Lancaster"
    },
    {
        question: "The World Trade Organisation is headquartered in which European country?",
        answer: "Switzerland"
    },
    {
        question: "Ares was the Greek god of what?",
        answer: " War"
    },
    {
        question: "Which British socialite became 'Lady Glen Affric' following her May 2017 marriage?",
        answer: "Pippa Middleton"
    },
    {
        question: "Which celebrity couple married at Belvedere, Florence in Italy in 2014?",
        answer: "Kim Kardashian & Kanye West"
    },
    {
        question: "The Garonne flows through which 2 countries?",
        answer: "Spain and France"
    },
    {
        question: "The football manager Jose Mourinho was born in which country?",
        answer: "Portugal"
    },
    {
        question: "Brazil was previously a colony of which European country?",
        answer: "Portugal"
    },
    {
        question: "What is the technical name for the windpipe?",
        answer: "Trachea"
    },
    {
        question: "Tony Warren was the creator of which long running television series?",
        answer: "Coronation Street"
    },
    {
        question: "Munich is the capital of which German state?",
        answer: "Bavaria"
    },
    {
        question: "What was the Manhattan Project?",
        answer: " The development of the atomic bomb"
    },
    {
        question: "The Flag of Canada has an emblem of what on it?",
        answer: " A maple leaf"
    },
    {
        question: "Prince Philip, the Duke of Edinburgh, was born on which Greek island?",
        answer: "Corfu"
    },
    {
        question: "Which is the largest type of penguin?",
        answer: "Emperor Penguin"
    },
    {
        question: "Which actor played the role of Batman in the film The Dark Knight?",
        answer: "Christian Bale"
    },
    {
        question: "Which is the most successful major league baseball team in terms of most World Series won?",
        answer: "New York Yankees"
    },
    {
        question: "In which country did the Enchilada originate?",
        answer: "Mexico"
    },
    {
        question: "Which English king was known as 'Lionheart'?",
        answer: "Richard I"
    },
    {
        question: "Who lived in the house and estate of Chartwell until 1964?",
        answer: "Winston Churchill"
    },
    {
        question: "IBM is a multinational technology company, what do the initials IBM stand for?",
        answer: "International Business Machines"
    },
    {
        question: "Haweswater, in the Lake District, was built from 1929 to supply water to which city?",
        answer: "Manchester"
    },
    {
        question: "Which, at 2294 miles, is the longest river in Europe?",
        answer: "Volga"
    },
    {
        question: "The name Vodka is derived from the Russian word Voda, which means what in English?",
        answer: "Water"
    },
    {
        question: "Who did George W. Bush defeat in the 2000 U.S. Presidential Election?",
        answer: "Al Gore"
    },
    {
        question: "Which African country was known as Rhodesia between 1964 and 1979?",
        answer: "Zimbabwe"
    },
    {
        question: "The largest cathedral in the UK can be found in which city?",
        answer: "Liverpool"
    },
    {
        question: "In which year did British forces complete the evacuation of 338,000 troops from Dunkirk in France?",
        answer: "1940"
    },
    {
        question: "Which company first introduced the Tea Bag into Britain in 1953?",
        answer: "Tetley"
    },
    {
        question: "Which was the highest grossing film of the 2000s?",
        answer: "Avatar"
    },
    {
        question: "In which prison complex off the coast of South Africa was Nelson Mendela imprisoned?",
        answer: "Robben Island"
    },
    {
        question: "Which regularly scheduled train service first departed from Paris 1883?",
        answer: "The Orient Express"
    },
    {
        question: "In 1956 Tunisia gained independence from which country?",
        answer: "France"
    },
    {
        question: "What is the state capital of Arizona?",
        answer: "Phoenix"
    },
    {
        question: "In which religion is the cow considered to be sacred?",
        answer: " Hindu"
    },
    {
        question: "Which was the first European team to win the football World Cup?",
        answer: "Italy"
    },
    {
        question: "Which element has the Atomic number of 6?",
        answer: "Carbon"
    },
    {
        question: "Which park established in 1857 is one of the most filmed locations in the world?",
        answer: "Central Park, New York City"
    },
    {
        question: "What is the national mapping agency for Great Britain?",
        answer: "Ordnance Survey"
    },
    {
        question: "In what year was the United Nations formed?",
        answer: "1945"
    },
    {
        question: "Since 'Brexit' the acronym WTO has been much used in the UK, but what organisation does this represent?",
        answer: "World Trade Organization"
    },
    {
        question: "In which American TV drama did Idris Elba rise to fame as Russell 'Stringer' Bell?",
        answer: "The Wire"
    },
    {
        question: "Julian Assange sought refuge at which country's London embassy in June 2012?",
        answer: "Ecuador"
    },
    {
        question: "What do the initials RNLI represent?",
        answer: "Royal National Lifeboat Institution"
    },
    {
        question: "What is the Middle Eastern capital whose name means 'Abode of Islam' in Urdu.",
        answer: "Islamabad"
    },
    {
        question: "Which comedy was set on the remote backwater of Craggy Island?",
        answer: "Father Ted"
    },
    {
        question: "Ingrid Bergman, who starred in Casablanca, was born in which country?",
        answer: "Sweden"
    },
    {
        question: "How many distinct bones are in a human hand?",
        answer: "27"
    },
    {
        question: "Who is the All-Father of all the Nordic Gods?",
        answer: "Odin"
    },
    {
        question: "Playing in the NBA which team are known as the 'Heat'?",
        answer: "Miami"
    },
    {
        question: "John F. Kennedy International Airport services which city?",
        answer: " New York City"
    },
    {
        question: "Which South American country is bordered by Colombia to the north and Peru to the east and south?",
        answer: "Ecuador"
    },
    {
        question: "What is the occupation of Otto Man in the animated series The Simpsons?",
        answer: "School Bus Driver"
    },
    {
        question: "What colour is the lower half of the Welsh flag?",
        answer: "Green"
    },
    {
        question: "What is the name for a container, often made of papier-mache which is decorated, filled with sweets and then beaten with sticks to reveal its contents?",
        answer: "Pinata"
    },
    {
        question: "What is the nationality of the Formula One champion Sebastian Vettel?",
        answer: "German"
    },
    {
        question: "Which 'W' is the largest prison in the UK by capacity?",
        answer: "Wandsworth"
    },
    {
        question: "John Bonham played drums for which English rock band?",
        answer: "Led Zeppelin"
    },
    {
        question: "Which founder of the Mongol Empire was also known as 'Temujin'?",
        answer: "Genghis Khan"
    },
    {
        question: "Which 'E' is the most spoken constructed language in the world?",
        answer: "Esperanto"
    },
    {
        question: "If you took a walk along Venice Beach, in which city would you be?",
        answer: "Los Angeles"
    },
    {
        question: "David Beckham's son Cruz was born where?",
        answer: " Madrid, Spain"
    },
    {
        question: "As of 2016, which nation has been runner-up in the Football World Cup the most times without actually winning it?",
        answer: "Netherlands"
    },
    {
        question: "What does GPS stand for in GPS navigation devices?",
        answer: "Global Positioning System"
    },
    {
        question: "Kyle Reese is a fictional character from which film franchise?",
        answer: "Terminator"
    },
    {
        question: "Which Dutch painter painted the 'Prodigal Son in the Brothel' self-portrait?",
        answer: "Rembrandt"
    },
    {
        question: "Dufourspitze is the highest mountain in which European county?",
        answer: "Switzerland"
    },
    {
        question: "Nasser Hussain played international test cricket for which country?",
        answer: "England"
    },
    {
        question: "Which Europe's most southernly capital city?",
        answer: "Nicosia, Cyprus"
    },
    {
        question: "The film Grease was mostly filmed in which US state?",
        answer: "California"
    },
    {
        question: "Which Irish writer and clergyman wrote Gulliver's Travels?",
        answer: "Jonathan Swift"
    },
    {
        question: "What is the name of Paul McCartney's fashion designing daughter?",
        answer: "Stella"
    },
    {
        question: "Prior to the Euro, what was the name of the currency of Germany?",
        answer: "Deutsche Mark"
    },
    {
        question: "The zloty, meaning Golden, is the currency of which Eastern European country?",
        answer: "Poland"
    },
    {
        question: "The Koruna became the currency of which Eastern European in 1993?",
        answer: "Czech Republic"
    },
    {
        question: "Which US president has appeared on 25 cent quarters since 1932?",
        answer: "George Washington"
    },
    {
        question: "In the film Cars, who voices the character Lightning McQueen?",
        answer: "Owen Wilson"
    },
    {
        question: "The film Tangled is a retelling of which German fairytale?",
        answer: "Rapunzel"
    },
    {
        question: "Jamie Lee Curtis and Lyndsay Lohan swap characters in which 2003 film?",
        answer: "Freaky Friday"
    },
    {
        question: "In Toy Story, who provides the voice of Buzz Lightyear?",
        answer: "Tim Allen"
    },
    {
        question: "In the film Frozen, who played the voice of Anna?",
        answer: "Kristen Bell"
    },
    {
        question: "Where is the film Das Boot set?",
        answer: "On a submarine"
    },
    {
        question: "Who wrote the novel on which the film The Green Mile is based?",
        answer: "Stephen King"
    },
    {
        question: "Which film from 1994 stars Samuel L Jackson and had a tagline of 'You won't know the facts until you've seen the fiction'?",
        answer: "Pulp Fiction"
    },
    {
        question: "In Raiders of the Lost Ark, who plays the female lead character, Marion Ravenwood?",
        answer: "Karen Allen"
    },
    {
        question: "Which film starring Morgan Freeman had the tagline 'Fear can hold you prisoner. Hope can set you free'?",
        answer: "Shawshank Redemption"
    },
    {
        question: "Which 2005 film starring Anthony Hopkins is the story of New Zealander Burt Munro, who set the land speed world record at Utah's Bonneville Salt Flats in 1967?",
        answer: "The World's Fastest Indian"
    },
    {
        question: "What is the name of the 2015 film about a frontiersman on a fur trading expedition in the 1820s and his fight for survival after being mauled by a bear?",
        answer: "The Revenant"
    },
    {
        question: "Which film starring Chris Hemsworth and Daniel Brühl, charts the formula 1 rivalry of James Hunt and Niki Lauda?",
        answer: "Rush"
    },
    {
        question: "Which film from 1999 stars Edward Norton and Brad Pitt?",
        answer: "Fight Club"
    },
    {
        question: "Who resigned as British Prime Minister in april 1955 due to failing health?",
        answer: "Winston Churchill"
    },
    {
        question: "Longacre Square in Midtown Manhattan changed its name in 1904 to what?",
        answer: "Times Square"
    },
    {
        question: "German forces launched their third offensive of the Battle of Verdun during which war?",
        answer: "World War I"
    },
    {
        question: "In April 2003 US troops captured Baghdad, leading to the collapse of whose regime two days later?",
        answer: "Saddam Hussein"
    },
    {
        question: "8 Manchester United players and 15 other passengers were killed in February 1958 in an accident that became known as what?",
        answer: "Munich air disaster"
    },
    {
        question: "In 1587 which queen was executed for her part in the ‘Babington Plot’ to murder her cousin?",
        answer: "Mary, Queen of Scots"
    },
    {
        question: "Henry E Steinway who died in Feb 1871 was a German-American businessman who founded a company making what?",
        answer: "Pianos"
    },
    {
        question: "In 1918 Finland declared its independence from which country?",
        answer: "Russia"
    },
    {
        question: "The Burj Khalifa is in which country?",
        answer: "United Arab Emirates"
    },
    {
        question: "Rose Heilbron became the first female judge to sit where in 1972?",
        answer: "The Old Bailey"
    },
    {
        question: "Which iconic structure began its construction in California in January 1933?",
        answer: "Golden Gate Bridge"
    },
    {
        question: "The Battle of Marston Moor took place in 1644 during which war?",
        answer: "English Civil War"
    },
    {
        question: "Which artist, famous for painting scenes of life in the industrial districts of North West England, was born in 1887?",
        answer: "LS Lowry"
    },
    {
        question: "Which American magician and stuntman died of peritonitis on the halloween of 1926?",
        answer: "Harry Houdini"
    },
    {
        question: "In which Netflix drama does Henry Cavill play Geralt Of Rivia, a superhero monster hunter?",
        answer: "The Witcher"
    },
    {
        question: "Who was the  only Premier League manager in history to be born in Denmark?",
        answer: "Michael Laudrup"
    },
    {
        question: "Which Spanish coach took charge of Everton between June 2013 and May 2016?",
        answer: "Roberto Martinez"
    },
    {
        question: "The American adult animated sitcom South Park was created by which two writers?",
        answer: "Trey Parker and Matt Stone"
    },
    {
        question: "What comedy drama set on a council estate was created by Paul Abbott?",
        answer: "Shameless"
    },
    {
        question: "Which TV show starred the character DCI Jane Tennyson, with the last of the 7 series airing in 2006?",
        answer: "Prime Suspect"
    },
    {
        question: "In the series 'Breaking Bad' who played the main character Walter White?",
        answer: "Bryan Cranston"
    },
    {
        question: "Which TV comedy series follows the lives of employees at the fictional Sacred Heart teaching hospital?",
        answer: "Scrubs"
    },
    {
        question: "Which series from the 2000s featured the characters Sheldon and Leonard?",
        answer: "The Big Bang Theory"
    },
    {
        question: "Location, Location, Location has run from 2000, and has had which 2 hosts from the start?",
        answer: "Phil Spencer and Kirstie Allsop"
    },
    {
        question: "Which TV show set in the 1960s took place at an advertising agency on Madison Avenue?",
        answer: "Mad Men"
    }
];