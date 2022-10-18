select "firstName",
        "lastName"
  from "actors"
  join "castMembers" using ("actorId")
  inner join "films" using ("filmId")
  where "films"."title" = 'Jersey Sassy';
