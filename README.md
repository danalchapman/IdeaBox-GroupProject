## IDEA BOX PROJECT

# LINKEDIN PROFILES

https://www.linkedin.com/in/roberto-lopez-cruz-84a03989/

https://www.linkedin.com/in/danalchapman/

https://www.linkedin.com/in/andrew-knapick-29171369/



topics of discussion:

We discussed the possibilities that the bottom comment-bar of the <section> element could actually be designed as a button, nesting an <svg> element as well as a <P> (for "comment")
and the "+" svg can transform into a "-" while it opens up a comment section for us to add more notes to the <p class="comment-input"> element.

### End of Day Retros
- Monday 07/25: Went over our HTML and how it was implemented, points where we could refactor and went over naming conventions for classes and ids.
- Tuesday 07/26: Started our CSS file and creating rules based on class-name selectors, starting with containers and working inward.
- Wednesday 07/27: Finished the CSS file with flex-box elements, did some experimenting with overflow at the bottom of the page and ultimately added a scroll wheel to the idea-card section. Will continue to refactor and play with options when JS functionality is complete. Started implementing Solo Project Common Feedback into our project, refactoring as needed and as we notice where we can improve. Also completed Iteration 1, creating the idea.js and main.js files.
- Thursday 07/28: Continue to apply feedback from our previous projects as we work through Iteration 2, adding our selectors, event handlers, beginning functions for save-button functionality in the main-section.

-Thursday 07/28: Today we came across a number of things that challenged us. We were having a hard time accepting an answer our instructor gave us to a clarifying question we had asked, but only because we didn't have enough space to fully express our question by using examples found in our program we are building. with this we continued to work on our project with answers left unanswered, and so i believe we went into iteration 2 with this cloud of confusion, only to add onto some JS code that we were having a hard time finding solutions to. The problem we ran into, first off, was trying to figure out how to disable our Save button found in our main-section class. the spec reads: 
* When I look at the “Save” button,
* When either the “Title” or “Body” inputs are empty,
* I should notice that the “Save” button is disabled because it is a lighter color and the cursor is not a pointer when I hover over it

and so Dana and Dani went into a tug-of-war with a solution they both had to this problem. what had happened thereafter, though, was that we both unknowingly went down a rabbit hole of solutions without ever realizing that we weren't abiding by our norms we set out for ourselves. the norm was, 
"block off 30 minutes to independently research (go on mute). If someone finds something we come off mute and share. If we don’t find the solution within those 30 min we then reach out to rocks and mentors."
what ensued from that was leaving Andrew a unable to contribute (andrew look over this to add your experience) and so it didn't feel like a collabprative effort to finding a solution. What we ended up doing after our near 45 minute search was to call our mentors, which only brought a bit more confusion, rather than aid. we decided to call it a night, but not before reflecting with a retro. 
we agreed that we will assess future cases of getting stuck by making sure we all are on the same page. we will abide our norms and dedicate 30 min to independent research so that we can all feel like we are taking mindful time to problem solving and not getting lost in the voices of "back and forth" problem solving.

Today we still want to know whether or not we need to implement semantic elements of <forms> to our code, or if our <section> elements are good enough to get the job done. we still have yet to ask for our instructors guidance on what we can do about our white spaces to our <section class="idea section"> elements; do we need to change the size to our idea cards (and going against the project specs?) orrrr?

we still feel confident in our abilities to communicate our problem solving as a team and strive to be better in our communication. we definitely put the team first.

- On the topic of the fourth bullet point of Iteration 2, we did not trigger the default state of the form button. We are aware of how to `prevent.default()` - we would pass `event` through the function `createIdeaCard` and on the first line following, we would add `event.preventDefault()`.

- Friday 07/29: We refactored <section class="main-section"> to <form> for accessibility and guideline follow-through. We refactored CSS for the main section form <label> and <input> as well as the card container with `justify-content: space-evenly` for proper spacing of idea cards. We also started the first bullet point of Iteration 3, which was adding delete functionality to the `x` of the Idea Cards, and we worked on that and mananged to delete the cards from the DOM but not the Data Model and we agreed we would tackle that at our next scheduled time, before calling it a night after our regular End of Day retro.