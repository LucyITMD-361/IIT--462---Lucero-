
function handAssessor() {
  var hand = [
    {"rank": "two", "suit": "spades"},
    {"rank": "king", "suit": "spades"},
    {"rank": "two", "suit": "clubs"},
    {"rank": "four", "suit": "hearts"},
    {"rank": "eight", "suit": "diamonds"},
    ];
}

function containsNTimes(){
  var containsNTimes;
  containsNTimes(["two", "king", "two", "four", "eight"], "two", 2);
  hand.map(function (card) {
    return card.rank;
  });
}

function handRank(){
  var handRanks,
  result;
  handRanks = hand.map(function (card) {
  return card.rank;
  });
  result = containsNTimes(handRanks, "two", 2);
}

function rank(){
   var ranks = ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"];
    var containsPair = function (hand) {
        var result = false, handRanks;
         handRanks = hand.map(function (card) {
             return card.rank;
          });
           ranks.forEach(function (rank) {
            if (containsNTimes(handRanks, rank, 2)) {
               result = true;
               }
            });
             return result;
 }
 handAssessor();
             
             
             
