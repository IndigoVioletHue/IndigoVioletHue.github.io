function addComment(){
    text = document.getElementById("comment").innerHTML;
    let htmlString = " <p> <b> Anonymous </b> said {} at <i> Time </i>";
    let newHtml = htmlString.replace({}, text);
    div = document.getElementById("comments");
    div.insertAdjacentHTML('beforeend', newHtml)
}

