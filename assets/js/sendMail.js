function sendMail(contactForm) {

    emailjs.send("gmail", "simongame", {
            "from_name": contactForm.fullname.value,
            "from_email": contactForm.email.value,
            "user_score": contactForm.turns.value,
            "time": contactForm.time.value,
            "total": contactForm.total.value,
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
                $("#score-sent").addClass("visable");
                $("#up-to-5").addClass("visable");
                setTimeout(location.reload.bind(location), 600);
            },
            function(error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
}

