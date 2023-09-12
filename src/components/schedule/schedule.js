import "./schedule.css";
import { Games } from "./schedule-obj";
import { Footer } from "../footer/footer";

export function Schedules(){
    return(
        <>
            <div id="sch">
                <h2>Schedule</h2>

                <div id="flex">
                    {
                        Games.map((game, index) => (
                            <div id="game"  key={index}>
                                <div id="box">
                                    <div>
                                        {game.opponent === null
                                        
                                        ?
                                            
                                        <p className="names">{game.tbd}</p>

                                        :

                                        <p className="names"><i>Weber State Black</i> x <i>{game.opponent}</i></p>
                                        }
                                    </div>
    
                                    <div className="score">{game.us === null 
                                    
                                        ?
                                        
                                        <p>"Game Not Played Yet"</p>

                                        :

                                        <p>{game.us} x {game.them}</p>
                                    }</div>

                                    <p>{game.date}</p>
                                    <p className="place">{game.where}</p>
                                    <div>{
                                        game.scorers === null

                                        ?

                                        <p></p>

                                        :

                                        <ul>
                                            <h3>Goals</h3> 
                                            {game.scorers.map((scorer,index) => (
                                            <li key={index}>{scorer}</li>
                                        ))}</ul>
                                    }</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div>
                <Footer/>
            </div>
        </>
    )
}