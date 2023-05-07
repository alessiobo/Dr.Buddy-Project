function useReservation({ startD, endD, getAllReservations, id }) {
  const startDate = new Date(startD);
  const endDate = new Date(endD);

  const startDay = startDate.getDate();
  const endDay = endDate.getDate();

  const weekReservations = getAllReservations?.filter((reservation) => {
    if (reservation.id_doctor === id) {
      const date = getDateRes(reservation.date_reservation);

      return startDate >= date <= endDate;
    } else {
      return false;
    }
  });

  function getHour(dataPlusOra) {
    const ora = Number(dataPlusOra.substring(11, 13)) + 2;
    let min = Number(dataPlusOra.substring(14, 16));
    if (min === 0) {
      min += "0";
    }

    return ora + ":" + min;
  }

  function getDateRes(dataPlusOra) {
    return dataPlusOra.substring(0, 10);
  }

  function getArrayWeek(ora, startDay, endDay, reservations) {
    const arrWeek = [];
    for (let i = startDay; i < endDay; i++) {
      let day = i < 10 ? "0" + i : i;
      const foundDay = reservations?.find(
        (el) =>
          getHour(el.date_reservation) === ora &&
          getDateRes(el.date_reservation) === "2023-05-" + day + ""
      );

      arrWeek[i] = foundDay || null;
    }

    return arrWeek;
  }
  return { startDay, endDay, weekReservations, getArrayWeek };
}

export default useReservation;
