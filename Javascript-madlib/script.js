function makeStory() {
    const noun = document.getElementById("nounInput").value;
    const activity = document.getElementById("activityInput").value;
    const weapon1 = document.getElementById("weapon1Input").value;
    const weapon2 = document.getElementById("weapon2Input").value;
    const weapon3 = document.getElementById("weapon3Input").value;
    const weapon4 = document.getElementById("weapon4Input").value;
    const event1 = document.getElementById("event1Input").value;
    const event2 = document.getElementById("event2Input").value;
    const event3 = document.getElementById("event3Input").value;
    const event4 = document.getElementById("event4Input").value;





    // simple story using the noun
    const story = "Long before time had a name " +  noun + 
    "was created by the first " + activity + "master using the four weapons of " 
    + activity + " The " + weapon1 + " of " + event1 + ", The " + weapon2 + " of "
    + event2 + ", The " + weapon3 + " of " + event3 + ", and the " + weapon4 + 
    " of " + event4 + ". Weapons so powerful no one can handle all thier power at once.";

    document.getElementById("storyOutput").innerText = story;
}