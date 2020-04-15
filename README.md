# Line wrap exercise in Node.js

As an exercise, create two line wrapping algorithms.

The programming language we're using in this exercise is [Node.js](https://nodejs.org/)


## Introduction

The problem we're going to solve in this exercise is to make a large text fit on any screen.
To do this, we need to split a text into multiple lines, without leaving too much space on each line.

To simplify the problem, we assume we're using a fixed-width font, so we can just pick a
maximum number of characters to fit in each line. We will only be splitting in between words,
never within the words themselves.


## Installation

### Requirements

* [Node.js 12.x](https://nodejs.org/)

### Instructions

* Clone this project in a local directory
* `cd` into this directory
* Run `npm install`
* Run `npm test` to run all tests


## Exercises

There are two types of approaches to solving this problem.
We'll be implementing an algortithm for both approaches.

### Greedy

The greedy approach tries to place as many words as possible on the first line.
It will continue doing so on the next line and so on until all words are placed.

For example:

```
This text is split into
multiple lines with a
maximum width of
twenty-four
```

### Optimal

The optimal approach tries to even out the length of the resulting lines.
To do this, we'll have to consider a cost for the extra spaces (i.e.
the number of characters we could fit after the last word) on each line.

The cost for each line will be equal to the number of extra spaces squared.
The total cost is the sum of the costs for all lines.
We will ignore the cost for the last line, so the text can potentially end
with a line containing a single word without any penalty. 

Following this cost calculation, the total cost of the previous example would be:

1^2 + 3^2 + 8^2 = 1 + 9 + 64 = 74

The optimal result for the previous example text would be:

```
This text is split
into multiple lines
with a maximum width of
twenty-four
```

with a total cost of:

6^2 + 5^5 + 1^2 = 36 + 25 + 1 = 62


## Start coding!

You can implement the algorithms in the src/greedy.js and src/optimal.js files.

To simply run the algorithms and view their output, run `node .`

I've supplied tests for both algorithms. You can run them by running `npm test`.
To run a test for only the greedy algorithm, run `npm test test/greedy`

Your job will be done once all tests are passing!
