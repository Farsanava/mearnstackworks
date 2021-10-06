


var countries = [{ "name": "India", "topLevelDomain": [".in"], "alpha2Code": "IN", "alpha3Code": "IND",
 "callingCodes": ["91"], "capital": "New Delhi", "altSpellings": ["IN", "Bhārat", "Republic of India", "Bharat Ganrajya"],
 "subregion": "Southern Asia", "region": "Asia", "population": 1380004385, "latlng": [20.0, 77.0], "demonym": "Indian", 
 "area": 3287590.0, "gini": 35.7, "timezones": ["UTC+05:30"], "borders": ["AFG", "BGD", "BTN", "MMR", "CHN", "NPL", "PAK", "LKA"], 
 "nativeName": "भारत", "numericCode": "356", "flags": { "svg": "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg", "png": "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/320px-Flag_of_India.svg.png" },
 "currencies": [{ "code": "INR", "name": "Indian rupee", "symbol": "₹" }], "languages": [{ "iso639_1": "hi", "iso639_2": "hin", "name": "Hindi", "nativeName": "हिन्दी" }, { "iso639_1": "en", "iso639_2": "eng", "name": "English", "nativeName": "English" }],
"translations": { "br": "Índia", "pt": "Índia", "nl": "India", "hr": "Indija", "fa": "هند", "de": "Indien", "es": "India", "fr": "Inde", "ja": "インド", "it": "India", "hu": "India" },
"flag": "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg", "regionalBlocs": [{ "acronym": "SAARC", "name": "South Asian Association for Regional Cooperation" }], 
"cioc": "IND", "independent": true },
{"name":"United Arab Emirates","topLevelDomain":[".ae"],"alpha2Code":"AE","alpha3Code":"ARE","callingCodes":["971"],
"capital":"Abu Dhabi","altSpellings":["AE","UAE"],"subregion":"Western Asia","region":"Asia","population":9890400,
"latlng":[24.0,54.0],"demonym":"Emirati","area":83600.0,"gini":26.0,"timezones":["UTC+04"],"borders":["OMN","SAU"],
"nativeName":"دولة الإمارات العربية المتحدة","numericCode":"784","flags":{"svg":"https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg","png":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/320px-Flag_of_the_United_Arab_Emirates.svg.png"},
"currencies":[{"code":"AED","name":"United Arab Emirates dirham","symbol":"د.إ"}],"languages":[{"iso639_1":"ar","iso639_2":"ara","name":"Arabic","nativeName":"العربية"}],
"translations":{"br":"Emirados árabes Unidos","pt":"Emirados árabes Unidos","nl":"Verenigde Arabische Emiraten","hr":"Ujedinjeni Arapski Emirati","fa":"امارات متحده عربی","de":"Vereinigte Arabische Emirate","es":"Emiratos Árabes Unidos","fr":"Émirats arabes unis","ja":"アラブ首長国連邦","it":"Emirati Arabi Uniti","hu":"Egyesült Arab Emőrsígek"},
"flag":"https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
"regionalBlocs":[{"acronym":"AL","name":"Arab League","otherNames":["جامعة الدول العربية","Jāmiʻat ad-Duwal al-ʻArabīyah","League of Arab States"]}],"cioc":"UAE","independent":true}
] 

//each currency symbol
var con=countries.map(curr=>curr.currencies[0].symbol)
console.log(con);
// 0th country currency symbol
console.log(countries[0].currencies[0].symbol);
//each currency name  currency symbol
var data=countries.map(curr=>[curr.currencies[0].name,curr.currencies[0].symbol])
console.log(data);
//each country name and population
var pop=countries.map(popu=>[popu.name,popu.population])
console.log(pop);