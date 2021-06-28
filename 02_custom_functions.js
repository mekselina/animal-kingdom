// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
// Declare your variables here



//Helper functions



const create_experimental_data = function(nonnegated_data) {
  /*decide whether participant is in nonnegated or negated experiment lists
  *randomize for each animal whether non-intensified or intensified condition(1 out of 3) will be shown in either
  *nonnegated or negated list
  */

  // decide if person gets negated or non negated statements
  var experimental_data;
  const negation_number = Math.random();
  
  if (negation_number < 1) {
    experimental_data = nonnegated_data;
  } else {
    experimental_data = negated_data;
  }

  //store every statement of every animal for one participant
  var all_statements = {sliderRating:[]};
  var count_actual;
  var count_literal;
  var count_real;
  var adjectives_once = ["actual", "literal", "real"];
  var pick_random_adjective = adjectives_once[Math.floor(Math.random()*adjectives_once.length)];

  const adjectives = ["actual", "actual", "actual", "actual", "literal", "literal", "literal", "literal", "real", "real", "real", "real"];
  adjectives.push(pick_random_adjective);
  const adjectives_shuffled = adjectives.sort((a, b) => 0.5 - Math.random());

  // loop through different animals
  for (const [animal, values] of Object.entries(experimental_data)) {
    //console.log(`${animal}: ${values}`);

    // different text stuff of animals can be retrieved
    //console.log(values.find(item => item.item_id === 1).question);

    all_statements.sliderRating.push(values.find(item => item.condition === "non-intensified"));

    var random_adjective = adjectives_shuffled.pop()

    all_statements.sliderRating.push(values.find(item => item.modal === random_adjective));


  }
  return all_statements;
};


/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
// Declare your helper functions here



/* Hooks
*
*
*/

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};

// compares the chosen answer to the value of `option1`
check_response = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.correct) {
            alert('Your answer is correct! Yey!');
        } else {
            alert('Sorry, this answer is incorrect :( The correct answer was ' + data.correct);
        }
        next();
    })
}

/*const handle_response_click = function() {
                // reveal 'next' button
            $("input[name=answer]").on("change", function() {
                let selected_option_id = 'option'+$("input[name=answer]:checked").val();
                document.getElementById(selected_option_id).style.border="6px solid black";
                response: $("input[name=answer]:checked").val();
                $("#part2").removeClass("magpie-nodisplay");
            });
    };*/

// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/
