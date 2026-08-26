---
tags:
  - product engineering
  - react native
  - swiftui
  - local first
  - privacy
  - accessibility
---

# Products and Tools

## NorthPaw

NorthPaw is a dog outdoor-safety app I designed, built, and launched for iOS. It came from a pretty simple question: weather apps tell me the air temperature, but what does that actually mean for my dog? NorthPaw combines current conditions, estimated pavement temperatures, and details about the individual dog to make that decision a little clearer before a walk.

**Visit:** [NorthPaw website](https://www.northpawapp.com/) · [Download on the App Store](https://apps.apple.com/us/app/northpaw/id6763930232)

- Built with React Native and released through the App Store, including ongoing release management, analytics, accessibility improvements, user feedback, and product iteration.
- Earned early coverage from [Boing Boing](https://boingboing.net/2026/06/09/a-reader-built-a-breed-aware-app-for-hot-pavement-dog-safety.html) and [Popular Science](https://www.popsci.com/environment/dog-paws-hot-pavement-app/), then moved from TestFlight into a public App Store launch. Continued shipping multiple releases while preparing the Android version through Google Play beta testing.
- Designed an explainable, deterministic risk engine rather than black-box AI: the same inputs produce the same result, and uncertainty is communicated instead of hidden.
- Keeps dog data on device and does not require an account for the core experience.
- Adjusts guidance using factors such as breed, snout profile, coat, activity level, humidity, and UV conditions, with personal details stored on device.
- Estimates conditions for surfaces such as asphalt, concrete, sand, turf, and cobblestone and presents a 24-hour timeline to support better walking windows.
- Includes a haptic-guided pavement-verification ritual, outing gear checklists, flea-and-tick medication tracking, and readiness guidance before and after outdoor activities.
- Used a lightweight feedback form to turn real user reports into the product backlog. Feedback led to reproducible bug fixes, cobblestone support, and targeted readability, contrast, accessibility, reliability, and trust improvements.
- Calibrated pavement-risk assumptions against published dermatology burn-threshold research while keeping in-app guidance conservative and non-diagnostic.
- Preserves a non-diagnostic boundary: NorthPaw supports everyday judgment and preparedness but does not replace veterinary advice.
- Explores a free-safety core with optional paid value around history, patterns, planning, and deeper personalization rather than paywalling the safety decision itself.

## FitTrack

FitTrack is a local-first iOS training companion that turns AI-generated training text into an editable, day-by-day execution system.

- Built with SwiftUI and SwiftData for on-device use, with no backend, account system, subscription dependency, or paid AI API required for the core workflow.
- Imports a training plan, makes today's work easy to find, and supports completion, modification, recovery after missed sessions, sharing, local notifications, and HealthKit-informed experiences.
- Focuses on the part generic fitness trackers often miss: adapting a long training block when real life disrupts the plan.
- Developed around mixed-activity and endurance use cases, race alignment, visible progress, and an intentionally lightweight daily workflow.

## Little Furevermore

Little Furevermore is a pet-art and memory-capsule experiment built with React Native and Supabase. The idea was to combine generated imagery with the stories people want to remember about their animals.

## NSB Tools

NSB Tools is a collection of free browser-based utilities for creators, writers, job seekers, founders, and operators. There is no account and no long setup. You open a tool, enter what you have, and get an answer you can use.

**Visit:** [NSB Tools](https://tools.nextstepsbeyond.online/)

## Small Experiments and Product Concepts

- **NorthPaw Quiet Hours**: A NorthPaw-adjacent ambience concept combining gentle instrumental music and natural sound for quiet time with dogs and their people. The concept is intentionally positioned as entertainment, not treatment or veterinary guidance.
- **Northstar**: An explored open-source terminal decision-support concept centered on local-first storage, deterministic recommendations, explanations, and user override.
- **Sidequest**: An explored terminal command-center concept for turning work into a colorful, persistent quest board. This remains a product concept rather than a shipped claim.
- **Offline Knowledge Packs**: An early validation concept for topic-specific, offline AI assistance in areas where privacy, connectivity, and trusted source material matter. Initial work focused on audience and value discovery rather than claiming a finished product.

These projects have made my product preferences pretty clear. I like local-first software when it makes sense. I want people to understand what the product is doing. I would rather ship one complete, useful path and learn from it than plan twenty features nobody has asked for yet.
