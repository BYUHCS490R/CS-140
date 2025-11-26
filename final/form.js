document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault();

    const fullname=document.getElementById('fullname').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('pass').value;
    const date=document.getElementById('date').value;

    if (!fullname || !email || !date){
        alert("You need a name, email and date of birth.");
        return;
    }

    if (password.length<8){
        alert("Password must be more than 8 characters.");
        return;
    }

    const formData={
        name:fullname,
        email:email,
        password:password,
        dob:date,
    };

    alert('Form submitted');

    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open('POST','submit.json',true);
    xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8");
    xhr.onreadystatechange=function(){
        if (xhr.readyState===4 && xhr.status===200){
            alert("Form submitted successfully");
            const response=JSON.parse(xhr.responseText);
            console.log(response);
            document.getElementById('myForm').reset();
            document.getElementById('message').innerText=response.message;
        } else if (xhr.readyState===4){
            alert("Error submitting form");
        }
    };
    xhr.send(JSON.stringify(formData));
});