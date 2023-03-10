import React from "react";
import { Link } from "react-router-dom";
import { updateReservationStatus } from "../utils/api";

//a component that displays each 'ReservationRow' with data(col) shown below
export default function ReservationRow({ reservation, loadDashboard }) {

  //if there is no 'reservations' or no finished status, return null
  if (!reservation || reservation.status === "finished") return null;

  //handle when the user wants to cancel the reservation
  function handleCancel() {
    //update reservation status-cancel when the reservation is canceled by the user
    if (
      window.confirm(
        "Do you want to cancel this reservation? This cannot be undone."
      )
    ) {
      const abortController = new AbortController();

      updateReservationStatus(
        reservation.reservation_id,
        "cancelled",
        abortController.status
      ).then(loadDashboard)
      .then(() => window.location.reload())


      return () => abortController.abort();
    }
  } 
  // show the the list of reservation for the day
  //each reservation is mapped -> 'reservationsJSX()' in the Dashboard
  return (
    <tr style={{fontFamily: "monospace"}}>
      <th scope="row" className="text-white">{reservation.reservation_id}</th>
      <td className="text-center text-white">{reservation.first_name}</td>
      <td className="text-center text-white">{reservation.last_name}</td>
      <td className="text-center text-white">{reservation.mobile_number}</td>
      <td className="text-center text-white">{reservation.reservation_date.substr(0, 10)}</td>
      <td className="text-center text-white">{reservation.reservation_time.substr(0, 5)}</td>
      <td className="text-center text-white">{reservation.people}</td>
      <td className="text-center text-white" data-reservation-id-status={reservation.reservation_id}>
        {reservation.status}
      </td>

      {reservation.status === "booked" && (
        <>
          <td className="text-center">
            <Link to={`/reservations/${reservation.reservation_id}/edit`}>
              <button className="btn btn-sm btn-outline-light" type="button">
                Edit
              </button>
            </Link>
          </td>

          <td className="text-center">
            <button
              className="btn btn-sm btn-outline-light"
              type="button"
              onClick={handleCancel}
              data-reservation-id-cancel={reservation.reservation_id}
            >
              Cancel
            </button>
          </td>

          <td className="text-center">
            <a href={`/reservations/${reservation.reservation_id}/seat`}>
              <button className="btn btn-sm btn-outline-light" type="button">
                Seat
              </button>
            </a>
          </td>
        </>
      )}
    </tr>
  );
}