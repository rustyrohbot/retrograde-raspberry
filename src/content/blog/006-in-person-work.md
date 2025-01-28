---
title: 'In Defence of In Person Work'
description: 'It is not all bad'
pubDate: 'Jan 27 2025'
heroImage: '/images/blog/blog-post-6.jpg'
---

I know, I know, not a popular title. I love remote work as much as the next millennial, but I do think there's something to being there IRL with the people you work with.

I work on the seesaw of a legacy monolith on one end, and new microservices attempting to replace it on the other. Sometimes QA finds weird bugs that we can't make heads or tails of. And I had the pleasure of being blocked on my other stories, so I got to pick up one of these bugs.

One of our automated tests was failing, but only in staging. They ran fine in our test environments, but staging was failing. At first I thought it was because staging hadn't been deployed recently, but that was quickly proven wrong, just as up to date as test. Then I realized this was a couple weeks old, so it's been consistently passing in test and failing staging. We hadn't had it surface as a bug in demo or prod, so it was literally just staging.

So I circled back to the stack trace. First usable line indicated it might be coming from a DB lookup. Check the staging DB—nope, it's there. Sigh, down the stack.

It looked like the error was specifically happening in a different service that ours was calling. Groaning as I had to pull up another New Relic tab to find the logs in that container and line them. But then someone said the magic words, "lunch is here".

Sure we're grown adults, but hey, getting fed biweekly's always nice. Unfortunately the only veggie option that day was rabbit food (read salad), but we have ample snacks and drinks.

So anyways, one of our DBAs (let's call them Devin) was in the office today and also heard the magic words. After hitting the critical mass of three, I asked if anyone knew anything about the service I was getting an error from. Devin chimed in, saying he knew what tables the service had access to. So I asked the obvious next question, is anything up with staging? He said not sure, send the J*** over and I'll check.

So I sent him a link to the bug over on S****. Turns out new data specific to that service's logic was added last month to every environment but staging. Quick fix, and with that a ticket was filed.

Now sure, I could have reached the same conclusion at home reading the logs. Then querying the DB for the data only to find it missing. So I'd message Devin asking if it should be missing; he'd say no, and a ticket would get filed.

We got to condense what could've been a day down to part of the morning plus a conversation over lunch. Sure the company is only providing lunch because they expect us to talk shop. Sure something something unhealthy Americans and their inability to turn off work brain. But there's something to be said about what happened. We saved a bunch of my time. Instead of pinging him later in the day when he might have logged off, Devin was able to check for the missing data right after lunch. Even more potential time savings. An old but consistent bug got squashed. And we got fed in the process. Happy to let someone explain to me what is wrong here.

For what it's worth, I run my side business entirely remotely, kinda need to when my cofounder is on one end of the country, and our clients are on the other. But for something I am consistently doing every single workday with a medium to large team, I find hybrid works best for me, especially with legacy code. It's convenient to walk over to someone who's been here a while, ask if they're busy, and then ask if they know anything about this part of the codebase I've never seen before.

That all being said, I hate traffic. I don't even mind the commute, it's the damn traffic on both Mopac and 35.