var InfiniteScroller = InfiniteScroller || {};

//loading the game assets
InfiniteScroller.Preload = function(){};

InfiniteScroller.Preload.prototype = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);
    this.preloadBar.scale.setTo(3);

    this.load.setPreloadSprite(this.preloadBar);

    //load game assets

 //-----------------------------------
//-------------Cards--------------------------------------
//-----------------------------------
    this.load.image('card1', 'assets/img/card1.png');
    this.load.image('card2', 'assets/img/card2.png');
    this.load.image('card3', 'assets/img/card3.png');
    this.load.image('card4', 'assets/img/card4.png');
    this.load.image('card5', 'assets/img/card5.png');
    this.load.image('card6', 'assets/img/card6.png');
    this.load.image('card7', 'assets/img/card7.png');
    this.load.image('card8', 'assets/img/card8.png');
    this.load.image('card9', 'assets/img/card9.png');
    this.load.image('card10', 'assets/img/card10.png');
    this.load.image('card11', 'assets/img/card11.png');
    this.load.image('card12', 'assets/img/card12.png');
    this.load.image('card13', 'assets/img/card13.png');
    this.load.image('card14', 'assets/img/card14.png');
    this.load.image('card15', 'assets/img/card15.png');

 //-----------------------------------
//------------Other assets--------------------------------------
//-----------------------------------
  this.load.image('background', 'assets/img/background1.png');
    this.load.image('yesBtn', 'assets/img/yesBtn.png');
    this.load.image('noBtn', 'assets/img/noBtn.png');

    this.load.image('ground', 'assets/img/ground.png');
//hearts
    this.load.image('heart3', 'assets/img/hearts_3.png');
    this.load.image('heart2', 'assets/img/hearts_2.png');
    this.load.image('heart1', 'assets/img/hearts_1.png');
    this.load.image('heart0', 'assets/img/hearts_death.png');
//health bar
this.load.image('healthBar1', 'assets/img/health_bar_1.png');
this.load.image('healthBar2', 'assets/img/health_bar_2.png');
this.load.image('healthBar3', 'assets/img/health_bar_3.png');
this.load.image('healthBar4', 'assets/img/health_bar_4.png');
this.load.image('healthBar5', 'assets/img/health_bar_5.png');
this.load.image('healthBar6', 'assets/img/health_bar_6.png');
this.load.image('healthBar7', 'assets/img/health_bar_7.png');
this.load.image('healthBar8', 'assets/img/health_bar_8.png');
this.load.image('healthBar9', 'assets/img/health_bar_9.png');

    // load audio
    this.load.audio('dead', ['assets/audio/dead.mp3']);

    this.load.audio('music', ['assets/audio/Music1.mp3']);

    this.load.audio('pickup', ['assets/audio/pickup.wav']);
    
   
    this.load.image('star', 'assets/img/star.png');
    
  
    this.load.image('spike', 'assets/img/spike.png');
    
   

  },
  create: function() {

   // this.musicSound = this.game.add.audio('music');
   // this.musicSound.play();


    //start the game
    this.state.start('Game');
  }
};