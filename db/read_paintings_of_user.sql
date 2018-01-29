SELECT *
FROM aivazovsky a
JOIN users u ON a.userid = u.userid
WHERE a.userid = $1
ORDER BY a.paintingid ASC;