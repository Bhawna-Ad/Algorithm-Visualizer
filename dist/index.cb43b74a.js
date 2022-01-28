// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iIB5e":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ae62edc4cb43b74a";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1l7bB":[function(require,module,exports) {
var _bubbleSort = require("./algorithms/bubbleSort");
var _selectionSort = require("./algorithms/selectionSort");
var _insertionSort = require("./algorithms/insertionSort");
var _cyclicSort = require("./algorithms/cyclicSort");
var _mergeSort = require("./algorithms/mergeSort");
var _quickSort = require("./algorithms/quickSort");
var _compareAllAlgorithms = require("./compare/compareAllAlgorithms");
//global arrray to get accessed by other functions
var nums = [];
var sorted = new Boolean(false);
//slider to change length of the array
var slider = document.getElementById('array_slider');
var array_length = slider.value;
arrays();
slider.oninput = function() {
    array_length = this.value;
    arrays();
};
//slider to change speed of the sorting algorithm
var speed_slider = document.getElementById('speed_slider');
var waitTime = 1000 - 10 * speed_slider.value;
speed_slider.oninput = function() {
    waitTime = 1000 - 10 * this.value;
};
//adding eventListeners to the buttons
document.getElementById("array").addEventListener("click", arrays);
document.getElementById("bubbleSort").addEventListener("click", callForBubbleSort);
document.getElementById("selectionSort").addEventListener("click", callForSelectionSort);
document.getElementById("insertionSort").addEventListener("click", callForInsertionSort);
document.getElementById("cyclicSort").addEventListener("click", callForCyclicSort);
document.getElementById("mergeSort").addEventListener("click", callForMergeSort);
document.getElementById("quickSort").addEventListener("click", callForQuickSort);
document.getElementById("compareAll").addEventListener("click", _compareAllAlgorithms.compareAll);
//creating the bars
function arrays() {
    console.clear();
    sorted = false;
    //storing the different widths in the array
    nums = [];
    let board = document.getElementById('board');
    //clearing the board every time a new array is formed
    board.innerHTML = "";
    for(let i = 0; i < array_length; i++){
        //storing a random number in the range of 100 to 900
        let num = Math.random() * 1000;
        nums.push(parseInt(num));
        //creating bars of varying widths
        let bar = document.createElement('div');
        if (array_length >= 20 && array_length <= 22) bar.classList.add("bar_size1");
        else if (array_length >= 23 && array_length <= 35) bar.classList.add("bar_size2");
        else if (array_length >= 35 && array_length <= 50) bar.classList.add("bar_size3");
        else if (array_length >= 51 && array_length <= 61) bar.classList.add("bar_size4");
        else bar.classList.add("bar");
        bar.id = "bar" + i;
        bar.style.width = parseInt(num) + 'px';
        board.appendChild(bar);
    }
    console.log(nums);
}
//bubble sorting algorithm
async function callForBubbleSort() {
    if (sorted === true) {
        alert("Already Sorted!");
        return;
    }
    _bubbleSort.bubbleSort(nums, waitTime);
    sorted = true;
    console.log(nums);
}
//selection sorting algorithm
async function callForSelectionSort() {
    if (sorted === true) {
        alert("Already Sorted!");
        return;
    }
    _selectionSort.selectionSort(nums, waitTime);
    sorted = true;
    console.log(nums);
}
//insertion sorting algorithm
async function callForInsertionSort() {
    if (sorted === true) {
        alert("Already Sorted!");
        return;
    }
    _insertionSort.insertionSort(nums, waitTime);
    sorted = true;
    console.log(nums);
}
//cyclic sorting function
async function callForCyclicSort() {
    if (sorted === true) {
        alert("Already Sorted!");
        return;
    }
    //fix for cyclic sort length
    _cyclicSort.cyclicSort(nums.length, waitTime);
    console.log(nums);
    sorted = true;
}
//add wait time
//check for the bug in here
//merge sorting algorithm
function callForMergeSort() {
    if (sorted === true) {
        alert("Already Sorted!");
        return;
    }
    _mergeSort.mergeSort(nums, waitTime);
    console.log(nums);
    sorted = true;
}
//quick sort algorithm
function callForQuickSort() {
    if (sorted === true) {
        alert("Already Sorted!");
        return;
    }
    _quickSort.quickSort(nums, waitTime);
    console.log(nums);
    sorted = true;
}

},{"./algorithms/bubbleSort":"cLFZ1","./algorithms/selectionSort":"6SzgW","./algorithms/insertionSort":"RcfXM","./algorithms/cyclicSort":"02XYl","./algorithms/mergeSort":"fSdla","./algorithms/quickSort":"AJhuu","./compare/compareAllAlgorithms":"iIcC5"}],"cLFZ1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bubbleSort", ()=>bubbleSort
);
var _utils = require("./utils");
async function bubbleSort(nums, waitTime) {
    for(let i = 0; i < nums.length; i++){
        let swapped = new Boolean(false);
        for(let j = 1; j < nums.length - i; j++){
            let div1 = document.getElementById('bar' + j);
            let div2 = document.getElementById('bar' + (j - 1));
            div1.style.backgroundColor = 'red';
            div2.style.backgroundColor = 'red';
            await _utils.addWait(waitTime);
            //check for the widths in the array and swap the array elements and div elements as well
            if (nums[j] < nums[j - 1]) {
                _utils.swap(div1, div2);
                _utils.swapArray(nums, j, j - 1);
                swapped = true;
            }
            div1.style.backgroundColor = 'aqua';
            div2.style.backgroundColor = 'aqua';
            if (!swapped) break;
        }
    }
    console.log(nums);
}

},{"./utils":"dSdlv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dSdlv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "swap", ()=>swap
);
parcelHelpers.export(exports, "swapArray", ()=>swapArray
);
parcelHelpers.export(exports, "getMaxIndex", ()=>getMaxIndex
);
parcelHelpers.export(exports, "addWait", ()=>addWait
);
//swapping the styles of two elements
function swap(element1, element2) {
    const style1 = window.getComputedStyle(element1);
    const style2 = window.getComputedStyle(element2);
    const newStyle1 = style1.getPropertyValue("width");
    const newStyle2 = style2.getPropertyValue("width");
    element1.style.width = newStyle2;
    element2.style.width = newStyle1;
}
//function to swap elements of array
function swapArray(nums, first, second) {
    var temp = nums[first];
    nums[first] = nums[second];
    nums[second] = temp;
}
//function to get the maximum index
function getMaxIndex(nums, start, end) {
    var max = start;
    for(var i = start; i <= end; i++)if (nums[max] < nums[i]) max = i;
    return max;
}
//function to add waiting time
function addWait(milisec) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('');
        }, milisec);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6SzgW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "selectionSort", ()=>selectionSort
);
var _utils = require("./utils");
async function selectionSort(nums, waitTime) {
    for(var i = 0; i < nums.length; i++){
        var last = nums.length - 1 - i;
        var max = _utils.getMaxIndex(nums, 0, last);
        let div1 = document.getElementById('bar' + last);
        let div2 = document.getElementById('bar' + max);
        div1.style.backgroundColor = 'red';
        div2.style.backgroundColor = 'red';
        await _utils.addWait(waitTime);
        _utils.swap(div1, div2);
        _utils.swapArray(nums, last, max);
        div1.style.backgroundColor = 'aqua';
        div2.style.backgroundColor = 'aqua';
    }
    console.log(nums);
}

},{"./utils":"dSdlv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"RcfXM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "insertionSort", ()=>insertionSort
);
var _utils = require("./utils");
async function insertionSort(nums, waitTime) {
    for(var i = 0; i < nums.length; i++)for(var j = i + 1; j > 0; j--){
        let div1 = document.getElementById('bar' + j);
        let div2 = document.getElementById('bar' + (j - 1));
        div1.style.backgroundColor = 'red';
        div2.style.backgroundColor = 'red';
        await _utils.addWait(waitTime);
        if (nums[j] < nums[j - 1]) {
            _utils.swap(div1, div2);
            _utils.swapArray(nums, j, j - 1);
            div1.style.backgroundColor = 'aqua';
            div2.style.backgroundColor = 'aqua';
        } else {
            div1.style.backgroundColor = 'aqua';
            div2.style.backgroundColor = 'aqua';
            break;
        }
    }
    console.log(nums);
}

},{"./utils":"dSdlv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"02XYl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cyclicSort", ()=>cyclicSort
);
var _utils = require("./utils");
async function cyclicSort(array_length, waitTime) {
    var nums = [];
    var board = document.getElementById('board');
    board.innerHTML = "";
    var len = 0;
    while(len < 100){
        //take the range of random numbers between 0 to 990 with a gap of 10
        var num = 10 * parseInt(Math.random() * 100);
        if (nums.indexOf(num) != -1) continue;
        var bar = document.createElement('div');
        bar.classList.add("bar");
        bar.id = "bar" + len;
        bar.style.width = num + 'px';
        board.appendChild(bar);
        await _utils.addWait(2);
        nums.push(num);
        len++;
    }
    console.log(nums);
    var i = 0;
    while(i < array_length){
        var index = nums[i] / 10;
        var div1 = document.getElementById('bar' + i);
        var div2 = document.getElementById('bar' + index);
        div1.style.backgroundColor = 'red';
        div2.style.backgroundColor = 'red';
        await _utils.addWait(waitTime);
        if (nums[i] != nums[index]) {
            _utils.swapArray(nums, i, index);
            _utils.swap(div1, div2);
        } else i++;
        div1.style.backgroundColor = 'aqua';
        div2.style.backgroundColor = 'aqua';
    }
    console.log(nums);
}

},{"./utils":"dSdlv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fSdla":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeSort", ()=>mergeSort
);
function mergeSort(nums, addWait) {
    mergeSort_helper(nums, 0, nums.length);
    console.log(nums);
}
async function merge(arr, left, mid, right) {
    var n1 = mid - left + 1;
    var n2 = right - mid;
    var leftArray = new Array(n1);
    var rightArray = new Array(n2);
    for(var i = 0; i < n1; i++)leftArray[i] = arr[left + i];
    for(var i = 0; i < n2; i++)rightArray[i] = arr[mid + 1 + i];
    var i = 0;
    var j = 0;
    var k = left;
    while(i < n1 && j < n2){
        divElement = document.getElementById('bar' + k);
        divElement.style.backgroundColor = 'red';
        if (leftArray[i] <= rightArray[j]) {
            divElement.style.width = leftArray[i] + 'px';
            arr[k] = leftArray[i];
            i++;
        } else {
            divElement.style.width = rightArray[j] + 'px';
            arr[k] = rightArray[j];
            j++;
        }
        k++;
        divElement.style.backgroundColor = 'aqua';
    }
    while(i < n1){
        divElement.style.backgroundColor = 'red';
        divElement.style.width = leftArray[i] + 'px';
        arr[k] = leftArray[i];
        i++;
        k++;
        divElement.style.backgroundColor = 'aqua';
    }
    while(j < n2){
        divElement.style.backgroundColor = 'red';
        divElement.width = rightArray[j] + 'px';
        arr[k] = rightArray[j];
        j++;
        k++;
        divElement.style.backgroundColor = 'aqua';
    }
}
function mergeSort_helper(arr, left, right) {
    if (left >= right) return;
    var mid = left + parseInt((right - left) / 2);
    mergeSort_helper(arr, left, mid);
    mergeSort_helper(arr, mid + 1, right);
    merge(arr, left, mid, right);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"AJhuu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "quickSort", ()=>quickSort
);
var _utils = require("./utils");
//quick sort
function quickSort(nums, waitTime) {
    quickSort_helper(nums, 0, nums.length - 1, waitTime);
    console.log(nums);
}
async function quickSort_helper(nums, low, high, waitTime) {
    var start = low;
    var end = high;
    var mid = parseInt(low + (high - low) / 2);
    var pivot = nums[mid];
    while(start <= end){
        while(nums[start] < pivot)start++;
        while(nums[end] > pivot)end--;
        var div1 = document.getElementById('bar' + start);
        var div2 = document.getElementById('bar' + end);
        div1.style.backgroundColor = 'red';
        div2.style.backgroundColor = 'red';
        await _utils.addWait(waitTime);
        if (start <= end) {
            _utils.swapArray(nums, start, end);
            _utils.swap(div1, div2);
            start++;
            end--;
        }
        div1.style.backgroundColor = 'aqua';
        div2.style.backgroundColor = 'aqua';
    }
    if (low < end) quickSort_helper(nums, low, end, waitTime);
    if (start < high) quickSort_helper(nums, start, high, waitTime);
}

},{"./utils":"dSdlv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iIcC5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compareAll", ()=>compareAll
);
var _bubbleSort = require("./compareAlgorithms/bubbleSort");
var _selectionSort = require("./compareAlgorithms/selectionSort");
var _insertionSort = require("./compareAlgorithms/insertionSort");
var _cyclicSort = require("./compareAlgorithms/cyclicSort");
var _mergeSort = require("./compareAlgorithms/mergeSort");
var _quickSort = require("./compareAlgorithms/quickSort");
var arr_length = 50;
var time = 100;
var compareArray = [];
function compareAll() {
    var board = document.getElementById('board');
    board.innerHTML = "";
    var index = 1;
    for(var row = 0; row < 2; row++){
        var rowDiv = document.createElement('div');
        for(var col = 0; col < 3; col++){
            var cell = document.createElement('div');
            cell.classList.add('col');
            cell.id = 'cell' + index;
            index++;
            rowDiv.appendChild(cell);
        }
        board.appendChild(rowDiv);
    }
    for(var i = 0; i < arr_length; i++)compareArray.push(parseInt(Math.random() * 300));
    for(var cell_no = 0; cell_no < 6; cell_no++){
        index = 0;
        var cell = document.getElementById('cell' + (cell_no + 1));
        for(var bar_no = 0; bar_no < arr_length; bar_no++){
            var bar = document.createElement('div');
            bar.classList.add('compareBar');
            bar.id = 'compareBar' + cell_no + '-' + bar_no;
            bar.style.width = compareArray[index] + 'px';
            index++;
            cell.appendChild(bar);
        }
    }
    console.log(compareArray);
    _bubbleSort.bubbleSort(compareArray, time);
    _selectionSort.selectionSort(compareArray, time);
    _insertionSort.insertionSort(compareArray, time);
    _cyclicSort.cyclicSort(time);
    _mergeSort.mergeSort(compareArray, time);
    _quickSort.quickSort(compareArray, time);
}

},{"./compareAlgorithms/bubbleSort":"37bny","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./compareAlgorithms/selectionSort":"jBqYV","./compareAlgorithms/insertionSort":"97EXv","./compareAlgorithms/cyclicSort":"1KmTR","./compareAlgorithms/mergeSort":"lsEqT","./compareAlgorithms/quickSort":"4reUW"}],"37bny":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bubbleSort", ()=>bubbleSort
);
var _compareUtils = require("./compareUtils");
//cell number 0
async function bubbleSort(nums, time) {
    var arr = _compareUtils.getArray(nums);
    for(let i = 0; i < arr.length; i++){
        let swapped = new Boolean(false);
        for(let j = 1; j < arr.length - i; j++){
            let div1 = document.getElementById("compareBar0-" + j);
            let div2 = document.getElementById("compareBar0-" + (j - 1));
            div1.style.backgroundColor = 'red';
            div2.style.backgroundColor = 'red';
            //check for this later
            await _compareUtils.addWait(time);
            //check for the widths in the array and swap the array elements and div elements as well
            if (arr[j] < arr[j - 1]) {
                _compareUtils.swap(div1, div2);
                _compareUtils.swapArray(arr, j, j - 1);
                swapped = true;
            }
            div1.style.backgroundColor = 'aqua';
            div2.style.backgroundColor = 'aqua';
            if (!swapped) break;
        }
    }
    console.log(arr);
}

},{"./compareUtils":"9rjWT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9rjWT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getArray", ()=>getArray
);
parcelHelpers.export(exports, "addWait", ()=>addWait
);
parcelHelpers.export(exports, "swap", ()=>swap
);
parcelHelpers.export(exports, "swapArray", ()=>swapArray
);
parcelHelpers.export(exports, "getMaxIndex", ()=>getMaxIndex
);
//return a new copy of the array
function getArray(compareArray) {
    return compareArray.slice(0);
}
//adding waiting time in algorithms
function addWait(milisec) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('');
        }, milisec);
    });
}
//swapping the styles of two elements
function swap(element1, element2) {
    const style1 = window.getComputedStyle(element1);
    const style2 = window.getComputedStyle(element2);
    const newStyle1 = style1.getPropertyValue("width");
    const newStyle2 = style2.getPropertyValue("width");
    element1.style.width = newStyle2;
    element2.style.width = newStyle1;
}
//function to swap elements of array
function swapArray(arr, first, second) {
    var temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}
//function to get the maximum index
function getMaxIndex(arr, start, end) {
    var max = start;
    for(var i = start; i <= end; i++)if (arr[max] < arr[i]) max = i;
    return max;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jBqYV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "selectionSort", ()=>selectionSort
);
var _compareUtils = require("./compareUtils");
//cell number 1
async function selectionSort(nums, time) {
    var arr = _compareUtils.getArray(nums);
    for(var i = 0; i < arr.length; i++){
        var last = arr.length - 1 - i;
        var max = _compareUtils.getMaxIndex(arr, 0, last);
        let div1 = document.getElementById("compareBar1-" + last);
        let div2 = document.getElementById("compareBar1-" + max);
        div1.style.backgroundColor = 'red';
        div2.style.backgroundColor = 'red';
        await _compareUtils.addWait(time);
        _compareUtils.swap(div1, div2);
        _compareUtils.swapArray(arr, last, max);
        div1.style.backgroundColor = 'aqua';
        div2.style.backgroundColor = 'aqua';
    }
}

},{"./compareUtils":"9rjWT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"97EXv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "insertionSort", ()=>insertionSort
);
var _compareUtils = require("./compareUtils");
//cell number 2
async function insertionSort(nums, time) {
    var arr = _compareUtils.getArray(nums);
    for(var i = 0; i < arr.length - 1; i++)for(var j = i + 1; j > 0; j--){
        let div1 = document.getElementById("compareBar2-" + j);
        let div2 = document.getElementById("compareBar2-" + (j - 1));
        div1.style.backgroundColor = 'red';
        div2.style.backgroundColor = 'red';
        await _compareUtils.addWait(time);
        if (arr[j] < arr[j - 1]) {
            _compareUtils.swap(div1, div2);
            _compareUtils.swapArray(arr, j, j - 1);
            div1.style.backgroundColor = 'aqua';
            div2.style.backgroundColor = 'aqua';
        } else {
            div1.style.backgroundColor = 'aqua';
            div2.style.backgroundColor = 'aqua';
            break;
        }
    }
}

},{"./compareUtils":"9rjWT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1KmTR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cyclicSort", ()=>cyclicSort
);
var _compareUtils = require("./compareUtils");
//cell number 3
async function cyclicSort(time) {
    var arr = [];
    var cell = document.getElementById('cell4');
    cell.innerHTML = "";
    var len = 0;
    while(len < 50){
        //take the range of random numbers between 900 to 999
        var num = 6 * parseInt(Math.random() * 50);
        if (arr.indexOf(num) != -1) continue;
        var bar = document.createElement('div');
        bar.classList.add("compareBar");
        bar.id = "compareBar3-" + len;
        bar.style.width = num + 'px';
        cell.appendChild(bar);
        arr.push(num);
        len++;
    }
    var i = 0;
    while(i < 50){
        var index = arr[i] / 6;
        var div1 = document.getElementById("compareBar3-" + i);
        var div2 = document.getElementById("compareBar3-" + index);
        div1.style.backgroundColor = 'red';
        div2.style.backgroundColor = 'red';
        await _compareUtils.addWait(time);
        if (arr[i] != arr[index]) {
            _compareUtils.swapArray(arr, i, index);
            _compareUtils.swap(div1, div2);
        } else i++;
        div1.style.backgroundColor = 'aqua';
        div2.style.backgroundColor = 'aqua';
    }
    console.log(arr);
}

},{"./compareUtils":"9rjWT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lsEqT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeSort", ()=>mergeSort
);
var _compareUtils = require("./compareUtils");
//cell number 4
function mergeSort(nums, time) {
    var arr = _compareUtils.getArray(nums);
    mergeSort_helper(arr, 0, arr.length);
}
async function merge(arr, left, mid, right) {
    var n1 = mid - left + 1;
    var n2 = right - mid;
    var leftArray = new Array(n1);
    var rightArray = new Array(n2);
    for(var i = 0; i < n1; i++)leftArray[i] = arr[left + i];
    for(var i = 0; i < n2; i++)rightArray[i] = arr[mid + 1 + i];
    var i = 0;
    var j = 0;
    var k = left;
    while(i < n1 && j < n2){
        divElement = document.getElementById("compareBar4-" + k);
        divElement.style.backgroundColor = 'red';
        if (leftArray[i] <= rightArray[j]) {
            divElement.style.width = leftArray[i] + 'px';
            arr[k] = leftArray[i];
            i++;
        } else {
            divElement.style.width = rightArray[j] + 'px';
            arr[k] = rightArray[j];
            j++;
        }
        k++;
        divElement.style.backgroundColor = 'aqua';
    }
    while(i < n1){
        divElement.style.backgroundColor = 'red';
        divElement.style.width = leftArray[i] + 'px';
        arr[k] = leftArray[i];
        i++;
        k++;
        divElement.style.backgroundColor = 'aqua';
    }
    while(j < n2){
        divElement.style.backgroundColor = 'red';
        divElement.width = rightArray[j] + 'px';
        arr[k] = rightArray[j];
        j++;
        k++;
        divElement.style.backgroundColor = 'aqua';
    }
}
function mergeSort_helper(arr, left, right) {
    if (left >= right) return;
    var mid = left + parseInt((right - left) / 2);
    mergeSort_helper(arr, left, mid);
    mergeSort_helper(arr, mid + 1, right);
    merge(arr, left, mid, right);
}

},{"./compareUtils":"9rjWT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4reUW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "quickSort", ()=>quickSort
);
var _compareUtils = require("./compareUtils");
//cell number 5
function quickSort(nums, time) {
    var arr = _compareUtils.getArray(nums);
    quickSort_helper(arr, 0, arr.length - 1, time);
}
async function quickSort_helper(arr, low, high, time) {
    var start = low;
    var end = high;
    var mid = parseInt(low + (high - low) / 2);
    var pivot = arr[mid];
    while(start <= end){
        while(arr[start] < pivot)start++;
        while(arr[end] > pivot)end--;
        var div1 = document.getElementById("compareBar5-" + start);
        var div2 = document.getElementById("compareBar5-" + end);
        div1.style.backgroundColor = 'red';
        div2.style.backgroundColor = 'red';
        await _compareUtils.addWait(time);
        if (start <= end) {
            _compareUtils.swapArray(arr, start, end);
            _compareUtils.swap(div1, div2);
            start++;
            end--;
        }
        div1.style.backgroundColor = 'aqua';
        div2.style.backgroundColor = 'aqua';
    }
    if (low < end) quickSort_helper(arr, low, end, time);
    if (start < high) quickSort_helper(arr, start, high, time);
}

},{"./compareUtils":"9rjWT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["iIB5e","1l7bB"], "1l7bB", "parcelRequire355e")

//# sourceMappingURL=index.cb43b74a.js.map
