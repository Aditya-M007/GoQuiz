(function()
 {
  var allQuestions = [{
    question: "In which year state of Meghalaya came into existence?",
    options: ["1970",	"1971","1972","1973"],
    answer: 2
  }, {
    question: "The Mathabhanga river is treated as an international border between which among the following countries ?",
    options: ["	India Nepal", "	India Bangladesh", "India Myanmmar", "India Srilanka"],
    answer: 1
  },{
    question: "Which range does Indus river originates from?",
    options: ["Rohtang pass Himalayas", "South eastern part of Kashmir", "Northern slopes of Kailash Range", "Eastern slopes of Kailash Range"],
    answer: 2
  },{
    question: "Brahmaputra River when it flows out of India into Bangladesh is called as ________?",
    options: ["Bangshi River", "Mahananda River", "Jamuna River", "Yamuna River"],
    answer: 2
  },{
    question: "The Chota Nagpur Plateau covers much of Jharkhand. Which are the other states covered at some extent by this plateau?",
    options: ["Orissa & West Bengal", "Orissa, West Bengal & Bihar", "Orissa, West Bengal", "Bihar and Chhattisgarh"],
    answer: 0
  },{
    question: "Bhitarkanika Mangroves are in which of the following states?",
    options: [" West Bengal", "Andhra Pradesh", "Orissa", "Tamil Nadu"],
    answer: 2
  },{
    question: "Which among the following is Indiaâ€™s deepest landlocked and protected port?",
    options: ["Vishakhapatnam", "Chennai", "Paradeep", "Kandla"],
    answer: 0
  },{
    question: "Jarawa are the indigenous people or Adiwasis prominent in which part of India?",
    options: ["Assam", "Kerala", "Meghalaya", "Andaman & Nicobar Islands"],
    answer: 3
  },{
    question: "What is the number of states in India sharing an international border?",
    options: ["10", "13", "15", "17"],
    answer: 3
  },{
    question: "In production of which of the following metals India holds number 1 status",
    options: ["Copper", "Iron", "Lead", "Mica"],
    answer: 3
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
