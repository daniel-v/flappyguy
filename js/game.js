
/**
 * Div that is considered the game area
 * @type {jQuery}
 */
var playGround;
/**
 * The height of the game area
 * @see {@link playGround}
 * @type {number}
 */
var playGroundHeight;
/**
 * The background that is being scrolled horizontally for a feel
 * of movement
 * @type {jQuery}
 */
var background;
/**
 * The left position of the background
 * @see {@link background}
 * @default 0
 * @type {number}
 */
var backgroundLeft = 0;
/**
 * DOM element that represents the head/flappy thing that has to
 * get through the obstacles
 * @type {jQuery}
 */
var flappyGuyElement;
/**
 * Top position of the head
 * @see {@link flappyGuyElement}
 * @type {number}
 */
var flappyGuyTopPos;
/**
 * Maximum top value {@link flappyGuyElement} can take
 * @see {@link flappyGuyMinTop}
 * @type {number}
 */
var flappyGuyMaxTop;
/**
 * Minimum top value {@link flappyGuyElement} can take
 * @see {@link flappyGuyMaxTop}
 * @type {number}
 */
var flappyGuyMinTop = 0;

/**
 * Variable to indicate if the update loop should increase height
 * instead of decrease it
 * @type {boolean}
 */
var flapOne = false;
/**
 * Interval ID for gameloop
 */
var interval;

/**
 * Update function that is called every 25ms
 */
function update() {
    function updateFlappyPos() {
        if(flapOne) {
            flappyGuyTopPos -= 40;
            flapOne = false;
        } else {
            flappyGuyTopPos += 4;
        }
        if(flappyGuyTopPos > flappyGuyMaxTop) {
            flappyGuyTopPos = flappyGuyMaxTop;
            clearInterval(interval);
            console.error("YOU DIED!");
            $(".dead").toggleClass("hide", false);
        }
        if(flappyGuyTopPos < flappyGuyMinTop) {
            flappyGuyTopPos = flappyGuyMinTop;
        }
        flappyGuyElement.css("top", flappyGuyTopPos + "px");
    }

    function stepBackground() {
        backgroundLeft -= 2.5;
        background.css("left", backgroundLeft + "px");
    }

    updateFlappyPos();
    stepBackground();
}

$(function() {
    console.log("I am ready to do…flappy things…");

    /**
     * Starts the game loop and calls update every 100ms
     */
    function startGameLoop() {
        interval = setInterval(update, 25);
    }

    /**
     * Update necessary vars for the game
     */
    function initGameVariables() {
        playGround = $(".play-ground");
        flappyGuyElement = $(".flappy");
        flappyGuyTopPos = flappyGuyElement.offset().top;
        playGroundHeight = playGround.height();
        flappyGuyMaxTop = playGroundHeight - 32;
        background = $(".background");

        console.group("Init");
        console.log("Element:", flappyGuyElement);
        console.log("Top:", flappyGuyTopPos);
        console.log("Max top:", flappyGuyMaxTop);
        console.groupEnd();
    }

    /**
     * Initialize DOM events
     */
    function initGameEvents() {
        $(".play-ground").click(function(){
            flapOne = true;
        });
    }

    /**
     * Generate obstacles
     */
    function generateObstacles() {
        var obstacleCount = 15;
        for(var i = 0; i < obstacleCount; i++) {
            // format: Math.random() * (max - min) + min;
            var horizontalPosition = Math.random() * (5000 - 400) + 400;

            var topHeight = Math.random() * (playGroundHeight * 0.6 - 40) + 40;
            var bottomHeight = playGroundHeight - topHeight - (Math.random() * (240 - 120) + 120);

            // create top element
            var obstacleTop = $(document.createElement("div"));
            obstacleTop.attr("class", "obstacle-top");
            obstacleTop.css("height", topHeight + "px");
            obstacleTop.css("left", horizontalPosition + "px");
            background.append(obstacleTop);

            // create bottom element
            var obstacleBottom = $(document.createElement("div"));
            obstacleBottom.attr("class", "obstacle-bottom");
            obstacleBottom.css("height", bottomHeight + "px");
            obstacleBottom.css("left", horizontalPosition + "px");

            background.append(obstacleBottom);
        }

    }

    initGameVariables();
    initGameEvents();
    generateObstacles();
    startGameLoop();
});