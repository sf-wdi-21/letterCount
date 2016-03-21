# <a href="https://cloud.githubusercontent.com/assets/1329385/10774272/66b03ef2-7cbd-11e5-8966-a045ef653a22.gif" target="_blank"> Letter Frequency Counter

<img src="https://cloud.githubusercontent.com/assets/1329385/10774272/66b03ef2-7cbd-11e5-8966-a045ef653a22.gif" alt="These may be hard"></a>

Use the provided tests to write a function that counts the frequency of letters in a string.

For example, given the word "apple", letterCount("apple") should return:

``` javascript
{
  a: 1,
  p: 2,
  l: 1,
  e: 1
}
```

**Additional Requirements**

* Make sure that lower case letters and upper case letters count for the same character.
* Also, ignore spaces and punctuation.

#### Setup
Clone this repo. No need to fork it!

``` bash
cd letter-count # navigate into the project folder
npm install # install project dependencies
```

If everything goes well, you should be able to run the Jasmine tests:

```bash
npm test
```

To manually check your code, you can run:

```bash
node index.js # write your "Driver Code" in here
```

Alternatively, you can use the Chrome Javascript Console:

``` bash
open index.html
```


#### Bonuses
* Utilize `filter`, `map` and `reduce` in your solution.
* Create a second function `wordCount` that counts the frequency of words in a paragraph (a string).
* Try out <a href="http://www.codewars.com/kata/character-frequency-1/javascript" target="_blank">this CodeWars challenge</a>.

<!-- INSTRUCTORS NOTES

{ prerequisites: [ 'forEach', 'in operator', 'hasOwnProperty'],
  topics: ['JS', 'iterators']
}

-->
