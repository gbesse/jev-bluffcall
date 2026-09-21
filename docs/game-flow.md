# Game flow

`lobby → collect → judge → reveal → collect|finished` is the only accepted transition path. Submissions contain exactly three non-empty strings and the player's private lie index. The judge request receives only the three statements, never that index. Timed-out players simply have no submission and therefore no request. A small mutation queue serializes concurrent HTTP submissions.
