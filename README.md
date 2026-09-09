# Frontend Engineering Lab

An open-source laboratory for learning how real frontend systems are built, broken, debugged, productionized, architected, and reviewed.

## What is this?

Frontend Engineering Lab is not a component library and not another collection of frontend tutorials.

The goal is to teach frontend engineering thinking through practical, progressively difficult exercises.

The core learning loop is:

**Build → Break → Debug → Productionize → Architect → Review → Scale**

Instead of only learning:

> How do I build a modal?

The Lab asks:

> How does a modal evolve when the requirements, scale, accessibility, performance, and reliability requirements change?

## Start Here

The first component in the Lab is:

### Modal

The Modal will progress through:

1. Beginner
2. Intermediate
3. Advanced
4. Break
5. Debug
6. Production
7. Architecture
8. Code Review

## Philosophy

- Working code is only the beginning.
- Requirements determine architecture.
- Every abstraction has a cost.
- Production introduces constraints.
- Accessibility is part of engineering.
- Performance should be measured.
- There is rarely one universally correct architecture.
- Good engineers understand trade-offs.
- Debugging is an engineering skill.
- Code review is a learning tool.
- Simple solutions are preferable until complexity is justified.
- The goal is better engineering decisions, not more code.

## Project Structure

```text
frontend-engineering-lab/

├── apps/
│   └── lab/                 # Lab website
│
├── components/              # Components learners build
│   └── modal/
│       ├── beginner/
│       ├── intermediate/
│       └── advanced/
│
├── challenges/              # Engineering challenges
│   ├── break/
│   ├── debug/
│   ├── production/
│   ├── architecture/
│   └── code-review/
│
└── docs/                    # Documentation
