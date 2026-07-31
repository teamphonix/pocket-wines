const rawWines = [
  // Sparkling
  ['Sparkling Wine','Italy','Bisol Desiderio “Jeio” Prosecco','Veneto, Italy NV','Prosecco','45'],
  ['Sparkling Wine','Italy','Bisol “Cartizze” Brut Prosecco Superiore','Valdobbiadene DOCG, Italy 2024','Glera / Prosecco','95'],
  ['Sparkling Wine','Italy','Bortolomiol Prosecco Brut Rosé','Prosecco di Treviso DOC, Italy NV','Glera / Pinot Nero Rosé','55'],
  ['Sparkling Wine','Spain','UO de L’Origan Brut Nature','Catalonia, Spain NV','Traditional-method sparkling','75'],
  ['Sparkling Wine','USA','Alba Vineyard Sparkling Riesling','Warren Hills AVA, New Jersey 2024','Riesling','50'],
  ['Sparkling Wine','USA','Schramsberg Vineyards Brut Blanc de Noirs','North Coast, California 2021','Pinot Noir sparkling','95'],
  ['Sparkling Wine','USA','J. Schram Brut Rosé','North Coast, California 2015','Sparkling rosé','270'],
  ['Sparkling Wine','France','Langlois-Chateau Crémant de Loire Brut Rosé','Loire, France NV','Crémant Rosé','70'],
  ['Sparkling Wine','France','Pierre Brigandat Brut Blanc des Noirs','Aube, Champagne NV','Champagne Blanc de Noirs','90'],
  ['Sparkling Wine','France','Telmont “Réserve de la Terre”','Damery, Champagne NV','Organic Champagne','175'],
  ['Sparkling Wine','France','Le Kool Champagne Grand Cru','Marne, Champagne NV','Grand Cru Champagne','250'],
  ['Sparkling Wine','France','Stéphane Coquillette “Marie Aimer” Brut Rosé','Chouilly, Champagne NV','Champagne Rosé','175'],
  ['Sparkling Wine','France','Henriet-Bazin “Marie-Amélie” Blanc de Blancs 1er Cru','Montagne de Reims, Champagne 2015','Chardonnay Champagne','199'],
  ['Sparkling Wine','France','Gosset Brut Grand Millésime','Aÿ, Champagne 2016','Vintage Champagne','260'],

  // Whites
  ['White Wine','Riesling / Grüner / Gewürztraminer','Laurenz V. “Charming” Grüner Veltliner','Kamptal, Austria 2021','Grüner Veltliner','45'],
  ['White Wine','Riesling / Grüner / Gewürztraminer','Alba Vineyard Dry Riesling','Warren Hills AVA, New Jersey 2024','Riesling','55'],
  ['White Wine','Riesling / Grüner / Gewürztraminer','Pierre Sparr Reserve Riesling','Alsace, France 2023','Riesling','65'],
  ['White Wine','Riesling / Grüner / Gewürztraminer','Später-Veit “Piesporter Goldtröpfchen G. Reserve Trocken”','Mosel, Germany 2016','Riesling','105'],
  ['White Wine','Riesling / Grüner / Gewürztraminer','Dr. Konstantin Frank Semi-Dry Riesling','Finger Lakes, New York 2024','Riesling','60'],
  ['White Wine','Riesling / Grüner / Gewürztraminer','Pierre Sparr Grand Cru “Mambourg” Gewürztraminer','Alsace, France 2020','Gewürztraminer','99'],
  ['White Wine','Riesling / Grüner / Gewürztraminer','Pierre Sparr “Schoenenbourg” Grand Cru Riesling','Alsace, France 2021','Riesling','115'],
  ['White Wine','Italian Whites','Ceretto “Vignaioli di Santo Stefano”','Moscato d’Asti DOCG, Italy 2024','Moscato','45'],
  ['White Wine','Italian Whites','Aqua di Venus by Ruffino','Friuli DOC, Italy 2022','Italian white blend','60'],
  ['White Wine','Italian Whites','Elena Walch “Castel Ringberg”','Alto Adige, Italy 2023','Pinot Grigio','80'],
  ['White Wine','Italian Whites','Cantina Maugeri “Frontemare”','Etna Bianco Superiore, Sicily, Italy 2022','Carricante','130'],
  ['White Wine','Italian Whites','Il Poggio “Colli Tortonesi” Pavia','Piedmont, Italy 2023','Timorasso','60'],
  ['White Wine','Sauvignon Blanc & Aromatic Whites','Fournier Père & Fils “Les Deux Cailloux”','Sancerre AOC, France 2024','Sauvignon Blanc','60'],
  ['White Wine','Sauvignon Blanc & Aromatic Whites','Quattro Theory Sauvignon Blanc','Napa Valley, California 2023','Sauvignon Blanc','70'],
  ['White Wine','Sauvignon Blanc & Aromatic Whites','Revik Wine Company “Saphi Vineyard” Sauvignon Blanc','Coombsville, Napa Valley, California 2022','Sauvignon Blanc','90'],
  ['White Wine','Sauvignon Blanc & Aromatic Whites','Schrader Cellars “Double Diamond” Sauvignon Blanc','Napa Valley, California 2023','Sauvignon Blanc','120'],
  ['White Wine','Sauvignon Blanc & Aromatic Whites','Grgich Hills “Fumé Blanc”','Napa Valley, California 2023','Sauvignon Blanc','90'],
  ['White Wine','Sauvignon Blanc & Aromatic Whites','Quintessa Illumination','Napa Valley, California 2024','Sauvignon Blanc','180'],
  ['White Wine','Sauvignon Blanc & Aromatic Whites','Astrolabe Sauvignon Blanc','Marlborough, New Zealand 2025','Sauvignon Blanc','75'],
  ['White Wine','Sauvignon Blanc & Aromatic Whites','Lail Vineyards “Georgia” Sauvignon Blanc','Napa Valley, California','Sauvignon Blanc','450'],
  ['White Wine','Other Whites','Aphros Loureiro Vinho Verde','Vinho Verde, Portugal','Loureiro','40'],
  ['White Wine','Other Whites','Bodegas Avancia “Valdeorras Old Vines”','Valdeorras, Spain','Godello','80'],
  ['White Wine','Other Whites','Bodegas La Caña','Rías Baixas, Galicia, Spain 2022','Albariño','80'],
  ['White Wine','Other Whites','Gérard Bertrand “Cigalus Blanc”','Languedoc-Roussillon, France 2022','Five-grape white blend','99'],
  ['White Wine','Other Whites','Dom. des Granits “Les Noëlles”','Muscadet Sèvre-et-Maine, France 2023','Melon de Bourgogne','65'],
  ['White Wine','Other Whites','Lang & Reed Chenin Blanc','Mendocino, California 2023','Chenin Blanc','65'],
  ['White Wine','Other Whites','Terre Rouge “Enigma”','Sierra Foothills, California 2009','Marsanne / Roussanne / Viognier','95'],
  ['White Wine','Chardonnay: United States','Ramey Russian River Valley Chardonnay','Russian River Valley, California 2020','Chardonnay','99'],
  ['White Wine','Chardonnay: United States','Matchbook Wines “Arsonist” Chardonnay','California','Chardonnay','55'],
  ['White Wine','Chardonnay: United States','Summer Dreams “The Sun Also Rises”','Sonoma Coast, California 2023','Chardonnay','240'],
  ['White Wine','Chardonnay: United States','Shafer “Red Shoulder Ranch”','Carneros, California 2023','Chardonnay','160'],
  ['White Wine','Chardonnay: United States','Chateau Montelena “Decade Re-Release”','Napa Valley, California','Chardonnay','320'],
  ['White Wine','Chardonnay: France','Domaine Laroche Grand Cru “Blanchot”','Chablis, France','Chardonnay','330'],

  // Rose
  ['Rosé Wine','France','Commanderie de Peyrassol “Réserve des Templiers”','Côtes de Provence, France 2024','Provence Rosé','70'],
  ['Rosé Wine','France','Domaine de Fenouillet Rosé','Vaucluse, France 2024','Southern Rhône Rosé','45'],
  ['Rosé Wine','Argentina','Alpasión Rosé','Mendoza, Argentina 2023','Rosé','45'],
  ['Rosé Wine','Italy','Il Poggione Rosato di Toscana IGT','Montalcino, Italy 2023','Sangiovese Rosé','60'],
  ['Rosé Wine','France','Gérard Bertrand Clos du Temple','AOP Languedoc Cabrières, France 2022','Prestige Rosé','320'],

  // Pinot Noir
  ['Red Wine','Pinot Noir: California','Walt Wines Pinot Noir','Santa Rita Hills, California 2023','Pinot Noir','95'],
  ['Red Wine','Pinot Noir: California','Melville “Terraces” Pinot Noir','Santa Rita Hills, California 2022','Pinot Noir','170'],
  ['Red Wine','Pinot Noir: California','EnRoute “Les Pommiers”','Russian River Valley, California 2023','Pinot Noir','120'],
  ['Red Wine','Pinot Noir: California','Arista “Ferrington Vineyard”','Anderson Valley, California','Pinot Noir','195'],
  ['Red Wine','Pinot Noir: California','Summer Dreams “Stargazing”','Sonoma Coast, California','Pinot Noir','120'],
  ['Red Wine','Pinot Noir: California','Paul Lato “Matinee”','Santa Barbara County, California 2024','Pinot Noir','95'],
  ['Red Wine','Pinot Noir: California','J. Davies “Nobles Vineyard”','Fort Ross-Seaview, California 2021','Pinot Noir','150'],
  ['Red Wine','Pinot Noir: California','Sea Smoke “Ten”','Sta. Rita Hills, California 2022','Pinot Noir','245'],
  ['Red Wine','Pinot Noir: California','Easton “Duarte Georgetown Vineyard”','Sierra Foothills, California 2014','Pinot Noir','99'],
  ['Red Wine','Pinot Noir: Oregon','Elk Cove Pinot Noir','Willamette Valley, Oregon 2023','Pinot Noir','70'],
  ['Red Wine','Pinot Noir: Oregon','Résonance Pinot Noir','Yamhill-Carlton, Oregon 2022','Pinot Noir','120'],
  ['Red Wine','Pinot Noir: Oregon','Bergström “Cumberland Reserve”','Willamette Valley, Oregon 2023','Pinot Noir','130'],
  ['Red Wine','Pinot Noir: Oregon','Lingua Franca “Mimi’s Mind”','Eola-Amity Hills, Oregon 2023','Pinot Noir','175'],
  ['Red Wine','Pinot Noir: Burgundy','Domaine Moissenet-Bonnard “La Cuvée de L’Oncle Paul”','Burgundy, France','Pinot Noir','80'],
  ['Red Wine','Pinot Noir: Burgundy','Vincent Girardin “Terres d’Enfance”','Burgundy, France','Pinot Noir','85'],
  ['Red Wine','Pinot Noir: Burgundy','Domaine de Cherisey 1er Cru “Les Genelotte”','Burgundy, France','Pinot Noir','330'],
  ['Red Wine','Pinot Noir: Burgundy','Domaine Moissenet-Bonnard “Les Petits Noizons”','Pommard, Burgundy','Pinot Noir','180'],
  ['Red Wine','Pinot Noir: Burgundy','Domaine Faiveley “Les Montroziers”','Nuits-Saint-Georges 2021','Pinot Noir','190'],
  ['Red Wine','Pinot Noir: Burgundy','Domaine Bruno Colin “Vieilles Vignes”','Chassagne-Montrachet 2021','Pinot Noir','190'],
  ['Red Wine','Pinot Noir: Burgundy','Domaine Coudray-Bizot 1er Cru “Les Cazetiers”','Gevrey-Chambertin, Burgundy','Pinot Noir','405'],
  ['Red Wine','Pinot Noir: Burgundy','Domaine Follin-Arbelet Grand Cru','Échezeaux 2021','Pinot Noir','280'],

  // Italy reds
  ['Red Wine','Italy: Etna','Benanti “Contrada Monte Serra”','Etna Rosso DOC, Sicily 2022','Nerello Mascalese','120'],
  ['Red Wine','Italy: Etna','Gaja “Idda”','Etna Rosso DOC, Sicily 2023','Nerello Mascalese','140'],
  ['Red Wine','Italy: Chianti / Tuscany','Bergomasso Chianti Classico Riserva','Tuscany, Italy 2018','Sangiovese','75'],
  ['Red Wine','Italy: Chianti / Tuscany','Castello di Volpaia Chianti Classico Riserva','Tuscany, Italy 2020','Sangiovese','105'],
  ['Red Wine','Italy: Super Tuscan','Bibi Graetz “Testamatta”','Toscana IGT, Italy 2020','Sangiovese','195'],
  ['Red Wine','Italy: Super Tuscan','Tenuta Sette Ponti “Crognolo”','Toscana IGT, Italy','Sangiovese / Merlot','95'],
  ['Red Wine','Italy: Super Tuscan','Gaja Ca’Marcanda “Promis”','Toscana IGT, Italy 2022','Merlot / Syrah / Sangiovese','140'],
  ['Red Wine','Italy: Super Tuscan','Azienda Agricola Cipriana “Scopaio Rosso”','Toscana IGT, Italy 2020','Cabernet Sauvignon','99'],
  ['Red Wine','Italy: Super Tuscan','Tenuta San Guido “Guidalberto”','Toscana IGT, Italy 2023','Sangiovese / Cabernet Sauvignon','195'],
  ['Red Wine','Italy: Super Tuscan','Ornellaia “Le Serre Nuove dell’Ornellaia”','Bolgheri, Italy 2022','Merlot / Cabernet / Petit Verdot / Cab Franc','165'],
  ['Red Wine','Italy: Super Tuscan','Tenuta di Arceno “Arcanum”','Bolgheri, Italy 2013','Merlot / Cabernet / Petit Verdot / Cab Franc','205'],
  ['Red Wine','Italy: Super Tuscan','Sassicaia (Tenuta San Guido)','Bolgheri Sassicaia, Italy 2022','Cabernet Sauvignon / Sangiovese','700'],
  ['Red Wine','Italy: Brunello / Central Italy','La Gerla “Gli Angeli” Brunello di Montalcino','Montalcino, Italy','Sangiovese Grosso','165'],
  ['Red Wine','Italy: Brunello / Central Italy','Canalicchio di Sopra Brunello di Montalcino','Montalcino, Italy 2019','Sangiovese Grosso','150'],
  ['Red Wine','Italy: Brunello / Central Italy','Tenute Silvio Nardi Brunello di Montalcino','Montalcino, Italy 2019','Sangiovese Grosso','165'],
  ['Red Wine','Italy: Brunello / Central Italy','Agricola Valdicava Brunello di Montalcino','Montalcino, Italy 2019','Sangiovese Grosso','475'],
  ['Red Wine','Italy: Central / South','Paolo Bea “Pipparello”','Umbria, Italy 2017','Sagrantino / Sangiovese','240'],
  ['Red Wine','Italy: Central / South','Mastroberardino “Radici” Taurasi','Campania, Italy','Aglianico','120'],

  // Rhone/malbec/other/spain
  ['Red Wine','Rhône Varietals','Ramey Syrah','Napa Valley, California 2020','Syrah','99'],
  ['Red Wine','Rhône Varietals','Terre Rouge “Garrigue”','Sierra Foothills, California 2016','Grenache / Syrah / Mourvèdre','70'],
  ['Red Wine','Rhône Varietals','Terre Rouge “Sentinel Oak Pyramid Block”','Sierra Foothills, California 1999','Syrah','175'],
  ['Red Wine','Rhône Varietals','Terre Rouge Syrah','Sierra Foothills, California 2016','Syrah','90'],
  ['Red Wine','Rhône Varietals','Domaine de la Bastide Visan','Côtes du Rhône Villages, France','Rhône red blend','60'],
  ['Red Wine','Malbec / Carmenère','Escorihuela “Single Vineyard”','Uco Valley, Mendoza, Argentina 2023','Malbec','75'],
  ['Red Wine','Malbec / Carmenère','Alpasión “Grand Malbec”','Uco Valley, Mendoza, Argentina 2020','Malbec','95'],
  ['Red Wine','Malbec / Carmenère','Montes “Purple Angel”','Colchagua, Chile 2020','Carmenère / Petit Verdot','225'],
  ['Red Wine','Other Reds & Blends','Domaine Leduc-Frouin “Somnambule”','Anjou, Loire 2021','Cabernet Franc','50'],
  ['Red Wine','Other Reds & Blends','Bodega Aleanna “Gran Enemigo Cabernet Franc”','Alto Valle de Uco, Argentina 2021','Cabernet Franc','65'],
  ['Red Wine','Other Reds & Blends','Harris Meritage','California 2021','Red Blend','80'],
  ['Red Wine','Other Reds & Blends','Beaulieu Vineyard “Tapestry”','California 2021','Bordeaux Blend','120'],
  ['Red Wine','Other Reds & Blends','Hess Collection “Lion Tamer”','Napa Valley, California 2021','Cabernet / Petite Sirah / Malbec','180'],
  ['Red Wine','Spain','Bodegas Avancia “Nobleza” Old Vines','Valdeorras DOC, Spain 2021','Mencía','70'],
  ['Red Wine','Spain','Bodegas Ramón Bilbao Crianza','Rioja, Spain 2021','Tempranillo','60'],
  ['Red Wine','Spain','Viñas Viejas de Pegaso “Zeta”','Castilla y León, Spain 2021','Garnacha','70'],
  ['Red Wine','Spain','Viñas Viejas de Pegaso “Arrebatacapas”','Castilla y León, Spain 2023','Garnacha','180'],
  ['Red Wine','Spain','Sierra Cantabria Gran Reserva','Rioja, Spain 2015','Tempranillo','99'],
  ['Red Wine','Spain','Bodegas Muga Rioja Gran Reserva “Prado Enea”','Rioja, Spain 2016','Tempranillo','205'],
  ['Red Wine','Spain','Juan Gil Family Estates Bodegas El Nido “Clio”','Jumilla, Spain 2021','Monastrell / Cabernet Sauvignon','120'],

  // Cab New World
  ['Cabernet Sauvignon & Blends','New World','Daou Family Estate','Paso Robles, California 2023','Cabernet Sauvignon','70'],
  ['Cabernet Sauvignon & Blends','New World','Alpasión Cabernet','Mendoza, Argentina 2021','Cabernet Sauvignon','55'],
  ['Cabernet Sauvignon & Blends','New World','Ferrari-Carano Cabernet Sauvignon','Alexander Valley, California 2021','Cabernet Sauvignon','80'],
  ['Cabernet Sauvignon & Blends','New World','Mullan Road Cellars','Columbia Valley, Washington 2019','Bordeaux-style blend','105'],
  ['Cabernet Sauvignon & Blends','New World','Kith & Kin by Round Pond Estate','Napa Valley, California 2022','Cabernet Sauvignon','99'],
  ['Cabernet Sauvignon & Blends','New World','Revik Wine Company “Saphi Vineyard”','Coombsville, Napa Valley, California 2019','Cabernet Sauvignon','175'],
  ['Cabernet Sauvignon & Blends','New World','Quattro Theory Cabernet Sauvignon','Napa Valley, California 2022','Cabernet Sauvignon','99'],
  ['Cabernet Sauvignon & Blends','New World','Colgin “IX Estate”','Napa Valley, California 2022','Cabernet Sauvignon blend','1375'],
  ['Cabernet Sauvignon & Blends','New World','Colgin “Tychson Hill”','Napa Valley, California 2022','Cabernet Sauvignon','1280'],
  ['Cabernet Sauvignon & Blends','New World','Faust Cabernet Sauvignon','Napa Valley, California 2022','Cabernet Sauvignon','150'],
  ['Cabernet Sauvignon & Blends','New World','Chappellet “Mountain Cuvée”','Napa Valley, California 2023','Bordeaux-style blend','105'],
  ['Cabernet Sauvignon & Blends','New World','Cakebread Cellars Cabernet Sauvignon','Napa Valley, California 2021','Cabernet Sauvignon','180'],
  ['Cabernet Sauvignon & Blends','New World','Far Niente Cabernet Sauvignon','Napa Valley, California 2022','Cabernet Sauvignon','225'],
  ['Cabernet Sauvignon & Blends','New World','Nickel & Nickel “C.C. Ranch”','Rutherford, Napa Valley, California 2022','Cabernet Sauvignon','255'],
  ['Cabernet Sauvignon & Blends','New World','Penfolds “Bin 704”','Napa Valley, California 2019','Cabernet Sauvignon','190'],
  ['Cabernet Sauvignon & Blends','New World','Quintessa','Rutherford, Napa Valley, California 2021','Bordeaux-style blend','615'],
  ['Cabernet Sauvignon & Blends','New World','Opus One','Oakville, Napa Valley, California 2022','Bordeaux-style blend','795'],
  ['Cabernet Sauvignon & Blends','New World','Joseph Phelps “Insignia”','Napa Valley, California 2019','Bordeaux-style blend','575'],
  ['Cabernet Sauvignon & Blends','New World','Schrader Cellars “Double Diamond”','Oakville, Napa Valley, California 2023','Cabernet Sauvignon','295'],
  ['Cabernet Sauvignon & Blends','New World','To Kalon Vineyard Company “Highest Beauty”','Oakville, Napa Valley, California 2022','Cabernet Sauvignon','585'],
  ['Cabernet Sauvignon & Blends','New World','Joseph Phelps “Estate”','Napa Valley, California 2021','Cabernet Sauvignon','215'],
  ['Cabernet Sauvignon & Blends','New World','Caymus Vineyards “Bonanza Lot 8”','California, multi-vintage','Cabernet Sauvignon','75'],
  ['Cabernet Sauvignon & Blends','New World','Caymus Vineyards Cabernet Sauvignon','Napa Valley, California 2023','Cabernet Sauvignon','195'],
  ['Cabernet Sauvignon & Blends','New World','The Mascot by Harlan Estate','Oakville, Napa Valley, California 2019','Cabernet Sauvignon blend','375'],
  ['Cabernet Sauvignon & Blends','New World','Fortunate Son / Hundred Acre “The Dreamer”','Napa Valley, California 2022','Cabernet Sauvignon','410'],
  ['Cabernet Sauvignon & Blends','New World','Mount Brave Cabernet Sauvignon','Mount Veeder, Napa Valley, California 2017','Cabernet Sauvignon','199'],
  ['Cabernet Sauvignon & Blends','New World','J. Davies Cabernet Sauvignon','Diamond Mountain, California 2021','Cabernet Sauvignon','210'],

  // Bordeaux
  ['Bordeaux','Right Bank','Donjon de Bruignac','Bordeaux Supérieur, France 2022','Merlot-led Bordeaux blend','75'],
  ['Bordeaux','Right Bank','Château L’Evangile','Pomerol, France 1999','Merlot / Cabernet Franc','565'],
  ['Bordeaux','Right Bank','Château Tertre de la Mouleyre Grand Cru','Saint-Émilion, France 2017','Merlot-led Bordeaux blend','185'],
  ['Bordeaux','Right Bank','Château Troplong Mondot 1er Grand Cru Classé B','Saint-Émilion, France 2017','Merlot-led Bordeaux blend','295'],
  ['Bordeaux','Right Bank','Château Ausone 1er Grand Cru Classé A','Saint-Émilion, France 2011','Cabernet Franc / Merlot','1465'],
  ['Bordeaux','Right Bank','Château Angelus 1er Grand Cru Classé A','Saint-Émilion, France 2011','Merlot / Cabernet Franc','850'],
  ['Bordeaux','Right Bank','Château Pavie 1er Grand Cru Classé A','Saint-Émilion, France 2015','Merlot-led Bordeaux blend','925'],
  ['Bordeaux','Right Bank','Château Cheval Blanc 1er Grand Cru Classé A','Saint-Émilion, France 2014','Cabernet Franc / Merlot','1100'],
  ['Bordeaux','Left Bank','Château Lascombes 2nd Growth Grand Cru Classé','Margaux, France 2011','Cabernet-led Bordeaux blend','240'],
  ['Bordeaux','Left Bank','Blason d’Issan','Margaux, France 2017','Cabernet-led Bordeaux blend','85'],
  ['Bordeaux','Left Bank','Alter Ego de Palmer','Margaux, France 2017','Cabernet-led Bordeaux blend','275'],
  ['Bordeaux','Left Bank','Château Giscours 3rd Growth Grand Cru Classé','Margaux, France 2011','Cabernet-led Bordeaux blend','225'],
  ['Bordeaux','Left Bank','Château Pape Clement','Pessac-Léognan, France 2019','Cabernet-led Bordeaux blend','285'],
  ['Bordeaux','Left Bank','Château Léoville Barton 2nd Growth Grand Cru Classé','Saint-Julien, France 2008','Cabernet-led Bordeaux blend','345'],
  ['Bordeaux','Left Bank','Château Léoville Las Cases 2nd Growth Grand Cru Classé','Saint-Julien, France 2007','Cabernet-led Bordeaux blend','640'],
  ['Bordeaux','Left Bank','Château Branaire-Ducru 4th Growth Grand Cru Classé','Saint-Julien, France 2012','Cabernet-led Bordeaux blend','185'],
  ['Bordeaux','Left Bank','Château Montrose 2nd Growth Grand Cru Classé','Saint-Estèphe, France 2015','Cabernet-led Bordeaux blend','375'],
  ['Bordeaux','Left Bank','Cos d’Estournel 2nd Growth Grand Cru Classé','Saint-Estèphe, France 2009','Cabernet-led Bordeaux blend','895'],
  ['Bordeaux','Left Bank','Château Calon-Ségur 5th Growth Grand Cru Classé','Saint-Estèphe, France 2014','Cabernet-led Bordeaux blend','399'],
  ['Bordeaux','Left Bank','Château Pontet-Canet 5th Growth Grand Cru Classé','Pauillac, France 2019','Cabernet-led Bordeaux blend','380'],
  ['Bordeaux','Left Bank','Ch. Pichon Longueville Réserve de la Comtesse','Pauillac, France 2018','Cabernet-led Bordeaux blend','195'],
  ['Bordeaux','Left Bank','Château Lynch-Bages 5th Growth Grand Cru Classé','Pauillac, France 2017','Cabernet-led Bordeaux blend','395'],
  ['Bordeaux','Left Bank','Château Lafite Rothschild 1st Growth Grand Cru Classé','Pauillac, France 1998','Cabernet-led Bordeaux blend','2200'],

  // Formats & dessert
  ['Large Format Bottles','Champagne','Pierre Brigandat Brut Blanc des Noirs 1.5L','Aube, Champagne NV','Champagne Blanc de Noirs','180'],
  ['Large Format Bottles','Pinot Noir','Sea Smoke “Ten” 1.5L','Sta. Rita Hills, California 2023','Pinot Noir','525'],
  ['Large Format Bottles','Pinot Noir','Domaine Petitot “Les Posets” 1.5L','Nuits-Saint-Georges, France 2022','Pinot Noir','199'],
  ['Large Format Bottles','Pinot Noir','Domaine Ponsot Grand Cru “Cuvée Vieilles Vignes” 1.5L','Clos de la Roche, France 2017','Pinot Noir','2500'],
  ['Large Format Bottles','Nebbiolo','Sandrone “Aleste” 1.5L','Barolo, Italy 2019','Nebbiolo','625'],
  ['Large Format Bottles','Sangiovese / Super Tuscan','Bibi Graetz “Testamatta” 3L','Toscana IGT, Italy 2018','Sangiovese','940'],
  ['Large Format Bottles','Sangiovese / Super Tuscan','Tenuta San Guido “Guidalberto” 3L','Toscana IGT, Italy 2022','Sangiovese / Cabernet Sauvignon','695'],
  ['Large Format Bottles','Sangiovese / Super Tuscan','La Gerla “Vigna gli Angeli” 1.5L','Brunello di Montalcino, Italy 2004','Sangiovese Grosso','580'],
  ['Large Format Bottles','Sangiovese / Super Tuscan','Tenuta Luce “Luce” 1.5L','Toscana IGT, Italy 2022','Sangiovese / Merlot','399'],
  ['Large Format Bottles','Cabernet','Far Niente Cabernet Sauvignon 1.5L','Alexander Valley, California 2022','Cabernet Sauvignon','499'],
  ['Large Format Bottles','Cabernet','Nickel & Nickel “Home Ranch” 1.5L','Yountville, Napa Valley, California 2021','Cabernet Sauvignon','540'],
  ['Large Format Bottles','Cabernet','Caymus Vineyards Cabernet Sauvignon 3.0L','Napa Valley, California 2023','Cabernet Sauvignon','1050'],
  ['Large Format Bottles','Cabernet','Mount Veeder Winery 1.5L','Napa Valley, California 2022','Cabernet Sauvignon','305'],
  ['Small Format Bottles','Sparkling','Clotilde Davenne Crémant de Bourgogne','Chablis, France NV','Crémant','40'],
  ['Small Format Bottles','Sparkling','Domaine Ruinart Brut Rosé','Reims, Champagne NV','Champagne Rosé','120'],
  ['Small Format Bottles','White','Domaine Laroche “St. Martin”','Chablis, France 2023','Chardonnay','60'],
  ['Small Format Bottles','White','Pride Mountain Chardonnay','Napa, California 2022','Chardonnay','70'],
  ['Small Format Bottles','Red','Bergström “Cumberland Reserve”','Willamette Valley, Oregon 2023','Pinot Noir','70'],
  ['Small Format Bottles','Red','Gaja Barbaresco','Piedmont, Italy 2022','Nebbiolo','310'],
  ['Small Format Bottles','Red','Ca’Marcanda / Gaja “Maugeri”','Bolgheri, Italy 2023','Super Tuscan','110'],
  ['Small Format Bottles','Red','Pieve Santa Restituta Brunello di Montalcino','Montalcino, Italy 2020','Sangiovese Grosso','125'],
  ['Small Format Bottles','Red','Grgich Hills Estate Cabernet Sauvignon','Napa Valley, California 2022','Cabernet Sauvignon','95'],
  ['Sweet & Fortified Wines','Port','Fonseca Ruby Port 750ml','Porto, Portugal NV','Ruby Port','75'],
  ['Sweet & Fortified Wines','Port','Taylor Fladgate 20 Year Old Tawny Porto 750ml','Porto, Portugal NV','Tawny Port','135'],
  ['Sweet & Fortified Wines','Sweet','Royal Tokaji “5 Puttonyos Aszú” 500ml','Tokaj, Hungary 2018','Furmint dessert wine','120'],
  ['Sweet & Fortified Wines','Sweet','Alvear Pedro Ximénez “Solera 1927” 375ml','Montilla-Moriles, Spain NV','Pedro Ximénez Sherry','70'],
  ['Sweet & Fortified Wines','Sweet','Schmitt Söhne Wines Beerenauslese 500ml','Rheinhessen, Germany 2015','Riesling Beerenauslese','65'],
  ['Sweet & Fortified Wines','Sweet','Icardi “Suri Vigin” 375ml','Piemonte, Italy 2021','Brachetto','50'],
  ['Sweet & Fortified Wines','Sweet','Château Rieussec “Carmes de Rieussec” 375ml','Bordeaux, France 2020','Sémillon dessert wine','90'],
  ['Sweet & Fortified Wines','Sweet','Château d’Yquem 750ml','Bordeaux, France 2009','Sémillon / Sauvignon Blanc','999'],
  ['Sweet & Fortified Wines','Sweet','Château d’Yquem 375ml','Bordeaux, France 2010','Sémillon / Sauvignon Blanc','645'],
];

const profileMap = {
  'Champagne': ['bright citrus, green apple, brioche, chalk, and fine bubbles','crisp and lifted with lemon curd, toast, mineral snap, and a clean finish'],
  'Crémant': ['fresh apple, lemon blossom, almond, and soft bakery notes','refreshing and easy-drinking with gentle bubbles and a clean citrus finish'],
  'Prosecco': ['pear, white flowers, peach, and a light fresh-bread note','soft bubbles, juicy orchard fruit, and a friendly off-dry impression'],
  'Riesling': ['lime zest, green apple, white peach, jasmine, and wet slate','high-acid, mouthwatering, with citrus, stone fruit, and a mineral finish'],
  'Gewürztraminer': ['rose petal, lychee, ginger, peach, and exotic spice','lush and aromatic with ripe tropical fruit, spice, and a rounded finish'],
  'Sauvignon Blanc': ['grapefruit, lime, gooseberry, fresh herbs, and flinty mineral','zesty and refreshing with citrus, green fruit, and a snappy mineral edge'],
  'Chardonnay': ['yellow apple, lemon cream, pear, vanilla, and toasted hazelnut','medium to full-bodied with orchard fruit, creamy texture, and balanced acidity'],
  'Pinot Noir': ['red cherry, raspberry, rose, tea leaf, forest floor, and baking spice','silky and elegant with red fruit, gentle tannin, and earthy complexity'],
  'Sangiovese': ['sour cherry, red plum, dried herbs, leather, violet, and tomato leaf','savory and lively with red fruit, firm acidity, and food-friendly tannin'],
  'Sangiovese Grosso': ['black cherry, dried rose, tobacco, leather, and Tuscan herbs','structured and savory with dark red fruit, earthy spice, and a long finish'],
  'Nebbiolo': ['rose, tar, cherry, licorice, truffle, and dried herbs','powerful yet lifted with high tannin, bright acidity, and layered red fruit'],
  'Cabernet Sauvignon': ['blackcurrant, cassis, blackberry, cedar, graphite, and cocoa','full-bodied with dark fruit, polished tannin, and a long structured finish'],
  'Cabernet-led Bordeaux blend': ['cassis, black plum, cedar, tobacco, graphite, and violet','structured and age-worthy with dark fruit, savory earth, and firm tannins'],
  'Merlot-led Bordeaux blend': ['plum, black cherry, cocoa, violet, tobacco, and clay-earth tones','supple and plush with rounded tannin, dark fruit, and savory depth'],
  'Syrah': ['blackberry, blueberry, cracked pepper, smoked meat, and violet','full and savory with dark fruit, pepper spice, and a smoky finish'],
  'Malbec': ['black plum, blackberry, violet, cocoa, and warm spice','plush and dark-fruited with smooth tannins and a juicy finish'],
  'Carmenère / Petit Verdot': ['blackberry, pepper, cocoa, herbs, and purple flowers','deep, velvety, and spicy with dark fruit and firm structure'],
  'Tempranillo': ['red cherry, dried fig, vanilla, tobacco, dill, and leather','smooth and savory with red fruit, oak spice, and balanced tannin'],
  'Garnacha': ['ripe strawberry, raspberry liqueur, white pepper, and herbs','generous and warm with juicy red fruit, spice, and soft tannin'],
  'Port': ['black cherry, raisin, chocolate, fig, and sweet spice','rich and sweet with fortified warmth, dense fruit, and a lingering finish'],
  'Tawny Port': ['caramel, walnut, dried apricot, fig, toffee, and orange peel','sweet, nutty, and silky with dried fruit and warm oxidative complexity'],
};

function priceBand(price) {
  const p = Number(price);
  if (p < 100) return 'Less than $100';
  if (p < 200) return '$100–$200';
  if (p < 300) return '$200–$300';
  if (p < 400) return '$300–$400';
  if (p < 500) return '$400–$500';
  return '$500+';
}

function regionHint(region) {
  const r = region.toLowerCase();
  if (r.includes('champagne')) return 'Champagne’s cool climate and chalky soils keep bubbles bright, mineral, and built for celebrations.';
  if (r.includes('napa') || r.includes('oakville') || r.includes('rutherford')) return 'Napa Valley sunshine brings ripe fruit and power; benches and mountain sites add structure, cedar, and polished tannin.';
  if (r.includes('bordeaux') || r.includes('saint') || r.includes('pauillac') || r.includes('margaux') || r.includes('pomerol')) return 'Bordeaux is shaped by gravel, clay, limestone, and maritime weather; Left Bank leans Cabernet structure, Right Bank leans Merlot/Cab Franc plushness.';
  if (r.includes('burgundy') || r.includes('chablis') || r.includes('nuits') || r.includes('échezeaux') || r.includes('georges')) return 'Burgundy is terroir-driven: limestone and marl soils create wines that speak through texture, minerality, and subtle aromatics.';
  if (r.includes('willamette') || r.includes('oregon')) return 'Willamette Valley’s cool climate protects acidity and gives Pinot Noir lifted red fruit, forest-floor nuance, and elegance.';
  if (r.includes('tuscany') || r.includes('montalcino') || r.includes('bolgheri') || r.includes('toscana')) return 'Tuscan sun, hills, and marine influence build savory reds with cherry fruit, herbs, grip, and food-loving acidity.';
  if (r.includes('mendoza') || r.includes('uco')) return 'High-altitude Mendoza brings intense sunlight and cool nights, producing deep fruit, freshness, and polished tannins.';
  if (r.includes('alsace') || r.includes('mosel') || r.includes('finger lakes')) return 'Cool-climate sites preserve acidity and aromatics, making these whites vivid, fragrant, and mineral-driven.';
  if (r.includes('sancerre') || r.includes('loire')) return 'Loire Valley whites and reds are all about freshness, mineral tension, and clean aromatic lift.';
  if (r.includes('rioja')) return 'Rioja combines Tempranillo fruit with oak-aged spice, leather, and savory balance.';
  return 'The region gives this wine its structure: climate controls ripeness, soil shapes texture, and tradition guides style.';
}

function funFact(w) {
  const n = w.name.toLowerCase();
  const r = w.region.toLowerCase();
  if (n.includes('opus')) return 'Opus One is the famous Napa partnership between Robert Mondavi and Baron Philippe de Rothschild of Mouton Rothschild.';
  if (n.includes('lafite')) return 'Lafite Rothschild is one of Bordeaux’s five First Growth estates from the 1855 Classification.';
  if (n.includes('yquem')) return 'Château d’Yquem is the legendary sweet wine of Sauternes and is famous for noble-rot concentration and longevity.';
  if (n.includes('sassicaia')) return 'Sassicaia helped create the Super Tuscan movement and earned its own DOC, Bolgheri Sassicaia.';
  if (n.includes('cheval blanc')) return 'Cheval Blanc is unusual for Bordeaux because Cabernet Franc plays a starring role alongside Merlot.';
  if (n.includes('quintessa')) return 'Quintessa is a single-estate Rutherford wine known for organic/biodynamic farming and Bordeaux-style blending.';
  if (r.includes('new jersey')) return 'New Jersey’s Warren Hills AVA is one of the state’s official wine regions, giving the list a local-study hook.';
  if (r.includes('champagne')) return 'Only sparkling wine from Champagne, France can legally be called Champagne.';
  if (r.includes('barolo') || w.varietal.includes('Nebbiolo')) return 'Nebbiolo gets its name from “nebbia,” Italian for fog, a common sight in Piedmont vineyards.';
  return 'A strong table-side move is to connect the wine’s region and grape to a guest’s preferred body, fruit, and texture.';
}

function salesLine(w) {
  const price = Number(w.price);
  if (price >= 500) return `A collector-level bottle for guests who want a centerpiece wine: ${w.name} brings prestige, depth, and a story worth slowing down for.`;
  if (w.category.includes('Sparkling')) return `A lively opener: ${w.name} is perfect for celebrations, seafood, first courses, or guests who want something crisp and festive.`;
  if (w.category.includes('Sweet')) return `A beautiful closer: ${w.name} turns dessert, cheese, or a final toast into a memorable finish.`;
  if (w.varietal.includes('Cabernet') || w.category.includes('Bordeaux')) return `A confident steakhouse-style recommendation: ${w.name} gives guests dark fruit, structure, and a serious bottle experience.`;
  if (w.varietal.includes('Pinot')) return `A graceful red for guests who want elegance over weight: ${w.name} delivers aromatic red fruit and silky texture.`;
  if (w.category.includes('White') || w.category.includes('Rosé')) return `A bright, food-friendly choice: ${w.name} keeps the table refreshed while adding a clear regional story.`;
  return `A conversation bottle: ${w.name} is a smart way to guide guests toward something distinctive, food-friendly, and memorable.`;
}

function overview(w) {
  return `${w.name} is a ${w.varietal} from ${w.region}. Use it when a guest asks for ${w.category.includes('White') || w.category.includes('Rosé') || w.category.includes('Sparkling') ? 'freshness, lift, and a clean pairing path' : 'depth, texture, and a bottle with presence'}.`;
}

export const wines = rawWines.map((row, idx) => {
  const [category, subcategory, name, region, varietal, price] = row;
  const exact = profileMap[varietal] || Object.entries(profileMap).find(([k]) => varietal.includes(k))?.[1] || ['red and black fruit, florals, spice, and mineral notes','balanced fruit, texture, acidity, and a clean finish'];
  const wine = { id: `${idx+1}-${name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}`, category, subcategory, name, region, varietal, price: Number(price) };
  return {
    ...wine,
    priceBand: priceBand(price),
    imageKind: 'study-label-art',
    imageAlt: `${name} study bottle illustration`,
    studyStatus: 'Profile-based draft pending bottle-source fine-comb',
    salesLine: salesLine(wine),
    funFact: funFact(wine),
    terroir: regionHint(region),
    nose: exact[0],
    palate: exact[1],
    overview: overview(wine),
  };
});

export const priceBands = ['All prices','Less than $100','$100–$200','$200–$300','$300–$400','$400–$500','$500+'];
export const categories = ['All categories', ...Array.from(new Set(wines.map(w => w.category)))];
