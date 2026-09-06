const MOVIES = [
 {
  "rank": 1,
  "title": "Parasite",
  "ko": "기생충",
  "display": "기생충 (Parasite)",
  "year": 2019,
  "director": "Bong Joon Ho",
  "country": "South Korea",
  "countries": [
   "South Korea"
  ],
  "genres": [
   "Comedy-Drama",
   "Black Comedy",
   "Thriller"
  ]
 },
 {
  "rank": 2,
  "title": "Mulholland Drive",
  "ko": "멀홀랜드 드라이브",
  "display": "멀홀랜드 드라이브 (Mulholland Drive)",
  "year": 2001,
  "director": "David Lynch",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Mystery",
   "Thriller",
   "LGBTQ"
  ]
 },
 {
  "rank": 3,
  "title": "There Will Be Blood",
  "ko": "데어 윌 비 블러드",
  "display": "데어 윌 비 블러드 (There Will Be Blood)",
  "year": 2007,
  "director": "Paul Thomas Anderson",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Drama",
   "Epic",
   "War",
   "Western"
  ]
 },
 {
  "rank": 4,
  "title": "In the Mood for Love",
  "ko": "화양연화",
  "display": "화양연화 (In the Mood for Love)",
  "year": 2000,
  "director": "Wong Kar-wai",
  "country": "Hong Kong",
  "countries": [
   "Hong Kong",
   "France",
   "Thailand"
  ],
  "genres": [
   "Romance",
   "Drama"
  ]
 },
 {
  "rank": 5,
  "title": "Moonlight",
  "ko": "문라이트",
  "display": "문라이트 (Moonlight)",
  "year": 2016,
  "director": "Barry Jenkins",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Drama",
   "LGBTQ",
   "Coming-of-Age"
  ]
 },
 {
  "rank": 6,
  "title": "No Country for Old Men",
  "ko": "노인을 위한 나라는 없다",
  "display": "노인을 위한 나라는 없다 (No Country for Old Men)",
  "year": 2007,
  "director": "Ethan & Joel Coen",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Thriller",
   "Western",
   "Drama"
  ]
 },
 {
  "rank": 7,
  "title": "Eternal Sunshine of the Spotless Mind",
  "ko": "이터널 선샤인",
  "display": "이터널 선샤인 (Eternal Sunshine of the Spotless Mind)",
  "year": 2004,
  "director": "Michel Gondry",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Romantic Comedy",
   "Comedy-Drama",
   "Sci-Fi",
   "Drama"
  ]
 },
 {
  "rank": 8,
  "title": "Get Out",
  "ko": "겟 아웃",
  "display": "겟 아웃 (Get Out)",
  "year": 2017,
  "director": "Jordan Peele",
  "country": "United States",
  "countries": [
   "United States",
   "Japan"
  ],
  "genres": [
   "Horror",
   "Mystery",
   "Comedy",
   "Thriller"
  ]
 },
 {
  "rank": 9,
  "title": "Spirited Away",
  "ko": "센과 치히로의 행방불명",
  "display": "센과 치히로의 행방불명 (Spirited Away)",
  "year": 2001,
  "director": "Hayao Miyazaki",
  "country": "Japan",
  "countries": [
   "Japan"
  ],
  "genres": [
   "Fantasy",
   "Family",
   "Coming-of-Age"
  ]
 },
 {
  "rank": 10,
  "title": "The Social Network",
  "ko": "소셜 네트워크",
  "display": "소셜 네트워크 (The Social Network)",
  "year": 2010,
  "director": "David Fincher",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Biography",
   "Legal",
   "Drama"
  ]
 },
 {
  "rank": 11,
  "title": "Mad Max: Fury Road",
  "ko": "매드 맥스: 분노의 질주",
  "display": "매드 맥스: 분노의 질주 (Mad Max: Fury Road)",
  "year": 2015,
  "director": "George Miller",
  "country": "Australia",
  "countries": [
   "Australia",
   "United States"
  ],
  "genres": [
   "Action",
   "Adventure",
   "Sci-Fi"
  ]
 },
 {
  "rank": 12,
  "title": "The Zone of Interest",
  "ko": "존 오브 인터레스트",
  "display": "존 오브 인터레스트 (The Zone of Interest)",
  "year": 2023,
  "director": "Jonathan Glazer",
  "country": "United Kingdom",
  "countries": [
   "United Kingdom",
   "Poland",
   "United States"
  ],
  "genres": [
   "Drama",
   "War"
  ]
 },
 {
  "rank": 13,
  "title": "Children of Men",
  "ko": "칠드런 오브 맨",
  "display": "칠드런 오브 맨 (Children of Men)",
  "year": 2006,
  "director": "Alfonso Cuarón",
  "country": "United Kingdom",
  "countries": [
   "United Kingdom",
   "United States",
   "Japan"
  ],
  "genres": [
   "Sci-Fi",
   "Thriller"
  ]
 },
 {
  "rank": 14,
  "title": "Inglourious Basterds",
  "ko": "바스터즈: 거친 녀석들",
  "display": "바스터즈: 거친 녀석들 (Inglourious Basterds)",
  "year": 2009,
  "director": "Quentin Tarantino",
  "country": "Germany",
  "countries": [
   "Germany",
   "United States"
  ],
  "genres": [
   "War",
   "Sci-Fi",
   "Drama",
   "Adventure"
  ]
 },
 {
  "rank": 15,
  "title": "City of God",
  "ko": "시티 오브 갓",
  "display": "시티 오브 갓 (City of God)",
  "year": 2002,
  "director": "Fernando Meirelles",
  "country": "Brazil",
  "countries": [
   "Brazil",
   "France"
  ],
  "genres": [
   "Drama",
   "Crime",
   "Coming-of-Age"
  ]
 },
 {
  "rank": 16,
  "title": "Crouching Tiger, Hidden Dragon",
  "ko": "와호장룡",
  "display": "와호장룡 (Crouching Tiger, Hidden Dragon)",
  "year": 2000,
  "director": "Ang Lee",
  "country": "China",
  "countries": [
   "United States",
   "Taiwan",
   "Hong Kong",
   "People's Republic of China"
  ],
  "genres": [
   "Romance",
   "Fantasy",
   "Action"
  ]
 },
 {
  "rank": 17,
  "title": "Brokeback Mountain",
  "ko": "브로크백 마운틴",
  "display": "브로크백 마운틴 (Brokeback Mountain)",
  "year": 2005,
  "director": "Ang Lee",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Romance",
   "Drama",
   "LGBTQ"
  ]
 },
 {
  "rank": 18,
  "title": "Y Tu Mamá También",
  "ko": "이 투 마마",
  "display": "이 투 마마 (Y Tu Mamá También)",
  "year": 2001,
  "director": "Alfonso Cuarón",
  "country": "Mexico",
  "countries": [
   "Mexico"
  ],
  "genres": [
   "Drama",
   "Coming-of-Age",
   "Comedy",
   "LGBTQ"
  ]
 },
 {
  "rank": 19,
  "title": "Zodiac",
  "ko": "조디악",
  "display": "조디악 (Zodiac)",
  "year": 2007,
  "director": "David Fincher",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Thriller",
   "Drama",
   "Mystery"
  ]
 },
 {
  "rank": 20,
  "title": "The Wolf of Wall Street",
  "ko": "울프 오브 월 스트리트",
  "display": "울프 오브 월 스트리트 (The Wolf of Wall Street)",
  "year": 2013,
  "director": "Martin Scorsese",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Biography",
   "Black Comedy",
   "Drama",
   "Crime"
  ]
 },
 {
  "rank": 21,
  "title": "The Royal Tenenbaums",
  "ko": "로얄 테넌바움",
  "display": "로얄 테넌바움 (The Royal Tenenbaums)",
  "year": 2001,
  "director": "Wes Anderson",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Comedy",
   "Comedy-Drama"
  ]
 },
 {
  "rank": 22,
  "title": "The Grand Budapest Hotel",
  "ko": "그랜드 부다페스트 호텔",
  "display": "그랜드 부다페스트 호텔 (The Grand Budapest Hotel)",
  "year": 2014,
  "director": "Wes Anderson",
  "country": "United States",
  "countries": [
   "United States",
   "Germany"
  ],
  "genres": [
   "Comedy",
   "Drama",
   "Adventure",
   "Romance"
  ]
 },
 {
  "rank": 23,
  "title": "Boyhood",
  "ko": "보이후드",
  "display": "보이후드 (Boyhood)",
  "year": 2014,
  "director": "Richard Linklater",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Drama",
   "Coming-of-Age"
  ]
 },
 {
  "rank": 24,
  "title": "Her",
  "ko": "그녀",
  "display": "그녀 (Her)",
  "year": 2013,
  "director": "Spike Jonze",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Sci-Fi",
   "Romance",
   "Drama"
  ]
 },
 {
  "rank": 25,
  "title": "Phantom Thread",
  "ko": "팬텀 스레드",
  "display": "팬텀 스레드 (Phantom Thread)",
  "year": 2017,
  "director": "Paul Thomas Anderson",
  "country": "United States",
  "countries": [
   "United States",
   "United Kingdom"
  ],
  "genres": [
   "Drama",
   "Romance"
  ]
 },
 {
  "rank": 26,
  "title": "Anatomy of a Fall",
  "ko": "추락의 해부",
  "display": "추락의 해부 (Anatomy of a Fall)",
  "year": 2023,
  "director": "Justine Triet",
  "country": "France",
  "countries": [
   "France"
  ],
  "genres": [
   "Mystery",
   "Drama",
   "Legal"
  ]
 },
 {
  "rank": 27,
  "title": "Adaptation.",
  "ko": "어댑테이션",
  "display": "어댑테이션 (Adaptation.)",
  "year": 2002,
  "director": "Spike Jonze",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Comedy",
   "Drama"
  ]
 },
 {
  "rank": 28,
  "title": "The Dark Knight",
  "ko": "다크 나이트",
  "display": "다크 나이트 (The Dark Knight)",
  "year": 2008,
  "director": "Christopher Nolan",
  "country": "United States",
  "countries": [
   "United States",
   "United Kingdom"
  ],
  "genres": [
   "Action",
   "Neo-Noir",
   "Thriller",
   "Crime"
  ]
 },
 {
  "rank": 29,
  "title": "Arrival",
  "ko": "어라이벌",
  "display": "어라이벌 (Arrival)",
  "year": 2016,
  "director": "Denis Villeneuve",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Drama",
   "Sci-Fi",
   "Thriller",
   "Mystery"
  ]
 },
 {
  "rank": 30,
  "title": "Lost in Translation",
  "ko": "사랑도 통역이 되나요?",
  "display": "사랑도 통역이 되나요? (Lost in Translation)",
  "year": 2003,
  "director": "Sofia Coppola",
  "country": "United States",
  "countries": [
   "United States",
   "Japan"
  ],
  "genres": [
   "Romantic Comedy",
   "Independent",
   "Drama"
  ]
 },
 {
  "rank": 31,
  "title": "The Departed",
  "ko": "디파티드",
  "display": "디파티드 (The Departed)",
  "year": 2006,
  "director": "Martin Scorsese",
  "country": "United States",
  "countries": [
   "United States",
   "Hong Kong"
  ],
  "genres": [
   "Thriller",
   "Drama",
   "Crime"
  ]
 },
 {
  "rank": 32,
  "title": "Bridesmaids",
  "ko": "브라이즈메이즈",
  "display": "브라이즈메이즈 (Bridesmaids)",
  "year": 2011,
  "director": "Paul Feig",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Comedy",
   "Romantic Comedy"
  ]
 },
 {
  "rank": 33,
  "title": "A Separation",
  "ko": "씨민과 나데르의 별거",
  "display": "씨민과 나데르의 별거 (A Separation)",
  "year": 2011,
  "director": "Asghar Farhadi",
  "country": "Iran",
  "countries": [
   "Iran"
  ],
  "genres": [
   "Drama"
  ]
 },
 {
  "rank": 34,
  "title": "WALL·E",
  "ko": "월-E",
  "display": "월-E (WALL·E)",
  "year": 2008,
  "director": "Andrew Stanton",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Romantic Comedy",
   "Sci-Fi",
   "Adventure"
  ]
 },
 {
  "rank": 35,
  "title": "A Prophet",
  "ko": "예언자",
  "display": "예언자 (A Prophet)",
  "year": 2009,
  "director": "Jacques Audiard",
  "country": "France",
  "countries": [
   "France"
  ],
  "genres": [
   "Crime",
   "Drama"
  ]
 },
 {
  "rank": 36,
  "title": "A Serious Man",
  "ko": "시리어스 맨",
  "display": "시리어스 맨 (A Serious Man)",
  "year": 2009,
  "director": "Ethan & Joel Coen",
  "country": "United States",
  "countries": [
   "United States",
   "France",
   "United Kingdom"
  ],
  "genres": [
   "Comedy-Drama",
   "Drama"
  ]
 },
 {
  "rank": 37,
  "title": "Call Me by Your Name",
  "ko": "콜 미 바이 유어 네임",
  "display": "콜 미 바이 유어 네임 (Call Me by Your Name)",
  "year": 2017,
  "director": "Luca Guadagnino",
  "country": "Italy",
  "countries": [
   "Italy",
   "United States",
   "Brazil",
   "France",
   "United Kingdom"
  ],
  "genres": [
   "LGBTQ",
   "Coming-of-Age",
   "Romance",
   "Drama"
  ]
 },
 {
  "rank": 38,
  "title": "Portrait of a Lady on Fire",
  "ko": "타오르는 여인의 초상",
  "display": "타오르는 여인의 초상 (Portrait of a Lady on Fire)",
  "year": 2019,
  "director": "Céline Sciamma",
  "country": "France",
  "countries": [
   "France"
  ],
  "genres": [
   "War",
   "Drama",
   "Romance",
   "LGBTQ"
  ]
 },
 {
  "rank": 39,
  "title": "Lady Bird",
  "ko": "레이디 버드",
  "display": "레이디 버드 (Lady Bird)",
  "year": 2017,
  "director": "Greta Gerwig",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Comedy-Drama",
   "Drama",
   "LGBTQ"
  ]
 },
 {
  "rank": 40,
  "title": "Yi Yi",
  "ko": "일일",
  "display": "일일 (Yi Yi)",
  "year": 2000,
  "director": "Edward Yang",
  "country": "Taiwan",
  "countries": [
   "Taiwan",
   "Japan"
  ],
  "genres": [
   "Drama"
  ]
 },
 {
  "rank": 41,
  "title": "Amélie",
  "ko": "아멜리에",
  "display": "아멜리에 (Amélie)",
  "year": 2001,
  "director": "Jean-Pierre Jeunet",
  "country": "France",
  "countries": [
   "France",
   "Germany"
  ],
  "genres": [
   "Romantic Comedy",
   "Comedy",
   "Drama",
   "Fantasy"
  ]
 },
 {
  "rank": 42,
  "title": "The Master",
  "ko": "마스터",
  "display": "마스터 (The Master)",
  "year": 2012,
  "director": "Paul Thomas Anderson",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Drama"
  ]
 },
 {
  "rank": 43,
  "title": "Oldboy",
  "ko": "올드보이",
  "display": "올드보이 (Oldboy)",
  "year": 2003,
  "director": "Park Chan-wook",
  "country": "South Korea",
  "countries": [
   "South Korea",
   "Japan"
  ],
  "genres": [
   "Drama",
   "Thriller",
   "Mystery",
   "Action"
  ]
 },
 {
  "rank": 44,
  "title": "Once Upon a Time... in Hollywood",
  "ko": "원스 어폰 어 타임 인 할리우드",
  "display": "원스 어폰 어 타임 인 할리우드 (Once Upon a Time... in Hollywood)",
  "year": 2019,
  "director": "Quentin Tarantino",
  "country": "United States",
  "countries": [
   "United States",
   "United Kingdom"
  ],
  "genres": [
   "Comedy-Drama",
   "Black Comedy",
   "Drama",
   "Crime"
  ]
 },
 {
  "rank": 45,
  "title": "Moneyball",
  "ko": "머니볼",
  "display": "머니볼 (Moneyball)",
  "year": 2011,
  "director": "Bennett Miller",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Biography",
   "Sports",
   "Drama"
  ]
 },
 {
  "rank": 46,
  "title": "Roma",
  "ko": "로마",
  "display": "로마 (Roma)",
  "year": 2018,
  "director": "Alfonso Cuarón",
  "country": "United States",
  "countries": [
   "United States",
   "Mexico"
  ],
  "genres": [
   "Drama"
  ]
 },
 {
  "rank": 47,
  "title": "Almost Famous",
  "ko": "올모스트 페이머스",
  "display": "올모스트 페이머스 (Almost Famous)",
  "year": 2000,
  "director": "Cameron Crowe",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Musical",
   "Coming-of-Age",
   "Drama"
  ]
 },
 {
  "rank": 48,
  "title": "The Lives of Others",
  "ko": "타인의 삶",
  "display": "타인의 삶 (The Lives of Others)",
  "year": 2006,
  "director": "Florian Henckel von Donnersmarck",
  "country": "Germany",
  "countries": [
   "Germany"
  ],
  "genres": [
   "Drama",
   "Thriller"
  ]
 },
 {
  "rank": 49,
  "title": "Before Sunset",
  "ko": "비포 선셋",
  "display": "비포 선셋 (Before Sunset)",
  "year": 2004,
  "director": "Richard Linklater",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Romance",
   "Drama"
  ]
 },
 {
  "rank": 50,
  "title": "Up",
  "ko": "업",
  "display": "업 (Up)",
  "year": 2009,
  "director": "Pete Docter",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Adventure",
   "Comedy",
   "Fantasy"
  ]
 },
 {
  "rank": 51,
  "title": "12 Years a Slave",
  "ko": "노예 12년",
  "display": "노예 12년 (12 Years a Slave)",
  "year": 2013,
  "director": "Steve McQueen",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Biography",
   "Drama"
  ]
 },
 {
  "rank": 52,
  "title": "The Favourite",
  "ko": "더 페이버릿: 여왕의 여자",
  "display": "더 페이버릿: 여왕의 여자 (The Favourite)",
  "year": 2018,
  "director": "Yorgos Lanthimos",
  "country": "United Kingdom",
  "countries": [
   "United Kingdom"
  ],
  "genres": [
   "Comedy-Drama",
   "War",
   "Black Comedy"
  ]
 },
 {
  "rank": 53,
  "title": "Borat: Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan",
  "ko": "보라트",
  "display": "보라트 (Borat: Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan)",
  "year": 2006,
  "director": "Larry Charles",
  "country": "United States",
  "countries": [
   "United States",
   "United Kingdom"
  ],
  "genres": [
   "Comedy"
  ]
 },
 {
  "rank": 54,
  "title": "Pan's Labyrinth",
  "ko": "판의 미로",
  "display": "판의 미로 (Pan's Labyrinth)",
  "year": 2006,
  "director": "Guillermo del Toro",
  "country": "Mexico",
  "countries": [
   "Mexico",
   "Spain"
  ],
  "genres": [
   "Fantasy",
   "Drama",
   "War",
   "Coming-of-Age"
  ]
 },
 {
  "rank": 55,
  "title": "Inception",
  "ko": "인셉션",
  "display": "인셉션 (Inception)",
  "year": 2010,
  "director": "Christopher Nolan",
  "country": "United Kingdom",
  "countries": [
   "United Kingdom",
   "United States"
  ],
  "genres": [
   "Crime",
   "Sci-Fi",
   "Thriller"
  ]
 },
 {
  "rank": 56,
  "title": "Punch-Drunk Love",
  "ko": "펀치 드렁크 러브",
  "display": "펀치 드렁크 러브 (Punch-Drunk Love)",
  "year": 2002,
  "director": "Paul Thomas Anderson",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Romantic Comedy",
   "Comedy-Drama",
   "Drama"
  ]
 },
 {
  "rank": 57,
  "title": "Best in Show",
  "ko": null,
  "display": "Best in Show",
  "year": 2000,
  "director": "Christopher Guest",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Comedy",
   "LGBTQ"
  ]
 },
 {
  "rank": 58,
  "title": "Uncut Gems",
  "ko": "언컷 젬스",
  "display": "언컷 젬스 (Uncut Gems)",
  "year": 2019,
  "director": "Benny & Josh Safdie",
  "country": "United States",
  "countries": [
   "United States",
   "Sweden",
   "United Kingdom"
  ],
  "genres": [
   "Crime",
   "Comedy-Drama",
   "Drama",
   "Thriller"
  ]
 },
 {
  "rank": 59,
  "title": "Toni Erdmann",
  "ko": "토니 에드만",
  "display": "토니 에드만 (Toni Erdmann)",
  "year": 2016,
  "director": "Maren Ade",
  "country": "Germany",
  "countries": [
   "Germany",
   "Austria"
  ],
  "genres": [
   "Drama",
   "Comedy"
  ]
 },
 {
  "rank": 60,
  "title": "Whiplash",
  "ko": "위플래쉬",
  "display": "위플래쉬 (Whiplash)",
  "year": 2014,
  "director": "Damien Chazelle",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Musical",
   "Drama"
  ]
 },
 {
  "rank": 61,
  "title": "Kill Bill: Vol. 1",
  "ko": "킬 빌 1부",
  "display": "킬 빌 1부 (Kill Bill: Vol. 1)",
  "year": 2003,
  "director": "Quentin Tarantino",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Thriller",
   "Action"
  ]
 },
 {
  "rank": 62,
  "title": "Memento",
  "ko": "메멘토",
  "display": "메멘토 (Memento)",
  "year": 2000,
  "director": "Christopher Nolan",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Neo-Noir",
   "Mystery",
   "Drama",
   "Crime"
  ]
 },
 {
  "rank": 63,
  "title": "Little Miss Sunshine",
  "ko": "리틀 미스 선샤인",
  "display": "리틀 미스 선샤인 (Little Miss Sunshine)",
  "year": 2006,
  "director": "Jonathan Dayton & Valerie Faris",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Comedy",
   "Drama",
   "Road Movie"
  ]
 },
 {
  "rank": 64,
  "title": "Gone Girl",
  "ko": "곤 걸",
  "display": "곤 걸 (Gone Girl)",
  "year": 2014,
  "director": "David Fincher",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Thriller",
   "Crime",
   "Drama",
   "Mystery"
  ]
 },
 {
  "rank": 65,
  "title": "Oppenheimer",
  "ko": "오펜하이머",
  "display": "오펜하이머 (Oppenheimer)",
  "year": 2023,
  "director": "Christopher Nolan",
  "country": "United States",
  "countries": [
   "United States",
   "United Kingdom"
  ],
  "genres": [
   "War",
   "Biography",
   "Thriller",
   "Epic"
  ]
 },
 {
  "rank": 66,
  "title": "Spotlight",
  "ko": "스포트라이트",
  "display": "스포트라이트 (Spotlight)",
  "year": 2015,
  "director": "Tom McCarthy",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Drama",
   "Biography"
  ]
 },
 {
  "rank": 67,
  "title": "TÁR",
  "ko": "타르",
  "display": "타르 (TÁR)",
  "year": 2022,
  "director": "Todd Field",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Drama",
   "Musical"
  ]
 },
 {
  "rank": 68,
  "title": "The Hurt Locker",
  "ko": "허트 로커",
  "display": "허트 로커 (The Hurt Locker)",
  "year": 2008,
  "director": "Kathryn Bigelow",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Thriller",
   "War",
   "Independent",
   "Drama"
  ]
 },
 {
  "rank": 69,
  "title": "Under the Skin",
  "ko": "언더 더 스킨",
  "display": "언더 더 스킨 (Under the Skin)",
  "year": 2013,
  "director": "Jonathan Glazer",
  "country": "United Kingdom",
  "countries": [
   "United Kingdom",
   "Switzerland"
  ],
  "genres": [
   "Sci-Fi",
   "Drama",
   "Horror"
  ]
 },
 {
  "rank": 70,
  "title": "Let the Right One In",
  "ko": "렛 미 인",
  "display": "렛 미 인 (Let the Right One In)",
  "year": 2008,
  "director": "Tomas Alfredson",
  "country": "Sweden",
  "countries": [
   "Sweden"
  ],
  "genres": [
   "Horror",
   "Drama",
   "Fantasy"
  ]
 },
 {
  "rank": 71,
  "title": "Ocean's Eleven",
  "ko": "오션스 일레븐",
  "display": "오션스 일레븐 (Ocean's Eleven)",
  "year": 2001,
  "director": "Steven Soderbergh",
  "country": "United States",
  "countries": [
   "United States",
   "Australia"
  ],
  "genres": [
   "Crime",
   "Comedy",
   "Mystery",
   "Adventure"
  ]
 },
 {
  "rank": 72,
  "title": "Carol",
  "ko": "캐롤",
  "display": "캐롤 (Carol)",
  "year": 2015,
  "director": "Todd Haynes",
  "country": "United Kingdom",
  "countries": [
   "United Kingdom",
   "United States"
  ],
  "genres": [
   "Romance",
   "Drama",
   "Comedy",
   "LGBTQ"
  ]
 },
 {
  "rank": 73,
  "title": "Ratatouille",
  "ko": "라따뚜이",
  "display": "라따뚜이 (Ratatouille)",
  "year": 2007,
  "director": "Brad Bird",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Comedy",
   "Coming-of-Age",
   "Drama",
   "Comedy-Drama"
  ]
 },
 {
  "rank": 74,
  "title": "The Florida Project",
  "ko": "플로리다 프로젝트",
  "display": "플로리다 프로젝트 (The Florida Project)",
  "year": 2017,
  "director": "Sean Baker",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Drama"
  ]
 },
 {
  "rank": 75,
  "title": "Amour",
  "ko": "아무르",
  "display": "아무르 (Amour)",
  "year": 2012,
  "director": "Michael Haneke",
  "country": "France",
  "countries": [
   "France"
  ],
  "genres": [
   "Drama",
   "Romance"
  ]
 },
 {
  "rank": 76,
  "title": "O Brother, Where Art Thou?",
  "ko": "오 형제여 어디에 있는가",
  "display": "오 형제여 어디에 있는가 (O Brother, Where Art Thou?)",
  "year": 2000,
  "director": "Ethan & Joel Coen",
  "country": "France",
  "countries": [
   "France",
   "United States",
   "United Kingdom"
  ],
  "genres": [
   "Comedy",
   "Adventure",
   "Crime"
  ]
 },
 {
  "rank": 77,
  "title": "Everything Everywhere All at Once",
  "ko": "에브리씽 에브리웨어 올 앳 원스",
  "display": "에브리씽 에브리웨어 올 앳 원스 (Everything Everywhere All at Once)",
  "year": 2022,
  "director": "Daniel Kwan & Daniel Scheinert",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Sci-Fi",
   "Action",
   "Comedy-Drama",
   "Comedy"
  ]
 },
 {
  "rank": 78,
  "title": "Aftersun",
  "ko": "애프터썬",
  "display": "애프터썬 (Aftersun)",
  "year": 2022,
  "director": "Charlotte Wells",
  "country": "United Kingdom",
  "countries": [
   "United Kingdom",
   "United States"
  ],
  "genres": [
   "Drama",
   "Coming-of-Age"
  ]
 },
 {
  "rank": 79,
  "title": "The Tree of Life",
  "ko": "트리 오브 라이프",
  "display": "트리 오브 라이프 (The Tree of Life)",
  "year": 2011,
  "director": "Terrence Malick",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Sci-Fi",
   "Fantasy",
   "Coming-of-Age",
   "Drama"
  ]
 },
 {
  "rank": 80,
  "title": "Volver",
  "ko": "귀향",
  "display": "귀향 (Volver)",
  "year": 2006,
  "director": "Pedro Almodóvar",
  "country": "Spain",
  "countries": [
   "Spain"
  ],
  "genres": [
   "Comedy-Drama",
   "Comedy"
  ]
 },
 {
  "rank": 81,
  "title": "Black Swan",
  "ko": "블랙 스완",
  "display": "블랙 스완 (Black Swan)",
  "year": 2010,
  "director": "Darren Aronofsky",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Thriller",
   "Horror",
   "Drama"
  ]
 },
 {
  "rank": 82,
  "title": "The Act of Killing",
  "ko": "액트 오브 킬링",
  "display": "액트 오브 킬링 (The Act of Killing)",
  "year": 2012,
  "director": "Joshua Oppenheimer and Anonymous",
  "country": "United Kingdom",
  "countries": [
   "United Kingdom",
   "Norway",
   "Denmark",
   "Finland",
   "Germany",
   "Netherlands",
   "Poland",
   "Sweden"
  ],
  "genres": [
   "Documentary"
  ]
 },
 {
  "rank": 83,
  "title": "Inside Llewyn Davis",
  "ko": "인사이드 르윈",
  "display": "인사이드 르윈 (Inside Llewyn Davis)",
  "year": 2013,
  "director": "Ethan Coen & Joel Coen",
  "country": "United States",
  "countries": [
   "United States",
   "France"
  ],
  "genres": [
   "Drama",
   "Musical",
   "Comedy-Drama"
  ]
 },
 {
  "rank": 84,
  "title": "Melancholia",
  "ko": "멜랑콜리아",
  "display": "멜랑콜리아 (Melancholia)",
  "year": 2011,
  "director": "Lars von Trier",
  "country": "France",
  "countries": [
   "France",
   "Germany",
   "Sweden",
   "Italy",
   "Denmark"
  ],
  "genres": [
   "Sci-Fi",
   "Drama"
  ]
 },
 {
  "rank": 85,
  "title": "Anchorman: The Legend of Ron Burgundy",
  "ko": "앵커맨",
  "display": "앵커맨 (Anchorman: The Legend of Ron Burgundy)",
  "year": 2004,
  "director": "Adam McKay",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Comedy"
  ]
 },
 {
  "rank": 86,
  "title": "Past Lives",
  "ko": "패스트 라이브즈",
  "display": "패스트 라이브즈 (Past Lives)",
  "year": 2023,
  "director": "Celine Song",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Drama"
  ]
 },
 {
  "rank": 87,
  "title": "The Lord of the Rings: The Fellowship of the Ring",
  "ko": "반지의 제왕: 반지 원정대",
  "display": "반지의 제왕: 반지 원정대 (The Lord of the Rings: The Fellowship of the Ring)",
  "year": 2001,
  "director": "Peter Jackson",
  "country": "New Zealand",
  "countries": [
   "New Zealand",
   "United States"
  ],
  "genres": [
   "Fantasy",
   "Adventure",
   "Action"
  ]
 },
 {
  "rank": 88,
  "title": "The Gleaners and I",
  "ko": "이삭 줍는 사람들과 나",
  "display": "이삭 줍는 사람들과 나 (The Gleaners and I)",
  "year": 2000,
  "director": "Agnès Varda",
  "country": "France",
  "countries": [
   "France"
  ],
  "genres": [
   "Documentary"
  ]
 },
 {
  "rank": 89,
  "title": "Interstellar",
  "ko": "인터스텔라",
  "display": "인터스텔라 (Interstellar)",
  "year": 2014,
  "director": "Christopher Nolan",
  "country": "United States",
  "countries": [
   "United States",
   "United Kingdom"
  ],
  "genres": [
   "Sci-Fi",
   "Adventure",
   "Drama"
  ]
 },
 {
  "rank": 90,
  "title": "Frances Ha",
  "ko": "프란시스 하",
  "display": "프란시스 하 (Frances Ha)",
  "year": 2012,
  "director": "Noah Baumbach",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Comedy-Drama",
   "Coming-of-Age",
   "Comedy",
   "Drama"
  ]
 },
 {
  "rank": 91,
  "title": "Fish Tank",
  "ko": "피쉬 탱크",
  "display": "피쉬 탱크 (Fish Tank)",
  "year": 2009,
  "director": "Andrea Arnold",
  "country": "United Kingdom",
  "countries": [
   "United Kingdom"
  ],
  "genres": [
   "Drama",
   "Coming-of-Age"
  ]
 },
 {
  "rank": 92,
  "title": "Gladiator",
  "ko": "글래디에이터",
  "display": "글래디에이터 (Gladiator)",
  "year": 2000,
  "director": "Ridley Scott",
  "country": "United Kingdom",
  "countries": [
   "United Kingdom",
   "United States"
  ],
  "genres": [
   "Action",
   "Drama"
  ]
 },
 {
  "rank": 93,
  "title": "Michael Clayton",
  "ko": "마이클 클레이튼",
  "display": "마이클 클레이튼 (Michael Clayton)",
  "year": 2007,
  "director": "Tony Gilroy",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Thriller",
   "Drama",
   "Mystery"
  ]
 },
 {
  "rank": 94,
  "title": "Minority Report",
  "ko": "마이너리티 리포트",
  "display": "마이너리티 리포트 (Minority Report)",
  "year": 2002,
  "director": "Steven Spielberg",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Sci-Fi",
   "Action",
   "Thriller"
  ]
 },
 {
  "rank": 95,
  "title": "The Worst Person in the World",
  "ko": "세상에서 가장 나쁜 사람",
  "display": "세상에서 가장 나쁜 사람 (The Worst Person in the World)",
  "year": 2021,
  "director": "Joachim Trier",
  "country": "Norway",
  "countries": [
   "Norway",
   "France",
   "Denmark",
   "Sweden"
  ],
  "genres": [
   "Drama",
   "Comedy",
   "Romance"
  ]
 },
 {
  "rank": 96,
  "title": "Black Panther",
  "ko": "블랙 팬서",
  "display": "블랙 팬서 (Black Panther)",
  "year": 2018,
  "director": "Ryan Coogler",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Action",
   "Adventure",
   "Sci-Fi"
  ]
 },
 {
  "rank": 97,
  "title": "Gravity",
  "ko": "그래비티",
  "display": "그래비티 (Gravity)",
  "year": 2013,
  "director": "Alfonso Cuarón",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Sci-Fi",
   "Survival",
   "Adventure"
  ]
 },
 {
  "rank": 98,
  "title": "Grizzly Man",
  "ko": "그리즐리 맨",
  "display": "그리즐리 맨 (Grizzly Man)",
  "year": 2005,
  "director": "Werner Herzog",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Documentary",
   "Biography"
  ]
 },
 {
  "rank": 99,
  "title": "Memories of Murder",
  "ko": "살인의 추억",
  "display": "살인의 추억 (Memories of Murder)",
  "year": 2003,
  "director": "Bong Joon Ho",
  "country": "South Korea",
  "countries": [
   "South Korea"
  ],
  "genres": [
   "Thriller",
   "Mystery",
   "Drama",
   "Crime"
  ]
 },
 {
  "rank": 100,
  "title": "Superbad",
  "ko": "슈퍼배드",
  "display": "슈퍼배드 (Superbad)",
  "year": 2007,
  "director": "Greg Mottola",
  "country": "United States",
  "countries": [
   "United States"
  ],
  "genres": [
   "Comedy",
   "Coming-of-Age"
  ]
 }
];
