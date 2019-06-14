# Simon Game
My milestone project is based on the game of Simon. In the game of Simon, the system creates a series of tones and lights and requires a user to repeat the sequence. If the user succeeds, the series becomes progressively longer and more complex. 
Once the user fails to copy the sequence, the game is over.

It contains JavaScript, CSS and HTML as the trinity that I was most confident with for the project.

Multiple different elements were adapted for Responsiveness of the website.
 
## UX

- As a user, I want to be able to press a start button, so that I can play Simon.
- As a user, I want to be able to change the difficulty, so that I can play Simon based on my memory/skill sets.
- As a user, I want to be able to get a copy of my progress, so that I can see my scores in the future.

# WireFrames

- [Desktop WireFrame](/assets/wireframes/desktop-wireframe.png).
- [Mobile WireFrame](/assets/wireframes/mobile-wireframe.png).

## Features

### Existing Features
- Simon Game:
    - This is the main aspect to the project, it is the feature that allows the user to play the game of Simon by clicking a start button.

- Difficulties:
    - This is a feature that allows a user to change the difficulty to meet their needs or skill sets, and can be changed based on if they think they can do better.

- High Score:
    - This is a feature that is at the top of the screen, and will change once the user has beaten the previous score they have achieved in their web session.

- High Score Info Button:
    - This little button sits nicely next to the High Score Text and just gives a breif overview on how they have gained their high score and what they are on now.

- Mute Button:
    - This is a feature that allows the user to turn off the sound if they are getting sick of it etc.

- Feedback Button:
    - More for personal development, this allows the user to go to my website and leave me feedback.

- Instructions:
    - This is a feature that contains written instructions on how to play, as well as a video showing the user what the game looks like when played correctly.

- Credits:
    - This is a feature that gives credit to the developer(me), and to the website of which I collated my Royalty Free Sounds.

- DanCodes Logo:
    - This is a small feature for my company allowing the user to check out what else I have made etc.

- Android Button:
    - This is a test feature and may be removed, it allows the user to go through a link to install the website in app format (Only on Android).

- Idle Warning:
    - This is a feature that send the user an alert if the game is running but nothing has been clicked within 30 seconds.

### Features Left to Implement
- Jasmine Testing

## Technologies Used
- [HTML](https://en.wikipedia.org/wiki/HTML)
    - The project uses **HTML** to develop the base of the site.
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
    - The project uses **CSS** to develop the style of the site.
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
    - The project uses **JavaScript** to develop the functions of the site.
- [EmailJS](https://www.emailjs.com/)
    - The project uses **EmailJS** to simplify the use of sending automated emails.
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing

1. Playing Simon:
    1. Press start.
    2. When it says "Your Turn" under the game itself, click the colour that "Simon" lit up.
    3. Keep Following the Sequence to win.
    4. Click the wrong colour for the losing function.

2. Changing difficulties:
    1. Click the select difficulty button at the top left of the screen.
    2. Choose your difficulty.
    3. Press start.
    4. If "Easy" is the difficulty then only Red and Green should light up.
    5. If "Extreme" is the difficulty then 2 new colour will appear on the left and right of the game.

3. Saving your score:
    1. Finish a game of Simon (Win or Lose).
    2. A form will appear underneath the game with your score, time and turn already put inside of the inputs.
    3. Fill in a name and an email and press send.

4. Muting the game:
    1. Press the sound button at the bottom left of the screen (It should then go Red, and if you click it again return to it original colour).
    2. Once it has been clicked, no sound should play from the Simon Game colours.

5. Leaving Feedback:
    1. Press the chat bubble in the bottom right of the screen.
    2. Fill out the form on the seperate website to leave the feedback.

6. View the instructions:
    1. Click the instructions button underneath the game.
    2. Read through the text and watch the video for a demonstration.

7. View the credits:
    1. Click the credits button underneath the game.
    2. Read the credits to find out more information on how this game was put together.
    3. (Alternatively) you can always click the DanCodes.co.uk logo to take the user to the site of the developer.

8. Get the app (Unstable):
    1. Click the android logo at the bottom of the screen.
    2. Follow the instructions given by the Third Party.

9. Check my highscore:
    1. Visable at the top of the screen is your highscore of your session.
    2. To see how you have gained that, you can click the info button next to the text.

10. Responsiveness:
    1. Check the website in browser on desktop, tablet and phone.
    2. You should be able to see that I have made the website responsive to all sizes.

## Deployment
- Cloud9 User Hosting
    - I used cloud9 hosting at first to test out the site and develop the website using the provided google developer tools.
    - Prior to the "Run" button, I was using the preview option to allow for me to get the basic template of the website set up whilst being able to have a live automated preview to edit as I see what needs to be done.

- GitHub Pages
    - I used GitHub Pages to host the website in its "prime" as it is running constantly and allows for the users that were testing the website for me to be able to access the content at anytime throughout the day.
    - To set up the GitHub pages:
        1. I would first initialise Git in the terminal using "git init".
        2. I would then link the GitHub repository to my cloud9 terminal.
        3. After the initial "git push" I then went to my GitHub repository.
        4. Using the settings on the repository, I set up the GitHub page using the Master Branch of my code.
        5. For easier access, I then linked a Free Domain of www.SimonGame.ga to the GitHub page using DNS forwarding(shadow url).

## Credits

### Content
- Some of the text for the Simon Game description README.md (line 2-3) was copied from the [Wikipedia article of Simon](https://en.wikipedia.org/wiki/Simon_(game)).

### Media
- Certain font elements were used through a fontkit via [FontAwesome](https://fontawesome.com/).
- The backgrond was taken from a royalty free backgrond search via [Google](https://www.google.com/).
- The sounds used on the Simon Game were downloaded via [ZapSplat](https://www.zapsplat.com/).
- The videos used in the Tutorial Section were recored by me, but embedded via [YouTube](https://www.youtube.com/embed/SCQok9PDqVw?rel=0).
- The DanCodes Logo is a logo I created and is from [DanCodes](https://www.DanCodes.co.uk).

### Acknowledgements
- The app was developed via [AppsGeyser](http://app.appsgeyser.com/9118769/simongame).