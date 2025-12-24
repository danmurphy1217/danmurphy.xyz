---
layout: post
title:  "The New Cap Table"
date:   2025-12-24 10:00:00 -0400
category: technology
permalink: /posts/2025-12-24-the-new-cap-table
excerpt: AI is changing how early teams are formed and cap tables are structured.
---

# The Old Cap Table is Dead

Earlier this year, we made a deliberate bet at Común: we were going to adopt AI as a core part of our development workflow, not just for a nice "productivity boost".

We started by doing something that felt almost bureaucratic -- we created an `AGENTS.md` file in our codebase that documented our architectural patterns, coding standards, testing approaches, and design decisions. Every convention we normally communicated through code review comments or Slack messages was initially stored in Notion (dating back to ~2 years ago when I wrote the initial version) and ultimately ended up in this file.

Our small team started shipping features that would've required twice as many engineers just two years ago. Check deposit processing, Fraud decisioning engines, Remittances thru WhatsApp, even small and medium-size Infrastructure updates. Across the board we began leveraging AI to handle the mechanical execution while we focused on the judgment calls that actually mattered: product tradeoffs and direction, what to build versus buy, architectural decisions, and other critical engineering design discussions (preferences around using Dynamo versus Postgres, separate feature stores versus relying on Taktile, etc...). At the end of the day, AI was able to execute well on most tasks for us. The critical piece was accurately defining and describing the scope of work, and making sure that AI fully understood our code expectations before we let it run loose.

These realizations led me to a broader hypothesis: strong senior+ engineering talent is critical for defining work clearly, reviewing AI output critically, and operating autonomously without the need for additional oversight. If the approach to writing code is uniformly agreed on across the team, then more and more coding tasks can be pushed *downwards* to AI agents and more critical product, design, and high-level engineering design decisions can be pushed *upwards* to the core engineering team.

Ultimately, this means that you can do much more with much less. A small team of very strong, product-oriented senior+ engineers can build better systems faster than they could a few years ago! This has massive implications for how founding teams should be **structured** and **compensated**.

## The Old Playbook

For the past decade, the standard approach to building an early-stage engineering team looked something like this:

You'd hire a strong technical co-founder or founding engineer - someone who could own the architecture and make the critical early decisions. They'd get somewhere between 1-2% equity, maybe more if they were employee #1. Then, as the product scope expanded, you'd bring on 3-4 additional engineers. Some senior, some mid-level, a generalist or two. Each would get 0.3-0.7% equity. By the time you hit product-market fit, you'd have 5-8 engineers accounting for roughly 5-7% of the cap table.

This made sense. Building a product required coverage across multiple surfaces - backend APIs, frontend web, mobile apps, infrastructure, maybe some data pipelines. One person couldn't realistically own all of that, even if they were exceptional. You needed bodies to cover ground.

The equity distribution reflected this reality. Engineering was expensive and critical, but you also needed to reserve equity for sales, marketing, ops, and future executive hires. Spreading 5-7% across a small engineering team was the rational way to balance coverage, speed, and dilution.

But the assumptions underlying this model are breaking down.

## What's Changing

AI tooling isn't just making engineers more productive - it's fundamentally changing the leverage equation. A senior engineer with Claude, Cursor, or similar tools can now handle workstreams that previously required 2-3 people. The critical part being that this productivity multiplier only works if the engineer has the *judgment* to use it effectively.

This is especially visible in the frontend/backend divide. A strong backend engineer who historically needed a dedicated frontend developer can now use AI to generate React components, handle styling, and build full-stack features end-to-end. The frontend specialist role isn't disappearing entirely, but the bar for when you actually need one has risen significantly.

The value isn't in typing code faster. It's in knowing *what* to build, *how* to architect it, and *when* the AI output is wrong. Mid-level engineers can use the same tools, but most still need someone to define the tasks, validate the approach, and catch the mistakes. That "someone" is usually a senior+ engineer or the founder themselves - which defeats the entire purpose of having an autonomous, smaller team.

This creates a bifurcation. Strong senior engineers who can combine execution speed with product judgment and architectural thinking are now worth significantly more. They can operate autonomously, own entire product surfaces without supervision, and make critical build-vs-buy decisions without constant oversight. Meanwhile, engineers who need direction or review - even if they're fast at executing tasks - provide less leverage in this new model. This creates a difficult reality for junior engineers: the traditional path of joining an early-stage startup to learn by doing is narrowing. Not because juniors can't contribute, but because the team structures that made mentorship economically viable are becoming less common at the earliest stages.

The cap table math changes accordingly. If you previously needed 6 engineers at ~0.75% each (4.5% total), you might now structure the team as 2-3 exceptional senior engineers at 1.5-2% each (4.5-6% total). Similar total engineering equity, but concentrated among fewer, higher-caliber people who can each deliver the output of multiple traditional engineers.

I've heard from founder friends that they're actively structuring teams this way - hiring fewer engineers, paying them more (cash + equity), and setting a much higher bar for what "founding engineer" means.

## What This Means

If you're a founding engineer - or aspire to be one - the bar is rising, but so is the potential upside.

The traditional ~0.5-1% equity grant for early engineering hires is based on an outdated model. If you're genuinely senior+, can operate autonomously, have strong product intuition, and know how to leverage AI tooling effectively, you should be negotiating as such. You're not just an early employee who writes code - you're a technical co-owner who can drive entire product initiatives without handholding.

This also means the role is fundamentally different. Founding engineers in this model need to be comfortable with ambiguity, capable of making build-vs-buy decisions independently, and able to translate business objectives into technical execution without detailed specs. If you need direction on what to build or constant review of how you're building it, you're not the right fit for these roles - regardless of how fast you can ship code with AI assistance.

For founders, this shift requires rethinking team composition from first principles.

The instinct is often to hire more people - more coverage, more velocity, more redundancy. But in the AI era, that might be exactly wrong. A team of 6 engineers where half need supervision is slower and more fragile than a team of 3 who can each own major product surfaces independently. The cognitive overhead of coordination, the communication tax, the time spent in code review and architectural debates - all of this compounds when you add people who can't operate autonomously.

Instead, the focus should be on finding 2-3 exceptional engineers who meet a very high bar: senior+ experience, strong product sense, proven ability to work independently, and comfort with AI-augmented workflows. Pay them well. Give them real ownership over product surfaces. Trust them to make the right calls without micromanagement.

Within 12-24 months, I expect this will become a more standard practice across the startup ecosystem.

## Where This Breaks Down

This model isn't universal. There are clear cases where it doesn't apply, and being honest about the limitations is important.

**Domain complexity matters.** If you're building in fintech, you might actually need more engineers just to achieve feature parity with competitors. The surface area is massive - card issuing, ACH, wire transfers, check deposits, fraud detection, compliance tooling, customer support dashboards. Even with AI assistance, there's a minimum viable scope that requires more hands. Same goes for highly regulated industries where compliance and audit requirements create unavoidable work that can't be easily parallelized or delegated to AI (yet).

**Consumer products may be different.** If you're shipping a consumer app that needs simultaneous polish across iOS, Android, web, and backend - and design quality is a core differentiator - you might genuinely need specialists in each area. AI tooling helps, but it doesn't replace the deep domain expertise required to ship a truly great mobile experience or nail the UX details that make consumer products work.

**Hardware and deep tech have their own constraints.** If your product involves physical components, embedded systems, or novel scientific research, the leverage from AI looks very different. You can't AI-generate a hardware prototype or compress years of materials science research into a few well-crafted prompts (yet -- there are companies working on this).

**Tooling maturity is still evolving.** The AI-augmented workflow I'm describing works well today for certain types of engineering work - web applications, APIs, standard infrastructure patterns. But it's not equally mature across all domains. If you're working in specialized areas (low-level systems programming, performance optimization, novel algorithm development), the productivity multiplier might be smaller (but still non-trivial).

**And perhaps most importantly: this assumes you can actually find and recruit these exceptional engineers.** The market for truly senior, product-minded, autonomous engineers who also know how to leverage AI effectively is incredibly competitive. If you can't attract this caliber of talent, the model doesn't work - you're better off with a larger team of solid mid-level engineers than trying to force a lean team structure with people who aren't ready for it. Whether your team is composed of mid or senior level talent, the goal should still be the same: help them function as autonomously as possible, and build strong team trust through [rapid feedback cycles]({% post_url 2025-11-12-trust-and-feedback %}).

Even with these above caveats, I believe the directional trend is clear. For a wide range of startups the traditional founding engineering team structure is being replaced by something leaner, more senior, and more equity-concentrated.

The cap table is changing. If you're building or joining an early-stage company, it's worth understanding why.

This raises adjacent questions I'll explore in upcoming writings: How far can non-technical founders go with AI before needing to hire engineers at all? What should engineers expect from non-technical cofounders who are leveraging AI extensively? And how should pre-AI startups restructure their existing cap tables to reflect this new reality? Each deserves deeper examination, but the core shift remains: early-stage engineering teams are getting smaller, more senior, and more equity-concentrated.