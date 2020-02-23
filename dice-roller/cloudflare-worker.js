async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }
  return new Response(someHTML, init)
}
addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})
const someHTML =  `<!DOCTYPE html>
<html>
  <head>
    <style type="text/css">
      body {
        display: flex;
        align-items: center;
      }

      body > input,
      body > button {
        margin-right: 10px;
      }


      * {
        font-family: Helvetica, Arial, sans-serif;
        background: rgb(47, 52, 55);
        color: white;
      }

      input {
        display: inline-flex;
        align-items: center;
        font-size: 14px;
        line-height: 20px;
        padding: 6px 10px;
        position: relative;
        border-radius: 3px;
        box-shadow: rgba(15, 15, 15, 0.2) 0px 0px 0px 1px inset, rgba(15, 15, 15, 0.2) 0px 1px 1px inset;
        background: rgba(15, 15, 15, 0.3);
        cursor: text;
        border: none;
      }

      button {
        user-select: none;
        transition: background 120ms ease-in 0s;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        white-space: nowrap;
        height: 32px;
        border-radius: 3px;
        box-shadow: rgba(15, 15, 15, 0.2) 0px 0px 0px 1px inset, rgba(15, 15, 15, 0.1) 0px 1px 2px;
        background: rgb(46, 170, 220);
        color: white;
        fill: white;
        line-height: 1.2;
        padding-left: 12px;
        padding-right: 12px;
        font-size: 14px;
        font-weight: 500;
        border: none;
      }

      #placeholder {
        border: 1px solid gray;
        border-radius: 3px;
        font-size: 14px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 7px 16px;
        height: 16px;
        min-width: 20px;
      }
    </style>
  </head>
  <body>
    <input id="diceNumber" type="number" min="1" max="6" value="1" />
    <input id="sides" type="number" min="6" max="20" value="20" />
    <input id="modifier" type="number" min="0" max="10" value="0" />
    <button id="button">Roll</button>
    <p id="placeholder">&nbsp;</p>

    <script type="text/javascript">
      var button     = document.getElementById('button');
      var diceNumber = document.getElementById('diceNumber').valueAsNumber;
      var sides      = document.getElementById('sides').valueAsNumber;
      var modifier   = document.getElementById('modifier').valueAsNumber;

      document.getElementById('diceNumber').addEventListener('change', ( event ) => {
        diceNumber = event.target.valueAsNumber;

        console.log("Dice Number Changed: " + diceNumber);
      })

      document.getElementById('sides').addEventListener('change', ( event ) => {

        sides = event.target.valueAsNumber;

        console.log("Sides Changed: " + sides);
      })

      document.getElementById('modifier').addEventListener('change', ( event ) => {
        modifier = event.target.valueAsNumber;

        console.log("Modifier Changed: " + modifier);
      })

      function printNumber(number) {
        var placeholder = document.getElementById('placeholder');
        placeholder.innerHTML = number;
      }

      button.onclick = function() {
        var results = [];

        for (var i = 0; i < diceNumber; i++) {
          console.log("Sides Value: " + sides);
          console.log("Dice Number Value: " + diceNumber);
          console.log("Modifier Value: " + modifier);

          result = Math.floor(Math.random() * sides + 1);

          console.log("Result (pre-modifier): " + result);

          if (modifier != undefined && !isNaN(modifier)) {
            result = result + modifier;

            console.log("Result (post-modifier): " + result);
          }

          results.push(result);
        }

        console.log(results);

        printNumber(results);
      };
    </script>
  </body>
</html>
`