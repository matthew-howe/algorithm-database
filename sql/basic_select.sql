-- # Problem: https://www.hackerrank.com/challenges/revising-the-select-query/problem

SELECT *
FROM CITY
WHERE
    COUNTRYCODE = 'USA'
    AND POPULATION > 100000;

-- # Problem: https://www.hackerrank.com/challenges/revising-the-select-query-2/problem

SELECT NAME
FROM CITY
WHERE
    COUNTRYCODE = 'USA'
    AND POPULATION > 120000;

-- # Problem: https://www.hackerrank.com/challenges/select-all-sql/problem

SELECT *
FROM CITY;

-- # Problem: https://www.hackerrank.com/challenges/select-by-id/problem

SELECT *
FROM CITY
WHERE ID = 1661;

-- # Problem: https://www.hackerrank.com/challenges/japanese-cities-attributes/problem

SELECT *
FROM CITY
WHERE COUNTRYCODE = 'JPN';

-- # Problem: https://www.hackerrank.com/challenges/japanese-cities-name/problem

SELECT NAME
FROM CITY
WHERE COUNTRYCODE = 'JPN';

-- # Problem: https://www.hackerrank.com/challenges/weather-observation-station-1/problem

SELECT CITY, STATE FROM STATION;

-- # Problem: https://www.hackerrank.com/challenges/weather-observation-station-3/problem

SELECT DISTINCT CITY
FROM STATION
WHERE MOD(ID, 2) = 0;

-- # Problem: https://www.hackerrank.com/challenges/weather-observation-station-4/problem

SELECT COUNT(CITY) - COUNT(DISTINCT CITY)
FROM STATION;

-- # Problem: https://www.hackerrank.com/challenges/weather-observation-station-5/problem

SELECT * 
FROM
    (SELECT CITY, LENGTH(CITY)
    FROM STATION
    ORDER BY LENGTH(CITY), CITY)
WHERE ROWNUM = 1
UNION
SELECT *
FROM
    (SELECT CITY, LENGTH(CITY)
    FROM STATION
    ORDER BY LENGTH(CITY) DESC, CITY)
WHERE ROWNUM = 1;
