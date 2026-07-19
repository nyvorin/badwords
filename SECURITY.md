# Security Policy

## Supported Versions

`bad-words` is published to npm as [`bad-words`](https://www.npmjs.com/package/bad-words).
Security fixes are released only on the latest major line; older majors are
end-of-life and will not receive patches. Fixes ship as a new patch release
under the `latest` dist-tag — upgrade to the newest `4.x` to stay current.

| Version | Supported          |
| ------- | ------------------ |
| 4.x     | :white_check_mark: |
| 3.x     | :x:                |
| 2.x     | :x:                |
| 1.x     | :x:                |
| < 1.0   | :x:                |

## Reporting a Vulnerability

Please report suspected vulnerabilities privately — do not open a public
issue or pull request for a security problem.

Use GitHub's private vulnerability reporting: go to the
[**Security** tab](https://github.com/nyvorin/badwords/security) and click
**Report a vulnerability**. This opens a private advisory visible only to the
maintainers.

Please include, where possible:

- affected version(s) and environment (Node.js version, CommonJS or ESM),
- a minimal reproduction or proof of concept,
- the impact you believe the issue has.

### What to expect

This is a volunteer-maintained open-source project, so responses are
best-effort rather than bound to a formal SLA. In general you can expect an
initial acknowledgement within about a week. If a report is accepted, a fix
will be released on the supported `4.x` line and the reporter credited in the
published advisory unless anonymity is requested. If a report is declined,
you will get an explanation of why.

### Scope

The runtime package ships only the filter code and its word list (its sole
runtime dependency is [`badwords-list`](https://www.npmjs.com/package/badwords-list)).
Vulnerabilities in build- or test-only `devDependencies` do not affect
consumers of the published package, but reports about them are still welcome.
