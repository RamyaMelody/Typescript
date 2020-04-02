interface CricketGame {
    balls: Number,
    wickets: Number,
    players: Number,
    score: Number,
    tot_balls: Number
}

class Team {
    balls;
    wickets;
    players;
    score;
    tot_balls;

    constructor(cricket: CricketGame) {
        this.balls = cricket.balls;
        this.wickets = cricket.wickets;
        this.players = cricket.players;
        this.score = 0;
        this.tot_balls = cricket.tot_balls;
    }
    play(id) {
        let score_arr = [];

        while (this.tot_balls > 0) {

            while (this.players > 0) {
                this.balls = 6;

                while (this.balls > 0) {
                    var runs = Math.floor(Math.random() * 7);

                    if (runs == 0) {
                        break;
                    }
                    this.score += runs;
                    this.balls--;

                }
                score_arr.push(this.score);
                this.players--;
                this.wickets--;

            }

            this.tot_balls--;

        }
        if (id == "team1but") {
            let score = this.score;
            (<HTMLInputElement>document.getElementById("score1")).value = score;
            let wicket = this.wickets;
            (<HTMLInputElement>document.getElementById("wicket1")).value = wicket;
            let players = this.players;
            (<HTMLInputElement>document.getElementById("player1")).value = players;

        }
        else {
            let score = this.score;
            (<HTMLInputElement>document.getElementById("score2")).value = score;
            let wicket = this.wickets;
            (<HTMLInputElement>document.getElementById("wicket2")).value = wicket;
            var players = this.players;
            (<HTMLInputElement>document.getElementById("player2")).value = players;



        }

    }
}

let team1 = () => {
    let team1obj = new Team({
        balls: 6,
        wickets: 6,
        players: 6,
        score: 0,
        tot_balls: 36
    });
    let team1 = team1obj.play("team1but");
    (<HTMLInputElement>document.getElementById("team1but")).disabled = true;
    (<HTMLInputElement>document.getElementById("team2but")).disabled = false;
}
let team2 = () => {
    let team2obj = new Team({
        balls: 6,
        wickets: 6,
        players: 6,
        score: 0,
        tot_balls: 36
    });
    let team2 = team2obj.play({
        id: Number
    });
    (<HTMLInputElement>document.getElementById("team2but")).disabled = true;
    let a = (<HTMLInputElement>document.getElementById("score1")).value;
    let b = (<HTMLInputElement>document.getElementById("score2")).value;
    let c = (<HTMLInputElement>document.getElementById("wicket1")).value;
    let d = (<HTMLInputElement>document.getElementById("wicket2")).value;
    let myObj = { Team_A_Score: a, Team_B_Score: b, Wickets_A: c, Wickets_B: d };
    let myJSON = JSON.stringify(myObj);
    localStorage.setItem('testJSON', myJSON);
    location.href = "cricket_page2.html";

}
