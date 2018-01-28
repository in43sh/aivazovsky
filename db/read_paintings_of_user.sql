SELECT a.title, a.url
FROM aivazovsky a
JOIN users u ON a.userid = u.userid
WHERE a.userid = $1