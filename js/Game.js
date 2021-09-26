class Game {
  constructor() {}
//collect the gameState value from the database
  getState(){
    database.ref("gameState").on("value",function(data){
      gameState = data.val()
    })
  }
  //writing the gameState value to the database
  updateState(count){
  database.ref("/").update({
       gameState:count
  })
  }

//start screen
  start() {
    form = new Form();
    form.display();
    player = new Player();
    player.getCount()
    car1=createSprite(width/2-150,height-100)
    car1.addImage(car1Img)
    car1.scale=0.07
    car2=createSprite(width/2+150,height-100)
    car2.addImage(car2Img)
    car2.scale=0.07
  }
  //!== not equal to
  //play screen
  play()
{
  form.input.hide()
  form.title.hide()
  form.button.hide()
  form.greeting.hide()
  Player.getPlayersInfo()
  if(players!==undefined){
    image(trackImg,0,-height*5,width,height*6)
    drawSprites()
  }
}

}
