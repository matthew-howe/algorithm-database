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
