# Homework!

## 23. Oct 2021

Task 1.

Implement validation of `fullName` field. Please implement the following validation
criteria:
- fullName cannot be empty
- fullName should be no longer than 30 characters
- fullName should not contain any spaces
- fullName should not contain any number
- [*] bonus points for fullName not containing any special characters

Task 2.
Add button inside the `Students` component which, when clicked, moves the
component below any other `Students` component following it, or above it,
if there are any components preceding it. So, in general:
- if component is neither the first nor the last one on the list, it should have two buttons: "move up" and "move down".
  The first one moves the component up by 1 place, and the second one moves it down.
- if component is the first one, it should have only "move down" button, which should work as described above.
- if component is the last one, it should have only "move up" button, which should work as described above.
- if there is only one component, it should have neither "move up" nor "move down" buttons.

Pay special attention to the implemented code so it works correctly with any number of components, i.e. 1, 2, 3, 4, 5 components...

If necessary (?), create additional student groups to help you with this task.


## 16. Oct 2021

Task 1.

Modify the existing codebase in such way, that not just only
"Full name" triggers sorting by `fullName` field values of `students`
but that all of the columns can be used to triggers sorting.
(I.e.: if I click on **Number of lessons** column header, table
should be sorted accordingly).

Tip: pay a special attention to the case when we already clicked
one header type (eg. **Full name**) and then we clicked other
table header (eg. **Number of lessons**). Question: what should
happen, if we click **Full name** header again, i.e. in what
direction names should get sorted.


## 14. Oct 2021

Task 1. Implement a component called `Cuboid` ("Prostopadłościan")
which works in a similar fashion like our `Rectangle` component.
As cuboid is a 3D figure, you will need to provide 3 properties for
width, height and depth.

You don't have to draw the Cuboid :D

Instead just calculate it's volume.

