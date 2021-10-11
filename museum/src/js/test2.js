    let videos = [{id: "aWmJ5DgyWPI"}, {id: "Vi5D6FKhRmo"}, {id: "NOhDysLnTvY"}, {id: "zp1BXPX8jcU"}, {id: "2OR0OCr6uRE"}];
    
    let players = [];


    let pVideo = document.querySelector(".fake-slider");


    for(let i = 0; videos.length > i; i++) {
        
        let newDiv = document.createElement("div");
        newDiv.id = videos[i].id;
               
        pVideo.appendChild(newDiv);

        players.push(videos[i].id);
    }
 

    function onYouTubeIframeAPIReady() {
        for(let k = 0; players.length > k; k++) {
            players[k] = new YT.Player(players[k], {
                                height: '254',
                                width: '452',
                                videoId: players[k],
                                events: {
                                    'onReady': onPlayerReady,
                                    'onStateChange': onPlayerStateChange
                            }
            });
        }

    }

    function onPlayerReady(event) {
        event.target.stopVideo();
    }

    function onPlayerStateChange(event) {
    const playing = YT.PlayerState.PLAYING;
    if (event.data === playing) {
        for (const player of players) {
        if (player !== event.target && player.getPlayerState() === playing) {
            player.stopVideo();
        }
        }
    }
    }


    onYouTubeIframeAPIReady()

    