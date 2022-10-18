select "releaseYear",
        "genres"."name",
        "title"
  from "films"
  join "filmGenre" using ("filmId")
  inner join "genres" using ("genreId")
  where "films"."title" = 'Boogie Amelie';
