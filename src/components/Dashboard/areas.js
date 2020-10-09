const areas = [{"value": '', "label": "Select Local Area"},{"value":"S12000033","label":"Aberdeen City"},{"value":"S12000034","label":"Aberdeenshire"},{"value":"E07000223","label":"Adur"},{"value":"E07000026","label":"Allerdale"},{"value":"E07000032","label":"Amber Valley"},{"value":"S12000041","label":"Angus"},{"value":"N09000001","label":"Antrim and Newtownabbey"},{"value":"N09000011","label":"Ards and North Down"},{"value":"S12000035","label":"Argyll and Bute"},{"value":"N09000002","label":"Armagh City, Banbridge and Craigavon"},{"value":"E07000224","label":"Arun"},{"value":"E07000170","label":"Ashfield"},{"value":"E07000105","label":"Ashford"},{"value":"E07000004","label":"Aylesbury Vale"},{"value":"E07000200","label":"Babergh"},{"value":"E09000002","label":"Barking and Dagenham"},{"value":"E09000003","label":"Barnet"},{"value":"E08000016","label":"Barnsley"},{"value":"E07000027","label":"Barrow-in-Furness"},{"value":"E07000066","label":"Basildon"},{"value":"E07000084","label":"Basingstoke and Deane"},{"value":"E07000171","label":"Bassetlaw"},{"value":"E06000022","label":"Bath and North East Somerset"},{"value":"E06000055","label":"Bedford"},{"value":"N09000003","label":"Belfast"},{"value":"E09000004","label":"Bexley"},{"value":"E08000025","label":"Birmingham"},{"value":"E07000129","label":"Blaby"},{"value":"E06000008","label":"Blackburn with Darwen"},{"value":"E06000009","label":"Blackpool"},{"value":"W06000019","label":"Blaenau Gwent"},{"value":"E07000033","label":"Bolsover"},{"value":"E08000001","label":"Bolton"},{"value":"E07000136","label":"Boston"},{"value":"E06000058","label":"Bournemouth, Christchurch and Poole"},{"value":"E06000036","label":"Bracknell Forest"},{"value":"E08000032","label":"Bradford"},{"value":"E07000067","label":"Braintree"},{"value":"E07000143","label":"Breckland"},{"value":"E09000005","label":"Brent"},{"value":"E07000068","label":"Brentwood"},{"value":"W06000013","label":"Bridgend"},{"value":"E06000043","label":"Brighton and Hove"},{"value":"E06000023","label":"Bristol, City of"},{"value":"E07000144","label":"Broadland"},{"value":"E09000006","label":"Bromley"},{"value":"E07000234","label":"Bromsgrove"},{"value":"E07000095","label":"Broxbourne"},{"value":"E07000172","label":"Broxtowe"},{"value":"E07000117","label":"Burnley"},{"value":"E08000002","label":"Bury"},{"value":"W06000018","label":"Caerphilly"},{"value":"E08000033","label":"Calderdale"},{"value":"E07000008","label":"Cambridge"},{"value":"E09000007","label":"Camden"},{"value":"E07000192","label":"Cannock Chase"},{"value":"E07000106","label":"Canterbury"},{"value":"W06000015","label":"Cardiff"},{"value":"E07000028","label":"Carlisle"},{"value":"W06000010","label":"Carmarthenshire"},{"value":"E07000069","label":"Castle Point"},{"value":"N09000004","label":"Causeway Coast and Glens"},{"value":"E06000056","label":"Central Bedfordshire"},{"value":"W06000008","label":"Ceredigion"},{"value":"E07000130","label":"Charnwood"},{"value":"E07000070","label":"Chelmsford"},{"value":"E07000078","label":"Cheltenham"},{"value":"E07000177","label":"Cherwell"},{"value":"E06000049","label":"Cheshire East"},{"value":"E06000050","label":"Cheshire West and Chester"},{"value":"E07000034","label":"Chesterfield"},{"value":"E07000225","label":"Chichester"},{"value":"E07000005","label":"Chiltern"},{"value":"E07000118","label":"Chorley"},{"value":"S12000036","label":"City of Edinburgh"},{"value":"S12000005","label":"Clackmannanshire"},{"value":"E07000071","label":"Colchester"},{"value":"W06000003","label":"Conwy"},{"value":"E07000029","label":"Copeland"},{"value":"E07000150","label":"Corby"},{"value":"E06000052","label":"Cornwall and Isles of Scilly"},{"value":"E07000079","label":"Cotswold"},{"value":"E06000047","label":"County Durham"},{"value":"E08000026","label":"Coventry"},{"value":"E07000163","label":"Craven"},{"value":"E07000226","label":"Crawley"},{"value":"E09000008","label":"Croydon"},{"value":"E07000096","label":"Dacorum"},{"value":"E06000005","label":"Darlington"},{"value":"E07000107","label":"Dartford"},{"value":"E07000151","label":"Daventry"},{"value":"W06000004","label":"Denbighshire"},{"value":"E06000015","label":"Derby"},{"value":"E07000035","label":"Derbyshire Dales"},{"value":"N09000005","label":"Derry City and Strabane"},{"value":"E08000017","label":"Doncaster"},{"value":"E06000059","label":"Dorset"},{"value":"E07000108","label":"Dover"},{"value":"E08000027","label":"Dudley"},{"value":"S12000006","label":"Dumfries and Galloway"},{"value":"S12000042","label":"Dundee City"},{"value":"E09000009","label":"Ealing"},{"value":"S12000008","label":"East Ayrshire"},{"value":"E07000009","label":"East Cambridgeshire"},{"value":"E07000040","label":"East Devon"},{"value":"S12000045","label":"East Dunbartonshire"},{"value":"E07000085","label":"East Hampshire"},{"value":"E07000242","label":"East Hertfordshire"},{"value":"E07000137","label":"East Lindsey"},{"value":"S12000010","label":"East Lothian"},{"value":"E07000152","label":"East Northamptonshire"},{"value":"S12000011","label":"East Renfrewshire"},{"value":"E06000011","label":"East Riding of Yorkshire"},{"value":"E07000193","label":"East Staffordshire"},{"value":"E07000244","label":"East Suffolk"},{"value":"E07000061","label":"Eastbourne"},{"value":"E07000086","label":"Eastleigh"},{"value":"E07000030","label":"Eden"},{"value":"E07000207","label":"Elmbridge"},{"value":"E09000010","label":"Enfield"},{"value":"E07000072","label":"Epping Forest"},{"value":"E07000208","label":"Epsom and Ewell"},{"value":"E07000036","label":"Erewash"},{"value":"E07000041","label":"Exeter"},{"value":"S12000014","label":"Falkirk"},{"value":"E07000087","label":"Fareham"},{"value":"E07000010","label":"Fenland"},{"value":"N09000006","label":"Fermanagh and Omagh"},{"value":"S12000047","label":"Fife"},{"value":"W06000005","label":"Flintshire"},{"value":"E07000112","label":"Folkestone and Hythe"},{"value":"E07000080","label":"Forest of Dean"},{"value":"E07000119","label":"Fylde"},{"value":"E08000037","label":"Gateshead"},{"value":"E07000173","label":"Gedling"},{"value":"S12000049","label":"Glasgow City"},{"value":"E07000081","label":"Gloucester"},{"value":"E07000088","label":"Gosport"},{"value":"E07000109","label":"Gravesham"},{"value":"E07000145","label":"Great Yarmouth"},{"value":"E09000011","label":"Greenwich"},{"value":"E07000209","label":"Guildford"},{"value":"W06000002","label":"Gwynedd"},{"value":"E09000012","label":"Hackney and City of London"},{"value":"E06000006","label":"Halton"},{"value":"E07000164","label":"Hambleton"},{"value":"E09000013","label":"Hammersmith and Fulham"},{"value":"E07000131","label":"Harborough"},{"value":"E09000014","label":"Haringey"},{"value":"E07000073","label":"Harlow"},{"value":"E07000165","label":"Harrogate"},{"value":"E09000015","label":"Harrow"},{"value":"E07000089","label":"Hart"},{"value":"E06000001","label":"Hartlepool"},{"value":"E07000062","label":"Hastings"},{"value":"E07000090","label":"Havant"},{"value":"E09000016","label":"Havering"},{"value":"E06000019","label":"Herefordshire, County of"},{"value":"E07000098","label":"Hertsmere"},{"value":"E07000037","label":"High Peak"},{"value":"S12000017","label":"Highland"},{"value":"E09000017","label":"Hillingdon"},{"value":"E07000132","label":"Hinckley and Bosworth"},{"value":"E07000227","label":"Horsham"},{"value":"E09000018","label":"Hounslow"},{"value":"E07000011","label":"Huntingdonshire"},{"value":"E07000120","label":"Hyndburn"},{"value":"S12000018","label":"Inverclyde"},{"value":"E07000202","label":"Ipswich"},{"value":"W06000001","label":"Isle of Anglesey"},{"value":"E06000046","label":"Isle of Wight"},{"value":"E09000019","label":"Islington"},{"value":"E09000020","label":"Kensington and Chelsea"},{"value":"E07000153","label":"Kettering"},{"value":"E07000146","label":"King's Lynn and West Norfolk"},{"value":"E06000010","label":"Kingston upon Hull, City of"},{"value":"E09000021","label":"Kingston upon Thames"},{"value":"E08000034","label":"Kirklees"},{"value":"E08000011","label":"Knowsley"},{"value":"E09000022","label":"Lambeth"},{"value":"E07000121","label":"Lancaster"},{"value":"E08000035","label":"Leeds"},{"value":"E06000016","label":"Leicester"},{"value":"E07000063","label":"Lewes"},{"value":"E09000023","label":"Lewisham"},{"value":"E07000194","label":"Lichfield"},{"value":"E07000138","label":"Lincoln"},{"value":"N09000007","label":"Lisburn and Castlereagh"},{"value":"E08000012","label":"Liverpool"},{"value":"E06000032","label":"Luton"},{"value":"E07000110","label":"Maidstone"},{"value":"E07000074","label":"Maldon"},{"value":"E07000235","label":"Malvern Hills"},{"value":"E08000003","label":"Manchester"},{"value":"E07000174","label":"Mansfield"},{"value":"E06000035","label":"Medway"},{"value":"E07000133","label":"Melton"},{"value":"E07000187","label":"Mendip"},{"value":"W06000024","label":"Merthyr Tydfil"},{"value":"E09000024","label":"Merton"},{"value":"N09000008","label":"Mid and East Antrim"},{"value":"E07000042","label":"Mid Devon"},{"value":"E07000203","label":"Mid Suffolk"},{"value":"E07000228","label":"Mid Sussex"},{"value":"N09000009","label":"Mid Ulster"},{"value":"E06000002","label":"Middlesbrough"},{"value":"S12000019","label":"Midlothian"},{"value":"E06000042","label":"Milton Keynes"},{"value":"E07000210","label":"Mole Valley"},{"value":"W06000021","label":"Monmouthshire"},{"value":"S12000020","label":"Moray"},{"value":"S12000013","label":"Na h-Eileanan Siar"},{"value":"W06000012","label":"Neath Port Talbot"},{"value":"E07000091","label":"New Forest"},{"value":"E07000175","label":"Newark and Sherwood"},{"value":"E08000021","label":"Newcastle upon Tyne"},{"value":"E07000195","label":"Newcastle-under-Lyme"},{"value":"E09000025","label":"Newham"},{"value":"W06000022","label":"Newport"},{"value":"N09000010","label":"Newry, Mourne and Down"},{"value":"S12000021","label":"North Ayrshire"},{"value":"E07000043","label":"North Devon"},{"value":"E07000038","label":"North East Derbyshire"},{"value":"E06000012","label":"North East Lincolnshire"},{"value":"E07000099","label":"North Hertfordshire"},{"value":"E07000139","label":"North Kesteven"},{"value":"S12000050","label":"North Lanarkshire"},{"value":"E06000013","label":"North Lincolnshire"},{"value":"E07000147","label":"North Norfolk"},{"value":"E06000024","label":"North Somerset"},{"value":"E08000022","label":"North Tyneside"},{"value":"E07000218","label":"North Warwickshire"},{"value":"E07000134","label":"North West Leicestershire"},{"value":"E07000154","label":"Northampton"},{"value":"E06000057","label":"Northumberland"},{"value":"E07000148","label":"Norwich"},{"value":"E06000018","label":"Nottingham"},{"value":"E07000219","label":"Nuneaton and Bedworth"},{"value":"E07000135","label":"Oadby and Wigston"},{"value":"E08000004","label":"Oldham"},{"value":"S12000023","label":"Orkney Islands"},{"value":"E07000178","label":"Oxford"},{"value":"W06000009","label":"Pembrokeshire"},{"value":"E07000122","label":"Pendle"},{"value":"S12000048","label":"Perth and Kinross"},{"value":"E06000031","label":"Peterborough"},{"value":"E06000026","label":"Plymouth"},{"value":"E06000044","label":"Portsmouth"},{"value":"W06000023","label":"Powys"},{"value":"E07000123","label":"Preston"},{"value":"E06000038","label":"Reading"},{"value":"E09000026","label":"Redbridge"},{"value":"E06000003","label":"Redcar and Cleveland"},{"value":"E07000236","label":"Redditch"},{"value":"E07000211","label":"Reigate and Banstead"},{"value":"S12000038","label":"Renfrewshire"},{"value":"W06000016","label":"Rhondda Cynon Taf"},{"value":"E07000124","label":"Ribble Valley"},{"value":"E09000027","label":"Richmond upon Thames"},{"value":"E07000166","label":"Richmondshire"},{"value":"E08000005","label":"Rochdale"},{"value":"E07000075","label":"Rochford"},{"value":"E07000125","label":"Rossendale"},{"value":"E07000064","label":"Rother"},{"value":"E08000018","label":"Rotherham"},{"value":"E07000220","label":"Rugby"},{"value":"E07000212","label":"Runnymede"},{"value":"E07000176","label":"Rushcliffe"},{"value":"E07000092","label":"Rushmoor"},{"value":"E06000017","label":"Rutland"},{"value":"E07000167","label":"Ryedale"},{"value":"E08000006","label":"Salford"},{"value":"E08000028","label":"Sandwell"},{"value":"E07000168","label":"Scarborough"},{"value":"S12000026","label":"Scottish Borders"},{"value":"E07000188","label":"Sedgemoor"},{"value":"E08000014","label":"Sefton"},{"value":"E07000169","label":"Selby"},{"value":"E07000111","label":"Sevenoaks"},{"value":"E08000019","label":"Sheffield"},{"value":"S12000027","label":"Shetland Islands"},{"value":"E06000051","label":"Shropshire"},{"value":"E06000039","label":"Slough"},{"value":"E08000029","label":"Solihull"},{"value":"E07000246","label":"Somerset West and Taunton"},{"value":"S12000028","label":"South Ayrshire"},{"value":"E07000006","label":"South Bucks"},{"value":"E07000012","label":"South Cambridgeshire"},{"value":"E07000039","label":"South Derbyshire"},{"value":"E06000025","label":"South Gloucestershire"},{"value":"E07000044","label":"South Hams"},{"value":"E07000140","label":"South Holland"},{"value":"E07000141","label":"South Kesteven"},{"value":"E07000031","label":"South Lakeland"},{"value":"S12000029","label":"South Lanarkshire"},{"value":"E07000149","label":"South Norfolk"},{"value":"E07000155","label":"South Northamptonshire"},{"value":"E07000179","label":"South Oxfordshire"},{"value":"E07000126","label":"South Ribble"},{"value":"E07000189","label":"South Somerset"},{"value":"E07000196","label":"South Staffordshire"},{"value":"E08000023","label":"South Tyneside"},{"value":"E06000045","label":"Southampton"},{"value":"E06000033","label":"Southend-on-Sea"},{"value":"E09000028","label":"Southwark"},{"value":"E07000213","label":"Spelthorne"},{"value":"E07000240","label":"St Albans"},{"value":"E08000013","label":"St. Helens"},{"value":"E07000197","label":"Stafford"},{"value":"E07000198","label":"Staffordshire Moorlands"},{"value":"E07000243","label":"Stevenage"},{"value":"S12000030","label":"Stirling"},{"value":"E08000007","label":"Stockport"},{"value":"E06000004","label":"Stockton-on-Tees"},{"value":"E06000021","label":"Stoke-on-Trent"},{"value":"E07000221","label":"Stratford-on-Avon"},{"value":"E07000082","label":"Stroud"},{"value":"E08000024","label":"Sunderland"},{"value":"E07000214","label":"Surrey Heath"},{"value":"E09000029","label":"Sutton"},{"value":"E07000113","label":"Swale"},{"value":"W06000011","label":"Swansea"},{"value":"E06000030","label":"Swindon"},{"value":"E08000008","label":"Tameside"},{"value":"E07000199","label":"Tamworth"},{"value":"E07000215","label":"Tandridge"},{"value":"E07000045","label":"Teignbridge"},{"value":"E06000020","label":"Telford and Wrekin"},{"value":"E07000076","label":"Tendring"},{"value":"E07000093","label":"Test Valley"},{"value":"E07000083","label":"Tewkesbury"},{"value":"E07000114","label":"Thanet"},{"value":"E07000102","label":"Three Rivers"},{"value":"E06000034","label":"Thurrock"},{"value":"E07000115","label":"Tonbridge and Malling"},{"value":"E06000027","label":"Torbay"},{"value":"W06000020","label":"Torfaen"},{"value":"E07000046","label":"Torridge"},{"value":"E09000030","label":"Tower Hamlets"},{"value":"E08000009","label":"Trafford"},{"value":"E07000116","label":"Tunbridge Wells"},{"value":"E07000077","label":"Uttlesford"},{"value":"W06000014","label":"Vale of Glamorgan"},{"value":"E07000180","label":"Vale of White Horse"},{"value":"E08000036","label":"Wakefield"},{"value":"E08000030","label":"Walsall"},{"value":"E09000031","label":"Waltham Forest"},{"value":"E09000032","label":"Wandsworth"},{"value":"E06000007","label":"Warrington"},{"value":"E07000222","label":"Warwick"},{"value":"E07000103","label":"Watford"},{"value":"E07000216","label":"Waverley"},{"value":"E07000065","label":"Wealden"},{"value":"E07000156","label":"Wellingborough"},{"value":"E07000241","label":"Welwyn Hatfield"},{"value":"E06000037","label":"West Berkshire"},{"value":"E07000047","label":"West Devon"},{"value":"S12000039","label":"West Dunbartonshire"},{"value":"E07000127","label":"West Lancashire"},{"value":"E07000142","label":"West Lindsey"},{"value":"S12000040","label":"West Lothian"},{"value":"E07000181","label":"West Oxfordshire"},{"value":"E07000245","label":"West Suffolk"},{"value":"E09000033","label":"Westminster"},{"value":"E08000010","label":"Wigan"},{"value":"E06000054","label":"Wiltshire"},{"value":"E07000094","label":"Winchester"},{"value":"E06000040","label":"Windsor and Maidenhead"},{"value":"E08000015","label":"Wirral"},{"value":"E07000217","label":"Woking"},{"value":"E06000041","label":"Wokingham"},{"value":"E08000031","label":"Wolverhampton"},{"value":"E07000237","label":"Worcester"},{"value":"E07000229","label":"Worthing"},{"value":"W06000006","label":"Wrexham"},{"value":"E07000238","label":"Wychavon"},{"value":"E07000007","label":"Wycombe"},{"value":"E07000128","label":"Wyre"},{"value":"E07000239","label":"Wyre Forest"},{"value":"E06000014","label":"York"}];

export default areas;