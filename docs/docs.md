## Classes
<dl>
<dt><a href="#FlappyGuy">FlappyGuy</a></dt>
<dd></dd>
</dl>
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
<dt><a href="#flapOne">flapOne</a> : <code>boolean</code></dt>
<dd><p>Variable to indicate if the update loop should increase height
instead of decrease it</p>
</dd>
<dt><a href="#interval">interval</a></dt>
<dd><p>Interval ID for gameloop</p>
</dd>
<dt><a href="#flappyGuy">flappyGuy</a> : <code><a href="#FlappyGuy">FlappyGuy</a></code></dt>
<dd><p>Flappy guy insteance</p>
</dd>
</dl>
## Functions
<dl>
<dt><a href="#update">update()</a></dt>
<dd><p>Update function that is called every 25ms</p>
</dd>
<dt><a href="#death">death()</a></dt>
<dd><p>What to do in case player dies</p>
</dd>
</dl>
<a name="FlappyGuy"></a>
## FlappyGuy
**Kind**: global class  

* [FlappyGuy](#FlappyGuy)
  * [new FlappyGuy(elementSelector, maxTop, deathCallback)](#new_FlappyGuy_new)
  * [.element](#FlappyGuy+element) ⇒ <code>jQuery</code>
  * [.maxTop](#FlappyGuy+maxTop) ⇒ <code>number</code>
  * [.currentTop](#FlappyGuy+currentTop) ⇒ <code>number</code>
  * [.update(flapOne)](#FlappyGuy+update)

<a name="new_FlappyGuy_new"></a>
### new FlappyGuy(elementSelector, maxTop, deathCallback)
Create a new FlappyGuy instance


| Param | Type |
| --- | --- |
| elementSelector | <code>string</code> | 
| maxTop | <code>number</code> | 
| deathCallback | <code>function</code> | 

<a name="FlappyGuy+element"></a>
### flappyGuy.element ⇒ <code>jQuery</code>
Get the element jQuery object wrapped element of this insteance

**Kind**: instance property of <code>[FlappyGuy](#FlappyGuy)</code>  
<a name="FlappyGuy+maxTop"></a>
### flappyGuy.maxTop ⇒ <code>number</code>
Maximum top position

**Kind**: instance property of <code>[FlappyGuy](#FlappyGuy)</code>  
<a name="FlappyGuy+currentTop"></a>
### flappyGuy.currentTop ⇒ <code>number</code>
Current top position

**Kind**: instance property of <code>[FlappyGuy](#FlappyGuy)</code>  
<a name="FlappyGuy+update"></a>
### flappyGuy.update(flapOne)
Update this object in the game loop

**Kind**: instance method of <code>[FlappyGuy](#FlappyGuy)</code>  

| Param | Type |
| --- | --- |
| flapOne | <code>boolean</code> | 

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
<a name="flapOne"></a>
## flapOne : <code>boolean</code>
Variable to indicate if the update loop should increase height
instead of decrease it

**Kind**: global variable  
<a name="interval"></a>
## interval
Interval ID for gameloop

**Kind**: global variable  
<a name="flappyGuy"></a>
## flappyGuy : <code>[FlappyGuy](#FlappyGuy)</code>
Flappy guy insteance

**Kind**: global variable  
<a name="update"></a>
## update()
Update function that is called every 25ms

**Kind**: global function  
<a name="death"></a>
## death()
What to do in case player dies

**Kind**: global function  
