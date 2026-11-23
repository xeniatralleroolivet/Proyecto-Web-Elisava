
'use strict';
/* Las notas pendientes se representan con null. */
const registros = [
  {
    "fecha": "2026-04-12",
    "km": 5.53,
    "ritmo": "12:40",
    "kudos": 2,
    "comentario": "HORRIBLE estaba muerta. gran parte andando. he vuelto en bus",
    "lectura": "dificil",
    "visibilidad": null,
    "id": 1,
    "datosHoja": [
      [
        "FECHA",
        "12 abril"
      ],
      [
        "KM",
        "5,53"
      ],
      [
        "RITMO MEDIO",
        "12:40/km"
      ],
      [
        "RITMO PROMEDIO",
        "12:40/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "43:26:00"
      ],
      [
        "TIEMPO TOTAL",
        "57:24:00"
      ],
      [
        "DESNIVEL",
        "6 m"
      ],
      [
        "ZONA",
        "Barceloneta"
      ]
    ]
  },
  {
    "fecha": "2026-04-26",
    "km": 6.76,
    "ritmo": "7:51",
    "kudos": 0,
    "comentario": "mejor de lo que me esperaba 😎",
    "lectura": "agradable",
    "visibilidad": null,
    "id": 2,
    "datosHoja": [
      [
        "FECHA",
        "26 abril"
      ],
      [
        "KM",
        "6,76"
      ],
      [
        "RITMO MEDIO",
        "7:51/km"
      ],
      [
        "RITMO PROMEDIO",
        "8:7/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "53:56:00"
      ],
      [
        "TIEMPO TOTAL",
        "1:16"
      ],
      [
        "DESNIVEL",
        "10 m"
      ],
      [
        "ZONA",
        "Bonanova"
      ]
    ]
  },
  {
    "fecha": "2026-04-28",
    "km": 9.03,
    "ritmo": "7:37",
    "kudos": 1,
    "comentario": "tiempo total 1h33m. 20 minutos de pausa: beber agua, esperar semaforos y paradita técnica en la fib para hacer pipi",
    "lectura": "neutro",
    "visibilidad": null,
    "id": 3,
    "datosHoja": [
      [
        "FECHA",
        "28 abril"
      ],
      [
        "KM",
        "9,03"
      ],
      [
        "RITMO MEDIO",
        "7:37/km"
      ],
      [
        "RITMO PROMEDIO",
        "10:29/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "1:08:52"
      ],
      [
        "TIEMPO TOTAL",
        "1:34:45"
      ],
      [
        "DESNIVEL",
        "92 m"
      ],
      [
        "ZONA",
        "Bonanva"
      ]
    ]
  },
  {
    "fecha": "2026-05-29",
    "km": 7.01,
    "ritmo": "7:16",
    "kudos": 1,
    "comentario": "vuelta al running MUY DURA 🥵🥵🥵🥵🥵🥵 subida con ferros zz",
    "lectura": "dificil",
    "visibilidad": null,
    "id": 4,
    "datosHoja": [
      [
        "FECHA",
        "29 mayo"
      ],
      [
        "KM",
        "7,01"
      ],
      [
        "RITMO MEDIO",
        "7:16/km"
      ],
      [
        "RITMO PROMEDIO",
        "9:55/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "50:56:00"
      ],
      [
        "TIEMPO TOTAL",
        "1:09:35"
      ],
      [
        "DESNIVEL",
        "25 m"
      ],
      [
        "ZONA",
        "Bonanova - Diagonal"
      ]
    ]
  },
  {
    "fecha": "2026-05-31",
    "km": 5.22,
    "ritmo": "6:44",
    "kudos": 0,
    "comentario": "MUCHÍSIMO CALOR 🥵🥵 ha sido horrible\nno hay momento donde no quisiera matarme JAJAJAJAJAJJAJA\npero buen entrenamiento",
    "lectura": "mixto",
    "visibilidad": null,
    "id": 5,
    "datosHoja": [
      [
        "FECHA",
        "31 mayo"
      ],
      [
        "KM",
        "5,22 ida"
      ],
      [
        "RITMO MEDIO",
        "6:44/km"
      ],
      [
        "RITMO PROMEDIO",
        "10:39/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "35:09:00"
      ],
      [
        "TIEMPO TOTAL",
        "55:41:00"
      ],
      [
        "DESNIVEL",
        "16 m"
      ],
      [
        "ZONA",
        "Barceloneta"
      ]
    ]
  },
  {
    "fecha": "2026-05-31",
    "km": 3.53,
    "ritmo": "8:12",
    "kudos": 0,
    "tramo": "vuelta",
    "comentario": "DURA X 2\nhe subido en metro desde drassanes-vallcarca\nhe corrido hasta casa\nME CAGO X2 🥵🥵🥵🥵🥵",
    "lectura": "dificil",
    "visibilidad": null,
    "id": 6,
    "datosHoja": [
      [
        "KM",
        "3,53 vuelta"
      ],
      [
        "RITMO MEDIO",
        "8:12/km"
      ],
      [
        "RITMO PROMEDIO",
        "15:33/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "29:00:00"
      ],
      [
        "TIEMPO TOTAL",
        "55:00:00"
      ],
      [
        "DESNIVEL",
        "35 m"
      ],
      [
        "ZONA",
        "Barceloneta"
      ]
    ]
  },
  {
    "fecha": "2026-06-05",
    "km": 6,
    "ritmo": "6:54",
    "kudos": 0,
    "comentario": "de chill\nhe parado bastante poco, por lo que contenta 👍🏼",
    "lectura": "agradable",
    "visibilidad": null,
    "id": 7,
    "datosHoja": [
      [
        "FECHA",
        "5 junio"
      ],
      [
        "KM",
        "6"
      ],
      [
        "RITMO MEDIO",
        "6:54/km"
      ],
      [
        "RITMO PROMEDIO",
        "8:24/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "41:28:00"
      ],
      [
        "TIEMPO TOTAL",
        "50:30:00"
      ],
      [
        "DESNIVEL",
        "25 m"
      ],
      [
        "ZONA",
        "Bonanova"
      ]
    ]
  },
  {
    "fecha": "2026-06-10",
    "km": 6.3,
    "ritmo": "6:45",
    "kudos": 1,
    "comentario": "una ruta de la puta mierda 🤣\nme he encontrado un gatito por el camino 😋",
    "lectura": "neutro",
    "visibilidad": null,
    "id": 8,
    "datosHoja": [
      [
        "FECHA",
        "10 junio"
      ],
      [
        "KM",
        "6,3"
      ],
      [
        "RITMO MEDIO",
        "6:45/km"
      ],
      [
        "RITMO PROMEDIO",
        "10:50/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "42:32:00"
      ],
      [
        "TIEMPO TOTAL",
        "1:08:15"
      ],
      [
        "DESNIVEL",
        "90 m"
      ],
      [
        "ZONA",
        "Bonanova"
      ]
    ]
  },
  {
    "fecha": "2026-06-16",
    "km": 8.04,
    "ritmo": "6:42",
    "kudos": 1,
    "comentario": "buen ritmo\nparando lo necesario 🥵\n(estoy reventada me duele muchisimo la espalda ns de que)",
    "lectura": "mixto",
    "visibilidad": null,
    "id": 9,
    "datosHoja": [
      [
        "FECHA",
        "16 junio"
      ],
      [
        "KM",
        "8,04"
      ],
      [
        "RITMO MEDIO",
        "6:42/km"
      ],
      [
        "RITMO PROMEDIO",
        "8:16/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "53:48:00"
      ],
      [
        "TIEMPO TOTAL",
        "1:06:28"
      ],
      [
        "DESNIVEL",
        "15 m"
      ],
      [
        "ZONA",
        "Bonanova - Diagonal"
      ]
    ]
  },
  {
    "fecha": "2026-06-20",
    "km": 6.26,
    "ritmo": "6:36",
    "kudos": 1,
    "comentario": "running con elena 🙌🏼🙌🏼💗\ndándole mucho al pico como siempre 🥴🌟🎀",
    "lectura": "neutro",
    "visibilidad": null,
    "id": 10,
    "datosHoja": [
      [
        "FECHA",
        "20 junio"
      ],
      [
        "KM",
        "6,26"
      ],
      [
        "RITMO MEDIO",
        "6:36/km"
      ],
      [
        "RITMO PROMEDIO",
        "12:03/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "41:20:00"
      ],
      [
        "TIEMPO TOTAL",
        "1:15:35"
      ],
      [
        "DESNIVEL",
        "8 m"
      ],
      [
        "ZONA",
        "Bonanova - Diagonal"
      ]
    ]
  },
  {
    "fecha": "2026-06-22",
    "km": 2.63,
    "ritmo": "6:19",
    "kudos": 0,
    "comentario": "UNA PUTA MIERDA COMO UNA CASA 💩\nFATAL\nCALORRRO INFERNAL\nODIO CORRER CON PANTALON CORTO",
    "lectura": "dificil",
    "visibilidad": null,
    "id": 11,
    "datosHoja": [
      [
        "FECHA",
        "22 junio"
      ],
      [
        "KM",
        "2,63"
      ],
      [
        "RITMO MEDIO",
        "6:19/km"
      ],
      [
        "RITMO PROMEDIO",
        "11:17/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "16:38"
      ],
      [
        "TIEMPO TOTAL",
        "29:45:00"
      ],
      [
        "DESNIVEL",
        "12 m"
      ],
      [
        "ZONA",
        "Bonanova"
      ]
    ]
  },
  {
    "fecha": "2026-06-26",
    "km": 5.03,
    "ritmo": "6:44",
    "kudos": 1,
    "comentario": "putas amas in the morning 🏃🏻‍♀️🌟🙌🏼\ntoma ya\nrapidísimos\npim pam",
    "lectura": "agradable",
    "visibilidad": null,
    "id": 12,
    "datosHoja": [
      [
        "FECHA",
        "26 junio"
      ],
      [
        "KM",
        "5,03"
      ],
      [
        "RITMO MEDIO",
        "6:44/km"
      ],
      [
        "RITMO PROMEDIO",
        "8:03/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "34:25:00"
      ],
      [
        "TIEMPO TOTAL",
        "40:50:00"
      ],
      [
        "DESNIVEL",
        "0 m"
      ],
      [
        "ZONA",
        "Paseo de Palamós"
      ]
    ]
  },
  {
    "fecha": "2026-06-29",
    "km": 8.1,
    "ritmo": "6:19",
    "kudos": 0,
    "comentario": "voy a tener que comprarme cosas cada día para ir a este ritmo 🙌🏼🎀\nropa nueva 🎀\nbambas nuevas 🎀\ny calcetines nuevos 🎀\n\niba a un ritmo de 6 poco que ni yo me lo creía\ndefinitivamente son las bambas nuevas 🌟🪽\nvoy a tener que pillarle el ritmo porque sino me muero 🫁🫀🥵",
    "lectura": "mixto",
    "visibilidad": null,
    "id": 13,
    "datosHoja": [
      [
        "STRAVA",
        "PEAK"
      ],
      [
        "FECHA",
        "29 junio"
      ],
      [
        "KM",
        "8,1"
      ],
      [
        "RITMO MEDIO",
        "6:19/km"
      ],
      [
        "RITMO PROMEDIO",
        "9:34/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "51:11:00"
      ],
      [
        "TIEMPO TOTAL",
        "1:17:29"
      ],
      [
        "DESNIVEL",
        "22 m"
      ],
      [
        "ZONA",
        "Bonanova - Diagonal"
      ]
    ]
  },
  {
    "fecha": "2026-07-01",
    "km": 4.03,
    "ritmo": "6:19",
    "kudos": 0,
    "comentario": "una bromita 🥲🤣\nhoy ha costado un poquito más\ncenita de premio",
    "lectura": "mixto",
    "visibilidad": null,
    "id": 14,
    "datosHoja": [
      [
        "FECHA",
        "1 julio"
      ],
      [
        "KM",
        "4,03"
      ],
      [
        "RITMO MEDIO",
        "6:19/km"
      ],
      [
        "RITMO PROMEDIO",
        "8:24/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "25:28:00"
      ],
      [
        "TIEMPO TOTAL",
        "33:53:00"
      ],
      [
        "DESNIVEL",
        "3 m"
      ],
      [
        "ZONA",
        "Mitre - Diagonal"
      ]
    ]
  },
  {
    "fecha": "2026-07-13",
    "km": 5.02,
    "ritmo": "6:30",
    "kudos": 1,
    "comentario": "por el puerto de santa maría 💪🏼\ngood\nmucho viento en contra por eso 😪💔",
    "lectura": "neutro",
    "visibilidad": null,
    "id": 15,
    "datosHoja": [
      [
        "FECHA",
        "13 julio"
      ],
      [
        "KM",
        "5,02"
      ],
      [
        "RITMO MEDIO",
        "6:30/km"
      ],
      [
        "RITMO PROMEDIO",
        "9:33/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "32:40:00"
      ],
      [
        "TIEMPO TOTAL",
        "48:03:00"
      ],
      [
        "DESNIVEL",
        "26 m"
      ],
      [
        "ZONA",
        "Puerto de Santa María"
      ]
    ]
  },
  {
    "fecha": "2026-07-20",
    "km": 5.6,
    "ritmo": "6:27",
    "kudos": 1,
    "comentario": "estar de viaje y salir de fiesta pasan factura 🆘\nmuy dura la vuelta al running 🥵\nMUCHISIMO CALOR estaba CHORREANDO BESTIA 😭\ntan duro que pensaba que me plantaba a los 4k\nno he llegado ni a la fuente de cervantes",
    "lectura": "dificil",
    "visibilidad": null,
    "id": 16,
    "datosHoja": [
      [
        "FECHA",
        "20 julio"
      ],
      [
        "KM",
        "5,6"
      ],
      [
        "RITMO MEDIO",
        "6:27/km"
      ],
      [
        "RITMO PROMEDIO",
        "9:15/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "36:11:00"
      ],
      [
        "TIEMPO TOTAL",
        "51:54:00"
      ],
      [
        "DESNIVEL",
        "37 m"
      ],
      [
        "ZONA",
        "Bonanova"
      ]
    ]
  },
  {
    "fecha": "2026-07-21",
    "km": 3.21,
    "ritmo": "6:30",
    "kudos": 0,
    "comentario": "una putita mierda 💩\nestaba reventada 🤣\nse me ha liado la cosa 🍻",
    "lectura": "dificil",
    "visibilidad": null,
    "id": 17,
    "datosHoja": [
      [
        "FECHA",
        "21 julio"
      ],
      [
        "KM",
        "3,21"
      ],
      [
        "RITMO MEDIO",
        "6:30/km"
      ],
      [
        "RITMO PROMEDIO",
        "9:25/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "20:53"
      ],
      [
        "TIEMPO TOTAL",
        "30:15:00"
      ],
      [
        "DESNIVEL",
        "8 m"
      ],
      [
        "ZONA",
        "Bonanova - Via Augusta"
      ]
    ]
  },
  {
    "fecha": "2026-07-29",
    "km": 10.61,
    "ritmo": "6:36",
    "kudos": 0,
    "comentario": "PRIMEROS 10K 🌟🌟🌟🌟🌟\nSACADOS DE LA MANGA 💪🏼\nhace días que no corro y me estaba sintiendo fatal, no tenía auriculares, xou\nhe empezado a un ritmo muy bajo e he ido haciendo hasta el final\nLO CONSEGUIMOS 🤸🏼‍♀️🕺🏼🌟💗🥳🩷",
    "lectura": "agradable",
    "visibilidad": null,
    "id": 18,
    "datosHoja": [
      [
        "STRAVA",
        "PEAK"
      ],
      [
        "FECHA",
        "29 julio"
      ],
      [
        "KM",
        "10,61"
      ],
      [
        "RITMO MEDIO",
        "6:36/km"
      ],
      [
        "RITMO PROMEDIO",
        "7:58/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "1 h 09:57"
      ],
      [
        "TIEMPO TOTAL",
        "1h 24:36"
      ],
      [
        "DESNIVEL",
        "18 m"
      ],
      [
        "ZONA",
        "Bonanova - Diagonal - PG"
      ]
    ]
  },
  {
    "fecha": "2026-08-04",
    "km": 1.23,
    "ritmo": "6:47",
    "kudos": 0,
    "comentario": "una mierdecilla por islandia 😭🇮🇸\nno había una buena ruta para correr\nsolo un senderito muy mono",
    "lectura": "mixto",
    "visibilidad": null,
    "id": 19,
    "datosHoja": [
      [
        "FECHA",
        "4 agosto"
      ],
      [
        "KM",
        "1,23"
      ],
      [
        "RITMO MEDIO",
        "6:47/km"
      ],
      [
        "RITMO PROMEDIO",
        "8:24/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "8:23"
      ],
      [
        "TIEMPO TOTAL",
        "10:23"
      ],
      [
        "DESNIVEL",
        "57 m"
      ],
      [
        "ZONA",
        "Islandia"
      ]
    ]
  },
  {
    "fecha": "2026-08-09",
    "km": 5.14,
    "ritmo": "6:41",
    "kudos": 0,
    "comentario": "horrible correr en agosto por bcn 💀💔 no podía con mi vida",
    "lectura": "dificil",
    "visibilidad": null,
    "id": 20,
    "datosHoja": [
      [
        "FECHA",
        "9 agosto"
      ],
      [
        "KM",
        "5,14"
      ],
      [
        "RITMO MEDIO",
        "6:41/km"
      ],
      [
        "RITMO PROMEDIO",
        "10:44/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "34:22:00"
      ],
      [
        "TIEMPO TOTAL",
        "55:17:00"
      ],
      [
        "DESNIVEL",
        "15 m"
      ],
      [
        "ZONA",
        "Bonanova"
      ]
    ]
  },
  {
    "fecha": "2026-08-13",
    "km": 5.08,
    "ritmo": "6:43",
    "kudos": 0,
    "comentario": "cabo verde nenas 😛🙈",
    "lectura": "neutro",
    "visibilidad": null,
    "id": 21,
    "datosHoja": [
      [
        "FECHA",
        "13 agosto"
      ],
      [
        "KM",
        "5,08"
      ],
      [
        "RITMO MEDIO",
        "6:43/km"
      ],
      [
        "RITMO PROMEDIO",
        "9:34/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "34:10:00"
      ],
      [
        "TIEMPO TOTAL",
        "47:43:00"
      ],
      [
        "DESNIVEL",
        "3 m"
      ],
      [
        "ZONA",
        "Cabo Verde"
      ]
    ]
  },
  {
    "fecha": "2026-08-15",
    "km": 2.4,
    "ritmo": "7:26",
    "kudos": 1,
    "comentario": "mi daddy ha sido obligado a ir andando conmigo 🤣💗\nHORRIBLE MUCHISIMO CALOR\nUN FOKING DESIERTO\nno podía más 💀",
    "lectura": "dificil",
    "visibilidad": null,
    "id": 22,
    "datosHoja": [
      [
        "FECHA",
        "15 agosto"
      ],
      [
        "KM",
        "2,4"
      ],
      [
        "RITMO MEDIO",
        "7:26 /km"
      ],
      [
        "RITMO PROMEDIO",
        "18:29/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "17:51"
      ],
      [
        "TIEMPO TOTAL",
        "36:40:00"
      ],
      [
        "DESNIVEL",
        "3 m"
      ],
      [
        "ZONA",
        "Cabo Verde"
      ]
    ]
  },
  {
    "fecha": "2026-08-29",
    "km": 4.2,
    "ritmo": "6:36",
    "kudos": 0,
    "comentario": "poco a poco 🤞🏼🍀🌟\ndespués de un mes de comilonas y sin correr prácticamente, volvemos al running 🙌🏼 🏃🏻‍♀️\nobjetivo: entrenar para una carrera 10k oficial 😛😛😛😛😛",
    "lectura": "neutro",
    "visibilidad": null,
    "id": 23,
    "datosHoja": [
      [
        "FECHA",
        "29 agosto"
      ],
      [
        "KM",
        "4,2"
      ],
      [
        "RITMO MEDIO",
        "6:36 /km"
      ],
      [
        "RITMO PROMEDIO",
        "8:43/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "27:45:00"
      ],
      [
        "TIEMPO TOTAL",
        "36:40:00"
      ],
      [
        "DESNIVEL",
        "17 m"
      ],
      [
        "ZONA",
        "Bonanova"
      ]
    ]
  },
  {
    "fecha": "2026-08-31",
    "km": 6.04,
    "ritmo": "6:23",
    "kudos": 0,
    "comentario": "VAMOS 💪🏼\nse empieza a notar la temperatura más fresquita!!!\nsubidita andando para recuperar 😛 (2k)",
    "lectura": "agradable",
    "visibilidad": null,
    "id": 24,
    "datosHoja": [
      [
        "FECHA",
        "31 agosto"
      ],
      [
        "KM",
        "6,04"
      ],
      [
        "RITMO MEDIO",
        "6:23 /km"
      ],
      [
        "RITMO PROMEDIO",
        "9:02/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "38:37:00"
      ],
      [
        "TIEMPO TOTAL",
        "54:35:00"
      ],
      [
        "DESNIVEL",
        "23 m"
      ],
      [
        "ZONA",
        "Bonanova - Diagonal"
      ]
    ]
  },
  {
    "fecha": "2026-09-02",
    "km": 4,
    "ritmo": "6:40",
    "kudos": 0,
    "comentario": "un poco dead",
    "lectura": "dificil",
    "visibilidad": null,
    "id": 25,
    "datosHoja": [
      [
        "FECHA",
        "2 septiembre"
      ],
      [
        "KM",
        "4 km"
      ],
      [
        "RITMO MEDIO",
        "6:40/km"
      ],
      [
        "RITMO PROMEDIO",
        "-"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "30:00:00"
      ],
      [
        "TIEMPO TOTAL",
        "48:40:00"
      ],
      [
        "DESNIVEL",
        "-"
      ],
      [
        "ZONA",
        "Gym Cinta"
      ]
    ]
  },
  {
    "fecha": "2026-09-06",
    "km": 6.19,
    "ritmo": "6:37",
    "kudos": 0,
    "comentario": "CAGANDOME ENCIMA 💩 (literal)\nhoy he cambiado de ruta y he hecho inversa 🆒😎 aunque parándome bastante que tenía mucho calor!!!\nal final me estaba dando un apretón 💩😭🤣",
    "lectura": "mixto",
    "visibilidad": null,
    "id": 26,
    "datosHoja": [
      [
        "FECHA",
        "6 septiembre"
      ],
      [
        "KM",
        "6,19"
      ],
      [
        "RITMO MEDIO",
        "6:37/km"
      ],
      [
        "RITMO PROMEDIO",
        "10:51/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "40:58:00"
      ],
      [
        "TIEMPO TOTAL",
        "1:07:17"
      ],
      [
        "DESNIVEL",
        "65 m"
      ],
      [
        "ZONA",
        "M Girona - Bonanova"
      ]
    ]
  },
  {
    "fecha": "2026-09-09",
    "km": 5,
    "ritmo": "6:29",
    "kudos": 1,
    "comentario": "1. 6.39/km\n2. 6:27/km\n3. 6:14/km\n4. 6.39/km\n5. 6:27/km",
    "lectura": "neutro",
    "visibilidad": null,
    "id": 27,
    "datosHoja": [
      [
        "FECHA",
        "9 septiembre"
      ],
      [
        "KM",
        "5"
      ],
      [
        "RITMO MEDIO",
        "6:29/km"
      ],
      [
        "RITMO PROMEDIO",
        "-"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "-"
      ],
      [
        "TIEMPO TOTAL",
        "41:24:00"
      ],
      [
        "DESNIVEL",
        "0 m"
      ],
      [
        "ZONA",
        "Gym Cinta"
      ]
    ]
  },
  {
    "fecha": "2026-09-12",
    "km": 5.05,
    "ritmo": "7:00",
    "kudos": 0,
    "comentario": "de tranquis 😎 investigando a ver como funciona mi nuevo reloj",
    "lectura": "neutro",
    "visibilidad": null,
    "id": 28,
    "datosHoja": [
      [
        "FECHA",
        "12 septiembre"
      ],
      [
        "KM",
        "5,05"
      ],
      [
        "RITMO MEDIO",
        "7:00 /km"
      ],
      [
        "RITMO PROMEDIO",
        "13:00/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "35:23:00"
      ],
      [
        "TIEMPO TOTAL",
        "1:05:41"
      ],
      [
        "DESNIVEL",
        "17 m"
      ],
      [
        "ZONA",
        "L'Escala"
      ]
    ]
  },
  {
    "fecha": "2026-09-13",
    "km": 6.14,
    "ritmo": "7:00",
    "kudos": 0,
    "comentario": "con el daddy 😝💗🙌🏼🌟😋",
    "lectura": "neutro",
    "visibilidad": null,
    "id": 29,
    "datosHoja": [
      [
        "FECHA",
        "13 septiembre"
      ],
      [
        "KM",
        "6,14"
      ],
      [
        "RITMO MEDIO",
        "7:00/km"
      ],
      [
        "RITMO PROMEDIO",
        "10:24/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "43:02:00"
      ],
      [
        "TIEMPO TOTAL",
        "1:03:55"
      ],
      [
        "DESNIVEL",
        "33 m"
      ],
      [
        "ZONA",
        "L'Escala"
      ]
    ]
  },
  {
    "fecha": "2026-09-15",
    "km": 6.64,
    "ritmo": "6:20",
    "kudos": 0,
    "comentario": "buenas sensaciones 🫰🫰🫰🫰😋😋😋😋\ncon ganas de empezar el training enseriooo!!!!",
    "lectura": "agradable",
    "visibilidad": null,
    "id": 30,
    "datosHoja": [
      [
        "FECHA",
        "15 septiembre"
      ],
      [
        "KM",
        "6,64"
      ],
      [
        "RITMO MEDIO",
        "6:20 /km"
      ],
      [
        "RITMO PROMEDIO",
        "8:37/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "42:06:00"
      ],
      [
        "TIEMPO TOTAL",
        "57:16:00"
      ],
      [
        "DESNIVEL",
        "11 m"
      ],
      [
        "ZONA",
        "M girona - Diagonal"
      ]
    ]
  },
  {
    "fecha": "2026-09-17",
    "km": 5.31,
    "ritmo": "6:38",
    "kudos": 2,
    "comentario": "bien! solo que me ha empezado a doler la rodilla cuando arrancaba la carrera 😭",
    "lectura": "dificil",
    "visibilidad": null,
    "id": 31,
    "datosHoja": [
      [
        "FECHA",
        "17 semptiembre"
      ],
      [
        "KM",
        "5,31"
      ],
      [
        "RITMO MEDIO",
        "6:38/km"
      ],
      [
        "RITMO PROMEDIO",
        "9:04/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "35:14:00"
      ],
      [
        "TIEMPO TOTAL",
        "48:10:00"
      ],
      [
        "DESNIVEL",
        "13 m"
      ],
      [
        "ZONA",
        "Barceloneta"
      ]
    ]
  },
  {
    "fecha": "2026-09-21",
    "km": 8.01,
    "ritmo": "6:01",
    "kudos": 2,
    "comentario": "una fiera 💨💨💨💨💨💨\nhoy me he visto MUY MUY BIEN!!! 💪🏼 VAMOS",
    "lectura": "agradable",
    "visibilidad": null,
    "id": 32,
    "datosHoja": [
      [
        "STRAVA",
        "PEAK"
      ],
      [
        "FECHA",
        "21 septiembre"
      ],
      [
        "KM",
        "8,01"
      ],
      [
        "RITMO MEDIO",
        "6:01/km"
      ],
      [
        "RITMO PROMEDIO",
        "7:58/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "48:09:00"
      ],
      [
        "TIEMPO TOTAL",
        "1:03:52"
      ],
      [
        "DESNIVEL",
        "6 m"
      ],
      [
        "ZONA",
        "Bonanova - Diagonal"
      ]
    ]
  },
  {
    "fecha": "2026-09-23",
    "km": 7.08,
    "ritmo": "6:02",
    "kudos": 3,
    "comentario": "xexe bolt 💨💨💨💨\n(cañita inesperada de recompensa 😋😋😋😋😋)",
    "lectura": "agradable",
    "visibilidad": null,
    "id": 33,
    "datosHoja": [
      [
        "FECHA",
        "23 septiembre"
      ],
      [
        "KM",
        "7,08"
      ],
      [
        "RITMO MEDIO",
        "6:02/km"
      ],
      [
        "RITMO PROMEDIO",
        "7:50/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "42:44:00"
      ],
      [
        "TIEMPO TOTAL",
        "55:29:00"
      ],
      [
        "DESNIVEL",
        "12 m"
      ],
      [
        "ZONA",
        "Mitre - Diagonal"
      ]
    ]
  },
  {
    "fecha": "2026-09-26",
    "km": 4.05,
    "ritmo": "6:30",
    "kudos": 1,
    "comentario": "que gozada pillar todo semáforos verdes!!!! 🟢🟢🟢🟢🟢🟢🟢",
    "lectura": "agradable",
    "visibilidad": null,
    "id": 34,
    "datosHoja": [
      [
        "FECHA",
        "26 septiembre"
      ],
      [
        "KM",
        "4,05"
      ],
      [
        "RITMO MEDIO",
        "6:30/km"
      ],
      [
        "RITMO PROMEDIO",
        "6:48/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "26:20:00"
      ],
      [
        "TIEMPO TOTAL",
        "27:34:00"
      ],
      [
        "DESNIVEL",
        "16 m"
      ],
      [
        "ZONA",
        "Bonanova"
      ]
    ]
  },
  {
    "fecha": "2026-09-28",
    "km": 5.35,
    "ritmo": "6:18",
    "kudos": 1,
    "comentario": "una caca como una casa 🫰\n2,6 km por carretera (horrible)\ny luego todo de bajada (aún más terrible 🤣)",
    "lectura": "dificil",
    "visibilidad": null,
    "id": 35,
    "datosHoja": [
      [
        "FECHA",
        "28 septiembre"
      ],
      [
        "KM",
        "5,35"
      ],
      [
        "RITMO MEDIO",
        "6:18/km"
      ],
      [
        "RITMO PROMEDIO",
        "10:14/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "33:44:00"
      ],
      [
        "TIEMPO TOTAL",
        "54:43:00"
      ],
      [
        "DESNIVEL",
        "4 m"
      ],
      [
        "ZONA",
        "Carretera - Via Augusta"
      ]
    ]
  },
  {
    "fecha": "2026-09-30",
    "km": 8.06,
    "ritmo": "6:07",
    "kudos": 4,
    "comentario": "actividad 50 😋😋😋😋🫰\nahora soy una short ponitail girl 🎀\nel km 7 a 8 ha sido CRIMINAL",
    "lectura": "mixto",
    "visibilidad": null,
    "id": 36,
    "datosHoja": [
      [
        "FECHA",
        "30 septiembre"
      ],
      [
        "KM",
        "8,06"
      ],
      [
        "RITMO MEDIO",
        "6:07/km"
      ],
      [
        "RITMO PROMEDIO",
        "7:47/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "49:25:00"
      ],
      [
        "TIEMPO TOTAL",
        "1:02:51"
      ],
      [
        "DESNIVEL",
        "21 m"
      ],
      [
        "ZONA",
        "Bonanova - Diagonal"
      ]
    ]
  },
  {
    "fecha": "2026-10-02",
    "km": 1.8,
    "ritmo": "6:18",
    "kudos": 3,
    "comentario": "RE MAL",
    "lectura": "dificil",
    "visibilidad": null,
    "id": 37,
    "datosHoja": [
      [
        "FECHA",
        "2 octubre"
      ],
      [
        "KM",
        "1,8"
      ],
      [
        "RITMO MEDIO",
        "6:18/km"
      ],
      [
        "RITMO PROMEDIO",
        "8:27/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "11:22"
      ],
      [
        "TIEMPO TOTAL",
        "15:15"
      ],
      [
        "DESNIVEL",
        "0 m"
      ],
      [
        "ZONA",
        "Bonanova - Anglí"
      ]
    ]
  },
  {
    "fecha": "2026-10-06",
    "km": 6.03,
    "ritmo": "5:53",
    "kudos": 2,
    "comentario": "rápido porque me estaba cagando 🤣🤣🤣💪🏼",
    "lectura": "neutro",
    "visibilidad": null,
    "id": 38,
    "datosHoja": [
      [
        "STRAVA",
        "PEAK"
      ],
      [
        "FECHA",
        "6 octubre"
      ],
      [
        "KM",
        "6,03"
      ],
      [
        "RITMO MEDIO",
        "5:53/km"
      ],
      [
        "RITMO PROMEDIO",
        "7:28/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "35:29:00"
      ],
      [
        "TIEMPO TOTAL",
        "45:02:00"
      ],
      [
        "DESNIVEL",
        "0 m"
      ],
      [
        "ZONA",
        "Mitre - Diagonal"
      ]
    ]
  },
  {
    "fecha": "2026-10-08",
    "km": 3.11,
    "ritmo": "6:09",
    "kudos": 2,
    "comentario": "me he tenido que plantar\nmi rodilla chilla HELP!!!! 🩼",
    "lectura": "dificil",
    "visibilidad": null,
    "id": 39,
    "datosHoja": [
      [
        "FECHA",
        "8 octubre"
      ],
      [
        "KM",
        "3,11"
      ],
      [
        "RITMO MEDIO",
        "6:09/km"
      ],
      [
        "RITMO PROMEDIO",
        "8:21/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "19:09"
      ],
      [
        "TIEMPO TOTAL",
        "26:01:00"
      ],
      [
        "DESNIVEL",
        "14 m"
      ],
      [
        "ZONA",
        "Bonanova"
      ]
    ]
  },
  {
    "fecha": "2026-10-11",
    "km": 10.03,
    "ritmo": "6:35",
    "kudos": 6,
    "comentario": "xen nonstop 💨\n(reduro +++ mil kilos del chalequito con agua) no he parado ni un segundo!!! 💪🏼💪🏼💪🏼",
    "lectura": "mixto",
    "visibilidad": null,
    "id": 40,
    "datosHoja": [
      [
        "STRAVA",
        "PEAK"
      ],
      [
        "FECHA",
        "11 octubre"
      ],
      [
        "KM",
        "10,03"
      ],
      [
        "RITMO MEDIO",
        "6:35/km"
      ],
      [
        "RITMO PROMEDIO",
        "6:35/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "1 h 06:00"
      ],
      [
        "TIEMPO TOTAL",
        "1 h 06:00"
      ],
      [
        "DESNIVEL",
        "19 m"
      ],
      [
        "ZONA",
        "Barceloneta"
      ]
    ]
  },
  {
    "fecha": "2026-10-13",
    "km": 5.17,
    "ritmo": "5:51",
    "kudos": 3,
    "comentario": "a ritmo 💪🏼",
    "lectura": "neutro",
    "visibilidad": null,
    "id": 41,
    "datosHoja": [
      [
        "STRAVA",
        "PEAK"
      ],
      [
        "FECHA",
        "13 octubre"
      ],
      [
        "KM",
        "5,17"
      ],
      [
        "RITMO MEDIO",
        "5:51/km"
      ],
      [
        "RITMO PROMEDIO",
        "9:15/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "30:19:00"
      ],
      [
        "TIEMPO TOTAL",
        "47:55:00"
      ],
      [
        "DESNIVEL",
        "75 m"
      ],
      [
        "ZONA",
        "Diagonal - Bonanova"
      ]
    ]
  },
  {
    "fecha": "2026-10-16",
    "km": 8.03,
    "ritmo": "6:22",
    "kudos": 2,
    "comentario": "como este finde llueve he salido hoy pero estaba recansada 💔🩼🦵\nsiento que no me ha rentado nada bajar a la playa, parándome una barbaridad la verdad (4) 😭😭🥹🥹\nun calor aparte!!! pero MUY BUEN SUNSET ESO SII",
    "lectura": "mixto",
    "visibilidad": null,
    "id": 42,
    "datosHoja": [
      [
        "FECHA",
        "16 octubre"
      ],
      [
        "KM",
        "8,03"
      ],
      [
        "RITMO MEDIO",
        "6:22 /km"
      ],
      [
        "RITMO PROMEDIO",
        "6:56/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "51:05:00"
      ],
      [
        "TIEMPO TOTAL",
        "55:42:00"
      ],
      [
        "DESNIVEL",
        "19 m"
      ],
      [
        "ZONA",
        "Barceloneta"
      ]
    ]
  },
  {
    "fecha": "2026-10-20",
    "km": 6.28,
    "ritmo": "6:25",
    "kudos": 6,
    "comentario": "easyrun",
    "lectura": "neutro",
    "visibilidad": null,
    "id": 43,
    "datosHoja": [
      [
        "FECHA",
        "20 octubre"
      ],
      [
        "KM",
        "6,28"
      ],
      [
        "RITMO MEDIO",
        "6:25/km"
      ],
      [
        "RITMO PROMEDIO",
        "7:58/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "40:19:00"
      ],
      [
        "TIEMPO TOTAL",
        "50:05:00"
      ],
      [
        "DESNIVEL",
        "61 m"
      ],
      [
        "ZONA",
        "Mitre - Diagonal - Bona"
      ]
    ]
  },
  {
    "fecha": "2026-10-22",
    "km": 6.54,
    "ritmo": "6:19",
    "kudos": 2,
    "comentario": "con mi sheila 🎀🌟",
    "lectura": "neutro",
    "visibilidad": null,
    "id": 44,
    "datosHoja": [
      [
        "FECHA",
        "22 octubre"
      ],
      [
        "KM",
        "6,54"
      ],
      [
        "RITMO MEDIO",
        "6:19/km"
      ],
      [
        "RITMO PROMEDIO",
        "10:11/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "41:21:00"
      ],
      [
        "TIEMPO TOTAL",
        "1 h 06:37"
      ],
      [
        "DESNIVEL",
        "75 m"
      ],
      [
        "ZONA",
        "Diagonal - Bonanova"
      ]
    ]
  },
  {
    "fecha": "2026-10-28",
    "km": 8.04,
    "ritmo": "6:13",
    "kudos": 5,
    "comentario": "vamos 💪🏼🔜\nno hay día que salga a correr y no se me revuelva el estómago 😵‍💫💩\n(he estado unos días descansanso y tengo bastante mejor la rodilla 🤸🏻‍♀️)",
    "lectura": "dificil",
    "visibilidad": null,
    "id": 45,
    "datosHoja": [
      [
        "FECHA",
        "28 octubre"
      ],
      [
        "KM",
        "8,04"
      ],
      [
        "RITMO MEDIO",
        "6:13/km"
      ],
      [
        "RITMO PROMEDIO",
        "7:28/km"
      ],
      [
        "TIEMPO MOVIMIENTO",
        "49:58:00"
      ],
      [
        "TIEMPO TOTAL",
        "1h 00"
      ],
      [
        "DESNIVEL",
        "21 m"
      ],
      [
        "ZONA",
        "Bonanova - Diagonal"
      ]
    ]
  }
];
const $ = id => document.getElementById(id);
const meses = ['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE'];
const mesesCortos = ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'];
const codigo = {
  agradable:{nombre:'Bienestar', color:'#ef846d',lectura:'Fragmento interpretado como una vivencia agradable.'},
  dificil:{nombre:'Dificultad', color:'#8ab1d0',lectura:'El comentario menciona una dificultad, dolor o esfuerzo.'},
  mixto:{nombre:'Sensación mixta', color:'#b6a7cb',lectura:'El comentario combina señales o sensaciones distintas.'},
  neutro:{nombre:'Rutina / contexto', color:'#a9ba9a',lectura:'Comentario descriptivo sin una emoción inequívoca.'},
  sin_registro:{nombre:'Sin lectura emocional', color:'#b7bcb4',lectura:'El registro no permite identificar una sensación con suficiente claridad.'}
};
const fmt = n => Number(n).toLocaleString('es-ES',{maximumFractionDigits:2,minimumFractionDigits:2});
const rand = n => {const x=Math.sin(n*129.13+88.23)*43758.5453;return x-Math.floor(x);};
const E = (name,attrs,parent) => {const e=document.createElementNS('http://www.w3.org/2000/svg',name);Object.entries(attrs||{}).forEach(([k,v])=>e.setAttribute(k,String(v)));(parent||$('archiveViz')).appendChild(e);return e;};
function shapePath(cx,cy,r,seed,roughness=.37){
  const points=[];const N=11;
  for(let i=0;i<N;i++) {const angle=-Math.PI/2+i*Math.PI*2/N,rad=r*(1-roughness/2+roughness*rand(seed*23+i*7));points.push([cx+Math.cos(angle)*rad,cy+Math.sin(angle)*rad]);}
  const mid=(a,b)=>[(a[0]+b[0])/2,(a[1]+b[1])/2];
  const xy=p=>p.map(v=>v.toFixed(2)).join(' ');
  let d='M '+xy(mid(points[N-1],points[0]));
  for(let j=0;j<N;j++) d+=' Q '+xy(points[j])+' '+xy(mid(points[j],points[(j+1)%N]));
  return d+' Z';
}

/* 00 — Experimento. Tres salidas documentadas. */
const casos = registros.slice(0, 3).map((salida, indice) => ({
  texto: salida.comentario,
  km: fmt(salida.km) + ' km',
  ritmo: salida.ritmo,
  kudos: String(salida.kudos),
  reflejo: 'Ahora que conoces las cifras, ¿cambiarías tu decisión?',
  color: ['#8ab1d0', '#ef846d', '#a9ba9a'][indice]
}));
let casoActual=0;
let respuestas=[null,null,null];
function dibujarCaso(){
  const c=casos[casoActual];
  $('scenarioText').textContent=c.texto;
  $('scenarioNumber').textContent=`HISTORIA ${String(casoActual+1).padStart(2,'0')} / 03 · SIN MÉTRICAS`;
  $('stepDots').innerHTML=casos.map((_,i)=>`<i class="${i<=casoActual?'active':''}"></i>`).join('');
  $('stepDots').setAttribute('aria-label',`Historia ${casoActual+1} de 3`);
  const svg=$('scenarioSketch');svg.replaceChildren();
  E('path',{d:'M10 82 C65 10 100 115 150 51 S265 103 330 23',stroke:c.color,'stroke-width':9,fill:'none','stroke-linecap':'round'},svg);
  E('path',{d:'M12 26 C76 105 105 18 164 77 S252 29 325 90',stroke:'#35413c','stroke-width':2,fill:'none','stroke-dasharray':'3 9','stroke-linecap':'round',opacity:.7},svg);
  E('circle',{cx:150,cy:51,r:6,fill:'#282e2a'},svg);
  $('reveal').hidden=true;$('expEnd').hidden=true;
  document.querySelectorAll('[data-answer]').forEach(b=>{b.classList.remove('selected');b.setAttribute('aria-pressed','false');});
  if(respuestas[casoActual]) mostrarRevelacion(respuestas[casoActual]);
}
function mostrarRevelacion(answer){
  const c=casos[casoActual];
  $('expKm').textContent=c.km;$('expPace').textContent=c.ritmo;$('expKudos').textContent=c.kudos;
  $('expReflection').textContent=c.reflejo;
  const labels={si:'Publicaría',no:'No publicaría',depende:'Depende'};
  $('personalAnswer').textContent=labels[answer];
  document.querySelectorAll('[data-answer]').forEach(b=>{const on=b.dataset.answer===answer;b.classList.toggle('selected',on);b.setAttribute('aria-pressed',String(on));});
  $('reveal').hidden=false;
  $('nextCase').hidden=casoActual===casos.length-1;
  if(casoActual===casos.length-1){
    const yes=respuestas.filter(x=>x==='si').length,no=respuestas.filter(x=>x==='no').length,depends=respuestas.filter(x=>x==='depende').length;
    $('expSummary').textContent=`De estas tres experiencias, compartirías ${yes}, no compartirías ${no} y en ${depends} caso(s) dependería del contexto. No hay una respuesta ideal: lo importante es preguntarte qué ha influido en cada elección. Ahora puedes contrastarlo con mis registros reales.`;
    $('expEnd').hidden=false;
  }
}
document.querySelectorAll('[data-answer]').forEach(b=>b.addEventListener('click',()=>{respuestas[casoActual]=b.dataset.answer;mostrarRevelacion(b.dataset.answer);}));
$('nextCase').addEventListener('click',()=>{casoActual=Math.min(casoActual+1,casos.length-1);dibujarCaso();});
$('changeDecision').addEventListener('click',()=>{respuestas[casoActual]=null;$('reveal').hidden=true;$('expEnd').hidden=true;document.querySelectorAll('[data-answer]').forEach(b=>{b.classList.remove('selected');b.setAttribute('aria-pressed','false');});});
$('restartCases').addEventListener('click',()=>{casoActual=0;respuestas=[null,null,null];dibujarCaso();});
dibujarCaso();

/* 02 — Summary derived from source rows, not demo values. */
$('totalActivities').textContent=String(registros.length);
$('totalKm').textContent=fmt(registros.reduce((s,d)=>s+d.km,0));

/* 04 — Archive, shared record set in both views. */
let view='sentir',filter='todas',selected=0;
function pintarDetalle(){
  const d=registros[selected];if(!d)return;
  const dt=new Date(d.fecha+'T12:00:00');const c=codigo[d.lectura]||codigo.sin_registro;
  $('detailDay').textContent=String(dt.getDate()).padStart(2,'0');
  $('detailDate').textContent=meses[dt.getMonth()]+ ' 2026'+(d.tramo?' · '+d.tramo:'');
  $('detailMood').textContent=c.nombre;
  $('detailMood').style.color=c.color;
  $('detailText').textContent=d.comentario ?? 'Nota íntegra pendiente de cotejar con el original.';
  $('detailKm').textContent=fmt(d.km);
  $('detailPace').textContent=d.ritmo||'—';
  $('detailKudos').textContent=String(d.kudos??'—');
  $('detailScope').textContent = d.datosHoja.map(([campo, valor]) => campo + ': ' + valor).join(' · ');
}
function pintarArchivo(){
  const svg=$('archiveViz');svg.replaceChildren();
  const x0=33,x1=1077,step=(x1-x0)/7,y0=59,y1=298;
  for(let col=0;col<7;col++){
    const left=x0+col*step,cx=left+step/2;
    E('rect',{x:left,y:35,width:step,height:278,fill:col%2===0?'#ffffff04':'transparent'},svg);
    E('line',{x1:left,y1:35,x2:left,y2:315,stroke:'#667067','stroke-width':.8,opacity:.65},svg);
    const t=E('text',{x:cx,y:26,fill:'#d1d8ce','font-size':13,'font-weight':600,'text-anchor':'middle','letter-spacing':2,'font-family':'DM Sans,Arial'},svg);
    t.textContent=mesesCortos[col+3];
  }
  E('line',{x1:x1,y1:35,x2:x1,y2:315,stroke:'#667067',opacity:.65},svg);
  [0,1,2,3].forEach(i=>E('line',{x1:x0,y1:65+i*76,x2:x1,y2:65+i*76,stroke:'#758075','stroke-width':.7,'stroke-dasharray':'2 8',opacity:.35},svg));
  // Labels for week positions — not values on a performance axis.
  [1,10,20,30].forEach((day,i)=>{const t=E('text',{x:11,y:68+i*76,fill:'#aab7aa','font-size':9,'text-anchor':'start'},svg);t.textContent=day;});
  registros.forEach((d,i)=>{
    const m=Number(d.fecha.slice(5,7))-4; if(m<0||m>6)return;
    const day=Number(d.fecha.slice(8,10));
    const twins=registros.filter(z=>z.fecha===d.fecha);
    const sameIx=twins.length>1?twins.findIndex(z=>z.id===d.id):-1;
    const cx=x0+(m+.5)*step+(rand(i+33)-.5)*48+(sameIx<0?0:(sameIx-.5)*26);
    const cy=y0+(day-1)/30*(y1-y0)+(rand(i+55)-.5)*13+(sameIx<0?0:(sameIx-.5)*6);
    const highlighted=filter==='todas'||filter===d.lectura;
    const active=selected===i;
    const c=codigo[d.lectura]||codigo.sin_registro;
    const base=5.5+Math.sqrt(Math.max(d.km,0)/10.61)*7.5;
    const g=E('g',{class:'dot',tabindex:0,role:'button','aria-label':`${d.fecha}, ${fmt(d.km)} kilómetros, ${d.ritmo} por kilómetro, ${c.nombre}`},svg);
    E('circle',{cx,cy,r:22,fill:'transparent'},g);
    E('circle',{cx,cy,r:base+7,fill:'none',stroke:'#fbf7ed','stroke-width':1.3,opacity:active?1:0,class:'focus-ring'},g);
    if(view==='sentir'){
      E('path',{d:shapePath(cx,cy,base,i+7,d.lectura==='dificil'?.65:.32),fill:c.color,opacity:highlighted?1:.12},g);
    }else{
      E('circle',{cx,cy,r:base,fill:highlighted?'#e0e6dc':'#d1d9ce',opacity:highlighted?.9:.1,stroke:active?'#ef846d':'none','stroke-width':1.6},g);
      if(d.kudos>0)E('circle',{cx:cx+base+4,cy:cy-base-3,r:Math.min(5,1.5+d.kudos*.48),fill:'#ef846d',opacity:highlighted?1:.1},g);
    }
    const select=()=>{selected=i;pintarDetalle();pintarArchivo();};
    g.addEventListener('click',select);
    g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();select();}});
  });
  const legend=$('archiveLegend');legend.replaceChildren();
  if(view==='sentir'){
    Object.values(codigo).forEach(c=>{const span=document.createElement('span');const swatch=document.createElement('i');swatch.style.background=c.color;span.appendChild(swatch);span.appendChild(document.createTextNode(c.nombre));legend.appendChild(span);});
  }else{
    legend.innerHTML='<span><i style="background:#e0e6dc"></i> Tamaño del círculo = kilómetros</span><span><i style="background:#ef846d"></i> Punto lateral = kudos recibidos</span>';
  }
}
function setView(v){view=v;$('viewFeeling').setAttribute('aria-pressed',String(v==='sentir'));$('viewPosted').setAttribute('aria-pressed',String(v==='registrar'));pintarArchivo();}
$('viewFeeling').addEventListener('click',()=>setView('sentir'));
$('viewPosted').addEventListener('click',()=>setView('registrar'));
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{
  filter=b.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
  const idx=registros.findIndex(x=>filter==='todas'||x.lectura===filter);
  if(idx>=0&&filter!=='todas')selected=idx;
  pintarDetalle();pintarArchivo();
}));
pintarDetalle();pintarArchivo();

/* 05 — Monthly average kudos from recorded values. */
const bars=$('kudosBars');
const grouped=Array.from({length:7},(_,k)=>registros.filter(d=>Number(d.fecha.slice(5,7))===k+4));
const avg=grouped.map(g=>g.length?g.reduce((s,x)=>s+(x.kudos||0),0)/g.length:0);
const barMax=Math.max(1,...avg);
grouped.forEach((g,k)=>{
  const col=document.createElement('div');col.className='bar-col';
  const val=document.createElement('span');val.className='bar-value';val.textContent=avg[k].toLocaleString('es-ES',{minimumFractionDigits:1,maximumFractionDigits:1});
  const bar=document.createElement('div');bar.className='bar';bar.style.height=`${Math.max(4,avg[k]/barMax*160)}px`;
  const month=document.createElement('small');month.textContent=mesesCortos[k+3];
  col.title=`${meses[k+3]}: ${avg[k].toFixed(2)} kudos medios en ${g.length} registros`;
  col.append(val,bar,month);bars.appendChild(col);
});

/* Copiar sigue siendo una acción local independiente de la publicación. */
$('copyReflection').addEventListener('click',async()=>{
  const message=$('reflection').value.trim();
  if(!message){$('reflectionPrivacy').textContent='Escribe algo antes de copiarlo.';$('reflection').focus();return;}
  try{
    if(navigator.clipboard?.writeText) await navigator.clipboard.writeText(message);
    else { $('reflection').focus();$('reflection').select();if(!document.execCommand('copy'))throw Error('copy failed'); }
    $('reflectionPrivacy').textContent='Texto copiado al portapapeles. Copiar no publica la respuesta.';
  }catch(_){$('reflectionPrivacy').textContent='No se pudo copiar automáticamente. Selecciona tu texto y usa Ctrl+C.';}
});

/* 07 — Testigos: demo local + almacenamiento público conectado. */
const witnessConfig=window.TESTIGOS_CONFIG||{};
const backendUrl=String(witnessConfig.supabaseUrl||'').trim().replace(/\/$/,'');
const publicKey=String(witnessConfig.publishableKey||'').trim();
const sharedArchive=Boolean(/^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(backendUrl)&&publicKey);
const demoKey='lo-que-no-cuenta-testigos-demo-v1';
const colorsWitness=['#ef846d','#8ab1d0','#a9ba9a','#b5a9c7','#d9bd7c','#c8abb0','#95b6b5'];
let witnesses=[],visibleWitnesses=48,chosenWitnessId=null,posting=false,lastPostAt=0;
const wall=$('testigosWall'),counter=$('witnessCount'),empty=$('communityEmpty');
const witnessState=$('communityState'),witnessDetail=$('testigoDetail');
const reflectionInput=$('reflection'),sendButton=$('sendReflection');
$('communityModeLabel').textContent=sharedArchive?'Archivo público conectado.':'Demostración local: solo visible en este navegador.';
$('reflectionPrivacy').textContent=sharedArchive?'Las respuestas enviadas serán públicas y anónimas.':'Modo de prueba: tus respuestas se guardan solo en este navegador. Para compartirlas entre personas hay que activar la base de datos.';
sendButton.innerHTML=sharedArchive?'Publicar mi reflexión <span aria-hidden="true">↗</span>':'Enviar mi reflexión <span aria-hidden="true">↗</span>';
reflectionInput.addEventListener('input',()=>{$('reflectionCount').textContent=`${reflectionInput.value.length} / 900 caracteres`;});
function codeFromString(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;}
const dated=iso=>{const d=new Date(iso);return Number.isNaN(d.getTime())?'':d.toLocaleDateString('es-ES',{day:'numeric',month:'long',year:'numeric'});};
function storeLocal(){try{return JSON.parse(localStorage.getItem(demoKey)||'[]').filter(x=>x&&typeof x.mensaje==='string');}catch(_){return [];}}
function writeLocal(list){try{localStorage.setItem(demoKey,JSON.stringify(list.slice(0,150)));return true;}catch(_){return false;}}
function headers(){const h={'apikey':publicKey,'Content-Type':'application/json'};if(publicKey.startsWith('eyJ'))h.Authorization='Bearer '+publicKey;return h;}
async function getWitnesses(){
  if(!sharedArchive)return storeLocal();
  const query='?select=id,mensaje,creado_en&publicado=eq.true&order=creado_en.desc&limit=200';
  const res=await fetch(backendUrl+'/rest/v1/testimonios'+query,{method:'GET',headers:headers(),cache:'no-store'});
  if(!res.ok)throw new Error('No se pueden cargar las respuestas ('+res.status+'). Revisa la conexión y los permisos de la base de datos.');
  const result=await res.json();return Array.isArray(result)?result:[];
}
async function saveWitness(message){
  if(!sharedArchive){
    const item={id:(globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():'testigo-'+Date.now()+'-'+Math.random()),mensaje:message,creado_en:new Date().toISOString()};
    const ok=writeLocal([item,...storeLocal()]);if(!ok)throw new Error('El navegador no permite guardar la respuesta.');return item;
  }
  const res=await fetch(backendUrl+'/rest/v1/testimonios',{method:'POST',headers:{...headers(),Prefer:'return=representation'},body:JSON.stringify({mensaje:message})});
  if(!res.ok){let reason='';try{const data=await res.json();reason=String(data.message||'').slice(0,220)}catch(_){}throw new Error('No se pudo publicar ('+res.status+'). '+reason)}
  const result=await res.json();if(!Array.isArray(result)||!result[0])throw new Error('La respuesta no se pudo confirmar.');return result[0];
}
function showWitness(item,index){
  chosenWitnessId=item.id;
  $('testigoNumber').textContent='TESTIGO '+String(index+1).padStart(2,'0');
  $('testigoDate').textContent=dated(item.creado_en);
  $('testigoText').textContent=item.mensaje;
  witnessDetail.style.setProperty('--witness-color',colorsWitness[codeFromString(String(item.id))%colorsWitness.length]);
  witnessDetail.hidden=false;
  wall.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.id===String(item.id))));
}
function paintWitnesses(){
  counter.textContent=String(witnesses.length);
  wall.replaceChildren();
  empty.hidden=witnesses.length>0;
  wall.hidden=witnesses.length===0;
  const toDisplay=witnesses.slice(0,visibleWitnesses);
  toDisplay.forEach((item,index)=>{
    const seed=codeFromString(String(item.id));
    const color=colorsWitness[seed%colorsWitness.length];
    const diameter=20+seed%25;
    const offsets=[-9,2,8,-4,0,5];
    const button=document.createElement('button');button.type='button';button.className='testigo-button';button.dataset.id=String(item.id);
    button.setAttribute('aria-label','Leer reflexión anónima '+(index+1)+(dated(item.creado_en)?', '+dated(item.creado_en):''));
    button.setAttribute('aria-pressed',String(item.id===chosenWitnessId));
    button.style.setProperty('--diameter',diameter+'px');
    button.style.setProperty('--dot-color',color);
    button.style.setProperty('--rotation',(seed%27-13)+'deg');
    button.style.setProperty('--offset',offsets[seed%offsets.length]+'px');
    button.style.setProperty('--shape',`${44+(seed%13)}% ${42+(seed%17)}% ${46+(seed%12)}% ${41+(seed%14)}% / ${42+(seed%15)}% ${45+(seed%11)}% ${43+(seed%17)}% ${41+(seed%12)}%`);
    button.addEventListener('click',()=>showWitness(item,index));
    wall.appendChild(button);
  });
  const current=witnesses.find(x=>String(x.id)===String(chosenWitnessId));
  if(current){showWitness(current,witnesses.indexOf(current));}else{chosenWitnessId=null;witnessDetail.hidden=true;}
  $('loadMoreTestigos').hidden=visibleWitnesses>=witnesses.length;
}
async function loadTestigos(){
  witnessState.textContent='Cargando testimonios…';
  try{witnesses=await getWitnesses();paintWitnesses();witnessState.textContent=witnesses.length?sharedArchive?'Reflexiones anónimas compartidas por quienes han visitado esta página. Pulsa un círculo.':'Respuestas de esta demostración, guardadas en este navegador. Pulsa un círculo.':sharedArchive?'Todavía no hay reflexiones públicas.':'Todavía no hay respuestas en este navegador.';}
  catch(e){witnessState.textContent=e.message||'No se ha podido cargar el archivo.';}
}
$('reflectionForm').addEventListener('submit',async event=>{
  event.preventDefault();if(posting)return;
  const message=reflectionInput.value.trim();
  if(message.length<10){$('reflectionPrivacy').textContent='Escribe una reflexión de al menos 10 caracteres.';reflectionInput.focus();return;}
  if(message.length>900){$('reflectionPrivacy').textContent='La reflexión supera los 900 caracteres.';return;}
  if(!$('publicConsent').checked){$('reflectionPrivacy').textContent='Para enviar, confirma primero que deseas compartir tu respuesta.';return;}
  if(Date.now()-lastPostAt<15000){$('reflectionPrivacy').textContent='Espera unos segundos antes de enviar otra reflexión.';return;}
  posting=true;sendButton.disabled=true;sendButton.textContent='Enviando…';
  try{
    const item=await saveWitness(message);lastPostAt=Date.now();
    witnesses=[item,...witnesses.filter(x=>String(x.id)!==String(item.id))];visibleWitnesses=Math.max(48,visibleWitnesses);
    paintWitnesses();showWitness(item,0);
    reflectionInput.value='';$('reflectionCount').textContent='0 / 900 caracteres';$('publicConsent').checked=false;
    $('reflectionPrivacy').textContent=sharedArchive?'Reflexión publicada. Ya puede leerla cualquier visitante.':'Reflexión guardada en este navegador. La publicación colectiva necesitará conectar la base de datos.';
    witnessState.textContent=sharedArchive?'Tu testigo se ha añadido al archivo público.':'Tu testigo se ha añadido a esta demostración local.';
    witnessDetail.scrollIntoView({behavior:'smooth',block:'nearest'});
  }catch(e){$('reflectionPrivacy').textContent=e.message||'Se ha producido un error al enviar la reflexión.';}
  finally{posting=false;sendButton.disabled=false;sendButton.innerHTML=sharedArchive?'Publicar mi reflexión <span aria-hidden="true">↗</span>':'Enviar mi reflexión <span aria-hidden="true">↗</span>';}
});
$('refreshTestigos').addEventListener('click',loadTestigos);
$('loadMoreTestigos').addEventListener('click',()=>{visibleWitnesses+=48;paintWitnesses();});
loadTestigos();

/* Header + reading progress */
const menu=$('navlinks'),menuBtn=$('menuBtn');
menuBtn.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');menuBtn.textContent=open?'×':'☰';});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='☰';}));
function progress(){const doc=document.documentElement;const max=doc.scrollHeight-doc.clientHeight;$('progress').style.width=(max>0?window.scrollY/max*100:0)+'%';}
window.addEventListener('scroll',progress,{passive:true});window.addEventListener('resize',progress);progress();
