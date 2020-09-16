/* eslint-disable */
const $ = {}

// Data
const passage =
  "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in the night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad daylight.[15][16] Venus lies within Earth's orbit, and so never appears to venture far from the Sun, either setting in the west just after dusk or rising in the east a bit before dawn. Venus orbits the Sun every 224.7 Earth days.[17] With a rotation period of 243 Earth days, it takes longer to rotate about its axis than any other planet in the Solar System and does so in the opposite direction to all but Uranus (meaning the Sun rises in the west and sets in the east).[18] Venus does not have any moons, a distinction it shares only with Mercury among planets in the Solar System.[19]"
const question = 'What is Venus named after?'

let model = null
$(document).ready(function () {
  console.log('Loading model')
  qna.load().then((loadedModel) => {
    model = loadedModel
    console.log('loaded!')
    $('button').css('visibility', 'visible')
    console.log('Loaded model')
  })
  $('#question').attr('placeholder', question)
  $('.passage').text(passage)
})

async function answer(question, passage, model) {
  const answers = await model.findAnswers(question, passage)
  return answers
}

function getBestAnswer(answers) {
  return answers.length ? answers[0].text : 'No answer found'
}

function buttonClick() {
  $('button').css('visibility', 'hidden')
  $('#answer').text('')
  const question = $('#question').val() || $('#question').attr('placeholder')
  const passage = document.getElementById('passage').textContent
  answer(question, passage, model)
    .then((answers) => {
      $('#answer').text(getBestAnswer(answers))
      $('button').css('visibility', 'visible')
    })
    .catch((err) => {
      alert('Oh shit fam')
      console.error(err)
    })
}

$('button').click(buttonClick)
