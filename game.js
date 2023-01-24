const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Hey babe, go on a date with me! Pick a cuisine you prefer more right now! It starts with ones we eat the least, to most.',
    options: [
      {
        text: 'Thai',
        nextText: 2
      },
      {
        text: 'Chinese',
        nextText: 12
      }
    ]
  },
  {
    id: 2,
    text: 'Pick again!',
    options: [
      {
        text: 'Thai',
        nextText: 3
      },
      {
        text: 'Korean',
        nextText: 21
      }
    ]
  },
  {
    id: 3,
    text: 'Thai vs Mexican?',
    options: [
      {
        text: 'Thai',
        nextText: 4
      },
      {
        text: 'Mexican',
        nextText: 29
      }
    ]
  },
  {
    id: 4,
    text: 'How about Thai vs Vietnamese?',
    options: [
      {
        text: 'Thai',
        nextText: 5
      },
      {
        text: 'Vietnamese',
        nextText: 36
      }
    ]
  },
  {
    id: 5,
    text: 'Which of these two?',
    options: [
      {
        text: 'Thai',
        nextText: 6
      },
      {
        text: 'Gogi',
        nextText: 42
      }
    ]
  },
  {
    id: 6,
    text: 'How about these two?',
    options: [
      {
        text: 'Thai',
        nextText: 7
      },
      {
        text: 'Japanese',
        nextText: 47
      }
    ]
  },
  {
    id: 7,
    text: 'Almost there!',
    options: [
      {
        text: 'Thai',
        nextText: 8
      },
      {
        text: 'Sandwiches',
        nextText: 51
      }
    ]
  },
  {
    id: 8,
    text: 'Italian? Thai?',
    options: [
      {
        text: 'Thai',
        nextText: 9
      },
      {
        text: 'Italian',
        nextText: 54
      }
    ]
  },
  {
    id: 9,
    text: 'Last one!',
    options: [
      {
        text: 'Thai',
        nextText: 10
      },
      {
        text: 'American',
        nextText: 56
      }
    ]
  },
  {
    id: 10,
    text: 'Thai is the winner! Pick a thai food',
    options: [
      {
        text: 'Pad Thai',
        nextText: 11
      },
      {
        text: 'Pad See Ew',
        nextText: 11
      },
      {
        text: 'Bhan Mi',
        nextText: 11
      },
      {
        text: 'Something else/try a new thai food',
        nextText: 11
      }
    ]
  },
  {
    id: 11,
    text: 'Good job babes! Come on then! <3',
    options: [
      {
        text: 'I change my mind and want to make Grace go crazy, play again',
        nextText: -1
      }
    ]
  },
  {
    id: 12,
    text: 'Feeling Chinese or Korean?',
    options: [
      {
        text: 'Chinese',
        nextText: 13
      },
      {
        text: 'Korean',
        nextText: 21
      }
    ]
  },
  {
    id: 13,
    text: 'Mexican or Chinese?',
    options: [
      {
        text: 'Chinese',
        nextText: 14
      },
      {
        text: 'Mexican',
        nextText: 29
      }
    ]
  },
  {
    id: 14,
    text: 'Chinese vs Vietnamese',
    options: [
      {
        text: 'Chinese',
        nextText: 15
      },
      {
        text: 'Vietnamese',
        nextText: 36
      }
    ]
  },
  {
    id: 15,
    text: 'Does Chinese sound better or Gogi?',
    options: [
      {
        text: 'Chinese',
        nextText: 16
      },
      {
        text: 'Gogi',
        nextText: 42
      }
    ]
  },
  {
    id: 16,
    text: 'Almost there!',
    options: [
      {
        text: 'Chinese',
        nextText: 17
      },
      {
        text: 'Japanese',
        nextText: 47
      }
    ]
  },
  {
    id: 17,
    text: 'Chinese or Sandwiches?',
    options: [
      {
        text: 'Chinese',
        nextText: 18
      },
      {
        text: 'Sandwiches',
        nextText: 51
      }
    ]
  },
  {
    id: 18,
    text: 'Which one?',
    options: [
      {
        text: 'Chinese',
        nextText: 19
      },
      {
        text: 'Italian',
        nextText: 54
      }
    ]
  },
  {
    id: 19,
    text: 'Last one!',
    options: [
      {
        text: 'Chinese',
        nextText: 20
      },
      {
        text: 'American',
        nextText: 56
      }
    ]
  },
  {
    id: 20,
    text: 'Chinese is the winner! Pick a Chinese food',
    options: [
      {
        text: 'Dishes (beef, shrimp, pork, etc.',
        nextText: 11
      },
      {
        text: 'Noodles',
        nextText: 11
      },
      {
        text: 'Dumpling',
        nextText: 11
      },
      {
        text: 'Something else/try a new Chinese food',
        nextText: 11
      }
    ]
  },
  {
    id: 21,
    text: 'Korean or Mexican?',
    options: [
      {
        text: 'Korean',
        nextText: 22
      },
      {
        text: 'Mexican',
        nextText: 29
      }
    ]
  },
  {
    id: 22,
    text: 'Korean or Vietnamese?',
    options: [
      {
        text: 'Korean',
        nextText: 23
      },
      {
        text: 'Vietnamese',
        nextText: 36
      }
    ]
  },
  {
    id: 23,
    text: 'Now Korean and Gogi',
    options: [
      {
        text: 'Korean',
        nextText: 24
      },
      {
        text: 'Gogi',
        nextText: 42
      }
    ]
  },
  {
    id: 24,
    text: 'How about Korean and Japanese?',
    options: [
      {
        text: 'Korean',
        nextText: 25
      },
      {
        text: 'Japanese',
        nextText: 47
      }
    ]
  },
  {
    id: 25,
    text: 'Pick Korean or Sandwiches!',
    options: [
      {
        text: 'Korean',
        nextText: 26
      },
      {
        text: 'Sandwiches',
        nextText: 51
      }
    ]
  },
  {
    id: 26,
    text: 'Do you want Korean or Italian?',
    options: [
      {
        text: 'Korean',
        nextText: 27
      },
      {
        text: 'Italian',
        nextText: 54
      }
    ]
  },
  {
    id: 27,
    text: 'Last one!',
    options: [
      {
        text: 'Korean',
        nextText: 28
      },
      {
        text: 'American',
        nextText: 56
      }
    ]
  },
  {
    id: 28,
    text: 'Korean is the winner! Pick a Korean food',
    options: [
      {
        text: 'Soups',
        nextText: 11
      },
      {
        text: 'Korean Fried chicken',
        nextText: 11
      },
      {
        text: 'Rice Dishes',
        nextText: 11
      },
      {
        text: 'Something else/try a new Korean food',
        nextText: 11
      }
    ]
  },
  {
    id: 29,
    text: 'Mexican? Vietnamese?',
    options: [
      {
        text: 'Mexican',
        nextText: 30
      },
      {
        text: 'Vietnamese',
        nextText: 36
      }
    ]
  },
  {
    id: 30,
    text: 'Mexican vs Gogi',
    options: [
      {
        text: 'Mexican',
        nextText: 31
      },
      {
        text: 'Gogi',
        nextText: 42
      }
    ]
  },
  {
    id: 31,
    text: 'What are you feeling?',
    options: [
      {
        text: 'Mexican',
        nextText: 32
      },
      {
        text: 'Japanese',
        nextText: 47
      }
    ]
  },
  {
    id: 32,
    text: 'Almost there!',
    options: [
      {
        text: 'Mexican',
        nextText: 33
      },
      {
        text: 'Sandwiches',
        nextText: 51
      }
    ]
  },
  {
    id: 33,
    text: 'Mexican or Italian food?',
    options: [
      {
        text: 'Mexican',
        nextText: 34
      },
      {
        text: 'Italian',
        nextText: 54
      }
    ]
  },
  {
    id: 34,
    text: 'One more pick!',
    options: [
      {
        text: 'Mexican',
        nextText: 35
      },
      {
        text: 'American',
        nextText: 56
      }
    ]
  },
  {
    id: 35,
    text: 'Mexican is the winner! Pick a Mexican food',
    options: [
      {
        text: 'Taco',
        nextText: 11
      },
      {
        text: 'Burrito',
        nextText: 11
      },
      {
        text: 'Bowls',
        nextText: 11
      },
      {
        text: 'Something else/try a new Mexican food',
        nextText: 11
      }
    ]
  },
  {
    id: 36,
    text: 'Now pick between these two!',
    options: [
      {
        text: 'Vietnamese',
        nextText: 37
      },
      {
        text: 'Gogi',
        nextText: 42
      }
    ]
  },
  {
    id: 37,
    text: 'Then pick one of these!',
    options: [
      {
        text: 'Vietnamese',
        nextText: 38
      },
      {
        text: 'Japanese',
        nextText: 47
      }
    ]
  },
  {
    id: 38,
    text: 'Couple more picks!',
    options: [
      {
        text: 'Vietnamese',
        nextText: 39
      },
      {
        text: 'Sandwiches',
        nextText: 51
      }
    ]
  },
  {
    id: 39,
    text: 'Vietnamese or Italian?',
    options: [
      {
        text: 'Vietnamese',
        nextText: 40
      },
      {
        text: 'Italian',
        nextText: 54
      }
    ]
  },
  {
    id: 40,
    text: 'Vietnamese vs American?',
    options: [
      {
        text: 'Vietnamese',
        nextText: 41
      },
      {
        text: 'American',
        nextText: 56
      }
    ]
  },
  {
    id: 41,
    text: 'Vietnamese is the winner! Pick a Vietnamese food',
    options: [
      {
        text: 'Pho',
        nextText: 11
      },
      {
        text: 'Fried Rice',
        nextText: 11
      },
      {
        text: 'Bhan Mi',
        nextText: 11
      },
      {
        text: 'Something else/try a new Vietnamese food',
        nextText: 11
      }
    ]
  },
  {
    id: 42,
    text: 'How about Gogi vs Japanese?',
    options: [
      {
        text: 'Gogi',
        nextText: 43
      },
      {
        text: 'Japanese',
        nextText: 47
      }
    ]
  },
  {
    id: 43,
    text: 'Are you feeling gogi or Sandwiches?',
    options: [
      {
        text: 'Gogi',
        nextText: 44
      },
      {
        text: 'Sandwiches',
        nextText: 51
      }
    ]
  },
  {
    id: 44,
    text: 'A few more picking bebe!',
    options: [
      {
        text: 'Gogi',
        nextText: 45
      },
      {
        text: 'Italian',
        nextText: 54
      }
    ]
  },
  {
    id: 45,
    text: 'Last cuisine pick!',
    options: [
      {
        text: 'Gogi',
        nextText: 46
      },
      {
        text: 'American',
        nextText: 56
      }
    ]
  },
  {
    id: 46,
    text: 'Gogi is the winner! Pick a gogi option',
    options: [
      {
        text: 'KBBQ',
        nextText: 11
      },
      {
        text: 'Steakhouse',
        nextText: 11
      },
      {
        text: 'Brazilian/mongolian bbq',
        nextText: 11
      },
      {
        text: 'Something else/try a new gogi option',
        nextText: 11
      }
    ]
  },
  {
    id: 47,
    text: 'Pick one babe!',
    options: [
      {
        text: 'Japanese',
        nextText: 48
      },
      {
        text: 'Sandwiches',
        nextText: 51
      }
    ]
  },
  {
    id: 48,
    text: 'Which one sounds better?',
    options: [
      {
        text: 'Japanese',
        nextText: 49
      },
      {
        text: 'Italian',
        nextText: 54
      }
    ]
  },
  {
    id: 49,
    text: 'One more!',
    options: [
      {
        text: 'Japanese',
        nextText: 50
      },
      {
        text: 'American',
        nextText: 56
      }
    ]
  },
  {
    id: 50,
    text: 'Japanese is the winner! Pick a Japanese food',
    options: [
      {
        text: 'Ramen/Udon',
        nextText: 11
      },
      {
        text: 'Sushi',
        nextText: 11
      },
      {
        text: 'Poke',
        nextText: 11
      },
      {
        text: 'Something else/try a new Japanese food',
        nextText: 11
      }
    ]
  },
  {
    id: 51,
    text: 'Almost done!',
    options: [
      {
        text: 'Sandwiches',
        nextText: 52
      },
      {
        text: 'Italian',
        nextText: 54
      }
    ]
  },
  {
    id: 52,
    text: 'One more babe!',
    options: [
      {
        text: 'Sandwiches',
        nextText: 53
      },
      {
        text: 'American',
        nextText: 56
      }
    ]
  },
  {
    id: 53,
    text: 'Sandwiches is the winner! Pick a sandwich',
    options: [
      {
        text: 'Pastrami',
        nextText: 11
      },
      {
        text: 'Burger/hotdog',
        nextText: 11
      },
      {
        text: 'Cheesesteak',
        nextText: 11
      },
      {
        text: 'Something else/try a new sandwich option',
        nextText: 11
      }
    ]
  },
  {
    id: 54,
    text: 'One more babe!',
    options: [
      {
        text: 'Italian',
        nextText: 55
      },
      {
        text: 'American',
        nextText: 56
      }
    ]
  },
  {
    id: 55,
    text: 'Italian is the winner! Pick an Italian food',
    options: [
      {
        text: 'Pasta',
        nextText: 11
      },
      {
        text: 'Pizza',
        nextText: 11
      },
      {
        text: 'Soups',
        nextText: 11
      },
      {
        text: 'Something else/try a new Italian food',
        nextText: 11
      }
    ]
  },
  {
    id: 56,
    text: 'American is the winner! Pick an American food',
    options: [
      {
        text: 'Fried Chicken',
        nextText: 11
      },
      {
        text: 'Cajun Seafood',
        nextText: 11
      },
      {
        text: 'Diner',
        nextText: 11
      },
      {
        text: 'Something else/try a new American food',
        nextText: 11
      }
    ]
  }
]

startGame()