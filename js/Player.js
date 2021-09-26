class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
//collect the playerCount value from the database
  getCount(){
    database.ref("playerCount").on("value",function(data){
      playerCount = data.val()
    })
  }
  //writing the playerCount value to the database
  updateCount(count){
  database.ref("/").update({
    playerCount:count
  })
  }
  //update players name and positions in database
  addPlayer(){
    if(this.index === 1){
      this.positionX= width/2 -150
    } else {
      this.positionX= width/2 +150
    }
    database.ref("players/player"+this.index).set({
      name : this.name,
      positionX : this.positionX,
      positionY : this.positionY
    })
  }
//collect all the players information from database
  static getPlayersInfo(){
    database.ref("players").on("value",(data)=>{
      players= data.val()
    })
  }
}
