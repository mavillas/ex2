window.onload = function () {
    //make sure js is working
    console.log("hello world");

    //capture submit
    document.f.onsubmit = processForm;

    //capture reset
    document.f.onreset = resetPage;

    //define process function
    function processForm() {

        //store name in variable
        var name = document.f.name.value;
        //store adjective in variable
        var adj = document.f.adj.value;
        //store animal in variable
        var animal = document.f.animal.value;
        //store object in variable
        var object = document.f.object.value;
        //store noun in variable
        var noun = document.f.noun.value;

        //error detection
        if (name == "" || adj == "" || animal == "" || object == "" || noun == "") {
            alert("Fill out every form if you want to save a cat's family. No pressure...");

        } else {

            //capture the msg element to change it's text and html
            var myMsg = document.getElementById("myMsg");

            myMsg.innerHTML = "<em>" + name + "</em> is a cat. " + "<em>" + name + " </em> has been really scared of <em>" + adj + " " + animal + " </em> after they threatened to bludgeon his/her family with a <em>" + object + "</em>." + " Now " + "<em>" + name + " </em> has a plan to stop the <em> " + animal + " </em> by trapping them with a <em> " + noun + "</em>." + " Luckily, " + "<em>" + name + "'s </em>" + " plan worked and his/her family is safe!";
            myMsg.className = "show";
        }

        //prevent page from reloading
        return false;
    }

    //if user chooses "reset"
    function resetPage() {
        //remove any text from myMsg
        myMsg.innerHTML = "";
        //change the class name
        myMsg.className = "hide";
        //reset the name field
        name.value = "";
        //reset the adj field
        adj.value = "";
        //reset the animal field
        animal.value = "";
        //reset the object field
        object.value = "";
        //reset the noun field
        noun.value = "";

        return false;
    }
}