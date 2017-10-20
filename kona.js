// =============================================================================================================
//  kona.js
//  A simple, lightweight, self-contained library that facilitates registering key sequences with a callback.
//  Copyright (c) 2017, Mathieu Déziel
// =============================================================================================================

(function(window){
    
    function Kona() {
        this.version = 'v0.1';
        this.codes = [];
        this.keyspressed = [];
    }

    // Registers a sequence of keys (array) with a callback (function) as a code.
    Kona.prototype.register = function(keys, callback) {
        if (!Array.isArray(keys) || typeof callback !== 'function') return;
        this.codes.push({keys: this._convertToKeyCodes(keys), callback: callback});
        return this;
    }

    // Adds event listeners to the registered code.
    Kona.prototype.activate = function() {
        document.addEventListener("keyup", this, false);
        return this;
    }

    // Implements EventListener Interface.
    Kona.prototype.handleEvent = function(e) {
        if (e.type === 'keyup') {
            var key = e.which || e.keyCode;
            if ((key >= 65 && key <= 90) && !e.shiftKey) {
                // Key codes are received in uppercase.
                // Lowering them if needed.
                key = key + 32;
            }

            this.keyspressed.push(key);

            this.codes.forEach(function(code) {
                if (this.keyspressed.toString().indexOf(code.keys) > -1) {
                    this.keyspressed = [];
                    code.callback.call(this);
                }
            }, this);
        }
    }

    // Converts keys array to key codes array.
    Kona.prototype._convertToKeyCodes = function(keys) {
        var wordsMap = { "left": 37, "up": 38, "right": 39, "down": 40 };
        var wordsLookup = Object.keys(wordsMap);

        var convertedKeys = keys.map(function(key){
            if (key % 1 === 0) return key;
            if (wordsLookup.indexOf(key.trim()) > -1) return wordsMap[key];
            return key.charCodeAt(0);
        });

        return convertedKeys;
    }

    window.Kona = Kona;
})(window);