select "countries"."name" as "countryName",
        count("cities"."countryId") as "numberOfCities"
        from "cities"
        join "countries" using ("countryId")
        group by "countries"."countryId";
