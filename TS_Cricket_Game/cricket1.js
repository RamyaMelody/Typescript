var Team = /** @class */ (function () {
    function Team(cricket) {
        this.balls = cricket.balls;
        this.wickets = cricket.wickets;
        this.players = cricket.players;
        this.score = 0;
        this.tot_balls = cricket.tot_balls;
    }
    Team.prototype.play = function (id) {
        var score_arr = [];
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
            var score = this.score;
            document.getElementById("score1").value = score;
            var wicket = this.wickets;
            document.getElementById("wicket1").value = wicket;
            var players_1 = this.players;
            document.getElementById("player1").value = players_1;
        }
        else {
            var score = this.score;
            document.getElementById("score2").value = score;
            var wicket = this.wickets;
            document.getElementById("wicket2").value = wicket;
            var players = this.players;
            document.getElementById("player2").value = players;
        }
    };
    return Team;
}());
var team1 = function () {
    var team1obj = new Team({
        balls: 6,
        wickets: 6,
        players: 6,
        score: 0,
        tot_balls: 36
    });
    var team1 = team1obj.play("team1but");
    document.getElementById("team1but").disabled = true;
    document.getElementById("team2but").disabled = false;
};
var team2 = function () {
    var team2obj = new Team({
        balls: 6,
        wickets: 6,
        players: 6,
        score: 0,
        tot_balls: 36
    });
    var team2 = team2obj.play({
        id: Number
    });
    document.getElementById("team2but").disabled = true;
    var a = document.getElementById("score1").value;
    var b = document.getElementById("score2").value;
    var c = document.getElementById("wicket1").value;
    var d = document.getElementById("wicket2").value;
    var myObj = { Team_A_Score: a, Team_B_Score: b, Wickets_A: c, Wickets_B: d };
    var myJSON = JSON.stringify(myObj);
    localStorage.setItem('testJSON', myJSON);
    location.href = "cricket_page2.html";
};
