---
title: 'I Want To Learn Functional Programming'
description: 'Why I chose gleam'
pubDate: 'Jan 18 2025'
heroImage: '/images/blog/blog-post-3.jpg'
---

This entire article could've been better for SEO and written as a listicle, but I like superfluous prose, and more importantly, this is my corner of the internet, so I'm doing it my way. In 2025 I want to learn functional programming. I very briefly used Scala, years ago in a course during undergrad to run map-reduce on a bunch of text. And it never quite clicked. Meanwhile throughout my career, I've seen more and more of my beloved boomer loops in Java get replaced by the streams api. I'm not the biggest fan, I think most of the time it makes it harder to quickly understand. But I'm open to being wrong, so I set a goal to learn how to think functionally, because at the moment, iterative approaches are more intuitive.

So why gleam? More importantly, why do I want to learn functional programming? Well it all goes back to one of my upper level electives when I was finishing my computer science degree. It was a special topics course in cloud computing, and we learned Hadoop, MapReduce, Hive, Pig, Spark, and Scala. The imperative approach to implementing the class' projects made sense, but I could not for the life of me wrap my head around the Scala implementation when we got to Spark. Ultimately we ended up just writing our last project in Python because we were students, only a couple classes from graduation, and finishing something that could be graded took priority.

Now here I am, nearly a decade later, and I still don't actually understand functional programming. I can use it, but it doesn't feel natural.

So what did I consider? Honestly Gleam wasn't my first pick. At first I was leaning towards Elixir. The syntax is as simple as Ruby. Plus, I like being able to structure a project using MVC, and in conjunction with Phoenix, LiveView, and SQLite, I can build a full web app using functional patterns.

But then I thought more about it, my goal is to learn functional programming. My goal isn't to build a web app. And honestly, if I wanted to build a web app with a team of me, using Elixir at that point makes very little difference (minus an arguably better concurrency model) over using Ruby with Rails and Hotwire, or PHP with Laravel and Livewire, or Python with Django and HTMX. All the batteries already exist for building simple web applications.

OCaml has entered the ring. The only two things I knew about it was that it's used by Jane Street, and that people on the internet like its algebraic type system. Beyond that I didn't know much. So I looked for some libraries written with it so I could get a vibe for the code. First I looked at [Lambda Soup](https://github.com/aantron/lambdasoup), and then [ocaml-cow](https://github.com/mirage/ocaml-cow). Surprisingly not as scary as I thought it'd be. I've only used languages that are either C or inspired by it, so it definitely looks foreign. I'm sure if I tried hard enough could figure it out, but trying to both learn a style of syntax and a new programming paradigm at the same time smelled like scope creep.

What about Haskell? Writing a whitepaper is definitely out of scope.

F#? Not particularly interested in giving Microsoft more control over my life.

For a while I thought about Elixir again. But I wanted to be greedy and I want to feel excited learning functional programming. So I started looking at Gleam. Specifically the code for these frameworks: [wisp](https://github.com/gleam-wisp/wisp); [mist](https://github.com/rawhat/mist); and [lustre](https://github.com/lustre-labs/lustre). The syntax reminds me of Go, familiar syntax is a plus. Let me dig a bit deeper into Gleam. It's relatively new, according to Wikipedia, v1.0.0 launched March 2024. As far as I'm concerned, it's a shiny new thing. Another plus. Large standard library? Gleam doesn't seem to have that. Now you'd think that's a minus, but maybe something in my head is wired wrong, the idea of having to build my own libraries to fill gaps because I don't want to vet a stranger's on Github sounds exciting. The language doesn't have loops. Well, that's one way to force you to write functional code, challenge accepted.

And now like any goal, let's see if next January in 2026 if I actually get it done.