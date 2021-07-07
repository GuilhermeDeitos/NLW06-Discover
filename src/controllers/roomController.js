const Database = require('../db/config')

module.exports = {
  async create(req,res) {
    const db = await Database() 
    const pass = req.body.password //a variavel da senha receberá o valor inserido no input password presente no body
    let roomId = '' //deixei assim vazio pois ao adicionar um valor não interferirá no ID
    let isRoom = true
    while(isRoom){
      //gerar o numero da sala
      for(let i = 0; i < 6; i++){ //loop para repetir 6 vezes as instruções dentro
        roomId += Math.floor(Math.random() * 10).toString() // rooomId vai concatenar os valores gerados pelo Math.random(), o * 10 é para que os numeros sejam entre 0 e 10 e o Math.floor é para arredondar para baixo
      }
      //verificar se esse numero já existe
      const roomsExistIds = await db.all(`SELECT roomId FROM rooms`)
      //comparar todos os Ids com o roomId
      isRoom = roomsExistIds.some(roomsExistIds => roomsExistIds === roomId)

      if(!isRoom){
        /*
        db.run para inserir a sala no banco
        INSERT INTO rooms() para inserir na tabela rooms, dentro dos () irão o nome dos valores e no VALUES os valores respectivamente
  
        o parseInt() irá transformar a variavel para inteiro
      */
      await db.run(`INSERT INTO rooms (
        roomId,
        pass
      ) VALUES (
        ${parseInt(roomId)},
        ${pass}
      )`)
  
      }
      
    }

    await db.close() //fechar o banco de dados
    
    res.redirect(`/room/${roomId}`) //inserir o roomId na rota
  },

  async open(req,res){
    const db = await Database() 
    const roomId = req.params.room
    const questions =  await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)
    const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)
    let isNoQuestion

    if(questions.length == 0){
      if(questionsRead.length == 0){
       isNoQuestion = true
      }
    }

    res.render("room",{roomId: roomId, questions: questions, questionsRead: questionsRead, isNoQuestion: isNoQuestion})
  },

  enter(req,res){
    const roomId = req.body.roomId

    res.redirect(`/room/${roomId}`)
  }

}