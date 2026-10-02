# jev-bluffcall

**A local two-truths-and-a-lie party game where people bluff and Jev makes one finite choice.**

[![Tests](https://github.com/gbesse/jev-bluffcall/actions/workflows/test.yml/badge.svg)](https://github.com/gbesse/jev-bluffcall/actions/workflows/test.yml) [MIT](LICENSE) · Node.js 22+ · Zero runtime dependencies · Public alpha

The host screen runs on a laptop; players join `/play` on their phones. Jev guesses each lie, then the real answers and humans-versus-model score appear.

## Try it in 30 seconds

```sh
git clone https://github.com/gbesse/jev-bluffcall.git && cd jev-bluffcall
npm run demo
node bin/jev-bluffcall.mjs host --fake --rounds 5 --timer 60
```

`--fake` performs an offline rehearsal before hosting and never contacts Jev.

## Call real Jev

```sh
export TYPESAFE_API_KEY=... # paid statements go to https://api.typesafe.ai/v1/systemone
node bin/jev-bluffcall.mjs host --port 8794 --rounds 5 --timer 60
```

Tell players before starting: their three typed statements are the only personal content transmitted to Jev. The marked lie is deliberately withheld. The state machine, join-code allocation, persistence and server are available as library functions. See [game flow](docs/game-flow.md).

## How it decides

For every submitted player, one `choice` question asks which of exactly three strings is most likely false. No free text is generated. Code compares the selected index with the private lie index: correct gives Jev one point; wrong gives that player one point. Missing submissions are excluded from the round.

## Boundaries

This is a toy, not deception detection. A guess says nothing about a person's honesty. The local server has no TLS or authentication; use only on a trusted network. Statements may be personal, and Jev can be influenced by wording or injected instructions. Do not submit secrets. The timer value is exposed for hosts; automatic countdown UI is not part of 0.1.0.

## Shareable demo report

Run `npm run demo:report` to capture this repository’s bundled example as one JSON object with the project purpose, version and complete demo output. The command fails if the demo fails, so the report is useful when sharing a reproducible first look or reporting unexpected behavior. The bundled demo’s data and safety boundaries still apply.

## Validation

`npm run check`, `npm run typecheck`, `npm test`, and `npm run demo` run in CI on Node 22 and 24. Live smoke is opt-in and capped at two paid calls.

## Related projects

[DecisionPacks](https://github.com/gbesse/decisionpacks) · [WorldKit](https://github.com/gbesse/worldkit) · [Question Forge](https://github.com/gbesse/question-forge)

Independent project; not affiliated with TypeSafe AI. [TypeSafe API](https://docs.typesafe.ai/api) · [known model limitations](https://docs.typesafe.ai/model-jaggedness/jev-1.13)
