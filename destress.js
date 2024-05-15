
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const DEBUG = false;

// Defines sub-functions for square breathing
function fourCount(callback) {
    console.log('1...');
    setTimeout(() => {
        console.log('2...');
        setTimeout(() => {
            console.log('3...');
            setTimeout(() => {
                console.log('4...');
                setTimeout(callback, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

function holdBreath(callback) {
    console.log('Hold');
    fourCount(callback);
}

function breatheIn(callback) {
    console.log('Breathe in');
    fourCount(callback);
}

function breatheOut(callback) {
    console.log('Breathe out');
    fourCount(callback);
}

// Defines a square breathing function
function squareBreathe(count = 1, callback) {
    if (count > 0) {
        breatheIn(() => {
            holdBreath(() => {
                breatheOut(() => {
                    holdBreath(() => {
                        squareBreathe(count - 1, callback);
                    });
                });
            });
        });
    } else {
        callback();
    }
}

// Defines list of compliments
const compliment_list = [
    "You're that 'Nothing' when people ask me what I'm thinking about.",
    'You look great today.',
    "You're a smart cookie.",
    'I bet you make babies smile.',
    'You have impeccable manners.',
    'I like your style.',
    'You have the best laugh.',
    'I appreciate you.',
    'You are the most perfect you there is.',
    'Our system of inside jokes is so advanced that only you and I get it. And I like that.',
    "You're strong.",
    'Your perspective is refreshing.',
    "You're an awesome friend.",
    'You light up the room.',
    'You deserve a hug right now.',
    'You should be proud of yourself.',
    "You're more helpful than you realize.",
    'You have a great sense of humor.',
    "You've got all the right moves!",
    'Is that your picture next to “charming” in the dictionary?',
    'Your kindness is a balm to all who encounter it.',
    "You're all that and a super-size bag of chips.",
    'On a scale from 1 to 10, you’re an 11.',
    'You are brave.',
    "You're even more beautiful on the inside than you are on the outside.",
    'You have the courage of your convictions.',
    "Aside from food, you're my favorite.",
    "If cartoon bluebirds were real, a bunch of them would be sitting on your shoulders singing right now.",
    'You are making a difference.',
    "You're like sunshine on a rainy day.",
    'You bring out the best in other people.',
    'Your ability to recall random factoids at just the right time is impressive.',
    "You're a great listener.",
    'How is it that you always look great, even in sweatpants?',
    'Everything would be better if more people were like you!',
    'I bet you sweat glitter.',
    'You were cool way before hipsters were cool.',
    'That color is perfect on you.',
    'Hanging out with you is always a blast.',
    'You always know — and say — exactly what I need to hear when I need to hear it.',
    'You smell really good.',
    "You may dance like no one's watching, but everyone's watching because you're an amazing dancer!",
    'Being around you makes everything better!',
    'When you say, “I meant to do that,” I totally believe you.',
    "When you're not afraid to be yourself is when you're most incredible.",
    "Colors seem brighter when you're around.",
    "You're more fun than a ball pit filled with candy. (And seriously, what could be more fun than that?)",
    "That thing you don't like about yourself is what makes you so interesting.",
    "You're wonderful.",
    "Everyday is just BLAH when I don't see you. For reals! (awesome – you are halfway through the list. You're awesome!)",
    'Jokes are funnier when you tell them.',
    "You're better than a triple-scoop ice cream cone. With sprinkles.",
    'Your bellybutton is kind of adorable.',
    'Your hair looks stunning.',
    "You're one of a kind!",
    "You're inspiring.",
    "If you were a box of crayons, you'd be the giant name-brand one with the built-in sharpener.",
    'You should be thanked more often. So thank you!!',
    'Our community is better because you’re in it.',
    "Someone is getting through something hard right now because you've got their back.",
    'You have the best ideas.',
    'You always know how to find that silver lining.',
    'Everyone gets knocked down sometimes, but you always get back up and keep going.',
    "You're a candle in the darkness.",
    "You're a great example to others.",
    'Being around you is like being on a happy little vacation.',
    'You always know just what to say.',
    "You're always learning new things and trying to better yourself, which is awesome.",
    'If someone based an Internet meme on you, it would have impeccable grammar.',
    'You could survive a Zombie apocalypse.',
    "You're more fun than bubble wrap.",
    'When you make a mistake, you fix it.',
    'Who raised you? They deserve a medal for a job well done.',
    "You're great at figuring stuff out.",
    'Your voice is magnificent.',
    'The people you love are lucky to have you in their lives.',
    "You're like a breath of fresh air.",
    "You're gorgeous — and that's the least interesting thing about you, too.",
    "You're so thoughtful.",
    'Your creative potential seems limitless.',
    "You're the coolest person I know. And I consider myself best friends with like all celebrities, so...",
    "You're irresistible when you blush.",
    'Actions speak louder than words, and yours tell an incredible story.',
    'Somehow you make time stop and fly at the same time.',
    'When you make up your mind about something, nothing stands in your way.',
    'You seem to really know who you are.',
    'Any team would be lucky to have you on it.',
    'In high school I bet you were voted “most likely to keep being awesome.”',
    'I bet you do the crossword puzzle in ink.',
    'Babies and small animals probably love you.',
    "If you were a scented candle they'd call it Perfectly Imperfect (and it would smell like summer).",
    "There's ordinary, and then there's you.",
    "You're someone’s reason to smile.",
    "You're even better than a unicorn, because you're real.",
    'How do you keep being so funny and making everyone laugh?',
    'You have a good head on your shoulders.',
    'Has anyone ever told you that you have great posture?',
    'The way you treasure your loved ones is incredible.',
    "You're really something special.",
    'You’re a gift to those around you.'
];

// Defines random compliment function
function randCompliment() {
    const randIndex = Math.floor(Math.random() * compliment_list.length);
    console.log(compliment_list[randIndex]);
}

// Defines the menu and prints to console
function printMenu() {
    console.log('1. Square breathing');
    console.log('2. Get a compliment');
    console.log('3. Grounding');
    console.log('4. Reality check');
    console.log('0. Quit');
}

// Defines a function for grounding oneself with a guided prompt
function groundingByFive(callback) {
    rl.question('What are five things you can see around you?\n1. ', () => {
        rl.question('2. ', () => {
            rl.question('3. ', () => {
                rl.question('4. ', () => {
                    rl.question('5. ', () => {
                        console.log('Good!');
                        setTimeout(() => {
                            rl.question('What are four things you can touch around you?\n1. ', () => {
                                rl.question('2. ', () => {
                                    rl.question('3. ', () => {
                                        rl.question('4. ', () => {
                                            console.log('Great!');
                                            setTimeout(() => {
                                                rl.question('What are three things you can hear?\n1. ', () => {
                                                    rl.question('2. ', () => {
                                                        rl.question('3. ', () => {
                                                            console.log('You are doing well!');
                                                            setTimeout(() => {
                                                                rl.question('What are two things you can smell?\n1. ', () => {
                                                                    rl.question('2. ', () => {
                                                                        console.log('Excellent!');
                                                                        setTimeout(() => {
                                                                            rl.question('What is one thing you can taste?\n1. ', () => {
                                                                                console.log('You did it!');
                                                                                setTimeout(() => {
                                                                                    console.log('I hope you feel better, or more regulated.\n^__^');
                                                                                    callback();
                                                                                }, 500);
                                                                            });
                                                                        }, 500);
                                                                    });
                                                                }, 500);
                                                            });
                                                        });
                                                    });
                                                });
                                            }, 500);
                                        });
                                    });
                                });
                            }, 500);
                        });
                    });
                });
            });
        });
    });
}

// Defines reality checks
function realityChecks(callback) {
    rl.question('Are you safe?\n', () => {
        rl.question('Are you or someone you love in immediate danger?\n', () => {
            rl.question('Is there time to change things or make it better?\nIf not, can we make a new plan?\n', () => {
                rl.question('Can anything be done about it right now?\n', () => {
                    console.log();
                   

 console.log('I hope that gave some perspective and clarity. Not everything needs to happen right now.');
                    callback();
                });
            });
        });
    });
}

// Main function block
if (require.main === module) {
    // Initializes random seed
    Math.random();

    // Intro prompt
    console.log('This app is designed to help you de-stress.');
    if (!DEBUG) {
        // A square breath to begin calming
        console.log("First, let's do one square breath.");
        setTimeout(() => {
            console.log('Ready?');
            rl.question('Enter something to continue.\n', () => {
                console.log("Let's Go!");
                setTimeout(() => {
                    squareBreathe(1, () => {
                        console.log('Great!');
                        setTimeout(mainLoop, 500);
                    });
                }, 500);
            });
        }, 500);
    } else {
        mainLoop();
    }
}

// Main functionality loop
function mainLoop() {
    printMenu();
    rl.question('Please choose from the options above: ', (input) => {
        const user_input = parseInt(input, 10);
        if (user_input > 0) {
            switch (user_input) {
                case 1:
                    rl.question('How many square breaths would you like?\n', (numBreathInput) => {
                        const numBreath = parseInt(numBreathInput, 10);
                        squareBreathe(numBreath, mainLoop);
                    });
                    break;
                case 2:
                    randCompliment();
                    setTimeout(mainLoop, 1000);
                    break;
                case 3:
                    groundingByFive(mainLoop);
                    break;
                case 4:
                    realityChecks(mainLoop);
                    break;
                default:
                    console.log('Unknown Option\nPlease try again.');
                    setTimeout(mainLoop, 1000);
            }
        } else {
            console.log('Thank you for de-stressing with me!');
            if (!DEBUG) {
                rl.question('Input anything to end program. ', () => {
                    rl.close();
                });
            } else {
                rl.close();
            }
        }
    });
}
