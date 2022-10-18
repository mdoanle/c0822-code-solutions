select "firstName",
      "lastName"
  from "customers"
  join "rentals" using ("customerId")
    inner join "inventory" using ("inventoryId")
      inner join "films" using ("filmId")
  where "films"."title" = 'Magic Mallrats';
