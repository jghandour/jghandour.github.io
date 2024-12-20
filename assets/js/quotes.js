function Quote(quotation, author) {
    this.quotation = quotation;
    this.author = author;
}

var quotes = [];
quotes.push(new Quote("The secret of getting ahead is getting started. The secret of getting started is breaking your complex overwhelming tasks into small manageable tasks, and then starting on the first one.", "Mark Twain"));
quotes.push(new Quote("Simplicity is the ultimate sophistication.", "Leonardo da Vinci"));
quotes.push(new Quote("If I have seen farther than others, it is because I was standing on the shoulders of giants.", "Isaac Newton"));
quotes.push(new Quote("Wisely, and slow. They stumble that run fast.", "William Shakespeare"));
quotes.push(new Quote("Three Rules of Work: Out of clutter find simplicity; From discord find harmony; In the middle of difficulty lies opportunity.", "Albert Einstein"));
quotes.push(new Quote("Everything should be made as simple as possible, but not simpler.", "Albert Einstein"));
quotes.push(new Quote("Logic will get you from A to B. Imagination will take you everywhere.", "Albert Einstein"));
quotes.push(new Quote("The true sign of intelligence is not knowledge but imagination.", "Albert Einstein"));
quotes.push(new Quote("The key to wisdom is knowing all the right questions.", "John A. Simone, Sr."));
quotes.push(new Quote("Learn as though you would never be able to master it; Hold it as though you would be in fear of losing it.", "Confucius"));
quotes.push(new Quote("Success depends upon previous preparation, and without such preparation there is sure to be failure.", "Confucius"));
quotes.push(new Quote("Intuition will tell the thinking mind where to look next.", "Jonas Salk"));
quotes.push(new Quote("We may affirm absolutely that nothing great in the world has been accomplished without passion.", "Hegel"));
quotes.push(new Quote("Live as if you were to die tomorrow. Learn as if you were to live forever.", "M.K. Gandhi"));
quotes.push(new Quote("We can't solve problems by using the same kind of thinking we used when we created them.", "Albert Einstein"));
quotes.push(new Quote("When I am working on a problem, I never think about beauty but when I have finished, if the solution is not beautiful, I know it is wrong.", "R. Buckminster Fuller"));
quotes.push(new Quote("Perfection [in design] is achieved, not when there is nothing more to add, but when there is nothing left to take away.", "Antoine de Saint-Exupéry"));
quotes.push(new Quote("Any intelligent fool can make things bigger, more complex, and more violent. It takes a touch of genius -- and a lot of courage -- to move in the opposite direction", "Albert Einstein"));
quotes.push(new Quote("Good design adds value faster than it adds cost.", "Thomas C. Gale"));
quotes.push(new Quote("You can't have great software without a great team, and most software teams behave like dysfunctional families.", "Jim McCarthy"));
quotes.push(new Quote("People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.", "Donald Knuth"));
quotes.push(new Quote("Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.", "Linus Torvalds"));
quotes.push(new Quote("There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies", "C.A.R. Hoare"));
quotes.push(new Quote("We are what we repeatedly do; excellence, then, is not an act but a habit.", "Aristotle"));
quotes.push(new Quote("Simplicity and elegance are unpopular because they require hard work and discipline to achieve and education to be appreciated.", "Edsger Dijkstra"));
quotes.push(new Quote("Complexity kills. It sucks the life out of developers, it makes products difficult to plan, build, and test.", "Ray Ozzie"));
//quotes.push(new Quote("The hardest single part of building a software system is deciding precisely what to build the most important function that software builders do for their clients is the iterative extraction and refinement of the product requirements. For the truth is, the clients do not know what they want. They usually do not know what questions must be answered, and they have almost never thought of the problem in the detail that must be specified.", "Fred Brooks"));

function displayRandomQuote() {
    var index = Math.round(Math.random() * (quotes.length - 1));
    var quote = quotes[index];


    document.getElementById("quotation").innerText = quote.quotation + " - " + quote.author;
}

displayRandomQuote();
setInterval(displayRandomQuote, 60000);
