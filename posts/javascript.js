
// Handle form submission
function addComment(){
document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page from reloading
  
    // Get form values
    var comment = document.getElementById("comment").value;
    var date = new Date().toISOString(); // Get current date/time
  
    // Create new row in CSV file
    var csv = "Anonymous" + "," + comment + "," + date + "," + window.id +"\n";
    // Write CSV data to file using AJAX request or some other method
  
    // Display new comment on page
    var commentList = document.getElementById("comments");
    var newComment = document.createElement("p");
    newComment.innerHTML = "<b> Anonymous </b> said " + comment + " at <i> "+ date +" </i>";
    commentList.insertAdjacentHTML('beforeend', newComment);
  });
};

function rwCSV(action, data){
    if (action.toLowerCase() == "r"){
        fetch('comments.csv')
        .then(response => response.text())
        .then(data => {
          // Parse the CSV data using Papa Parse
        let parsedData = Papa.parse(data, {header: false});})
        console.log(parsedData)
    } else {
        let csvData = Papa.unparse(data);
        
    }
};

function loadComments(){
  // Display existing comments on page
  // Read CSV data using AJAX request or some other method
  // Parse CSV data into an array of comment objects
  var comments = [
    { name: "John", comment: "Great website!", date: "2023-04-16T14:30:00Z" },
    { name: "Jane", comment: "I learned a lot from this article.", date: "2023-04-15T18:45:00Z" }
  ];
  var commentList = document.getElementById("comment-list");
  comments.forEach(function(comment) {
    var newComment = document.createElement("li");
    newComment.innerHTML = "<b>" + comment.name + "</b>: " + comment.comment;
    commentList.appendChild(newComment);
  });};
