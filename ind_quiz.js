(function()
 {
  var allQuestions = [{
    question: "In which of the following Vedas, the priest is Brahma",
    options: ["Sam Veda",	"Yajur Veda","Rig Veda","Atharva Veda"],
    answer: 0
  }, {
    question: "The staple food of the Vedic Aryan was",
    options: ["Barley and rice", " Milk and its products", "Rice and pulses", "Vegetables and fruits"],
    answer: 1
  },{
    question: "What is the Capital of India",
    options: ["Hyderabad", "Chennai", "Mumbai", "Delhi"],
    answer: 3
  },{
    question: "when was jio Founded",
    options: ["2008", "2007", "2006", "2005"],
    answer: 1
  },{
    question: "Who is the current president of India?",
    options: ["Ram Nath Kovind", "Pranab Mukherjee", "Nehru", "Narendra Modi"],
    answer: 0
  },{
    question: "when did subhash chandra bose died ",
    options: ["1944", "1947", "1946", "1945"],
    answer: 3
  },{
    question: "The tropic of cancer does not pass through which of these Indian states ",
    options: ["Madhya Pradesh", "West Bengal", "Rajasthan", "Odisha"],
    answer: 3
  },{
    question: "The purest form of iron is ",
    options: ["wrought iron", " steel", " pig iron", "nickel steel"],
    answer: 0
  },{
    question: "Fathometer is used to measure",
    options: ["Earthquakes", "Rainfall", "Ocean depth", "Sound intensity"],
    answer: 2
  },{
    question: "Ctrl, Shift and Alt are called .......... keys.",
    options: ["modifier", "function", "alphanumeric", "adjustment"],
    answer: 0
    }];

  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');

  nextQuestion();

  $('#next').click(function ()
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter]))
        {
            alert('Please select an option !');
        }
        else
        {
          quesCounter++;
          nextQuestion();
        }
    });

  $('#prev').click(function ()
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
    $('#restart').click(function ()
    {
      location.reload(true);  
        
    });
    $('#home').click(function ()
    {
      var url = "index.html";
          $(location).attr('href',url);
        
    });


  function createElement(index)
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }

  function radioButtons(index)
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }

  function chooseOption()
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }

  function nextQuestion()
    {
        quizSpace.fadeOut(function()
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter])))
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                      $('#home').hide();
                    }
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                      $('#home').hide();
                    }
                  
                }
              else
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                    $('#home').show();
                }
        });
    }

  function displayResult()
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++)
        {
          if (selectOptions[i] === allQuestions[i].answer)
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
 
        return score
  }
  

})();
