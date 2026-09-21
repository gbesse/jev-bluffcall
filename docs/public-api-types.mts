// Purpose: Compile-time exercise of the public API.
import{createGame,generateJoinCode,join}from'@gbesse/jev-bluffcall';const g=createGame();join(g,'Ada');generateJoinCode(new Set([g.code]));
