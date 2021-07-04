// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  title: 'Welcome',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Thank you for participating in our study. Before starting the experiment, please read the legal information on the next pages carefully.`,
  buttonText: 'Show me the legal information'
});

const legal_info_1 = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'legal_info_1',
  title: 'Legal information',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `In this task, you will be asked to read short metaphoric statements and to guess what these statements might mean. The whole experiment should take up to five minutes.
         <br />
         <br />
         The only condition on taking part is that you are <b>over 18</b>. Please read the consent form about participating in the experiment on the next page.
         <br />
         <br />
          By clicking the accept button below, you indicate that:
          <br />
          <span style="margin-left:2em">You are over 18.</span>
          <br />
          <span style="margin-left:2em">You have read the consent form.</span>
          <br />
          <span style="margin-left:2em">You voluntarily agree to participate and understand that you can stop your participation at any time.</span>
          <br />
          <span style="margin-left:2em">You agree that your <b>anonymous</b> data may be kept permanently in University of Edinburgh archives and may be used by qualified researchers for teaching and research purposes.</span>
          <br />
          <br />
          If you do not agree to all of these points, please close your browser window now.
          <br />
          <br />
          `,
  buttonText: 'Read consent form'
});

const legal_info_2 = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'legal_info_2',
  title: 'Consent Form',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `<p><b>This experiment is being conducted as part of ongoing research at The University of Edinburgh. Please read the following consent form carefully before continuing. If you have any questions or comments about the study, please email the study organizer at <a href="mailto:vinicius.macuch.silva@uni-osnabrueck.de">vinicius.macuch.silva@uni-osnabrueck.de</a>. </b></p>      <hr>

        <p align="center" style="line-height: 100%">LANGUAGE PRODUCTION AND COMPREHENSION EXPERIMENTS </p>

  Consent for Participation in Experiments, Data Use, and Data Storage<br><br>

  Study title:	Pragmatics of linguistic communication<br><br>
  Principal Investigator:	Dr Hannah Rohde<br><br>
  Researcher Collecting Data: Vinicius Macuch Silva<br><br>

  <b>Nature of the study.</b> You are about to participate in a study which involves reading sentences carefully, answering questions about them, or writing text after a short sentence prompt. Before you start, we will have some questions about you (e.g., age, gender, language background). Your responses will be recorded. Your session should last for up to 5 minutes. You will be given full instructions shortly.<br><br>

  <b>Compensation.</b> You will be paid at the posted rate for your participation in this study.<br><br>

  <b>Risks and benefits.</b>  There are no known risks to participation in this study. Other than the payment mentioned, there are no tangible benefits to you, however you will be contributing to our knowledge about language.
  <br><br>

  <b>Confidentiality and use of data.</b> All the information we collect during the course of the research will be processed in accordance with Data Protection Law. In order to safeguard your privacy, we will never share personal information (like your name) with anyone outside the research team. Your data will be referred to by a unique participant number rather than by name). Please note that we will temporarily collect your participant ID to prevent repeated participation, however we will never share this information with anyone outside the research team. We will store any personal data (i.e., participant ID) securely using the University of Osnabr&uuml;ck’s storage systems. The anonymised data collected during this study will be used for research purposes and may be shared with other researchers or with the general public (e.g., we may make it available through the world wide web, or use it in TV or radio broadcasts).
  <br><br>

  <b>What are my data protection rights?</b> The University of Edinburgh is a Data Controller for the information you provide.  You have the right to access information held about you. Your right of access can be exercised in accordance Data Protection Law. You also have other rights including rights of correction, erasure and objection.  For more details, including the right to lodge a complaint with the Information Commissioner’s Office, please visit www.ico.org.uk.  Questions, comments and requests about your personal data can also be sent to the University Data Protection Officer at dpo@ed.ac.uk.
  <br><br>

  <b>Voluntary participation and right to withdraw.</b> Your participation is voluntary, and you may withdraw from the study at any time and for any reason. If you withdraw from the study after data gathering, we will delete your data and there is no penalty or loss of benefits to which you are otherwise entitled. To withdraw from the study after data gathering please contact the research team within a week of participation by providing your prolific participant ID. After this deadline we will delete the participant IDs which means we won’t be able to identify you to delete your data.
  <br><br>

  If you have any questions about what you’ve just read, please feel free to ask, or contact us later. You can contact us by email at vinicius.macuch.silva@uni-osnabrueck.de. This project has been approved by PPLS Ethics committee. If you have questions or comments regarding your rights as a participant, they can be contacted at +44 (0)131 651 5510 or ppls.ethics@ed.ac.uk.


  By proceeding with this experiment, you consent to the following: <br><br>
  1.	I agree to participate in this study.<br>
  2.	I confirm that I have read and understood how my data will be stored and used.<br>
  3.	I understand that I have the right to terminate this session at any point. If I choose to withdraw after completing the study by contacting the research team in the week after participation, my data will be deleted at that time.<br>




        <form method="POST" action="informed_consent2.php?student_id='.$student_id.'" autocomplete="off">

          <p align="left" style="line-height: 100%">

        </form>
          `,
  buttonText: 'Begin the experiment'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'Instructions',
  text: `Each trial, you will read a metaphoric statement about a person. In order to complete the task, you will be asked to rate how much you think that the person matches a given characteristic. The rating goes from not matching the characteristic at all on the left side to very much matching the characteristic on the right side.`,
  buttonText: 'Proceed to task'
},
{stimulus_container_generator: function(config, CT) {
  return `<div class='magpie-view'>
              <h1 class='magpie-view-title'>${config.title}</h1>
              <section class="magpie-text-container">
                  <p class="magpie-view-text">${config.text}</p>
              </section>
              <div align='center'>
                  <br />
                  <br />
                  <img class="magpie-view-picture" src="./images/final_pic.png">
              </div>
          </div>`;
    }});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/


// Here, we initialize a normal forced_choice view
const slider_rating_custom = magpieViews.view_generator("slider_rating",{
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: 26,
  // name should be identical to the variable name
  name: 'slider_rating_custom',
  //data: _.shuffle(task_trial_info.sliderRating)
  data: _.shuffle(create_experimental_data(task_trial_info_nonnegated).sliderRating)
  // optionLeft: "Not at all confident",
  // optionRight: "Very confident",
},
{
  stimulus_container_generator : function (config, CT) {
        return `<div class='magpie-view'>
                    <h1 class='magpie-view-title'>${config.title}</h1>
                    <p class='magpie-view-question'><font size = 3 color = "gray">You overhear the following statement:</font><br><font size = 5>${config.data[CT].QUD}</font></p>
                    <div class='magpie-view-stimulus-container'>
                        <div class='magpie-view-stimulus magpie-nodisplay'></div>
                    </div>
                </div>`;
      }
},
{
   answer_container_generator: function (config, CT) {
          const option1 = config.data[CT].optionLeft;
          const option2 = config.data[CT].optionRight;
          return `<p class='magpie-view-question'><font size = 4 color = "gray">${config.data[CT].question}</font></p>
                  <div class='magpie-view-answer-container'>
                      <span class='magpie-response-slider-option'><font size = 20 color = "gray">${option1}</font></span>
                      <input type='range' id='response' class='magpie-response-slider' min='0' max='100' value='50'/>
                      <span class='magpie-response-slider-option'>${option2}</span>
                  </div>
                  <button id="next" class='magpie-view-button magpie-nodisplay'>Next</button>`;
      }
});
/*{
    stimulus_container_generator: function (config, CT) {
        return `<div class='magpie-view'>
                </div>`;
    },*/
    /*answer_container_generator: function (config, CT) {
            return `<div class='magpie-view-answer-container'>
                        <h1 class='magpie-view-title'>${config.title}</h1>
                        <p class='magpie-view-question'><font size = 3 color = "gray">You overhear the following statement:</font><br><font size = 5>${config.data[CT].QUD}</font></p>
                        <p class='magpie-view-question'><font size = 4 color = "gray">${config.data[CT].question}</font></p>
                        <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                        <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                        <input type='radio' name='answer' id='o2' value=${config.data[CT].option2} />
                        <label for='o2' class='magpie-response-buttons'>${config.data[CT].option2}</label>
                    </div>`
    },
    /*answer_container_generator: function (config, CT) {
            const sliderLeft = config.data[CT].optionLeft;
            const sliderRight = config.data[CT].optionRight;
            return `<div class='magpie-view-answer-container'>
                        <h1 class='magpie-view-title'>${config.title}</h1>
                        <p class='magpie-view-question'><font size = 3 color = "gray">You overhear the following statement:</font><br><font size = 5>${config.data[CT].QUD}</font></p>
                        <p class='magpie-view-question'><font size = 4 color = "gray">${config.data[CT].question}</font></p>
                        <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                        <input class='part1' type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                        <input clas='part1' type='radio' name='answer' id='o2' value=${config.data[CT].option2} />
                        <label for='o2' class='magpie-response-buttons'>${config.data[CT].option2}</label><br><br><br><br><br>
                    </div>
                    <p id='part2' class='magpie-view-question magpie-nodisplay'><font size = 4 color = "gray">How confident are you of your choice?</font></p>
                    <div id='part2' class='magpie-view-answer-container magpie-nodisplay'>
                        <strong class='magpie-response-rating-option magpie-view-text'>${config.optionLeft}</strong>
                        <label for="1" class='magpie-response-rating'>1</label>
                        <input type="radio" name="answer" id="1" value="1" />
                        <label for="2" class='magpie-response-rating'>2</label>
                        <input type="radio" name="answer" id="2" value="2" />
                        <label for="3" class='magpie-response-rating'>3</label>
                        <input type="radio" name="answer" id="3" value="3" />
                        <label for="4" class='magpie-response-rating'>4</label>
                        <input type="radio" name="answer" id="4" value="4" />
                        <label for="5" class='magpie-response-rating'>5</label>
                        <input type="radio" name="answer" id="5" value="5" />
                        <label for="6" class='magpie-response-rating'>6</label>
                        <input type="radio" name="answer" id="6" value="6" />
                        <label for="7" class='magpie-response-rating'>7</label>
                        <input type="radio" name="answer" id="7" value="7" />
                        <strong class='magpie-response-answer-option magpie-view-text'>${config.optionRight}</strong>
                    </div>
                    <button id="next" class='magpie-view-button magpie-nodisplay'>Next</button>`;
    },

    handle_response_functions: function(config, CT, magpie, answer_container_generator, startingTime) {
        $(".magpie-view").append(answer_container_generator(config, CT));

        $("input[name=answer]").on("change", function() {
            let selected_option_id = $("input[name=answer:checked]").val();
            document.getElementById(selected_option_id).style.border="6px solid black";
            $("#part2").removeClass("magpie-nodisplay");
        });

        $('#o1').on("click", handle_click);
        $('#o2').on("click", handle_click);

        // attaches an event listener to the yes / no radio inputs
        // when an input is selected a response property with a value equal
        // to the answer is added to the trial object
        // as well as a readingTimes property with value
        $("input[name=answer]").on("change", function() {
            $("#next").removeClass("magpie-nodisplay");
        });

        $("#next").on("click", function() {
            const RT = Date.now() - startingTime; // measure RT before anything else
            let trial_data = {
                trial_name: config.name,
                trial_number: CT + 1,
                response: selected_option_id,
                rating: $("input[name=answer]:checked").val(),
                RT: RT
            };

        trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);

        magpie.trial_data.push(trial_data);
        magpie.findNextView();
    });
}});*/
// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
