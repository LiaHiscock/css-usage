/* 
    RECIPE: switchToFinder
    -------------------------------------------------------------
    Author: <YOUR NAME>
    Description: <WHAT IS YOUR RECIPE LOOKING FOR>
*/

void function() {
    window.CSSUsage.StyleWalker.recipesToRun.push( function switchToFinder( element, results) 
    {
        //var needles = ['switchPhrase'];

        //for(var i = 0; i < needles.length; i++)
        //{
        
        //if ((new RegExp("(Switch to|Get|Download|Install)(\w|\s)+(Google|Chrome|Safari|firefox|Opera|Internet Explorer)", "i")).test(element.textContent))
        var regexTest = new RegExp("(Switch to|Get|Download|Install)(\\w|\\s)+(Google|Chrome|Safari|firefox|Opera|Internet Explorer)", "i");
        if (regexTest.test(element.innerHTML))
            {
                //console.log("Match Detected: " + element.innerHTML);
                results["switchPhrase"] = results["switchPhrase"] || { count: 0 };
                results["switchPhrase"].count++;
            }
            else {
                console.log("No Match Detected: " + element.innerHTML);
            }
       // }   

        return results;
    });
}();    