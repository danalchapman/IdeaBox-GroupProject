# IDEA BOX PROJECT
- [] Installation Steps
- [] Overview
- [] Using Idea Box
- [] End of Day Retros
- [] LinkedIn Profiles
- [] Original Comp

## Installation Steps
1. Fork and clone this repository.
2. `cd` into the root directory.
3. Run `open index.html` to view in the browser.

## Overview:
- *Goal of the Project*: Create functionality for Idea Box webpage, and creating HTML, CSS, and JavaScript files from scratch following Style Guidelines. Implementing use of Event Delegation as a new lesson following previous projects. We implented the use of Semantic elements and delegated the use of `<div></div>` for styling purposes only. We practiced DRY and SRP coding.
- *Future Feature*: We discussed the possibilities that the bottom comment-bar of the <section> element could actually be designed as a button, nesting an <svg> element as well as a <P> (for "comment") and the "+" svg can transform into a "-" while it opens up a comment section for us to add more notes to the <p class="comment-input"> element.

## Using Idea Box
1. Type the title of your idea into the `title input field`
2. Fill your `body input field` with the desired idea
3. Hit the saved button to save your idea to the page below
4. From there, you can favorite your idea by clicking the `star` icon in the top left corner, or delete your idea by clicking the `x` in the top right corner.

### End of Day Retros
- [Norming Document](https://docs.google.com/document/d/1UttTUx3zhpV8U_HjoPpFCG5bD5uQUUiAaoo7N7qsHFg/edit)
- **Monday 07/25**: Went over our HTML and how it was implemented, points where we could refactor and went over naming conventions for classes and ids.
- **Tuesday 07/26**: Started our CSS file and creating rules based on class-name selectors, starting with containers and working inward.
- **Wednesday 07/27**: Finished the CSS file with flex-box elements, did some experimenting with overflow at the bottom of the page and ultimately added a scroll wheel to the idea-card section. Will continue to refactor and play with options when JS functionality is complete. Started implementing Solo Project Common Feedback into our project, refactoring as needed and as we notice where we can improve. Also completed Iteration 1, creating the idea.js and main.js files.
- **Thursday 07/28**: Continue to apply feedback from our previous projects as we work through Iteration 2, adding our selectors, event handlers, beginning functions for save-button functionality in the main-section.
- Today we came across a number of things that challenged us. We were having a hard time accepting an answer our instructor gave us to a clarifying question we had asked, but only because we didn't have enough space to fully express our question by using examples found in our program we are building. with this we continued to work on our project with answers left unanswered, and so i believe we went into iteration 2 with this cloud of confusion, only to add onto some JS code that we were having a hard time finding solutions to. The problem we ran into, first off, was trying to figure out how to disable our Save button found in our main-section class. the spec reads: 
1.  When I look at the “Save” button,
2. When either the “Title” or “Body” inputs are empty,
3. I should notice that the “Save” button is disabled because it is a lighter color and the cursor is not a pointer when I hover over it
- So Dana and Dani went into a tug-of-war with a solution they both had to this problem. what had happened thereafter, though, was that we both unknowingly went down a rabbit hole of solutions without ever realizing that we weren't abiding by our norms we set out for ourselves. the norm was, "block off 30 minutes to independently research (go on mute). If someone finds something we come off mute and share. If we don’t find the solution within those 30 min we then reach out to rocks and mentors."
- What ensued from that was leaving Andrew a unable to contribute (andrew look over this to add your experience) and so it didn't feel like a collabprative effort to finding a solution. What we ended up doing after our near 45 minute search was to call our mentors, which only brought a bit more confusion, rather than aid. we decided to call it a night, but not before reflecting with a retro. 
- We agreed that we will assess future cases of getting stuck by making sure we all are on the same page. we will abide our norms and dedicate 30 min to independent research so that we can all feel like we are taking mindful time to problem solving and not getting lost in the voices of "back and forth" problem solving.
- (Solved) Today we still want to know whether or not we need to implement semantic elements of <forms> to our code, or if our <section> elements are good enough to get the job done. we still have yet to ask for our instructors guidance on what we can do about our white spaces to our <section class="idea section"> elements; do we need to change the size to our idea cards (and going against the project specs?).
- We still feel confident in our abilities to communicate our problem solving as a team and strive to be better in our communication. we definitely put the team first.
- On the topic of the fourth bullet point of Iteration 2, we did not trigger the default state of the form button. We are aware of how to `prevent.default()` - we would pass `event` through the function `createIdeaCard` and on the first line following, we would add `event.preventDefault()`.
- **Friday 07/29**: We refactored <section class="main-section"> to <form> for accessibility and guideline follow-through. We refactored CSS for the main section form <label> and <input> as well as the card container with `justify-content: space-evenly` for proper spacing of idea cards. We also started the first bullet point of Iteration 3, which was adding delete functionality to the `x` of the Idea Cards, and we worked on that and mananged to delete the cards from the DOM but not the Data Model and we agreed we would tackle that at our next scheduled time, before calling it a night after our regular End of Day retro.
- **Saturday 07/30**: Saturday was dedicated to Iteration 3: deleting card functionality, and favoriting/unfavoriting card functionality. We achieved delete functionality fairly quickly (with a later refactor) and spent the majority of our time troubleshooting the favorite/unfavorite functionality. This included refactoring the HTML and CSS to be more appropriate.
- For the last bullet point of this iteration, we have not experienced any page reloading on the delete or favorite functionality, and we tried refactoring in order to get the default to trigger but we were not able to do so.
- When we initially completed functionality we attempted to refactor our `renderCard` function to be based on the array and not the DOM and made the realization that our favorite/unfavorite functionality was not working as intended, only the most recently created card was able to be altered as the previous cards had been reset to `true`. We called in some help from Dana's mentor for troubleshooting of this and finalized functionality fully. This leaves us with some refactoring for our final meeting of the HTML, CSS, and JS, and the `README.md`.
- **Monday 08/01**: We finalized refactoring all files of the project, after a merge conflict and learning how to return to a previous commit and then continuing from there. `git checkout <commit-id> .` followed by adding, commiting and pushing from there.
- HTML: Removed the sample card and added `disabled` aspects to the `Show Starred Ideas` button.
- CSS: Refactored ordering of properties within rules, deleted uncommented properties. Added scroll property to `Card Body section` and not-allowed cursors to `comment button`, `search`, and `Show Starred Ideas`.
- JavaScript: Reiterated JS Turing Style guidelines for formatting and whitespacing and cleaned up organizational labels.
- `README.md` organized and marked up for empathetic purposes.

### LINKEDIN PROFILES
- [Roberto Dani Lopez-Cruz](https://www.linkedin.com/in/roberto-lopez-cruz-84a03989/)
- [Dana Chapman](https://www.linkedin.com/in/danalchapman/)
- [Andrew Knapick](https://www.linkedin.com/in/andrew-knapick-29171369/)

### Original Comp
![Idea Box Web Page](https://frontend.turing.edu/projects/module-1/assets/ideabox-group/desktop.jpg)