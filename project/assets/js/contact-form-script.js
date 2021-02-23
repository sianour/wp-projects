/*==============================================================*/
// Raque Contact Form  JS
/*==============================================================*/
(function ($) {
    "use strict"; // Start of use strict
    $("#contactForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "لطفا تمامی فیلد ها را بررسی نمایید.");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });


    function submitForm(){
        // Initiate letiables With Form Content
        let name = $("#name").val();
        let email = $("#email").val();
        let msg_subject = $("#msg_subject").val();
        let phone_number = $("#phone_number").val();
        let message = $("#message").val();

		
		
		
		let contacts = [];

			if (localStorage.getItem("contacts") !== null) {
				
				contacts = JSON.parse(localStorage.getItem("contacts"));
				contacts.push({
					name:name,
					email:email,
					msg_subject:msg_subject,
					phone_number:phone_number,
					message:message
				});
				localStorage.setItem("contacts", JSON.stringify(contacts));
				
			}else{
				
				contacts.push({
					name:name,
					email:email,
					msg_subject:msg_subject,
					phone_number:phone_number,
					message:message
				});
				localStorage.setItem("contacts", JSON.stringify(contacts));
				
			}
			
			swal("درخواست شما با موفقیت ذخیره شد", "", "success");
		
		
		
		$("#name").val("");
		$("#email").val("");
		$("#msg_subject").val("");
		$("#phone_number").val("");
		$("#message").val("");
        
    }


    function formError(){
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg){
		let msgClasses = "";
        if(valid){
            msgClasses = "h4 tada animated text-success";
        } else {
            msgClasses = "h4 text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
}(jQuery)); // End of use strict