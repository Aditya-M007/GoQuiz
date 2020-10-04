(function()
 {
  var allQuestions = [{
    question: "In which year, Alexander the Great become the king of Macedonia",
    options: ["336 BC","323 BC","350 BC","200 BC"],
    answer: 0
  }, {
    question: "The Battle of Waterloo was fought in the year",
    options: ["1800","1805", "1807","1815"],
    answer: 3
  },{
    question: "The European renaissance started from which country",
    options: ["England", "French", "Italy", "Greece"],
    answer: 2
  },{
    question: "On which island of French , Napoleon was born",
    options: ["Saint Helena", "Corsica", "Elba", "Oleron"],
    answer: 1
  },{
    question: "Rivers Tigris and Euphrates are associated with ?",
    options: ["Mesopotamian Civilization", "Egyptain Civilization", "Harappan Civilization", "Chinese Civilization "],
    answer: 0
  },{
    question: "Which among following is called Gift of the Nile ?",
    options: ["China", "India", "Iraq", "Egypt"],
    answer: 3
  },{
    question: "Who is considered as the master of Greek comedy ?",
    options: ["Aeschylus", "Sophocles", "Aristophanes", "Philip"],
    answer: 2
  },{
    question: "When ancient Olympic games first held ?",
    options: ["776 BC", "780 BC", "790 BC", "800 BC"],
    answer: 0
  },{
    question: "Who is known as the father of Modern Medicine ?",
    options: ["Euclid", "Pythagoras", "Hippocrates", "Erastosthenes"],
    answer: 2
  },{
    question: "Rome was founded around ?",
    options: ["1000 BC", "1200 BC", "1400 BC", "1600 BC"],
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
