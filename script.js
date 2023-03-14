let credentials = [
  {
    username: 'Surya',
    password: 'Rocky123',
  },
  {
    username: 'Sandeep',
    password: 'Sunny123',
  },
];

let demo = document.getElementById('demo');
function check() {
  let usern = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  console.log(usern);
  let tempv = credentials.findIndex((element) => element['username'] === usern);
  console.log(tempv);

  if (tempv > -1) {
    if (
      credentials[tempv]['username'] == usern &&
      credentials[tempv]['password'] === password
    ) {
      document.getElementById('demo').innerHTML = `<p>logged in</p>`;
    } else {
      document.getElementById('demo').innerHTML = `<p>invalid password</p>`;
    }
  } else {
    document.getElementById('demo').innerHTML = `<p>Invalid username</p>`;
  }
  //  demo.innerHTML=usern
  //   if( credentials.username===usern.value ){
  //     console.log('Logged In')
  //   }else{
  //     console.log("enter valid details")
  //   }
}
