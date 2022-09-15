# portValidator
<h1> Port Validator </h1>
Hello. This a simple validator for text input containing <a href="https://en.wikipedia.org/wiki/Port_(computer_networking)">Network Ports</a> made with Typescript.
Main use is for validating user input for allowing/denying certain ports on a network security equipment interfacing system.

current funcionality:
<ul>

<li>
Checks if text inputted is a valid port or "any" string.
</li>

<li>
Checks if port is within valid range - 1-65535.
</li>

<li>
Accepts valid port ranges - within valid port range and start is lesser than end.
</li>

<li>
Accepts combinations of single ports and port ranges. Ie: "1010-2020 20 3030-4040 50"
</li>


<li>
Refuses common typos that may happen when dealing with such text.
</li>

<li>
Allows for trailing spaces, which are somewhat common due to port values being copy&pasted sometimes.
</li>

</ul>

Feel free to fork or reach out. Cheers!
