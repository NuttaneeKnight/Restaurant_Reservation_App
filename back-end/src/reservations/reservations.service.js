const knex = require("../db/connection");

const tableName = "reservations";


//creates a new reservation
function create(reservation) {
  return knex(tableName)
    .insert(reservation)
    .returning("*");
}

//read the data (row) with the given 'reservation_id'
function read(reservation_id) {
  return knex(tableName)
    .select("*")
    .where({ reservation_id: reservation_id })
    .first();
}

// update reservation with the given reservation_id.
function update(reservation_id, status) {
  return knex(tableName)
    .where({ reservation_id: reservation_id })
    .update({ status: status });
}

// edit reservation with the given reservation_id. 
function edit(reservation_id, reservation) {
  return knex(tableName)
    .where({ reservation_id: reservation_id })
    .update({ ...reservation })
    .returning("*");
}

//list all reservations with the given date or mobile number
function list(date, mobile_number) {
  if (date) {
    return knex(tableName)
      .select("*")
      .where({ reservation_date: date })
      .orderBy("reservation_time", "asc");
  }

  if (mobile_number) {
    return knex(tableName)
      .select("*")
      .where("mobile_number", "like", `${mobile_number}%`);
  }

  return knex(tableName)
    .select("*");
}

module.exports = {
  list,
  create,
  read,
  update,
  edit,
};