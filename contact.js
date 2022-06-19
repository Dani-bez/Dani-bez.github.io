function contact() {
    var script_url = "https://script.google.com/macros/s/AKfycbxPjpVBg3eLxJJdox5yEiZ7LX6vf9WiM1OFJ2wBGn-9CipFnV95WD-TiN71g9Na8pBi/exec";
    //get data from form
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    //send data
    var url = script_url + "?callback=thanks&name="+ encodeURIComponent(name) 
    + "&email=" + encodeURIComponent(email) 
    + "&subject=" + encodeURIComponent(subject) 
    + "&message=" + encodeURIComponent(message);
    jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
}

function thanks() {
    //confirmation
    alert("Thanks for the message,I'll get back to you as soon as I can .");
}
