//Upvotes and Downvotes
function getVoteCount({ upvotes, downvotes }) {
  return upvotes + downvotes;
}
console.log(getVoteCount({ upvotes: 13, downvotes: 0 })); // ➞ 13
getVoteCount({ upvotes: 2, downvotes: 33 }); // ➞ -31
getVoteCount({ upvotes: 132, downvotes: 132 }); // ➞ 164
