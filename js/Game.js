var InfiniteScroller = InfiniteScroller || {};

InfiniteScroller.Game = function(){};

InfiniteScroller.Game.prototype = {
  preload: function() {
      this.game.time.advancedTiming = true;
    },
  create: function() {

this.counter = 15;
this.text = 0;

    // variables 
    this.chinaPoints = 3;
     this.skPoints = 3;
     this.nkPoints = 3;
    this.cardCenter = true

    //set up background and ground layer



//-------------Yes and No Buttons--------------------------------------
    this.yesBtn = this.game.add.sprite(this.game.width/2 + 60, this.game.height/2 + 170, 'yesBtn');
    this.yesBtn.scale.setTo(.37, .37);
    this.yesBtn.inputEnabled = true;

    this.noBtn = this.game.add.sprite(this.game.width/2 - 123, this.game.height/2 + 170, 'noBtn');
    this.noBtn.scale.setTo(.37, .37);
    this.noBtn.inputEnabled = true;

    
//-----------------------------------
//-------------Card 1--------------------------------------
//-----------------------------------
    this.card1 = this.game.add.sprite(this.game.width/2 - 143, this.game.height/2 - 170, 'card1');
    this.card1.scale.setTo(.33, .33);
    this.card1.inputEnabled = true;

    this.card2 = this.game.add.sprite(this.game.width/2 - 1520, this.game.height/2 - 170, 'card2');
    this.card2.scale.setTo(.33, .33);
    this.card2.inputEnabled = true;

    this.card3 = this.game.add.sprite(this.game.width/2 - 1520, this.game.height/2 - 170, 'card3');
    this.card3.scale.setTo(.33, .33);
    this.card3.inputEnabled = true;

    this.card4 = this.game.add.sprite(this.game.width/2 - 1520, this.game.height/2 - 170, 'card4');
    this.card4.scale.setTo(.33, .33);
    this.card4.inputEnabled = true;

    this.card5 = this.game.add.sprite(this.game.width/2 - 1520, this.game.height/2 - 170, 'card5');
    this.card5.scale.setTo(.33, .33);
    this.card5.inputEnabled = true;

    this.card6 = this.game.add.sprite(this.game.width/2 - 1520, this.game.height/2 - 170, 'card6');
    this.card6.scale.setTo(.33, .33);
    this.card6.inputEnabled = true;

    this.card7 = this.game.add.sprite(this.game.width/2 - 1520, this.game.height/2 - 170, 'card7');
    this.card7.scale.setTo(.33, .33);
    this.card7.inputEnabled = true;

    this.card8 = this.game.add.sprite(this.game.width/2 - 1520, this.game.height/2 - 170, 'card8');
    this.card8.scale.setTo(.33, .33);
    this.card8.inputEnabled = true;

    this.card9 = this.game.add.sprite(this.game.width/2 - 1520, this.game.height/2 - 170, 'card9');
    this.card9.scale.setTo(.33, .33);
    this.card9.inputEnabled = true;

    this.card10 = this.game.add.sprite(this.game.width/2 - 1520, this.game.height/2 - 170, 'card10');
    this.card10.scale.setTo(.33, .33);
    this.card10.inputEnabled = true;

   
    this.background1 = this.game.add.sprite(this.game.width/2 - 190, this.game.height/2 - 335, 'background');
    this.background1.scale.setTo(.444, .444);
    //this.game.world.bringToTop(this.background1);
//-----------------------------------
//-------------Timer Text--------------------------------------
//-----------------------------------
   this.text = this.game.add.text(this.game.world.centerX - 90, this.game.world.centerY + 105, '15', { font: "40px Arial", fill: "#FFFFFF", align: "center" });
   this.text.anchor.setTo(0.5, 0.5);
   this.game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
 

//-----------------------------------
//-------------Load Sounds--------------------------------------
//-----------------------------------
    this.deadSound = this.game.add.audio('dead');
    this.pickupSound = this.game.add.audio('pickup');




//-----------------------------------
//-------------load score text and game over text and retry--------------------------------------
//-----------------------------------
    var style2 = { font: "40px Arial", fill: "#222222"};
    this.nkPointsText = this.game.add.text(this.game.width / 2 - 160 , this.game.height / 2 - 230, "", style2);
    this.chinaPointsText = this.game.add.text(this.game.width / 2 , this.game.height / 2 - 230, "", style2);
    this.skPointsText = this.game.add.text(this.game.width / 2 + 110 , this.game.height / 2 - 230, "", style2);

    //var style3 = { font: "20px Arial", fill: "#222222"};
    //this.chinaText = this.game.add.text(this.game.width / 2 - 170 , this.game.height / 2 - 320, "China", style3);
    //this.SKText = this.game.add.text(this.game.width / 2 - 70 , this.game.height / 2 - 320, "South Korea", style3);
    //this.NKText = this.game.add.text(this.game.width / 2 + 70 , this.game.height / 2 - 320, "North Korea", style3);

     var style4 = { font: "60px Arial", fill: "#222222"};
    this.GameOverText = this.game.add.text(this.game.width / 2 - 560 , this.game.height / 2 + 150, "Game Over", style4);
    this.GameOverText.alpha = 1;

    this.retryText = this.game.add.text(this.game.width / 2 - 390 , this.game.height / 2 + 220, "Retry", style4);
    this.retryText.alpha = 1;
    this.retryText.inputEnabled = true;


    this.refreshStats(); 
 },
//-----------------------------------
//-------------Display Timer--------------------------------------
//-----------------------------------



  updateCounter: function() {

    if(this.counter > 0){

    this.counter =  this.counter - 1;

    this.text.setText('' + this.counter);
}

},



//-----------------------------------
//-------------Yes Cards--------------------------------------
//-----------------------------------
  card1Yes: function() {
//Card 1 YES    
if (this.card1.x == this.game.width/2 - 143   ){
this.card1.x = this.game.width/2 - 500
this.card2.x = this.game.width/2 - 143
this.nkPoints = this.nkPoints -1;
this.nkPointsText.text = this.nkPoints;
   this.counter = 16;

  }
//Card 2 YES   
  else if (this.card2.x == this.game.width/2 - 143   ){
this.card2.x = this.game.width/2 - 500
this.card3.x = this.game.width/2 - 143
this.nkPoints = this.nkPoints -1;
this.nkPointsText.text = this.nkPoints;
this.counter = 16;
  }
//Card 3 YES 
   else if (this.card3.x == this.game.width/2 - 143   ){
this.card3.x = this.game.width/2 - 500
this.card4.x = this.game.width/2 - 143
this.nkPoints = this.nkPoints -1;
this.nkPointsText.text = this.nkPoints;
this.skPoints = 3;
this.skPointsText.text = this.skPoints;
this.counter = 16        ;

  } 
  //Card 4 YES 
  else if (this.card4.x == this.game.width/2 - 143  ){
this.card4.x = this.game.width/2 - 500
this.card5.x = this.game.width/2 - 143
this.nkPoints = this.nkPoints -1;
this.nkPointsText.text = this.nkPoints;
this.chinaPoints = this.chinaPoints - 1;
this.chinaPointsText.text = this.chinaPoints;
this.skPoints = 3;
this.skPointsText.text = this.skPoints;
this.counter = 11;
  } 
  //Card 5 YES 
  else if (this.card5.x == this.game.width/2 - 143   ){
this.card5.x = this.game.width/2 - 500
this.card6.x = this.game.width/2 - 143
this.nkPoints = 0;
this.nkPointsText.text = this.nkPoints;
this.chinaPoints = this.chinaPoints - 1;
this.chinaPointsText.text = this.chinaPoints;
this.skPoints = 3;
this.skPointsText.text = this.skPoints;
this.counter = 11;
  } 
  //Card 6 YES 
  else if (this.card6.x == this.game.width/2 - 143   ){
this.card6.x = this.game.width/2 - 500
this.card7.x = this.game.width/2 - 143
this.nkPoints = 2;
this.nkPointsText.text = this.nkPoints;
this.skPoints = this.skPoints - 1;
this.skPointsText.text = this.skPoints;
this.counter = 11;
  }
  //Card 7 YES 
  else if (this.card7.x == this.game.width/2 - 143   ){
this.card7.x = this.game.width/2 - 500
this.card8.x = this.game.width/2 - 143
this.nkPoints = this.nkPoints - 1;
this.nkPointsText.text = this.nkPoints;
this.skPoints = this.skPoints - 1;
this.skPointsText.text = this.skPoints;
this.counter = 11;
  }
  //Card 8 YES 
  else if (this.card8.x == this.game.width/2 - 143  ){
this.card8.x = this.game.width/2 - 500
this.card9.x = this.game.width/2 - 143
this.nkPoints = this.nkPoints - 1;
this.nkPointsText.text = this.nkPoints;
this.skPoints = 3;
this.skPointsText.text = this.skPoints;
this.counter = 9;
  }
  //Card 9    YES 
  else if (this.card9.x == this.game.width/2 - 143   ){
this.card9.x = this.game.width/2 - 500
this.card10.x = this.game.width/2 - 143
this.skPoints = 3;
this.skPointsText.text = this.skPoints;
this.chinaPoints = this.chinaPoints - 1;
this.chinaPointsText.text = this.chinaPoints;     
this.gameOver();
  }              
},

//-----------------------------------

//-------------NO Cards--------------------------------------
//-----------------------------------
  card1No: function() {
//Card 1 NO  
if (this.card1.x == this.game.width/2 - 143   ){
this.card1.x = this.game.width/2 - 500
this.card2.x = this.game.width/2 - 143
this.skPoints = this.skPoints - 1;
this.skPointsText.text = this.skPoints;
this.counter = 16;

  }
//Card 2 NO
  else if (this.card2.x == this.game.width/2 - 143   ){
this.card2.x = this.game.width/2 - 500
this.card3.x = this.game.width/2 - 143
this.skPoints = this.skPoints -1 ;
this.skPointsText.text = this.skPoints;
this.nkPoints = 3 ;
this.nkPointsText.text = this.nkPoints;

this.counter = 16;

  }
//Card 3 NO
   else if (this.card3.x == this.game.width/2 - 143  ){
this.card3.x = this.game.width/2 - 500
this.card4.x = this.game.width/2 - 143
this.skPoints = this.skPoints -1 ;
this.skPointsText.text = this.skPoints;
this.counter = 16;
  } 
  //Card 4 NO
  else if (this.card4.x == this.game.width/2 - 143   ){
this.card4.x = this.game.width/2 - 500
this.card5.x = this.game.width/2 - 143
this.skPoints = this.skPoints -1 ;
this.skPointsText.text = this.skPoints;
this.counter = 11;         
  } 
  //Card 5 NO
  else if (this.card5.x == this.game.width/2 - 143   ){
this.card5.x = this.game.width/2 - 500
this.card6.x = this.game.width/2 - 143
this.skPoints = this.skPoints -1 ;
this.skPointsText.text = this.skPoints;  
this.counter = 11;       

  } 
  //Card 6 NO
  else if (this.card6.x == this.game.width/2 - 143   ){
this.card6.x = this.game.width/2 - 500
this.card7.x = this.game.width/2 - 143
this.skPoints = 2 ;
this.skPointsText.text = this.skPoints;
this.nkPoints = this.nkPoints - 1 ;
this.nkPointsText.text = this.nkPoints;
this.chinaPoints = this.chinaPoints -1 ;
this.chinaPointsText.text = this.chinaPoints;
this.counter = 11;
  }
  //Card 7 NO
  else if (this.card7.x == this.game.width/2 - 143   ){
this.card7.x = this.game.width/2 - 500
this.card8.x = this.game.width/2 - 143
this.nkPoints = 3 ;
this.nkPointsText.text = this.nkPoints;
this.counter = 11;
  }
  //Card 8 NO
  else if (this.card8.x == this.game.width/2 - 143   ){
this.card8.x = this.game.width/2 - 500
this.card9.x = this.game.width/2 - 143
this.chinaPoints = this.chinaPoints -1 ;
this.chinaPointsText.text = this.chinaPoints;
this.skPoints = this.skPoints - 1 ;
this.skPointsText.text = this.skPoints;
this.counter = 9;

  }
  //Card 9 NO
  else if (this.card9.x == this.game.width/2 - 143   ){
this.card9.x = this.game.width/2 - 500
this.card10.x = this.game.width/2 - 143
this.nkPoints = 2 ;
this.nkPointsText.text = this.nkPoints;
this.chinaPoints = 3;
this.chinaPointsText.text = this.chinaPoints;
this.gameOver();

  }  




},

//-----------------------------------
//-------------Update function--------------------------------------
//----------------------------------- 
update: function() {

if (this.counter == 0 ){

   this.retryText.x = this.game.width / 2 - 90
}


  this.yesBtn.events.onInputDown.add(this.card1Yes,  this ) 
  this.noBtn.events.onInputDown.add(this.card1No,  this ) 
  this.retryText.events.onInputDown.add(this.gameOver,  this ) 


 if (this.chinaPoints == 0 ) {
 
   //this.game.state.start('Game');
   this.yesBtn.x = this.yesBtn.x + 400
   this.noBtn.x = this.noBtn.x + 400
   this.GameOverText.x = this.game.width / 2 - 160
   this.retryText.x = this.game.width / 2 - 90
   this.counter = 0;

}

 if (this.skPoints == 0 ) {
 
   //this.game.state.start('Game');
   this.yesBtn.x = this.yesBtn.x + 400
   this.noBtn.x = this.noBtn.x + 400
   this.GameOverText.x = this.game.width / 2 - 160
   this.retryText.x = this.game.width / 2 - 90
   this.counter = 0;

}

 if (this.nkPoints == 0 ) {
 
   //this.game.state.start('Game');
   this.yesBtn.x = this.yesBtn.x + 400
   this.noBtn.x = this.noBtn.x + 400
   this.GameOverText.x = this.game.width / 2 - 160
   this.retryText.x = this.game.width / 2 - 90
   this.counter = 0;

}
     



  },
//-----------------------------------
//-------------shows original updated values--------------------------------------
//-----------------------------------
  refreshStats: function() {
    this.chinaPointsText.text = this.chinaPoints;
    this.skPointsText.text = this.skPoints;
    this.nkPointsText.text = this.nkPoints;

    
  },

  //the player has just been killed a spike
  playerKilled: function(card1) {
    //remove the spike that killed our card1 so it is no longer in the way
  this.GameOverText.alpha = 1;
  this.RetryText.alpha = 1;
  this.deadSound.play();
  this.card1.anchor.x += 10;   

  },

  //card1 is collecting Stars
  collect: function(card1) {
   //Called when u collect stars
      this.refreshStats();

         this.pickupSound.play();

  },
  gameOver: function() {
    this.game.state.start('Game');
  },
  



};