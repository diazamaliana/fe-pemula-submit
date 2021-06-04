

let songs = [];


window.addEventListener('load', () => {
  songs = JSON.parse(localStorage.getItem('song')) || [], updateUI(songs);
  
  $('form').addEventListener('submit', addSong)
  
  $('.toolbar>.form-input').addEventListener('change', searchData)
  
  $('#isReleased').addEventListener('click', (e) => {
    $('form>button').innerText = e.target.checked ? 'Save as Unreleased Song' : 'Save as Released Song';
  });
  
});


function updateUI(songs) {
  const released = $('.un-released'), 
        unreleased = $('.released');
        
  released.innerHTML = '', 
  unreleased.innerHTML = '';
  
  for(let song of songs) {
    let item = $new('tr', { id: song.id, css: ['song'] });
    let title = $new('td', { text: `${song.title}` });
    let author = $new('td', { text: `${song.author}` });
    let myAlbum = $new ('td', { text: `${song.myAlbum}` })
    let year = $new('td', { text: `${song.year}` });
    let link = $new('td', { text: `${song.link}` });
    let change = $new('button', { css: ['button', 'success', 'fa','fa-sync-alt'], action: changeGroup });
    let remove = $new('button', { css: ['button', 'button-primary' , 'fa', 'fa-trash'], action: removeSong });
    let edit = $new('button', { css: ['button', 'warning', , 'fa', 'fa-pen'], action: editSong });
    
    [title, author, myAlbum, year, link, change, remove, edit].forEach(e => {
      item.appendChild(e);
    });
    
    song.isReleased ? released.appendChild(item) : unreleased.appendChild(item);
  }
  
  !released.hasChildNodes() ? released.innerHTML = 'No Data' : 0;
  !unreleased.hasChildNodes() ? unreleased.innerHTML = 'No Data' : 0;
}


function changeGroup(e) {
  const position = songs.findIndex(i => i.id == e.target.parentNode.id);
  songs[position].isReleased = songs[position].isReleased ? false : true;
  saveData();
  updateUI(songs);
}


function removeSong(e) {
  if(confirm('Are you sure to delete data?')) {
    const position = songs.findIndex(i => i.id == e.target.parentNode.id);
    songs.splice(position, 1);
    saveData();
    updateUI(songs);
  }
}


function editSong(e) {
  const position = songs.findIndex(i => i.id == e.target.parentNode.id);
  
  $('#title').value = songs[position].title;
  $('#author').value = songs[position].author;
  $('#year').value = songs[position].year;
  $('#myAlbum').value = songs[position].myAlbum;
  $('#link').value = songs[position].link;
  $('#isReleased').checked = songs[position].isReleased;
  
  $('form').id = position;
  
  $('.input-data>h2').innerText = 'Edit Data';
  $('.input-data').scrollIntoView();
  
  $('#title').focus();
}


function addSong() {
  const position = $('form').id;
  
  let addModel = {
    id: +new Date(),
    title: $('#title').value,
    author: $('#author').value,
    year: $('#year').value,
    myAlbum: $('#myAlbum').value,
    link: $('#link').value,
    isReleased: $('#isReleased').checked
  }
  
  if(position) {
    songs[position].title = addModel.title;
    songs[position].author = addModel.author;
    songs[position].year = addModel.year;
    songs[position].myAlbum = addModel.myAlbum;
    songs[position].link = addModel.link;
    songs[position].isReleased = addModel.isReleased;
  } else {
    songs.push(addModel);
  }
  
  saveData();
  updateUI(songs);
}


function searchData(e) {
  e = e.target.value;
  
  updateUI(songs.filter(song => {
    return song.title.toLowerCase().includes(e.toLowerCase());
  }));
}


function saveData() {
  localStorage.setItem('song', JSON.stringify(songs));
}


function $new(e,a) {
  e = document.createElement(e);
  a.id ? e.id = a.id : 0;
  a.text ? e.innerText = a.text : 0;
  a.action ? e.addEventListener('click', a.action) : 0;
  a.css ? a.css.forEach(css => e.classList.add(css)) : 0;
  return e;
}


function $(e) {
  e = document.querySelectorAll(e);
  return e.length >= 1 ? e[0] : e;
}