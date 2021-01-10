var account_1=document.getElementById("p_account_1");
var account_2=document.getElementById("p_account_2");
var account_3=document.getElementById("p_account_3");
var account_4=document.getElementById("p_account_4");
var account_5=document.getElementById("p_account_5");
var account_6=document.getElementById("p_account_6");
var account_7=document.getElementById("p_account_7");
var account_8=document.getElementById("p_account_8");
var account_9=document.getElementById("p_account_9");
var account_10=document.getElementById("p_account_10");
var account_11=document.getElementById("p_account_11");
var account_12=document.getElementById("p_account_12");
var accound_card_1=document.getElementById("card_accound_1");
var accound_card_2=document.getElementById("card_accound_2");
var accound_card_3=document.getElementById("card_accound_3");
var accound_card_4=document.getElementById("card_accound_4");
var accound_card_5=document.getElementById("card_accound_5");
var accound_card_6=document.getElementById("card_accound_6");
function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function json(response) {
  return response.json()
}

fetch('https://sell-social-dev.herokuapp.com/api/v1/posts')
  .then(status)
  .then(json)
  .then(function(data) {
   
    console.log(data.content[0]);
    console.log(data.pageable);
    console.log(data.numberOfElements);
    account_1.innerHTML+=`
    <img src="./img/61409.jpeg" height="30" width="30" style="border-radius: 1rem;"><a href="kecidsehife_1.html">${data.content[0].description}<br>
    <span class="text-muted">${data.content[0].title}</span></a>
          `
    account_2.innerHTML+=`
    <img src="./img/61409.jpeg" height="30" width="30" style="border-radius: 1rem;"><a href="kecidsehife_1.html">${data.content[0].description}<br>
    <span class="text-muted">${data.content[0].title}</span></a>
          `
    account_3.innerHTML+=`
          <img src="./img/61409.jpeg" height="30" width="30" style="border-radius: 1rem;"><a href="kecidsehife_1.html">${data.content[0].description}<br>
          <span class="text-muted">${data.content[0].title}</span></a>
                `
    account_4.innerHTML+=`
          <img src="./img/61409.jpeg" height="30" width="30" style="border-radius: 1rem;"><a href="kecidsehife_1.html">${data.content[0].description}<br>
          <span class="text-muted">${data.content[0].title}</span></a>
                `
    account_5.innerHTML+=`
          <img src="./img/61409.jpeg" height="30" width="30" style="border-radius: 1rem;"><a href="kecidsehife_1.html">${data.content[0].description}<br>
          <span class="text-muted">${data.content[0].title}</span></a>
                `
    account_6.innerHTML+=`
          <img src="./img/61409.jpeg" height="30" width="30" style="border-radius: 1rem;"><a href="kecidsehife_1.html">${data.content[0].description}<br>
          <span class="text-muted">${data.content[0].title}</span></a>
                `
    account_7.innerHTML+=`
          <img src="./img/61409.jpeg" height="30" width="30" style="border-radius: 1rem;"><a href="kecidsehife_1.html">${data.content[0].description}<br>
          <span class="text-muted">${data.content[0].title}</span></a>
                `
    account_8.innerHTML+=`
          <img src="./img/61409.jpeg" height="30" width="30" style="border-radius: 1rem;"><a href="kecidsehife_1.html">${data.content[0].description}<br>
          <span class="text-muted">${data.content[0].title}</span></a>
                `
    account_9.innerHTML+=`
          <img src="./img/61409.jpeg" height="30" width="30" style="border-radius: 1rem;"><a href="kecidsehife_1.html">${data.content[0].description}<br>
          <span class="text-muted">${data.content[0].title}</span></a>
                `
    account_10.innerHTML+=`
          <img src="./img/61409.jpeg" height="30" width="30" style="border-radius: 1rem;"><a href="kecidsehife_1.html">${data.content[0].description}<br>
          <span class="text-muted">${data.content[0].title}</span></a>
                `
    account_11.innerHTML+=`
          <img src="./img/61409.jpeg" height="30" width="30" style="border-radius: 1rem;"><a href="kecidsehife_1.html">${data.content[0].description}<br>
          <span class="text-muted">${data.content[0].title}</span></a>
                `
    account_12.innerHTML+=`
          <img src="./img/61409.jpeg" height="30" width="30" style="border-radius: 1rem;"><a href="kecidsehife_1.html">${data.content[0].description}<br>
          <span class="text-muted">${data.content[0].title}</span></a>
                `
    accound_card_1.innerHTML+=`
    <div class="row">
     <div class="col-5"><img class="thumb img-circle img-responsive" src="img/41296.jpeg" width="69" height="69"></div>
    <div class="col-7"><p>                                  
      <a href="kecidsehife_1.html">${data.content[1].title}</a><br>
      <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 103.4k<br>
      <small><i class="fa fa-clock-o text-muted" aria-hidden="true"></i><span class="text-muted"> 2 days ago</span></small><br>
      ${data.content[1].price}
  </p></div>
    <div class="col-12"><p class="text-muted">
    ${data.content[1].description}
   </p></div>
    </div>
    `
    accound_card_2.innerHTML+=`
    <div class="row">
     <div class="col-5"><img class="thumb img-circle img-responsive" src="img/41296.jpeg" width="69" height="69"></div>
    <div class="col-7"><p>                                  
      <a href="kecidsehife_1.html">${data.content[1].title}</a><br>
      <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 103.4k<br>
      <small><i class="fa fa-clock-o text-muted" aria-hidden="true"></i><span class="text-muted"> 2 days ago</span></small><br>
      ${data.content[1].price}
  </p></div>
    <div class="col-12"><p class="text-muted">
    ${data.content[1].description}
   </p></div>
    </div>
    `
    accound_card_3.innerHTML+=`
    <div class="row">
     <div class="col-5"><img class="thumb img-circle img-responsive" src="img/41296.jpeg" width="69" height="69"></div>
    <div class="col-7"><p>                                  
      <a href="kecidsehife_1.html">${data.content[1].title}</a><br>
      <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 103.4k<br>
      <small><i class="fa fa-clock-o text-muted" aria-hidden="true"></i><span class="text-muted"> 2 days ago</span></small><br>
      ${data.content[1].price}
  </p></div>
    <div class="col-12"><p class="text-muted">
    ${data.content[1].description}
   </p></div>
    </div>
    `
    accound_card_4.innerHTML+=`
    <div class="row">
     <div class="col-5"><img class="thumb img-circle img-responsive" src="img/41296.jpeg" width="69" height="69"></div>
    <div class="col-7"><p>                                  
      <a href="kecidsehife_1.html">${data.content[1].title}</a><br>
      <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 103.4k<br>
      <small><i class="fa fa-clock-o text-muted" aria-hidden="true"></i><span class="text-muted"> 2 days ago</span></small><br>
      ${data.content[1].price}
  </p></div>
    <div class="col-12"><p class="text-muted">
    ${data.content[1].description}
   </p></div>
    </div>
    `
    accound_card_5.innerHTML+=`
    <div class="row">
     <div class="col-5"><img class="thumb img-circle img-responsive" src="img/41296.jpeg" width="69" height="69"></div>
    <div class="col-7"><p>                                  
      <a href="kecidsehife_1.html">${data.content[1].title}</a><br>
      <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 103.4k<br>
      <small><i class="fa fa-clock-o text-muted" aria-hidden="true"></i><span class="text-muted"> 2 days ago</span></small><br>
      ${data.content[1].price}
  </p></div>
    <div class="col-12"><p class="text-muted">
    ${data.content[1].description}
   </p></div>
    </div>
    `
    accound_card_6.innerHTML+=`
    <div class="row">
     <div class="col-5"><img class="thumb img-circle img-responsive" src="img/41296.jpeg" width="69" height="69"></div>
    <div class="col-7"><p>                                  
      <a href="kecidsehife_1.html">${data.content[1].title}</a><br>
      <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 103.4k<br>
      <small><i class="fa fa-clock-o text-muted" aria-hidden="true"></i><span class="text-muted"> 2 days ago</span></small><br>
      ${data.content[1].price}
  </p></div>
    <div class="col-12"><p class="text-muted">
    ${data.content[1].description}
   </p></div>
    </div>
    `
    

  })



  .catch(function(error) {
    console.log('Request failed', error);
  });
