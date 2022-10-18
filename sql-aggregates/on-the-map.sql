select "countries"."name",
      count("cities"."cityId") as "numberOfCities"
  from "countries"
  join "cities" using ("countryId")
  group by "countries"."countryId";
