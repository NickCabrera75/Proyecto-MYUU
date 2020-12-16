var currentSong = 0;

function audioPlayer(){
    $("#audioPlayer")[0].src = $("#playlist li a")[0];
    $("#audioPlayer")[0].play();
    $("#playlist li a").click(function(e){
        e.preventDefault(); 
        $("#audioPlayer")[0].src = this;
        $("#audioPlayer")[0].play();
        $("#playlist li").removeClass("current-song");
        currentSong = $(this).parent().index();
        $(this).parent().addClass("current-song");
    });
    
    $("#audioPlayer")[0].addEventListener("ended", function(){
        currentSong++;
        if(currentSong == $("#playlist li a").length)
            currentSong = 0;
        $("#playlist li").removeClass("current-song");
        $("#playlist li:eq("+currentSong+")").addClass("current-song");
        $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
        $("#audioPlayer")[0].play();
    });
}

function pausePlayer(){    
    if ($("#audioPlayer")[0].paused) {
        $("#audioPlayer")[0].play();
    }
    else
    {
        $("#audioPlayer")[0].pause();
    }
}

function nextPlayer(){
    currentSong++;
    if(currentSong == $("#playlist li a").length)
        currentSong = 0;
    $("#playlist li").removeClass("current-song");
    $("#playlist li:eq("+currentSong+")").addClass("current-song");
    $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
    $("#audioPlayer")[0].play();
}

function PreviousPlayer(){
    currentSong--;
    if(currentSong == -1)
        currentSong = $("#playlist li a").length;
    $("#playlist li").removeClass("current-song");
    $("#playlist li:eq("+currentSong+")").addClass("current-song");
    $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
    $("#audioPlayer")[0].play();
}

function Amaranthe_Album_Maximimalism()
{
    $("playlist").empty();
    var select = document.getElementById('playlist')
    var array = ['<li class="current-song"><a href="Maximalism/21.mp3">21</a></li>',
                    '<li><a href="Maximalism/Boomerang.mp3">Boomerang</a></li>',
                    '<li><a href="Maximalism/Break Down and Cry.mp3">Break Down and Cry</a></li>',
                    '<li><a href="Maximalism/Endlessly.mp3">Endlessly</a></li>',
                    '<li><a href="Maximalism/Faster.mp3">Faster</a></li>',
                    '<li><a href="Maximalism/Fireball.mp3">Fireball</a></li>',
                    '<li><a href="Maximalism/Fury.mp3">Fury</a></li>',
                    '<li><a href="Maximalism/Limitless.mp3">Limitless</a></li>',
                    '<li><a href="Maximalism/Maximize.mp3">Maximize</a></li>',
                    '<li><a href="Maximalism/On the Rocks.mp3">On the Rocks</a></li>',
                    '<li><a href="Maximalism/Supersonic.mp3">Supersonic</a></li>',
                    '<li><a href="Maximalism/That Song.mp3">That Song</a></li>']
    var markup = array.map(item => item).join(' ')

    select.innerHTML = markup
    audioPlayer();
}

function Skillet_Album_Unleashed()
{
    $("playlist").empty();
    var select = document.getElementById('playlist')
    var array = ['<li class="current-song"><a href="2016 - Unleashed/01 - Feel Invincible.mp3">Feel Invincible</a></li>',
                    '<li><a href="2016 - Unleashed/02 - Back From the Dead.mp3">Back From the Dead</a></li>',
                    '<li><a href="2016 - Unleashed/03 - Stars.mp3">Stars</a></li>',
                    '<li><a href="2016 - Unleashed/04 - I Want to Live.mp3">I Want to Live</a></li>',
                    '<li><a href="2016 - Unleashed/05 - Undefeated.mp3">Undefeated</a></li>',
                    '<li><a href="2016 - Unleashed/06 - Famous.mp3">Famous</a></li>',
                    '<li><a href="2016 - Unleashed/07 - Lions.mp3">Lions</a></li>',
                    '<li><a href="2016 - Unleashed/08 - Out of Hell.mp3">Out of Hell</a></li>',
                    '<li><a href="2016 - Unleashed/09 - Burn it Down.mp3">Burn it Down</a></li>',
                    '<li><a href="2016 - Unleashed/10 - Watching for Comets.mp3">Watching for Comets</a></li>',
                    '<li><a href="2016 - Unleashed/11 - Saviors of the World.mp3">Saviors of the World</a></li>',
                    '<li><a href="2016 - Unleashed/12 - The Resistance.mp3">The Resistance</a></li>']
    var markup = array.map(item => item).join(' ')

    select.innerHTML = markup
    audioPlayer();
}

function Skillet_Album_Awake()
{
    $("playlist").empty();
    var select = document.getElementById('playlist')
    var array = ['<li class="current-song"><a href="2009 - Awake/01 - Hero.mp3">Hero</a></li>',
                '<li><a href="2009 - Awake/02 - Monster.mp3">Monster</a></li>',
                '<li><a href="2009 - Awake/03 - Dont Wake Me.mp3">Dont Wake Me</a></li>',
                '<li><a href="2009 - Awake/04 - Awake And Alive.mp3">Awake And Alive</a></li>',
                '<li><a href="2009 - Awake/05 - One Day Too Late.mp3">One Day Too Late</a></li>',
                '<li><a href="2009 - Awake/06 - Its Not Me Its You.mp3">Its Not Me Its You</a></li>',
                '<li><a href="2009 - Awake/07 - Shouldve When You Couldve.mp3">Shouldve When You Couldve</a></li>',
                '<li><a href="2009 - Awake/08 - Believe.mp3">Believe</a></li>',
                '<li><a href="2009 - Awake/09 - Forgiven.mp3">Forgiven</a></li>',
                '<li><a href="2009 - Awake/10 - Sometimes.mp3">Sometimes</a></li>',
                '<li><a href="2009 - Awake/11 - Never Surrender.mp3">Never Surrender</a></li>',
                '<li><a href="2009 - Awake/12 - Lucy.mp3">Lucy</a></li>',
                '<li><a href="2009 - Awake/13 - Dead Inside (Bonus Track).mp3">Dead Inside</a></li>',
                '<li><a href="2009 - Awake/14 - Would It Matter (Bonus Track).mp3">Would It Matter</a></li>',
                '<li><a href="2009 - Awake/15 - Monster (Radio Edit) (Bonus Track).mp3">Monster</a></li>']
    var markup = array.map(item => item).join(' ')

    select.innerHTML = markup
    audioPlayer();
}

function InFlames_Album_Battles()
{
    $("playlist").empty();
    var select = document.getElementById('playlist')
    var array = ['<li class="current-song"><a href="2016 - Battles/01 - Drainer.mp3">Drainer</a></li>',
                '<li><a href="2016 - Battles/02 - The End.mp3">The End</a></li>',
                '<li><a href="2016 - Battles/03 - Like Sand.mp3">Like Sand</a></li>',
                '<li><a href="2016 - Battles/04 - The Truth.mp3">The Truth</a></li>',
                '<li><a href="2016 - Battles/05 - In My Room.mp3">In My Room</a></li>',
                '<li><a href="2016 - Battles/06 - Before I Fall.mp3">Before I Fall</a></li>',
                '<li><a href="2016 - Battles/07 - Through My Eyes.mp3">Through My Eyes</a></li>',
                '<li><a href="2016 - Battles/08 - Battles.mp3">Battles</a></li>',
                '<li><a href="2016 - Battles/09 - Here Until Forever.mp3">Here Until Forever</a></li>',
                '<li><a href="2016 - Battles/10 - Underneath My Skin.mp3">Underneath My Skin</a></li>',
                '<li><a href="2016 - Battles/11 - Wallflower.mp3">Wallflower</a></li>',
                '<li><a href="2016 - Battles/12 - Save Me.mp3">Save Me</a></li>',
                '<li><a href="2016 - Battles/13 - Greatest Greed (Bonus Track).mp3">Greatest Greed</a></li>',
                '<li><a href="2016 - Battles/14 - Us Against The World (Bonus Track).mp3">Us Against The World</a></li>']
    var markup = array.map(item => item).join(' ')

    select.innerHTML = markup
    audioPlayer();
}

function Avantasia_Album_Ghostlight()
{
    $("playlist").empty();
    var select = document.getElementById('playlist')
    var array = ['<li class="current-song"><a href="2016 - Ghostlights/01 - Mystery Of A Blood Red Rose.mp3">Mystery Of A Blood Red Rose</a></li>',
                '<li><a href="2016 - Ghostlights/02 - Let The Storm Descend Upon You.mp3">Let The Storm Descend Upon You</a></li>',
                '<li><a href="2016 - Ghostlights/03 - The Haunting.mp3">The Haunting</a></li>',
                '<li><a href="2016 - Ghostlights/04 - Seduction Of Decay.mp3">Seduction Of Decay</a></li>',
                '<li><a href="2016 - Ghostlights/05 - Ghostlights.mp3">Ghostlights</a></li>',
                '<li><a href="2016 - Ghostlights/06 - Draconian Love.mp3">Draconian Love</a></li>',
                '<li><a href="2016 - Ghostlights/07 - Master Of The Pendulum.mp3">Master Of The Pendulum</a></li>',
                '<li><a href="2016 - Ghostlights/08 - Isle Of Evermore.mp3">Isle Of Evermore</a></li>',
                '<li><a href="2016 - Ghostlights/09 - Babylon Vampyres.mp3">Babylon Vampyres</a></li>',
                '<li><a href="2016 - Ghostlights/10 - Lucifer.mp3">Lucifer</a></li>',
                '<li><a href="2016 - Ghostlights/11 - Unchain The Light.mp3">Unchain The Light</a></li>',
                '<li><a href="2016 - Ghostlights/12 - A Restless Heart And Obsidian Skies.mp3">A Restless Heart And Obsidian Skies</a></li>',
                '<li><a href="2016 - Ghostlights/13 - Wake Up To The Moon.mp3">Wake Up To The Moon</a></li>']
    var markup = array.map(item => item).join(' ')

    select.innerHTML = markup
    audioPlayer();
}