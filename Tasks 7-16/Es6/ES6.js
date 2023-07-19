 //task 1
 function compareObj(obj1 , obj2){
    let obj1keys = Object.keys(obj1);
    let obj2keys = Object.keys(obj2);
    for(let i in obj1keys){
      if(!obj2keys.includes(obj1keys[i])){
        console.log("they are not equivalent")
        return false;
      }
    }
    console.log("they are indeed equivalent")
    return true
  }

  //task 2
  function Copy(){
    navigator.clipboard.writeText('NevEr gOnNa GivE yOu uP nEVer gOnNa LeT yOu doWN')
  }

  //task 3 
  //a csv sample for testing 
  let csv = `id,first_name,last_name,email,gender,ip_address
  1,Brig,Haggerston,bhaggerston0@wunderground.com,Polygender,197.165.75.193
  2,Fanya,Flegg,fflegg1@163.com,Female,236.225.196.152
  3,Ede,Chantrell,echantrell2@google.de,Female,159.167.219.121
  4,Kalvin,Elkington,kelkington3@elpais.com,Male,182.148.11.40
  5,Giorgia,Grigsby,ggrigsby4@over-blog.com,Female,197.73.143.153
  6,Farris,Dimmick,fdimmick5@oaic.gov.au,Polygender,195.253.182.161
  7,Moe,Wilcot,mwilcot6@seattletimes.com,Agender,0.188.250.164
  8,Ingemar,Scanlan,iscanlan7@infoseek.co.jp,Polygender,174.132.48.151
  9,Kirsti,Dommersen,kdommersen8@geocities.com,Female,11.94.210.113
  10,Margaux,Weatherburn,mweatherburn9@biglobe.ne.jp,Female,209.15.90.15
  11,Teena,Lynn,tlynna@google.co.jp,Female,137.165.201.160
  12,Rora,Melluish,rmelluishb@google.de,Female,18.81.217.178
  13,Willie,Billanie,wbillaniec@wordpress.com,Male,217.171.51.203
  14,Arnoldo,Lutas,alutasd@angelfire.com,Male,59.129.227.83
  15,Wald,Drakers,wdrakerse@squarespace.com,Male,235.182.237.102
  16,Melania,Clapp,mclappf@cdbaby.com,Female,158.230.87.137
  17,Barton,Brownsea,bbrownseag@tumblr.com,Male,199.94.33.126
  18,Luisa,McFadzean,lmcfadzeanh@slideshare.net,Female,91.244.31.202
  19,Marney,Tremayne,mtremaynei@rakuten.co.jp,Female,211.98.136.149
  20,Oswald,Cray,ocrayj@liveinternet.ru,Male,21.224.163.213
  21,Aurelie,Stonary,astonaryk@barnesandnoble.com,Female,245.125.3.122
  22,Nigel,Elderkin,nelderkinl@springer.com,Male,78.248.44.150
  23,Dominga,Amoss,damossm@blogtalkradio.com,Bigender,242.11.19.59
  24,Lena,Domleo,ldomleon@discuz.net,Female,192.5.180.146
  25,Niven,Brunstan,nbrunstano@thetimes.co.uk,Male,144.159.14.68
  26,Myrtie,Steedman,msteedmanp@arstechnica.com,Female,205.187.217.186
  27,Fredric,Haye,fhayeq@blogspot.com,Male,96.173.43.107
  28,Devy,Bonaire,dbonairer@noaa.gov,Male,10.18.91.129
  29,Bernadine,Leaf,bleafs@dagondesign.com,Non-binary,40.185.112.148
  30,Morena,Spink,mspinkt@hc360.com,Female,247.199.60.156
  31,Burlie,Feldhorn,bfeldhornu@i2i.jp,Male,31.65.202.126
  32,Corissa,Lapish,clapishv@mozilla.org,Female,178.54.49.152
  33,Wain,McGreal,wmcgrealw@wunderground.com,Male,59.188.34.152
  34,Rosalyn,Brunicke,rbrunickex@stumbleupon.com,Female,104.208.55.97
  35,Sissie,Cory,scoryy@uol.com.br,Female,59.178.86.161
  36,Foster,Brussell,fbrussellz@nationalgeographic.com,Male,72.226.13.234
  37,Casper,McVeigh,cmcveigh10@google.cn,Male,36.248.103.63
  38,Aaren,Goodred,agoodred11@newsvine.com,Female,148.228.223.41
  39,Myrtle,O'Crevan,mocrevan12@desdev.cn,Female,244.177.199.70
  40,Sissy,Yeend,syeend13@google.fr,Female,126.227.36.190
  41,Sibeal,Bakhrushin,sbakhrushin14@msn.com,Female,142.136.208.27
  42,Faina,Roseborough,froseborough15@cpanel.net,Female,196.220.9.23
  43,Waylin,Philpin,wphilpin16@4shared.com,Male,254.199.105.182
  44,Pyotr,Allcott,pallcott17@altervista.org,Male,39.56.130.113
  45,Jessica,Poat,jpoat18@mtv.com,Female,156.124.179.106
  46,Hoyt,McKnish,hmcknish19@t-online.de,Male,187.54.79.74
  47,Pru,Wheelband,pwheelband1a@ox.ac.uk,Female,159.158.13.140
  48,Matthias,Segot,msegot1b@yahoo.co.jp,Male,224.72.129.137
  49,Cleo,Sinncock,csinncock1c@shop-pro.jp,Female,185.28.224.172
  50,Nessa,More,nmore1d@goodreads.com,Female,234.105.74.163
  51,Joela,Harradence,jharradence1e@forbes.com,Female,96.127.67.136
  52,Irwinn,Dowrey,idowrey1f@nih.gov,Male,24.1.119.16
  53,Cristin,Dalman,cdalman1g@ovh.net,Female,19.177.122.168
  54,Vivien,Britney,vbritney1h@stanford.edu,Female,99.202.181.125
  55,Vinny,Payze,vpayze1i@bizjournals.com,Female,213.214.250.233
  56,Lauree,Mitchiner,lmitchiner1j@bluehost.com,Female,212.97.235.254
  57,Raff,Isakov,risakov1k@free.fr,Male,253.77.105.177
  58,Marney,Alessandrelli,malessandrelli1l@moonfruit.com,Female,236.74.93.136
  59,Edvard,Niemiec,eniemiec1m@yelp.com,Male,71.1.207.130
  60,Morna,Hurkett,mhurkett1n@wix.com,Female,92.26.226.130
  61,Kaja,Genge,kgenge1o@dell.com,Polygender,196.188.241.33
  62,Kessia,Arundel,karundel1p@hc360.com,Female,112.85.132.197
  63,Kennedy,Davis,kdavis1q@mozilla.com,Male,214.15.175.46
  64,Josephine,Roseaman,jroseaman1r@who.int,Female,23.199.112.219
  65,Shayne,Gosalvez,sgosalvez1s@pen.io,Female,156.39.207.177
  66,Sayer,Ogg,sogg1t@php.net,Male,15.240.211.183
  67,Nikoletta,Liell,nliell1u@themeforest.net,Female,64.132.58.62
  68,Gabbie,Whitmore,gwhitmore1v@nationalgeographic.com,Male,157.30.164.110
  69,Richardo,Stallworth,rstallworth1w@msu.edu,Male,55.157.52.152
  70,Logan,Alywen,lalywen1x@seesaa.net,Male,212.250.191.142
  71,Rosy,Pencost,rpencost1y@ustream.tv,Female,204.180.47.74
  72,Kylen,Kettlesing,kkettlesing1z@tripod.com,Female,78.97.81.8
  73,Muffin,Cutmore,mcutmore20@yolasite.com,Polygender,194.121.81.106
  74,Virge,Oates,voates21@cnet.com,Male,244.157.222.18
  75,Deloris,Kellet,dkellet22@list-manage.com,Female,28.188.138.24
  76,Amandy,Hirthe,ahirthe23@bravesites.com,Agender,185.76.91.188
  77,Edgar,Estcot,eestcot24@odnoklassniki.ru,Male,68.216.102.101
  78,Ernestine,Brownett,ebrownett25@1688.com,Female,75.29.204.9
  79,Owen,Severs,osevers26@barnesandnoble.com,Male,76.213.229.69
  80,Abdel,Hannaby,ahannaby27@t.co,Male,98.179.182.175
  81,Sybille,Fosse,sfosse28@mtv.com,Female,197.134.138.2
  82,Cloe,Russon,crusson29@engadget.com,Female,237.124.99.100
  83,Creight,Auchterlony,cauchterlony2a@i2i.jp,Male,100.165.96.235
  84,Rozele,Swait,rswait2b@rediff.com,Female,11.0.38.93
  85,Kermit,Greenall,kgreenall2c@tinypic.com,Genderqueer,150.212.248.130
  86,Joli,Otterwell,jotterwell2d@columbia.edu,Female,138.218.107.243
  87,Steward,Merrien,smerrien2e@lycos.com,Male,219.172.12.0
  88,Orin,Cluett,ocluett2f@wiley.com,Genderqueer,107.179.20.243
  89,Tiffanie,Hew,thew2g@webeden.co.uk,Female,102.72.253.239
  90,Oren,Yurenev,oyurenev2h@washingtonpost.com,Male,174.137.125.123
  91,Mellie,Tolomelli,mtolomelli2i@oaic.gov.au,Female,59.250.241.229
  92,Zahara,Farlamb,zfarlamb2j@marriott.com,Female,22.216.89.185
  93,Mervin,Setterington,msetterington2k@webnode.com,Male,224.179.127.193
  94,Brade,Tixier,btixier2l@homestead.com,Male,197.52.19.53
  95,Edwin,Aseef,easeef2m@indiatimes.com,Male,143.196.186.107
  96,Tate,Hillock,thillock2n@stanford.edu,Female,62.145.133.199
  97,Giuditta,Pridham,gpridham2o@ucla.edu,Female,134.119.212.130
  98,Waylin,Purnell,wpurnell2p@skype.com,Male,171.224.167.212
  99,Jedediah,Ahrend,jahrend2q@1und1.de,Male,132.67.95.75
  100,Garnette,Blackburne,gblackburne2r@wix.com,Female,196.213.178.182
  `
 function csvTo2DArray(str){
    return str.split('\n').map(e => e.split(','))
  }

  //task 4
  // Excersice 7: Write a JavaScript program to converts a specified number to an array of digits
  function NumberToArray(n){
    return `${n}`.split('').map(Number)
  }

  //task 5
  // Excersice 8: Write a JavaScript program to filter out the specified values from an specified array. Return the original array without the filtered values. 
  function filterOut(n,...ar){
    return n.filter(e => ar.includes(e)? null : e)
  }

  //task 6 
  // Excersice 10: Write a JavaScript program to extract out the values at the specified indexes from an specified array. 
  function extract(arr,is){
    return arr.filter((e , i)=>is.includes(i) ? e:null)
  }

  //task 7 
  // Excersice 11: Write a JavaScript program to generate a random hexadecimal color code. 
  function randColor(){
    let c = Math.random() * 999999 // my approach
    c = (Math.random() * 0xfffff * 100000).toString(16) //best solution 
    return `#${c.slice(0,6)}`
  }

  //task 8
  //Excersice 20: Write a JavaScript program to extend a 3-digit color code to a 6-digit color code. 
  function extend(str){
    return "#"+str.slice(1).split('').map(e => e.repeat(2)).join("")
  }
  console.log(extend('#03f'))

  //task 9
  // Excersice 21: Write a JavaScript program to get every nth element in an given array. 
  function nth(ar , n){
    return ar.filter((e,i) => i % n == n-1 && i != 0)
  }

  //task 10
  // Excersice 22:Write a JavaScript program to filter out the non-unique values in an array. 
  function unique(ar){
    return ar.filter(e => ar.filter(e2 => e2 == e).length <= 1 )
  }

  //task 11
  // Excersice 24: Write a JavaScript program to dcapitalize the first letter of a string. 
  function decapitalize(...str){
    return str.map(e => `${e[0].toLowerCase()}${e.slice(1)}`)
  }

  //task 12
  // Excersice 25: Write a JavaScript program to create a new array out of the two supplied by creating each possible pair from the arrays. 
  function arrayPairs(arr,arr1){
    return arr.map(e => arr1.map(e1 => [e,e1])).flat()
  }

  //task 13
  // Excersice 26: Write a JavaScript program that will return true if the string is y/yes or false if the string is n/no. 
  function confirmation(str){
    return str === 'y'||str ==='yes' ? true : str === 'n' || str ==='no' ? false : false
  }

  //task 14
  // Excersice 33: Write a JavaScript program to get a random number in the specified range. 
  function randomNumber(s , e){
    return Math.random() * (e - s) + s
  }

  //task 15
  // Excersice 34: Write a JavaScript program to get a random integer in the specified range. 
  function randomNumberInt(s , e){
    return Math.floor(Math.random() * (e - s) + s)
  }
  
  //task 16
  // Excersice 35: Write a JavaScript program to get an array of given n random integers in the specified range. 
  function randArray(n , min ,max){
    return Array.from({length: n}, (v,i) => randomNumberInt(min , max))
  }
  
  //task 17
  // Excersice 32: Write a JavaScript program to get the sum of an given array, after mapping each element to a value using the provided function. 
  function sum(arr , func){
    return arr
    .map(func)
    .reduce((a,b) => a + b)
  }

  //task 18
  // Excersice 40: Write a JavaScript program to create an array of key-value pair arrays from an given object. 
  function ObjToArray(obj = {}){
    let a = []
    for(i in obj){
      a.push([i,obj[i]])
    }
    return a
  }
