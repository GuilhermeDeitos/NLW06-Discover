const Database = require('./config')

const initDB = {
  async init() { //async é necessario para usar o await, async e await são como gemeos siameses, um precisa do outro para funcionar
    const db = await Database() //await vai fazer esperar retornar um resultado antes de executar a próxima linha

    //Criar o banco de dados e iniciar ele(.exec())
    await db.exec(`CREATE TABLE rooms ( 
      roomId INTEGER PRIMARY KEY,
      pass TEXT
    )`);
    
    //No banco de dados os comandos em SQL devem ser em maiusculo e o que não estiver em SQL em minusculo
    /*
    CREATE TABLE (para criar a tabela) nome da tabela(
      itens da tabela(
        roomId INTEGER(os dados do ID serão inteiros) PRIMARY KEY(cada um será uma chave unica, assim não se repetirão)
        pass TEXT(tipo texto para a senha, assim podendo informar a maioria dos caracteres)
      )
    )
    */
    await db.exec(`CREATE TABLE questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      read INT,
      room INT
    )`);
    /*
    CREATE TABLE (para criar a tabela) nome da tabela(
      itens da tabela(
        roomId INTEGER(os dados do ID serão inteiros) PRIMARY KEY(cada um será uma chave unica, assim não se repetirão) e AUTOINCREMENT(para se auto incrementar a cada vez que um for criado)
        pass TEXT(tipo texto para a senha, assim podendo informar a maioria dos caracteres)
      )
    )
    */

    await db.close() //fechar o banco de dados
  }
} 

initDB.init();


