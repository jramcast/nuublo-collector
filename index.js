const collectTweets = require('./collect/tweets');
const collectCurrentConditions = require('./collect/currentConditions');

const options = {
    twitter: {
        track: 'colaboradoresdeltiempo,tiempobrasero,Tiempo_Mercedes,mitiempoen,@AEMET,#AEMET,radar tormenta,radar precipitacion,radar copos,' +
                'radar nieve,radar nevando,radar granizo,radar rayos,radar chubascos,radar aemet,sinobas,ecazatormentas,la que esta cayendo nieve,' +
                'la que esta cayendo lluvia,la que esta cayendo granizo,la que esta cayendo tormenta,la que esta cayendo rayos,' +
                'nevando copazos,nieve cuajando,Meteodemallorca,@NWSSPC,metoffice,manera de llover,manera de nevar,@eltiempoes,' +
                'MeteoAlbaceteDR,cumulonimbus tormenta,@SpainStormPred,@spainsevere,banda de precipitacion,frente precipitacion,' +
                'lloviendo, nevando, granizando, tormenta relampagos',
        follow: '89707859,1857150498,310806928,1060403089,1095547530,760166790,767056579745185793,767043893661724672,2544227706,' + 
                '424217382,4038086236,3837113362,2190647784,1588390848,2939588943,1696460815,1190035932,115183451,590060558,1337011070,' +
                '16117029,427643966,58203491,973903266,567089833,229066643,767056579745185793,87376791,248149823,2238882655,' +
                '344712910,1076408665,140000155,1196554356,293556004,125396474,270624733,45581271,556410699,2362469894,552223095,3398333033,' +
                '21706413,798016597,212931502,2864517358,359893504,555711818,249060435,746400355949383680,762974004391112704,1263826782,' +
                '188685493'
    },  
    wunderground: {
        places: [
            'madrid spain',
            'barcelona spain',
            'albacete spain',
            'palma de mallorca spain',
            'palmanova spain',
            'valencia spain',
            'sevilla spain',
            'zaragoza spain',
            'london uk',
            'new york city'
        ]
    }
    
}

collectTweets(options.twitter);
collectCurrentConditions(options.wunderground);