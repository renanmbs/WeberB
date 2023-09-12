import "./roster.css";
import { coaches, players } from "./roster-obj";
import { GiSoccerBall, GiSoccerKick, GiGoalKeeper } from 'react-icons/gi';
import "../schedule/schedule.css"
import { Schedules } from "../schedule/schedule";

export function Roster(){
    return(

        <>
        
            <div id="rost"> 
                <h2>Roster</h2> 
                <div className="rost2">
                    {players.map((name, key) => (
                        <div className="map" key={key}>
                            <div className="border">
                                <p className="name">{name.name}</p>
                                <p className="last">{name.last}</p>
                                <p className="number">{name.number}</p>
                                <p className="position">{name.position}</p>
                                <p className="home">{name.city}, {name.country}</p>
                                <p className="flag">{name.flag}</p>
                                <div id="stats">
                                {
                                    name.goals === null 

                                    ?

                                    <div>
                                        <p>{<GiGoalKeeper className="icon"/>}</p>
                                        <p>{name.clean}</p>
                                    </div>

                                    :

                                    <div>
                                        <p>{<GiSoccerBall className="icon"/>}</p>
                                        <p>{name.goals}</p>
                                        <p>{<GiSoccerKick className="icon" />}</p>
                                        <p>{name.assists}</p>
                                    </div>

                                }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <h2>Coaches</h2>
                <div className="rost3">
                    {coaches.map((coach, key) => (
                        <div className="map" key={key}>
                            <div className="border2">
                                <p className="name">{coach.name}</p>
                                <p className="last">{coach.last}</p>
                                <p className="position">{coach.position}</p>
                                <p className="home">{coach.city}, {coach.country}</p>
                                <p className="flag">{coach.flag}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        
            <div>
                {<Schedules/>}
            </div>
        </>
    )
}