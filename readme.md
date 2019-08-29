PseudoCode
Necessary HTML Elements Used:

- Start Button
- 2 playable characters
  Process: Title Screen - has Start Button visible
  Start button that is waiting to be clicked - addEventListener()
  Once the Start Button is clicked, {

  1. the Start Button is no longer displayed, - startButton.style.display = “none”  2. the characters are displayed, character1.style.display = “block”
     character2.style.display = “block” // which shows the Game Screen
     }

     Game Screen
     The characters are in a stationary POSITION - (use CSS to keep characters in different positions on the y-axis)

     On a KeyPress, the characters move positions on the x-axis Win Condition: When characters reach a certain position, or when a button is pressed enough times, The user is alerted (alert()) that t
