/* 
    RECIPE: <NAME OF RECIPE>
    -------------------------------------------------------------
    Author: <YOUR NAME>
    Description: <WHAT IS YOUR RECIPE LOOKING FOR>
*/

void function() {
    window.CSSUsage.StyleWalker.recipesToRun.push( function unsupportedBrowser( element, results) 
    {
        var needles = ['Unsupported Browsers'];

        for(var i = 0; i < needles.length; i++)
        {
            if(element.textContent.indexOf(needles[i]) != -1 )  
            {
                results['unsupportedBrowsers'] = results['unsupportedBrowsers'] || { count : 0};
                results['unsupportedBrowsers'].count++;
               
            }
        }

        return results;
    });
}();
