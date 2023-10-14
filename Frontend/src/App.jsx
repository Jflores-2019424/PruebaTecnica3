import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./UI/NavBar/NavBar";
import { MoviesList } from "./Movies/MoviesMain/MoviesList";
import { Ticket } from "./Movies/Ticket/Ticket";
import { TicketList } from "./Movies/TicketList/TicketList";

export const App = () =>{
  return(  
    <>
    <Navbar/>
      <Routes>
          <Route path="/" element={<MoviesList/>}/>
          <Route path="/ticket" element={<Ticket/>}/>
          <Route path="/ticketList" element={<TicketList/>}/>
      </Routes>
    </>
  )
}