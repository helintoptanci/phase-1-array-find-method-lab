// code your solution here
function superbowlWin(results) {
    
    const win = results.find(result => result.result === "W");
  
   
    if (win) {
      return win.year;
    }
  
    
    return undefined;
  }
  