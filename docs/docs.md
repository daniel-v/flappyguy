## Members
<dl>
<dt><a href="#playGround">playGround</a> : <code>jQuery</code></dt>
<dd><p>Div that is considered the game area</p>
</dd>
<dt><a href="#playGroundHeight">playGroundHeight</a> : <code>number</code></dt>
<dd><p>The height of the game area</p>
</dd>
<dt><a href="#background">background</a> : <code>jQuery</code></dt>
<dd><p>The background that is being scrolled horizontally for a feel
of movement</p>
</dd>
<dt><a href="#backgroundLeft">backgroundLeft</a> : <code>number</code></dt>
<dd><p>The left position of the background</p>
</dd>
<dt><a href="#flappyGuyElement">flappyGuyElement</a> : <code>jQuery</code></dt>
<dd><p>DOM element that represents the head/flappy thing that has to
get through the obstacles</p>
</dd>
<dt><a href="#flappyGuyTopPos">flappyGuyTopPos</a> : <code>number</code></dt>
<dd><p>Top position of the head</p>
</dd>
<dt><a href="#flappyGuyMaxTop">flappyGuyMaxTop</a> : <code>number</code></dt>
<dd><p>Maximum top value <a href="#flappyGuyElement">flappyGuyElement</a> can take</p>
</dd>
<dt><a href="#flappyGuyMinTop">flappyGuyMinTop</a> : <code>number</code></dt>
<dd><p>Minimum top value <a href="#flappyGuyElement">flappyGuyElement</a> can take</p>
</dd>
<dt><a href="#flapOne">flapOne</a> : <code>boolean</code></dt>
<dd><p>Variable to indicate if the update loop should increase height
instead of decrease it</p>
</dd>
<dt><a href="#interval">interval</a></dt>
<dd><p>Interval ID for gameloop</p>
</dd>
</dl>
## Functions
<dl>
<dt><a href="#update">update()</a></dt>
<dd><p>Update function that is called every 25ms</p>
</dd>
</dl>
<a name="playGround"></a>
## playGround : <code>jQuery</code>
Div that is considered the game area

**Kind**: global variable  
<a name="playGroundHeight"></a>
## playGroundHeight : <code>number</code>
The height of the game area

**Kind**: global variable  
**See**: [playGround](#playGround)  
<a name="background"></a>
## background : <code>jQuery</code>
The background that is being scrolled horizontally for a feel
of movement

**Kind**: global variable  
<a name="backgroundLeft"></a>
## backgroundLeft : <code>number</code>
The left position of the background

**Kind**: global variable  
**Default**: <code>0</code>  
**See**: [background](#background)  
<a name="flappyGuyElement"></a>
## flappyGuyElement : <code>jQuery</code>
DOM element that represents the head/flappy thing that has to
get through the obstacles

**Kind**: global variable  
<a name="flappyGuyTopPos"></a>
## flappyGuyTopPos : <code>number</code>
Top position of the head

**Kind**: global variable  
**See**: [flappyGuyElement](#flappyGuyElement)  
<a name="flappyGuyMaxTop"></a>
## flappyGuyMaxTop : <code>number</code>
Maximum top value [flappyGuyElement](#flappyGuyElement) can take

**Kind**: global variable  
**See**: [flappyGuyMinTop](#flappyGuyMinTop)  
<a name="flappyGuyMinTop"></a>
## flappyGuyMinTop : <code>number</code>
Minimum top value [flappyGuyElement](#flappyGuyElement) can take

**Kind**: global variable  
**See**: [flappyGuyMaxTop](#flappyGuyMaxTop)  
<a name="flapOne"></a>
## flapOne : <code>boolean</code>
Variable to indicate if the update loop should increase height
instead of decrease it

**Kind**: global variable  
<a name="interval"></a>
## interval
Interval ID for gameloop

**Kind**: global variable  
<a name="update"></a>
## update()
Update function that is called every 25ms

**Kind**: global function  
