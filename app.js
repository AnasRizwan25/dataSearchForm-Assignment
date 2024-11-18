const usersData = [
  {
    id: '467361',
    username: 'martin',
    email: 'martin@gmail.com',
    gender: 'male'
  },
  {
    id: '265544',
    username: 'janeed',
    email: 'jane@gmail.com',
    gender: 'female'
  },
  {
    id: '309876',
    username: 'alexhe',
    email: 'alex@gmail.com',
    gender: 'male'
  },
  {
    id: '408087',
    username: 'saraas',
    email: 'sara@gmail.com',
    gender: 'female'
  },
  {
    id: '521245',
    username: 'mikess',
    email: 'mike@gmail.com',
    gender: 'male'
  },
  {
    id: '642646',
    username: 'emilla',
    email: 'emilla@gmail.com',
    gender: 'female'
  },
  {
    id: '764267',
    username: 'lukess',
    email: 'lukess@gmail.com',
    gender: 'male'
  },
  {
    id: '853356',
    username: 'olivia',
    email: 'olivia@gmail.com',
    gender: 'female'
  },
  {
    id: '935255',
    username: 'charlie',
    email: 'charlie@gmail.com',
    gender: 'male'
  },
  {
    id: '106543',
    username: 'taylor',
    email: 'taylor@gmail.com',
    gender: 'female'
  }
];

let data = [];

function ontyping(value, e) {
  let emailId = document.querySelector('#email-id');
  let userId = document.querySelector('#user-id');
  let Id = document.querySelector('#ids-id');
  let gender = document.querySelector('#gender-id');


  if (value === 'email') {
    for (let i = 0; i < e.target.value.length; i++) {
      if (e.target.value.indexOf('@gmail.com') === -1) {
        emailId.style.display = 'block';
        return;
      }
      emailId.style.display = 'none';
    }
  }

  if (value === 'username') {
    for (let i = 0; i < e.target.value.length; i++) {
      if (e.target.value.length < 6) {
        userId.style.display = 'block';
        return;
      }
      userId.style.display = 'none';
    }
  }

  if (value === 'id') {
    for (let i = 0; i < e.target.value.length; i++) {
      if (e.target.value.length < 6 || e.target.value.length > 6) {
        Id.style.display = 'block';
        return;
      }
      Id.style.display = 'none';
    }
  }

  if (value === 'gender') {
    for (let i = 0; i < e.target.value.length; i++) {
      if (e.target.value.length === 4 && e.target.value === 'male') {
        gender.style.display = 'none';
        genders = e.target.value;
        return;
      } if (e.target.value.length === 6 && e.target.value === 'female') {
        gender.style.display = 'none';
        return;
      }
      gender.style.display = 'block';
    }
  }
}


function onform(e) {

  e.preventDefault();

  let username = document.querySelector('.us');
  let email = document.querySelector('.em');
  let id = document.querySelector('.id');
  let gender = document.querySelector('.gen');
  let h1 = document.querySelector('#h1');

  for (let i = 0; i < usersData.length; i++) {
    if (usersData[i].username === username.value && usersData[i].id === id.value && usersData[i].gender === gender.value && usersData[i].email === email.value) {
      openModal();
      modal(username.value, email.value, id.value, gender.value);
      h1.style.display = 'block';
      username.value = '';
      email.value = '';
      id.value = '';
      gender.value = '';
      return;
    } 
    h1.style.display = 'none';
    notFound();
  }
}

function closeModal() {
  let parentModal = document.querySelector('.modalPtn');
  parentModal.style.display = 'none';
}

function openModal() {
  let parentModal = document.querySelector('.modalPtn');
  parentModal.style.display = 'flex';
}

function notFound(){
  let parentModal = document.querySelector('.modalPtn');
  parentModal.style.display = 'flex';
  let modalPara = document.querySelector('.divInside');
  modalPara.innerText = 'User not found';

}

function modal(username, email, id, gender) {

  let html = '';
  let divInside = document.querySelector('.divInside');

  html =
    `
    <table>
      <tr>
        <th>Email</th>
        <th>Username</th>
        <th>ID</th>
        <th>Gender</th>
      </tr>
      <tr>
        <td>${email}</td>
        <td>${username}</td>
        <td>${id}</td>
        <td>${gender}</td>
      </tr>
    </table>
  `;

  divInside.innerHTML = html;
}