var game;
//declare variables
var score = 0;
var scoreText;

var gameOptions = {
    gameWidth: 750,
    gameHeight: 1334,
    cardSheetWidth: 334,
    cardSheetHeight: 440,
    //declare variables

}
window.onload = function() {
    game = new Phaser.Game(gameOptions.gameWidth, gameOptions.gameHeight);
    game.state.add("PlayGame", playGame)
    game.state.start("PlayGame");
}


var playGame = function(game) {}
playGame.prototype = {
    preload: function() {
         game.load.image( 'topBar' , 'assets/img/top_bar.png');
        game.load.spritesheet('cards' , 'assets/img/cards.png', gameOptions.cardSheetWidth, gameOptions.cardSheetHeight);
       
       
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;



    },

gameOver: function(){
    gameOverText.y = game.world.width / 2 - 50;

},



    create: function() {

        //create Score text
scoreText = game.add.text(game.world.width / 2 - 110, game.world.height / 2 + 520, 'Weeks: 0', { fontSize: '60px', fill: '#000' });
gameOverText = game.add.text(game.world.width / 2 - 710, game.world.height / 2 + 490, 'Game Over', { fontSize: '60px', fill: '#000' });

           //baackground color
        game.stage.backgroundColor = "#658743";
        //setup deck array to 100
        this.deck = Phaser.ArrayUtils.numberArray(0, 100);
        //Phaser.ArrayUtils.shuffle(this.deck);
        this.cardsInGame = [this.makeCard(0), this.makeCard(1)];
        this.nextCardIndex = 2;
        //card animatioin 
        var tween = game.add.tween(this.cardsInGame[0]).to({
            x: game.width / 2

        }, 500, Phaser.Easing.Cubic.Out, true);
        game.input.onDown.add(this.beginSwipe, this);
        //add top menu
         var topBar1 = game.add.sprite(game.world.width / 2 - 375, game.world.height / 2 - 670, 'topBar');
         topBar1.scale.setTo(.8, .8);


  

    },
    //set up the cards
    makeCard: function(cardIndex) {
        var card = game.add.sprite(gameOptions.cardSheetWidth * 1.5 / -2, game.height / 2, "cards");
        card.anchor.set(0.5);
        card.scale.set(1.5);
        card.y =  game.height / 2 + 100
       // card.frame = this.deck[cardIndex];
        return card;
    },
    //Initial swipe
    beginSwipe: function(e) {
        game.input.onDown.remove(this.beginSwipe, this);
        game.input.onUp.add(this.endSwipe, this);
    },
    //End of swipe handling 
    endSwipe: function(e) {
        game.input.onUp.remove(this.endSwipe, this);
        var swipeTime = e.timeUp - e.timeDown;
        var swipeDistance = Phaser.Point.subtract(e.position, e.positionDown);
        var swipeMagnitude = swipeDistance.getMagnitude();
        var swipeNormal = Phaser.Point.normalize(swipeDistance);
        if(swipeMagnitude > 20 && swipeTime < 1000 && Math.abs(swipeNormal.x) > 0.8) {
            if(swipeNormal.x > 0.8) {
                this.handleSwipe(1);
                    score += 1;
    scoreText.text = 'Week: ' + score;
            }
            if(swipeNormal.x < -0.8) {
                this.handleSwipe(-1);
                    score += 1;
    scoreText.text = 'Week: ' + score;

            }
        } else {
            game.input.onDown.add(this.beginSwipe, this);
        }
    },





    //right swipe
    handleSwipe: function(dir) {
        //MOVE LEFT OR RIGHT MAIN CARD
 var cardToMove = (this.nextCardIndex + 1) % 2;
        this.cardsInGame[cardToMove].y -=  game.height / 2 +200;
         var tween = game.add.tween(this.cardsInGame[cardToMove]).to({
            x: game.width / 2
        }, 300, Phaser.Easing.Cubic.Out, true);
//MOVE LEFT OR RIGHT MAIN CARD
        var cardToMove = this.nextCardIndex % 2;
        this.cardsInGame[cardToMove].x += dir * gameOptions.cardSheetWidth  ;
        var moveOutTween = game.add.tween(this.cardsInGame[cardToMove]).to({
            //change direction of main card moving
           x: game.width / 2  + 800 *  dir
        }, 1000, Phaser.Easing.Cubic.Out, true);

        tween.onComplete.add(function() {
          //Make main card move immediently 
           this.moveCards();
        },
         this) 
    },

    //move cards after swips
    moveCards: function() {
        cardToMove = (this.nextCardIndex + 1) % 2
        var moveDownTween = game.add.tween(this.cardsInGame[cardToMove]).to({
            y: game.height / 2 + 100
        }, 500, Phaser.Easing.Cubic.Out, true);
        moveDownTween.onComplete.add(function() {
            var cardToMove = this.nextCardIndex % 2
            this.cardsInGame[cardToMove].frame = this.deck[this.nextCardIndex];
            this.nextCardIndex = (this.nextCardIndex + 1) % 52;
            this.cardsInGame[cardToMove].x = gameOptions.cardSheetWidth * 1.5 / -2;
            game.input.onDown.add(this.beginSwipe, this);
        }, this)





function update() {

    if (score > 5 ){
        this.gameOver();

    }

}

    }
}