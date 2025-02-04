# Maturity Self Assessment for Apache Linkis (incubating)

The goals of this maturity model are to describe how Apache projects operate in a concise and high-level way, and to provide a basic framework that projects may choose to use to evaluate themselves.

More details can be found [here](https://community.apache.org/apache-way/apache-project-maturity-model.html).

## Status of this assessment

Mentors and community members are encouraged to contribute to this page and comment on it, the following tables summarize our self-assessment against the **Apache Project Maturity Model**.

- :white_check_mark: means that the related item is in good status.
- :white_large_square: means that the related item need long-term attention.
- :x: means that the related item need to be fixed ASAP.


## Maturity model assessment

**CODE**

| **ID**   | **Description** | **Status** |
| -------- | ----- | ---------- |
| **CD10** | The project produces Open Source software for distribution to the public, at no charge.                                                                                                                                                                         | :white_check_mark:  The project source code is licensed under the `Apache License 2.0`. |
| **CD20** | Anyone can easily discover and access the project's code.                                                                                                                                                                                                    | :white_check_mark:  The [offical website](https://linkis.incubator.apache.org/) includes `Github` link which can access GitHub directly. |
| **CD30** | Anyone using standard, widely-available tools, can build the code in a reproducible way.                                                                                                                                                                       | :white_check_mark:   Apache Linkis provide [how-to-build](https://linkis.apache.org/docs/latest/development/linkis-compile-and-package) document to tell user how to compile on bare metal. |
| **CD40** | The full history of the project's code is available via a source code control system, in a way that allows anyone to recreate any released version.                                                                                                            | :white_check_mark:  It depends on git, and anyone can view the full history of the project via commit logs. |
| **CD50** | The source code control system establishes the provenance of each line of code in a reliable way, based on strong authentication of the committer. When third parties contribute code, commit messages provide reliable information about the code provenance. | :white_check_mark:  The project uses GitHub and managed by Apache Infra, it ensuring provenance of each line of code to a committer. |

**Licenses and Copyright**

| **ID**   | **Description**                                                                                                                                                                                                                                                                 | **Status** |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **LC10** | The Apache License, version 2.0, covers the released code.                                                                                                                                                                                                                     | :white_check_mark:  The [LICENSE](https://github.com/apache/incubator-linkis/blob/master/LICENSE) is in GitHub repository. And all source files are with APLv2 header, check by `apache-rat:check`. |
| **LC20** | Libraries that are mandatory dependencies of the project's code do not create more restrictions than the Apache License does.                                                                                                                                                   | :white_check_mark:  All [dependencies](https://github.com/apache/incubator-linkis/blob/master/linkis-dist/release-docs/LICENSE) has been checked and non of them create more restrictions than the Apache License does. |
| **LC30** | The libraries mentioned in LC20 are available as Open Source software.                                                                                                                                                                                                          | :white_check_mark:  See [dependencies](https://github.com/apache/incubator-linkis/blob/master/linkis-dist/release-docs/LICENSE). |
| **LC40** | Committers are bound by an Individual Contributor Agreement (the "Apache iCLA") that defines which code they may commit and how they need to identify code that is not their own. | :white_check_mark:  All committers have iCLAs. |
| **LC50** | The project clearly defines and documents the copyright ownership of everything that the project produces.                                                                                                                                                                              | :white_check_mark:  And all source files are with APLv2 header, check by `apache-rat:check`. |

**Releases**

| **ID**   | **Description**                                                                                                                                                                                                                                                                 | **Status** |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **RE10** | Releases consist of source code, distributed using standard and open archive formats that are expected to stay readable in the long term.                                                                                                                                       | :white_check_mark:  Source release is distributed via [dist.apache.org](https://dist.apache.org/repos/dist/release/incubator/linkis) and linked from [download page](https://linkis.incubator.apache.org/download/main). |
| **RE20** | The project's PMC (Project Management Committee, see CS10) approves each software release in order to make the release an act of the Foundation.                                                                                                                                                                          | :white_check_mark:  All releases have been voted at dev@linkis and general@incubator, and have at least 3 PPMC's/IPMC's votes. |
| **RE30** | Releases are signed and/or distributed along with digests that anyone can reliably use to validate the downloaded archives.                                                                                                                                                       | :white_check_mark:  All releases are signed, and the [KEYS](https://downloads.apache.org/incubator/linkis/KEYS) is available. |
| **RE40** | The project can distribute convenience binaries alongside source code, but they are not Apache Releases, they are provided with no guarantee. | :white_check_mark:  User can easily build binaries from source code.  Convenience binaries are distributed alongside source code at the same time via <ul><li>[Maven Central Repository](https://mvnrepository.com/artifact/org.apache.linkis)</li><li>[dist.apache.org](https://dist.apache.org/repos/dist/release/incubator/linkis/)</li></ul>  |
| **RE50** | The project documents a repeatable release process so that someone new to the project can independently generate the complete set of artifacts required for a release. | :white_check_mark:  We can follow the [release guide](http://linkis.incubator.apache.org/community/release-process.html) to make new Apache Linkis release. And so far we had 7 different release managers. |

**Quality**

| **ID**   | **Description**                                                                                                                                                                                                                                                                 | **Status** |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **QU10** | The project is open and honest about the quality of its code. Various levels of quality and maturity for various modules are natural and acceptable as long as they are clearly communicated. | :white_check_mark:  We encourage user to [report issues](https://github.com/apache/incubator-linkis/issues) |
| **QU20** | The project puts a very high priority on producing secure software.                                                                                                                                                                                                            | :white_check_mark:  All safety issues will be resolved in priority. |
| **QU30** | The project provides a well-documented, secure and private channel to report security issues, along with a documented way of responding to them. | :white_check_mark:  Website provides a [security page](http://linkis.incubator.apache.org/community/security) |
| **QU40** | The project puts a high priority on backwards compatibility and aims to document any incompatible changes and provide tools and documentation to help users transition to new features. | :white_check_mark:  All releases are backwards compatibility. Apache Linkis provides [upgrade guide](https://linkis.apache.org/docs/latest/upgrade/upgrade-guide) docs  |
| **QU50** | The project strives to respond to documented bug reports in a timely manner. | :white_check_mark:  The project has resolved 1200+ issues and 1700+ pull requests so far, with very prompt response. |

**Community**

| **ID**   | **Description**                                                                                                                                                                                                                                                                 | **Status** |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **CO10** | The project has a well-known homepage that points to all the information required to operate according to this maturity model. | :white_check_mark:  The [website](https://linkis.apache.org/) includes all information user need to run Apache Linkis. |
| **CO20** | The community welcomes contributions from anyone who acts in good faith and in a respectful manner, and who adds value to the project. | :white_check_mark:  Apache Linkis provides [code submission guide](http://linkis.incubator.apache.org/community/how-to-contribute) and welcome all good contributions. |
| **CO30** | Contributions include source code, documentation, constructive bug reports, constructive discussions, marketing and generally anything that adds value to the project. | :white_check_mark:  All good contributions including code and non-code are welcomed. |
| **CO40** | The community strives to be meritocratic and gives more rights and responsibilities to contributors who, over time, add value to the project. | :white_check_mark:  The community has elected 4 new PPMC members and 12 new committers so far. |
| **CO50** | The project documents how contributors can earn more rights such as commit access or decision power, and applies these principles consistently. | :white_check_mark:  With the document [committer guide](http://linkis.incubator.apache.org/community/how-to-contribute). |
| **CO60** | The community operates based on consensus of its members (see CS10) who have decision power. Dictators, benevolent or not, are not welcome in Apache projects. | :white_check_mark:  All decisions are made after vote by community members. |
| **CO70** | The project strives to answer user questions in a timely manner. | :white_check_mark:  We use dev@linkis, [github issue](https://github.com/apache/incubator-linkis/issues) and [github discussion](https://github.com/apache/incubator-linkis/discussions) to do this in a timely manner. |

**Consensus**

| **ID**   | **Description**                                                                                                                                                                                                                                                                 | **Status** |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **CS10** | The project maintains a public list of its contributors who have decision power. The project's PMC (Project Management Committee) consists of those contributors. | :white_check_mark:  See [members](http://linkis.incubator.apache.org/team) with all PPMC members and committers. |
| **CS20** | Decisions require a consensus among PMC members and are documented on the project's main communications channel. The PMC takes community opinions into account, but the PMC has the final word. | :white_check_mark:  All decisions are made by votes on dev@linkis, and with at least 3 PPMC's/IPMC's +1 binding |
| **CS30** | The project uses documented voting rules to build consensus when discussion is not sufficient. | :white_check_mark:  The project uses the standard ASF voting rules. |
| **CS40** |In Apache projects, vetoes are only valid for code commits. The person exercising the veto must justify it with a technical explanation, as per the Apache voting rules defined in CS30. | :white_check_mark:  Apache Linkis community has not used the veto power yet except for code commits. |
| **CS50** | All "important" discussions happen asynchronously in written form on the project's main communications channel. Offline, face-to-face or private discussions that affect the project are also documented on that channel. | :white_check_mark:  All important discussions and conclusions are recorded in written form. |

**Independence**

| **ID**   | **Description**                                                                                                                                                                                                                                                                 | **Status** |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **IN10** | The project is independent from any corporate or organizational influence. | :white_check_mark:  The PPMC members and committer of Apache Linkis are from 10+ companies, and majority of them are NOT From the company that donated this project. |
| **IN20** | Contributors act as themselves, not as representatives of a corporation or organization. | :white_check_mark:  The contributors act on their own initiative without representing a corporation or organization. |

----------------
