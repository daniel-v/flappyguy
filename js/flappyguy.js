"use strict";

class FlappyGuy {
    /**
     * Create a new FlappyGuy instance
     * @param {string} elementSelector
     * @param {number} maxTop
     * @param {function} deathCallback
     */
    constructor(elementSelector, maxTop, deathCallback) {
        this._element = $(elementSelector);
        this._maxTop = maxTop;
        this._currentTop = this._element.offset().top;
        this._deathCallback = deathCallback;
    }

    /**
     * Update this object in the game loop
     * @param {boolean} flapOne
     */
    update(flapOne) {
        if(flapOne) {
            this._jump();
        } else {
            this._fall();
        }

        if(this._currentTop > this._maxTop) {
            this._deathCallback();
        }

        if(this._currentTop < 0) {
            this._currentTop = 0;
        }

        this._element.css("top", this._currentTop + "px");
    }

    /**
     * Decrease top position
     * Ran when player clicks
     * @private
     */
    _jump() {
        this._currentTop -= FlappyGuy._JUMP_VAL;
    }

    /**
     * Increase top position
     * Ran when player clicks
     * @private
     */
    _fall() {
        this._currentTop += FlappyGuy._FALL_VAL;
    }

    /**
     * Get the element jQuery object wrapped element of this insteance
     * @returns {jQuery}
     */
    get element() {
        return this._element;
    }

    /**
     * Maximum top position
     * @returns {number}
     */
    get maxTop() {
        return this._maxTop;
    }

    /**
     * Current top position
     * @returns {number}
     */
    get currentTop() {
        return this._currentTop;
    }

    /**
     * Pixels to increase top position with on update
     * @returns {number}
     * @private
     */
    static get _FALL_VAL() { return 4; }

    /**
     * Pixels to decrease top position with on click
     * @returns {number}
     * @private
     */
    static get _JUMP_VAL() { return 40; }
}