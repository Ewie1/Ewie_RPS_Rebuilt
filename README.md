# Rock Paper Scissors
(Developer: Ewart Hestick)

![Mockup image](docs/am-i-responsive.png)

[Live webpage](https://ewie1.github.io/CI_PP2_RPS/)

## Table of Content

1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requrements and Expectations](#user-requrements-and-expectations)
    3. [User Stories](#user-stories)
3. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Colour](#colours)
    3. [Fonts](#fonts)
    4. [Structure](#structure)
    5. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks & Tools](#frameworks-&-tools)
5. [Features](#features)
6. [Testing](#validation)
    1. [HTML Validation](#HTML-validation)
    2. [CSS Validation](#CSS-validation)
    3. [Accessibility](#accessibility)
    4. [Performance](#performance)
    5. [Device testing](#performing-tests-on-various-devices)
    6. [Browser compatibility](#browser-compatability)
    7. [Testing user stories](#testing-user-stories)
8. [Bugs](#Bugs)
9. [Deployment](#deployment)
10. [Credits](#credits)
11. [Acknowledgements](#acknowledgements)

## Project Goals 
 

### User Goals

- Play a simple interactive game rock paper scissors
- 

### Site Owner Goals

- Build an easy to use interactive game 
- Build a game with an attractive design
- Build and game that is simple to navigate 

## User Experience

### Target Audience

- This game is build for the simple minded audience
- Audience who just want something simple to pass time 
- Younger Audience whi like cool images 

### User Reqirements and Expectaions

- Simple understanding
- Bright images
- Responsive features
- Play game on varius devices

### User Stories

####  User 

 1. As a fisrt time user i want quick game start
 2. As a first time user i want see attractive characters
 3. As a first time user i want to have active selection options
 4. As a first user have to see a win or lose message
 5. As a first time user i want to know my scores

#### Site Owner 

6. As a  site owner i want the gameto have an end  function 
7. As a site Owner I want the user enjoy the creative output of the game
8.  As a owner I want user to have a customized 404 error page if the wedsite fail to load
## Design

### Design Choices
The rock paper scissors game was with special images to give the game charactor and a competitive feel
### Colour
The colors brown, black, white, etc were chosen to give an animated feel.
### Fonts
The font indie flower was chosen to give a relaxed feel to the game
### Structure

- Intro 
- Game page
- Game over and Restart page
- 404 page

### Wireframes

<details><summary>Into</summary>
<img src="/docs/wireframes/intro-page.png"> 
<img src="/docs/wireframes/intro page ipad.png"> 
<img src="/docs/wireframes/intro page iphone.png"> 
</details>
<details><summary>Game</summary>
<img src="/docs/wireframes/game-page.png">
<img src="/docs/wireframes/game page ipad.png">
<img src="/docs/wireframes/game page iphone.png">
</details>
<details><summary>404 page</summary>
<img src="docs/wireframes/404 page.png">
<img src="docs/wireframes/404 page ipad.png">
<img src="docs/wireframes/404 page iphone.png">
</details>

## Technologies Used

### Languages
- HTML
- CSS
- JavaScript

### Frameworks & Tools
- Git
- GitHub
- Gitpod
- Tinypng
- Balsamiq
- Google Fonts
- Font Awsome
- Favicon<span>.</span>io

## Features
The page consists of 3 pages and 9 sections

### Intro page
- The intro page is consist of a small friendly dispalyed image of RocK,Paper, Scissors together
along a play game button which leads to the game page with a the header and footer contents included.
![intro-page](docs/features/intro.png)

### Header Display
- The header give the name of the game with a special selected font style

![game-header](docs/features/header.png)

### Game area
- The game area is shown after the intro page. This area contains all the reactive icons, images, messages for the player to experience.

![game-area](docs/features/game-area.png) 

### Game message
- The game message is designed with a large using the indie flower font to display to the user wheather their selection have win, lost or draw.

![game-message](docs/features/result-message .png)

### Score Count
- The score count features located on the top left and top right of the game area shows the count of when the player win and when the computer win to give the player and idea of if they are winner or not. If there is a draw the numbers will remain the same. 

![score-count](docs/features/result-message .png)

### Selected Images display
- The selected image display shows animated images of a rock, a paper and  scissors to the player or computer selections. These images give the game character.

![selected-images-display](docs/features/selected-characters.png)

### Selection btns
- The selection buttons are iconic rock, paper, scissors which also gives the game character and are used to for the player to pick a choice.

![selection-buttons](docs/features/selector-icons.png)

### Game over
- The game over button appears when the game chooses the game winner which is determined at the 12 winning score on either side.

![game-over](docs/features/gameover-button.png)

### Footer
- The game footer is consist of the link to the Github link for the game and the linkedin for the designer.

![footer](docs/features/footer-links.png)

### 404

- The 404 is the error page which returns the user to the game if an error occure or the wrong search link is used.

![404-page](docs/features/404page.png)


## Validation

### HTML Validation

<details><summary>Game page</summary>
<img src="/docs/validations/indexhtmlvalidation.png">
</details>

### CSS Validation

<details><summary>Style</summary>
<img src="/docs/validations/cssvalidation.png">
</details>

### JavaScript Validation

<details><summary>Js</summary>
<img src="/docs/validations/js-validation.png">
</details>

### Accessibility

<details><summary>Game Intro</summary>
<img src="docs/validations/waves-ass.png">
</details>
<details><summary>Game Area</summary>
<img src="docs/validations/game-page-ass.png">
</details>

### Performance 

<details><summary>Game</summary>
<img src="docs/validations/lighthouse-intro.png">
</details>

### Performing tests on various devices 

- HP EllitBook
- Amazon fire table 7
- Samsung galaxy 20

### Browser compatability

- Tested on Goole Chrome
- Tested Micrsoft Edge
- Tested on Morzilla Firefox

### Testing user stories

1. As a first time user i want quick game start
   | **Feature** | **Action** | **Expected Result** | **Actual Result** |
   |-------------|------------|---------------------|-------------------|
   | Play button | Clicked | Fades page to game area | Works as expected |

   <details><summary>Screenshots</summary>
   <img src="docs/features/edited-button.jpg">
   </details>

2.  As a first time user i want see attractive characters

    | **Feature** | **Action** | **Expected Result** | **Actual Result** |
    |-------------|------------|---------------------|-------------------|
    | Game area | leave intro page  | all game character visible | Works as expected |

     <details><summary>Screenshots</summary>
     <img src="docs/features/game-area.png">
     </details>

3. As a first time user i want to have active selection options
  
   | **Feature** | **Action** | **Expected Result** | **Actual Result** |
   |-------------|------------|---------------------|-------------------|
   | Selsction icons | click selector icons| rock,paper or scissor image changes | Works as expected |
    <details><summary>Screenshots</summary>
    <img src="docs/features/edited-selectors.jpg">
    </details>

4. As a first user have to see a win or lose message

   | **Feature** | **Action** | **Expected Result** | **Actual Result** |
   |-------------|------------|---------------------|-------------------|
   | Result Message | click selector icons  |appears when selected options are compared  | Works as expected |
    <details><summary>Screenshots</summary>
    <img src="docs/features/edited-results.jpg">
    </details>

5. As a first time user i want to know my scores
   | **Feature** | **Action** | **Expected Result** | **Actual Result** |
   |-------------|------------|---------------------|-------------------|
   | Score count dispaly | click selector icons | score count changes | Works as expected |

    <details><summary>Screenshots</summary>
    <img src="docs/features/edited-score.jpg">
    </details>

6. As a  site owner i want the game to have an end  function  
   | **Feature** | **Action** | **Expected Result** | **Actual Result** |
   |-------------|------------|---------------------|-------------------|
   | Game over message | game score raises to 12 | selectors are disable with a game over message | Works as expected |

     <details><summary>Screenshots</summary>
     <img src="docs/features/gameover-button.png">
     </details>

7. As a site Owner I want the user enjoy the creative output of the game

   | **Feature** | **Action** | **Expected Result** | **Actual Result** |   
   |-------------|------------|---------------------|-------------------|
   | Game area | click play game button  | game is ready for user input | Works as expected |

     <details><summary>Screenshots</summary>
     <img src="docs/features/intro.png">
     <img src="docs/features/game-area.png">
     </details>

8. As a owner I want user to have a cutomized 404 error page if the wedsite fail to load

    | **Feature** | **Action** | **Expected Result** | **Actual Result** |
    |-------------|------------|---------------------|-------------------|
    | 404 error page | On non-matched URL| 404 page present with a return button to the game intro page | Works as expected |

    <details><summary>Screenshots</summary>
    <img src="docs/features/404page.png">
    </details>


    
## Bugs
  List of bugs found and fixes used ti mitigate them.

- Bug: W3C Validator fauled due to empty player and computer selected img tag source.
  Fix: Add default image file to img tag sources. 
- Bug: Error fualt due to redundant undefined function
  Fix: Deleted function from call list
- Bug: Console log detect variable with null value called to textcontent in win game function
    Fix: Deleted redundant code and confirm error fixed
- Bug:  Console log detect variable with null value called to textcontent in lose game function
  Fix:  Deleted redundant code and confirm error fixed
- Bug: Footer links dispaly high on the iphone response screen
   Fix: Adjusted footer positon
- Bug: W3C Validator detected stray div tag in index.html
  Fix: Deleted div tag and confirm index.html pass validation

## Deployment
The game was deployed using GitHub Pages by following these steps:
1. In the GitHub repository navigate to the Settings tab
2. On the left hand menu select Pages
3. For the source select Branch: master
4. After the webpage refreshes automaticaly you will se a ribbon on the top saying: "Your site is published at "https://ewie1.github.io/CI_PP2_RPS/"

You can for fork the repository by following these steps:
1. Go to the GitHub repository
2. Click on Fork button in upper right hand corner

You can clone the repository by following these steps:
1. Go to the GitHub repository 
2. Locate the Code button above the list of files and click it 
3. Select if you prefere to clone using HTTPS, SSH, or Github CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash
5. Change the current working directory to the one where you want the cloned directory
6. Type git clone and paste the URL from the clipboard ($ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY)  
7. Press Enter to create your local clone.

## Credits

### Media


### Code
 - My HTML code from lessons and formats from the html module and walk through project which then evolved into my owm structure as i gain more knowledge by trail and error.
 - My CSS code was also built on the concept of trail and error.
 - My JavaScript was reference form research, not an easy task as a first time finding a way implement JavaScript code but through alot of research, stackoverflow, youtube, codeInstitute module and lovemath walk project i have manage put my Javascript code together.


## Acknowledgements
- Thank you to my mentor Mo Shami great guidance.
- Acknowledge my brother Addan Mc Collin for support form a user's veiw
- Thankful to the Slack team for tips