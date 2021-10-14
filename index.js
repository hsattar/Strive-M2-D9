let favAlbums = [
    {
        img: 'images/1989.jfif',
        album: '1989',
        albumId: 'ts1989',
        artist: 'Taylor Swift',
        genre: 'POP',
        length: '13 Songs',
        songs: [
            {
                name: 'Wildest Dreams',
                duration: '3:40'
            },
            {
                name: 'Style',
                duration: '3:51'
            },
            {
                name: 'Blank Space',
                duration: '3:52'
            },
        ]
    },
    {
        img: 'images/Dangerous Woman.jfif',
        album: 'Dangerous Woman',
        albumId: 'dangerous-woman',
        artist: 'Ariana Grande',
        genre: 'POP',
        length: '15 Songs',
        songs: [
            {
                name: 'Into You',
                duration: '4:04'
            },
            {
                name: 'Side To Side',
                duration: '3:46'
            },
            {
                name: 'Dangerous Woman',
                duration: '3:55'
            }
        ]
    },
    {
        img: 'images/Divide.jfif',
        album: 'Divide',
        albumId: 'divide',
        artist: 'Ed Sheeran',
        genre: 'POP',
        length: '16 Songs',
        songs: [
            {
                name: 'Perfect',
                duration: '4:23',
            },
            {
                name: 'Shape Of You',
                duration: '3:53',
            },
            {
                name: 'Castle On The Hill',
                duration: '4:21'
            }
        ]
    },
    {
        img: 'images/Blue.jfif',
        album: 'Blue',
        albumId: 'blue',
        artist: 'Jonas Blue',
        genre: 'Dance Music',
        length: '15 Songs',
        songs: [
            {
                name: 'Mama',
                duration: '3:04'
            },
            {
                name: 'Perfect Strangers',
                duration: '3:16'
            },
            {
                name: 'By Your Side',
                duration: '4:34'
            },
            {
                name: 'Drink To You',
                duration: '3:30'
            },
            {
                name: 'I See Love',
                duration: '2:53'
            },
            {
                name: 'Polaroid',
                duration: '3:13'
            },
            {
                name: 'Desperate',
                duration: '2:54'
            },
            {
                name: 'Wild',
                duration: '3:32'
            },
            {
                name: 'Wherever You Go',
                duration: '3:28'
            },
            {
                name: 'Purpose',
                duration: '2:50'
            },
            {
                name: 'Rise',
                duration: '3:04'
            },
            {
                name: 'Supernova',
                duration: '3:07'
            },
            {
                name: 'We COuld Go Back',
                duration: '3:12'
            },
            {
                name: 'Come Through',
                duration: '2:58'
            },
            {
                name: 'Fast Car',
                duration: '3:04'
            }
        ]
    },
    {
        img: 'images/AvaMax.jfif',
        album: 'Heaven & Hell',
        albumId: 'heaven-and-hell',
        artist: 'Ava Max',
        genre: 'POP',
        length: '15 Songs',
        songs: [
            {
                name: 'Kings & Queens',
                duration: '2:43'
            },
            {
                name: 'So Am I',
                duration: '3:04'
            },
            {
                name: 'Sweet But Psycho',
                duration: '3:07'
            }
        ]
    },
    {
        img: 'images/Calvin.jfif',
        album: '18 Months',
        albumId: 'ch-18-months',
        artist: 'Calvin Harris',
        genre: 'POP',
        length: '15 Songs',
        songs: [
            {
                name: 'I Need Your Love',
                duration: '3:54'
            },
            {
                name: 'We Found Love',
                duration: '3:35'
            },
            {
                name: 'Feel So Close',
                duration: '3:27'
            }
        ]
    },
]

let albumGallery = [
"images/Phoenix.jfif",
"images/Mabel.jfif",
"images/Divide.jfif",
"images/Blue.jfif",
"images/Red.jfif",
"images/Dangerous Woman.jfif",
"images/OneD.jfif",
"images/AvaMax.jfif",
"images/Calvin.jfif",
"images/Salute.jfif",
"images/One Love.jfif",
"images/So Good.jfif",
'images/thescript.jfif',
'images/avicii.jfif',
'images/jasonderulo.jfif',
'images/samsmith.jfif',
'images/charlieputh.jfif',
'images/drake.jfif',
]

let favAlbumsSection = document.getElementById('fav-albums')
let albumModalSection = document.getElementById('album-modal-section')

for (album of favAlbums) {
    favAlbumsSection.innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
        <div class="card border">
            <img src="${album.img}" class="card-img-top" alt="...">
            <div class="music-badge"><i class="bi bi-music-note-beamed mr-1"></i>Music</div>
            <div class="card-body bg-dark">
                <h5 class="card-title">${album.album}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${album.artist}</h6>
                <p class="card-text">${album.genre}</p
                <p class="card-text">${album.length}</p>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#${album.albumId}">See Songs</button>
            </div>
        </div>
    </div>`

    albumModalSection.innerHTML += `
    <div class="modal fade" id="${album.albumId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content bg-dark">

                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${album.artist} - ${album.album}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="text-danger">&times;</span>
                    </button>
                </div>

                <div id="${album.albumId}songs" class="modal-body">
                    <div class="row border-bottom pb-2 mb-1">
                        <div class="col-2">#</div>
                        <div class="col-7">Song</div>
                        <div class="col-3">Duration</div>
                    </div>                          
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>`

    let listOfSongs = document.getElementById(`${album.albumId}songs`)
    for (let i = 0; i < album.songs.length; i++) {
        let songItem = document.createElement('div')
        songItem.className = 'row py-2 song-row'
        songItem.innerHTML = `
        <div class="col-2">${i + 1}</div>
        <div class="col-7">${album.songs[i].name}</div>
        <div class="col-3">${album.songs[i].duration}</div>`
        listOfSongs.appendChild(songItem)

        console.log(songItem)

        songItem.addEventListener('click', () => {
            console.log('works')
        })

        // for (song of songRow) {

        //     songItem.addEventListener('mouseover', () => {
        //         songItem.innerHTML = `
        //         <div class="col-2"><i class="play-circle"></i></div>
        //         <div class="col-7">${album.songs[i].name}</div>
        //         <div class="col-3">${album.songs[i].duration}</div>`
        //         console.log('works')
        //     })
        
        //     songItem.addEventListener('mouseout', () => {
        //         songItem.innerHTML = `
        //         <div class="col-2">${i + 1}</div>
        //         <div class="col-7">${album.songs[i].name}</div>
        //         <div class="col-3">${album.songs[i].duration}</div>`
        //         console.log('works')
        //     })
        // }
        

    }
}

let songRow = document.querySelectorAll('.song-row')
//console.log(songRow)

const removePlayingSong = () => {
    let songPlaying = document.querySelector('.playing')
    if (songPlaying !== null) {
        songPlaying.remove()
    }
}

const findSongLength = () => {
    let selectedSongLength = document.querySelector('.text-success div:nth-child(3)')
    selectedSongLength = selectedSongLength.innerText
    let songTime = selectedSongLength.split(':')
    let songTimeNumber = songTime.map(i => Number(i))
    let convertSecondsToDecimal = songTimeNumber[1] / 60
    convertSecondsToDecimal = convertSecondsToDecimal.toFixed(2)
    songTimeNumber[1] = convertSecondsToDecimal
    songTimeNumber = songTimeNumber.join('')
    songTimeNumber = songTimeNumber.split('0')
    songTimeNumber = songTimeNumber.join('')
    songTimeNumber = Number(songTimeNumber)
    songTimeSeconds = Math.round(songTimeNumber * 60)
}

const songPlaying = () => {
    removePlayingSong()
    let modalBody = document.querySelectorAll('.modal-body')
    let selectedSong = document.querySelector('.text-success div:nth-child(2)')
    findSongLength()
    let progressBarIncrements = Number((100 / songTimeSeconds).toFixed(2))
    let currentlyPlaying = document.createElement('div')
    currentlyPlaying.className = 'col-12 text-center border-top mt-4 pt-2 playing'
    currentlyPlaying.innerText = selectedSong.innerText
    for (let j = 0; j < modalBody.length; j++) {
        // console.log(j)
        // console.log(modalBody[j])
        modalBody[4].appendChild(currentlyPlaying)
        // modalBody[4].appendChild(playBtn)
        // modalBody[4].appendChild(pauseBtn)
        // console.log(modalBody[j])
    }
    // for (let modal of modalBody) {
    //     console.log(modal)
    //     modal.appendChild(currentlyPlaying)
    //     console.log(modal)
    // }
    let songProgressBar = document.createElement('div')
    songProgressBar.className = 'progress mt-2'
    let currentTime = 0
    
    const updateProgressBarDisplay = () => {
        currentTime += progressBarIncrements
        console.log(currentTime)
        songProgressBar.innerHTML = `
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style="Width: ${currentTime}%"></div>`
        if (currentTime > 100) {
            resetPlayer()
            songProgressBar.innerHTML = `<div class="progress-bar bg-success" role="progressbar" style="Width: 100%"></div>`
        }
    }
    
    let updateProgress = setInterval(updateProgressBarDisplay, 1000)

    const resetPlayer = () => {
        clearInterval(updateProgress)
    }

    currentlyPlaying.appendChild(songProgressBar)
    // USE VARIABLE TO UPDATE WIDTH % EVERY SECOND
}


const removePreviouslySelectedSong = () => {
    for (let song of songRow) {
        for (let classList of song.classList) {
            if (classList === 'text-success') {
                song.classList.remove('text-success')
            }
        }
    }
}

for (let song of songRow) {
    song.addEventListener('click', () => {
        removePreviouslySelectedSong()
        song.classList.add('text-success')
        songPlaying()
    })
    
    // song.addEventListener('mouseover', (e) => {
    //     let songIcon = e.target.firstChild.nextSibling
    //     if (songIcon != null) {
    //         songIcon.innerHTML = `<i class="bi bi-play-circle"></i>`
    //     }
    // })

    // song.addEventListener('mouseout', (e) => {
    //     let songIcon = e.target.firstChild.nextSibling
    //     if (songIcon != null) {
    //         songIcon.innerHTML = `1`
    //     }
    //     //console.log(e)
    // })
}


let albumGallerySection = document.getElementById('album-gallery')

for (let coverSrc of albumGallery) {
    let albumCover = document.createElement('div')
    albumCover.className = 'col-4 col-sm-3 col-lg-2'
    albumCover.innerHTML = `<img src="${coverSrc}">`
    albumGallerySection.appendChild(albumCover)
}






//////////////////////////////////////////////////////////////////////////////////////////////////////

const jonasBlueSongs = [
    {
        name: 'Mama',
        duration: '3:04'
    },
    {
        name: 'Perfect Strangers',
        duration: '3:16'
    },
    {
        name: 'By Your Side',
        duration: '4:34'
    },
    {
        name: 'Drink To You',
        duration: '3:30'
    },
    {
        name: 'I See Love',
        duration: '2:53'
    },
    {
        name: 'Polaroid',
        duration: '3:13'
    },
    {
        name: 'Desperate',
        duration: '2:54'
    },
    {
        name: 'Wild',
        duration: '3:32'
    },
    {
        name: 'Wherever You Go',
        duration: '3:28'
    },
    {
        name: 'Purpose',
        duration: '2:50'
    },
    {
        name: 'Rise',
        duration: '3:04'
    },
    {
        name: 'Supernova',
        duration: '3:07'
    },
    {
        name: 'We COuld Go Back',
        duration: '3:12'
    },
    {
        name: 'Come Through',
        duration: '2:58'
    },
    {
        name: 'Fast Car',
        duration: '3:04'
    }
]

const tbody = document.querySelector('tbody')
for (let i = 0; i < jonasBlueSongs.length; i++) {
    const newSong = document.createElement('tr')
    newSong.innerHTML = `
        <th scope="row">${i + 1}</th>
        <td>${jonasBlueSongs[i].name}</td>
        <td>${jonasBlueSongs[i].duration}</td>
        <td class="bi bi-trash appear-on-hover"></td>`
    tbody.appendChild(newSong)
}

const deleteSongFromTable = (e) => {
    const selectedSongRow = e.target.parentNode
    selectedSongRow.remove()
}

const deleteSongBtn = document.querySelectorAll('.bi-trash')
deleteSongBtn.forEach(btn => {
    btn.addEventListener('click', deleteSongFromTable)})


const userAddedSong = () => {
    const userSongNumber = document.querySelector('#user-song-number')
    const userSongTitle= document.querySelector('#user-song-title')
    const userSongDuration = document.querySelector('#user-song-duration')
    const newUserSong = document.createElement('tr')
    newUserSong.innerHTML = `
    <th scope="row">${userSongNumber.value}</th>
    <td>${userSongTitle}</td>
    <td>${userSongDuration}</td>
    <td class="bi bi-trash appear-on-hover"></td>`
    tbody.appendChild(newUserSong)
}

//const userAddedSongBtn = document.querySelector('#userAddedSongBtn')
//userAddedSongBtn.addEventListener('click', addUserSong)