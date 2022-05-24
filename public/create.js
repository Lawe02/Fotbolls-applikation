'use strict'

console.log('hello there')

const req = new XMLHttpRequest();
req.open('GET', '/data');
req.responseType = 'json';
req.send();

req.onload = () => {
    
    let data = req.response;

    const form = document.createElement('form');

    form.id = 'anka';
    form.action = '/data';
    form.method = 'POST';
    document.getElementById('formen').appendChild(form);

    const txb2 = document.createElement('input');
    txb2.style.display = 'block';
    txb2.placeholder = 'add name';
    txb2.id = 'anka';
    txb2.name = 'name';
    document.getElementById('anka').appendChild(txb2);

    const txbmål = document.createElement('input');
    txbmål.style.display = 'block';
    txbmål.placeholder = 'add goals';
    txbmål.id = 'anka';
    txbmål.name = 'mål';
    document.getElementById('anka').appendChild(txbmål);

    const txbmatch = document.createElement('input');
    txbmatch.style.display = 'block';
    txbmatch.placeholder = 'add matches';
    txbmatch.id = 'anka';
    txbmatch.name = 'match';
    document.getElementById('anka').appendChild(txbmatch);

    const txbassist = document.createElement('input');
    txbassist.style.display = 'block';
    txbassist.placeholder = 'add assists';
    txbassist.id = 'anka';
    txbassist.name = 'assist';
    document.getElementById('anka').appendChild(txbassist);

    const txb3 = document.createElement('input');
    txb3.style.display = 'block';
    txb3.placeholder = 'add address';
    txb3.id = 'anka';
    txb3.name = 'address';
    document.getElementById('anka').appendChild(txb3);

    const btn = document.createElement('button');
    btn.type = 'submit';
    btn.id = 'anka'
    btn.textContent = 'edit';
    document.getElementById('anka').appendChild(btn);  

    const deleteForm = document.createElement('form');

    deleteForm.id = 'del';
    deleteForm.action = '/dataa';
    deleteForm.method = 'POST';
    document.getElementById('form2').appendChild(deleteForm);

    const txb = document.createElement('input');
    txb.style.display = 'block';
    txb.placeholder = 'Delete ID';
    txb.id = 'del';
    txb.name = 'id';
    document.getElementById('del').appendChild(txb);

    const delbtn = document.createElement('button');
    delbtn.type = 'submit';
    delbtn.id = 'del';
    delbtn.textContent = 'Delete';
    document.getElementById('del').appendChild(delbtn);

    const updateForm = document.createElement('form');

    updateForm.id = 'upd';
    updateForm.action = '/datta';
    updateForm.method = 'POST';
    document.getElementById('form3').appendChild(updateForm);
    
    const txb4 = document.createElement('input');
    txb4.id = 'upd';
    txb4.style.display = 'block';
    txb4.placeholder = "Update Id";
    txb4.name = 'upid';
    document.getElementById('upd').appendChild(txb4);

    const txb5 = document.createElement('input');
    txb5.id = 'upd';
    txb5.style.display = 'block';
    txb5.placeholder = 'New name';
    txb5.name = 'upname';
    document.getElementById('upd').appendChild(txb5);

    const txb6 = document.createElement('input');
    txb6.id = 'upd';
    txb6.style.display = 'block';
    txb6.placeholder = 'New Address';
    txb6.name = 'Naddress';
    document.getElementById('upd').appendChild(txb6);

    const newgoal = document.createElement('input');
    newgoal.style.display = 'block';
    newgoal.id = 'upd';
    newgoal.placeholder = 'New Goalnumber';
    newgoal.name = 'ngoal';
    document.getElementById('upd').appendChild(newgoal);

    const newgame = document.createElement('input');
    newgame.style.display = 'block';
    newgame.id = 'upd';
    newgame.placeholder = 'New gamenumber';
    newgame.name = 'ngame';
    document.getElementById('upd').appendChild(newgame);

    const newass = document.createElement('input');
    newass.style.display = 'block';
    newass.id = 'upd';
    newass.name = 'nass';
    newass.placeholder = 'New assistnumber';
    document.getElementById('upd').appendChild(newass);

    const upbtn = document.createElement('button');
    upbtn.type = 'submit';
    upbtn.id = 'upd';
    upbtn.textContent = 'change'; 
    document.getElementById('upd').appendChild(upbtn);

    data.forEach((element) =>{

        let recordItem = document.createElement('p');

        recordItem.className = 'list-group-item';
        recordItem.textContent = `Namn: ${element.name} Position: ${element.position} Matcher: ${element.games} Mål: ${element.goals} Målpassningar: ${element.assits} ID: ${element.id}`;
        document.getElementById('ulRecords').appendChild(recordItem); 
        
        console.log(element);
        
 
    });
  
}


 
