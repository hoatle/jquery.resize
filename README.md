<pre>
/**
 * The jQuery resize plugin, version v0.1.0
 *
 * Usage:
 *
 * $el.resize(options, duration, easing, finishCallback);
 *
 * For example:
 *
 * $el.resize({
 *   dir: 't',
 *   tSize: 200
 * }, 1000, function() {
 *   //finish calledback
 * });
 *
 * options:
 * - dir: t, r, b, l, tr, rb, bl, lt, rl, tb, trbl.
 * - tSize, rSize, bSize, lSize.
 *
 *
 * @author hoatle
 */
</pre>

 Demo: http://jsfiddle.net/hoatle/y2CvB/2/

APIs as samples:

<pre>
       function resizeTop($el, callback) {
            $el.resize({
                dir: 't',
                tSize: 50
            }, 1000, callback);
        }
        
        function resizeRight($el, callback) {
            $el.resize({
                dir: 'r',
                rSize: 50
            }, 1000, callback);
        }
        
        function resizeBottom($el, callback) {
            $el.resize({
                dir: 'b',
                bSize: 50                                        
            }, 1000, callback);            
        }
        
        function resizeLeft($el, callback) {
            $el.resize({
                dir: 'l',
                lSize: 50
            }, 1000, callback);
        }
            
        function resizeTopRight($el, callback) {
            $el.resize({
                dir: 'tr',
                tSize: 20,
                rSize: 20
            }, 1000, callback);                
        }
            
        function resizeRightBottom($el, callback) {
            $el.resize({
                dir: 'rb',
                rSize: 20,
                bSize: 20
            }, 1000, callback);
        }
        
        function resizeBottomLeft($el, callback) {
            $el.resize({
                dir: 'bl',
                bSize: 20,
                lSize: 20
            }, 1000, callback);
        }
        
        function resizeLeftTop($el, callback) {
            $el.resize({
                dir: 'lt',
                lSize: 20,
                tSize: 20
            }, 1000, callback);  
        }
        
        function resizeTopBottom($el, callback) {
            $el.resize({
                dir: 'tb',
                tSize: 20,
                bSize: 20
            }, 1000, callback);
        }
            
            
        function resizeRightLeft($el, callback) {
            $el.resize({
                dir: 'rl',
                rSize: 20,
                lSize: 20
            }, 1000, callback);    
        
        }
        
        function resizeAll($el, callback) {
            $el.resize({
                dir: 'trbl',
                tSize: 10,
                rSize: 15,
                bSize: 20,
                lSize: 25
            }, 1000, callback);
        }
</pre>