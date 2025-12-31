let nivelHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

let nome_XP_Heroi = [
  ["Superman", 10001 ],
  ["Batman", 900],
  ["Homem de Ferro", 1600],
  ["Capitão América", 9950],
  ["Thor", 8900],
  ["Hulk", 7900],
  ["Wolverine", 4800],
  ["Pantera Negra", 6940]
]

console.log(nome_XP_Heroi.length)

for(let i = 0; i < nome_XP_Heroi.length; i++){

  switch(true){
    case nome_XP_Heroi[i][1] <  1000:
      console.log("O Herói de nome " + nome_XP_Heroi[i][0] + " está no nível de " + nivelHeroi[0])
      break

    case nome_XP_Heroi[i][1] >= 1001 && nome_XP_Heroi[i][1] <= 2000:
      console.log("O Herói de nome " + nome_XP_Heroi[i][0] + " está no nível de " + nivelHeroi[1])
      break

    case nome_XP_Heroi[i][1] >= 2001 && nome_XP_Heroi[i][1] <= 5000:
      console.log("O Herói de nome " + nome_XP_Heroi[i][0] + " está no nível de " + nivelHeroi[2])
      break
      
    case nome_XP_Heroi[i][1] >=  5001 && nome_XP_Heroi[i][1] <= 7000:
      console.log("O Herói de nome " + nome_XP_Heroi[i][0] + " está no nível de " + nivelHeroi[3])
      break
      
    case nome_XP_Heroi[i][1] >=  7001 && nome_XP_Heroi[i][1] <= 8000:
      console.log("O Herói de nome " + nome_XP_Heroi[i][0] + " está no nível de " + nivelHeroi[4])
      break
    
    case nome_XP_Heroi[i][1] >=  8001 && nome_XP_Heroi[i][1] <= 9000:
      console.log("O Herói de nome " + nome_XP_Heroi[i][0] + " está no nível de " + nivelHeroi[5])
      break
      
    case nome_XP_Heroi[i][1] >=  9001 && nome_XP_Heroi[i][1] <= 10000:
      console.log("O Herói de nome " + nome_XP_Heroi[i][0] + " está no nível de " + nivelHeroi[6])
      break

    case nome_XP_Heroi[i][1] >=  10001:
      console.log("O Herói de nome " + nome_XP_Heroi[i][0] + " está no nível de " + nivelHeroi[7])
      break
      
  }
}